import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, UserPlus, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import AddEditStudentDialog from "./AddEditStudentDialog";
import StudentDetailsDialog from "./StudentDetailsDialog";
import { supabase } from "@/lib/supabase";
import { Tables } from "@/types/supabase";

type StudentWithParent = Tables<"students"> & {
  parent?: Tables<"parents">;
};

type StudentFormData = {
  first_name: string;
  last_name: string;
  civil_id: string;
  birth_date?: string;
  gender: string;
  status: string;
  parent_first_name: string;
  parent_last_name: string;
  parent_phone: string;
  parent_email?: string;
  relationship: string;
};

const StudentsPage = () => {
  const [students, setStudents] = useState<StudentWithParent[]>([]);
  const [loading, setLoading] = useState(false);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] =
    useState<StudentWithParent | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const loadStudents = async () => {
    try {
      setLoading(true);
      const { data: studentsData, error: studentsError } = await supabase.from(
        "students",
      ).select(`
          *,
          parent:student_parents(parent:parents(*))
        `);

      if (studentsError) throw studentsError;

      const formattedStudents = studentsData.map((student: any) => ({
        ...student,
        parent: student.parent?.[0]?.parent,
      }));

      setStudents(formattedStudents);
    } catch (error) {
      console.error("Error loading students:", error);
      alert("حدث خطأ أثناء تحميل بيانات الطلاب");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleAddStudent = async (formData: StudentFormData) => {
    try {
      setLoading(true);

      // Start a transaction by using the same timestamp
      const now = new Date().toISOString();

      // 1. Create student first
      const { data: newStudent, error: studentError } = await supabase
        .from("students")
        .insert({
          first_name: formData.first_name,
          last_name: formData.last_name,
          civil_id: formData.civil_id,
          birth_date: formData.birth_date || null,
          gender: formData.gender,
          status: "active",
          created_at: now,
          updated_at: now,
        })
        .select()
        .single();

      if (studentError) {
        if (studentError.code === "23505") {
          throw new Error("يوجد طالب مسجل بنفس الرقم المدني");
        }
        throw new Error("فشل في إضافة الطالب");
      }

      // 2. Create or get parent
      let parentId;
      const { data: existingParent } = await supabase
        .from("parents")
        .select("id")
        .eq("phone", formData.parent_phone)
        .single();

      if (existingParent) {
        parentId = existingParent.id;
      } else {
        const { data: newParent, error: parentError } = await supabase
          .from("parents")
          .insert({
            first_name: formData.parent_first_name,
            last_name: formData.parent_last_name,
            phone: formData.parent_phone,
            email: formData.parent_email || null,
            created_at: now,
            updated_at: now,
          })
          .select()
          .single();

        if (parentError) {
          // Cleanup student if parent creation fails
          await supabase.from("students").delete().eq("id", newStudent.id);
          throw new Error("فشل في إضافة ولي الأمر");
        }
        parentId = newParent.id;
      }

      // 3. Create relationship
      const { error: relationError } = await supabase
        .from("student_parents")
        .insert({
          student_id: newStudent.id,
          parent_id: parentId,
          relationship: formData.relationship,
          is_primary: true,
          created_at: now,
        });

      if (relationError) {
        // Cleanup if relationship creation fails
        await supabase.from("students").delete().eq("id", newStudent.id);
        if (!existingParent) {
          await supabase.from("parents").delete().eq("id", parentId);
        }
        throw new Error("فشل في ربط الطالب بولي الأمر");
      }

      await loadStudents();
      setAddDialogOpen(false);
      alert("تم إضافة الطالب بنجاح");
    } catch (error) {
      console.error("Error adding student:", error);
      alert(
        error instanceof Error ? error.message : "حدث خطأ أثناء إضافة الطالب",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (student: StudentWithParent) => {
    setSelectedStudent(student);
    setDetailsDialogOpen(true);
  };

  return (
    <div className="p-6" dir="rtl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">إدارة الطلاب</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            تصدير البيانات
          </Button>
          <Button
            className="flex items-center gap-2"
            onClick={() => setAddDialogOpen(true)}
          >
            <UserPlus className="h-4 w-4" />
            إضافة طالب جديد
          </Button>
        </div>
      </div>

      <Card className="mb-6">
        <div className="p-4 border-b">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                className="pr-10"
                placeholder="البحث عن طالب..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="الحالة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">الجميع</SelectItem>
                <SelectItem value="active">نشط</SelectItem>
                <SelectItem value="inactive">غير نشط</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>اسم الطالب</TableHead>
              <TableHead>الرقم المدني</TableHead>
              <TableHead>ولي الأمر</TableHead>
              <TableHead>رقم الهاتف</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead>الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students
              .filter((student) => {
                const matchesSearch =
                  searchTerm === "" ||
                  `${student.first_name} ${student.last_name}`
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  student.civil_id
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());

                const matchesStatus =
                  statusFilter === "all" || student.status === statusFilter;

                return matchesSearch && matchesStatus;
              })
              .map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    {student.first_name} {student.last_name}
                  </TableCell>
                  <TableCell>{student.civil_id}</TableCell>
                  <TableCell>
                    {student.parent
                      ? `${student.parent.first_name} ${student.parent.last_name}`
                      : "غير محدد"}
                  </TableCell>
                  <TableCell>{student.parent?.phone || "غير محدد"}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        student.status === "active" ? "success" : "warning"
                      }
                    >
                      {student.status === "active" ? "نشط" : "غير نشط"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleViewDetails(student)}
                    >
                      عرض التفاصيل
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Card>

      <AddEditStudentDialog
        open={addDialogOpen}
        onOpenChange={setAddDialogOpen}
        onSubmit={handleAddStudent}
        mode="add"
      />

      {selectedStudent && (
        <StudentDetailsDialog
          open={detailsDialogOpen}
          onOpenChange={setDetailsDialogOpen}
          student={selectedStudent}
        />
      )}
    </div>
  );
};

export default StudentsPage;
