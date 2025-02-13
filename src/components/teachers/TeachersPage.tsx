import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import {
  Download,
  Search,
  UserPlus,
  GraduationCap,
  Users,
  BookOpen,
  Star,
} from "lucide-react";

const TeachersPage = () => {
  return (
    <div className="p-6" dir="rtl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">إدارة المعلمين</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            تصدير البيانات
          </Button>
          <Button className="flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            إضافة معلم جديد
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="text-sm text-gray-500">إجمالي المعلمين</div>
          <div className="text-2xl font-bold mt-1">25</div>
          <div className="text-xs text-gray-500 mt-1">معلم ومعلمة</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-500">متوسط الطلاب</div>
          <div className="text-2xl font-bold mt-1">15</div>
          <div className="text-xs text-gray-500 mt-1">طالب لكل معلم</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-500">نسبة الإنجاز</div>
          <div className="text-2xl font-bold mt-1">92%</div>
          <div className="text-xs text-gray-500 mt-1">معدل شهري</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-500">الحلقات النشطة</div>
          <div className="text-2xl font-bold mt-1">18</div>
          <div className="text-xs text-gray-500 mt-1">حلقة تحفيظ</div>
        </Card>
      </div>

      <Card className="mb-6">
        <div className="p-4 border-b">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input className="pr-10" placeholder="البحث عن معلم..." />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="التخصص" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع التخصصات</SelectItem>
                <SelectItem value="quran">القرآن الكريم</SelectItem>
                <SelectItem value="tajweed">التجويد</SelectItem>
                <SelectItem value="qiraat">القراءات</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="active">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="الحالة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">نشط</SelectItem>
                <SelectItem value="inactive">غير نشط</SelectItem>
                <SelectItem value="vacation">في إجازة</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>المعلم</TableHead>
              <TableHead>التخصص</TableHead>
              <TableHead>الحلقات</TableHead>
              <TableHead>عدد الطلاب</TableHead>
              <TableHead>التقييم</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead>الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              {
                name: "عبدالرحمن محمد",
                specialization: "القرآن الكريم",
                circles: ["حلقة الفجر", "حلقة الظهر"],
                students: 25,
                rating: 4.8,
                status: "نشط",
              },
              {
                name: "فاطمة أحمد",
                specialization: "التجويد",
                circles: ["حلقة العصر"],
                students: 15,
                rating: 4.9,
                status: "نشط",
              },
              {
                name: "محمد علي",
                specialization: "القراءات",
                circles: ["حلقة المغرب"],
                students: 18,
                rating: 4.7,
                status: "في إجازة",
              },
            ].map((teacher, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="font-medium">{teacher.name}</div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-blue-600" />
                    <span>{teacher.specialization}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {teacher.circles.map((circle, idx) => (
                      <Badge key={idx} variant="secondary">
                        {circle}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span>{teacher.students}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{teacher.rating}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={teacher.status === "نشط" ? "success" : "warning"}
                  >
                    {teacher.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    عرض التفاصيل
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <div className="grid grid-cols-2 gap-6">
        <Card>
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">توزيع التخصصات</h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {[
                { specialization: "القرآن الكريم", count: 12, percentage: 48 },
                { specialization: "التجويد", count: 8, percentage: 32 },
                { specialization: "القراءات", count: 5, percentage: 20 },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{item.specialization}</span>
                    <span className="text-gray-500">{item.count} معلم</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">المعلمون المتميزون</h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {[
                {
                  name: "عبدالرحمن محمد",
                  specialization: "القرآن الكريم",
                  achievement: "15 ختمة كاملة",
                  rating: 4.9,
                },
                {
                  name: "فاطمة أحمد",
                  specialization: "التجويد",
                  achievement: "تخريج 50 طالب",
                  rating: 4.8,
                },
                {
                  name: "محمد علي",
                  specialization: "القراءات",
                  achievement: "إجازة 10 طلاب",
                  rating: 4.7,
                },
              ].map((teacher, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <div className="font-medium">{teacher.name}</div>
                    <div className="text-sm text-gray-500">
                      {teacher.specialization}
                    </div>
                    <div className="text-sm text-blue-600">
                      {teacher.achievement}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{teacher.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TeachersPage;
