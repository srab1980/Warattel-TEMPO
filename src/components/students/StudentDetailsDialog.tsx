import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tables } from "@/types/supabase";

type StudentWithParent = Tables<"students"> & {
  parent?: Tables<"parents">;
};

interface StudentDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  student: StudentWithParent;
}

const StudentDetailsDialog = ({
  open,
  onOpenChange,
  student,
}: StudentDetailsDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl" dir="rtl">
        <DialogHeader>
          <DialogTitle>تفاصيل الطالب</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-6">
          {/* Student Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">معلومات الطالب</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">الاسم الكامل</span>
                <span>
                  {student.first_name} {student.last_name}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">الرقم المدني</span>
                <span>{student.civil_id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">تاريخ الميلاد</span>
                <span>
                  {student.birth_date
                    ? new Date(student.birth_date).toLocaleDateString("ar-KW")
                    : "غير محدد"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">الجنس</span>
                <span>{student.gender}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">الحالة</span>
                <Badge
                  variant={student.status === "active" ? "success" : "warning"}
                >
                  {student.status === "active" ? "نشط" : "غير نشط"}
                </Badge>
              </div>
            </div>
          </div>

          {/* Parent Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">معلومات ولي الأمر</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">الاسم الكامل</span>
                <span>
                  {student.parent
                    ? `${student.parent.first_name} ${student.parent.last_name}`
                    : "غير محدد"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">رقم الهاتف</span>
                <span dir="ltr">{student.parent?.phone || "غير محدد"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">البريد الإلكتروني</span>
                <span>{student.parent?.email || "غير محدد"}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="w-32"
          >
            إغلاق
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StudentDetailsDialog;
