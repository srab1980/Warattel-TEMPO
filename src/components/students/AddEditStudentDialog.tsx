import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TablesInsert } from "@/types/supabase";

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

interface AddEditStudentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: StudentFormData) => Promise<void>;
  initialData?: Partial<StudentFormData>;
  mode: "add" | "edit";
}

const AddEditStudentDialog = ({
  open,
  onOpenChange,
  onSubmit,
  initialData,
  mode,
}: AddEditStudentDialogProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<StudentFormData>({
    defaultValues: {
      ...initialData,
      gender: "ذكر",
      relationship: "أب",
      status: "active",
    },
    mode: "onChange",
  });

  const handleFormSubmit = async (data: StudentFormData) => {
    try {
      await onSubmit(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl" dir="rtl">
        <DialogHeader>
          <DialogTitle>
            {mode === "add" ? "إضافة طالب جديد" : "تعديل بيانات الطالب"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {/* Student Information */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>
                  الاسم الأول <span className="text-red-500">*</span>
                </Label>
                <Input
                  {...register("first_name", { required: "هذا الحقل مطلوب" })}
                  className={errors.first_name ? "border-red-500" : ""}
                />
                {errors.first_name && (
                  <p className="text-sm text-red-500">
                    {errors.first_name.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label>
                  اسم العائلة <span className="text-red-500">*</span>
                </Label>
                <Input
                  {...register("last_name", { required: "هذا الحقل مطلوب" })}
                  className={errors.last_name ? "border-red-500" : ""}
                />
                {errors.last_name && (
                  <p className="text-sm text-red-500">
                    {errors.last_name.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label>
                  الرقم المدني <span className="text-red-500">*</span>
                </Label>
                <Input
                  {...register("civil_id", { required: "هذا الحقل مطلوب" })}
                  className={errors.civil_id ? "border-red-500" : ""}
                />
                {errors.civil_id && (
                  <p className="text-sm text-red-500">
                    {errors.civil_id.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label>تاريخ الميلاد</Label>
                <Input type="date" {...register("birth_date")} />
              </div>
              <div className="space-y-2">
                <Label>
                  الجنس <span className="text-red-500">*</span>
                </Label>
                <Select
                  defaultValue="ذكر"
                  onValueChange={(value) => setValue("gender", value)}
                >
                  <SelectTrigger
                    className={errors.gender ? "border-red-500" : ""}
                  >
                    <SelectValue placeholder="اختر الجنس" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ذكر">ذكر</SelectItem>
                    <SelectItem value="أنثى">أنثى</SelectItem>
                  </SelectContent>
                </Select>
                {errors.gender && (
                  <p className="text-sm text-red-500">
                    {errors.gender.message}
                  </p>
                )}
              </div>
            </div>

            {/* Parent Information */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>
                  اسم ولي الأمر الأول <span className="text-red-500">*</span>
                </Label>
                <Input
                  {...register("parent_first_name", {
                    required: "هذا الحقل مطلوب",
                  })}
                  className={errors.parent_first_name ? "border-red-500" : ""}
                />
                {errors.parent_first_name && (
                  <p className="text-sm text-red-500">
                    {errors.parent_first_name.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label>
                  اسم العائلة لولي الأمر <span className="text-red-500">*</span>
                </Label>
                <Input
                  {...register("parent_last_name", {
                    required: "هذا الحقل مطلوب",
                  })}
                  className={errors.parent_last_name ? "border-red-500" : ""}
                />
                {errors.parent_last_name && (
                  <p className="text-sm text-red-500">
                    {errors.parent_last_name.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label>
                  رقم الهاتف <span className="text-red-500">*</span>
                </Label>
                <Input
                  {...register("parent_phone", { required: "هذا الحقل مطلوب" })}
                  className={errors.parent_phone ? "border-red-500" : ""}
                />
                {errors.parent_phone && (
                  <p className="text-sm text-red-500">
                    {errors.parent_phone.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label>البريد الإلكتروني</Label>
                <Input type="email" {...register("parent_email")} />
              </div>
              <div className="space-y-2">
                <Label>
                  صلة القرابة <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="hidden"
                  {...register("relationship", { required: "هذا الحقل مطلوب" })}
                />
                <Select
                  value={watch("relationship") || ""}
                  onValueChange={(value) => setValue("relationship", value)}
                >
                  <SelectTrigger
                    className={errors.relationship ? "border-red-500" : ""}
                  >
                    <SelectValue placeholder="اختر صلة القرابة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="أب">أب</SelectItem>
                    <SelectItem value="أم">أم</SelectItem>
                    <SelectItem value="وصي">وصي</SelectItem>
                  </SelectContent>
                </Select>
                {errors.relationship && (
                  <p className="text-sm text-red-500">
                    {errors.relationship.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <DialogFooter className="flex gap-2">
            <Button type="submit" className="flex-1">
              {mode === "add" ? "إضافة الطالب" : "حفظ التغييرات"}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => onOpenChange(false)}
            >
              إلغاء
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEditStudentDialog;
