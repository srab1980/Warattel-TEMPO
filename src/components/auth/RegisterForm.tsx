import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";

type RegisterFormData = {
  email: string;
  password: string;
  confirmPassword: string;
  role: "student" | "teacher" | "parent";
  first_name: string;
  last_name: string;
  phone: string;
  civil_id: string;
};

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      if (data.password !== data.confirmPassword) {
        alert("كلمات المرور غير متطابقة");
        return;
      }

      // 1. Create auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            role: data.role,
          },
        },
      });

      if (authError) throw authError;

      if (!authData.user?.id) throw new Error("فشل في إنشاء الحساب");

      // 2. Create user profile based on role
      if (data.role === "parent") {
        const { error: parentError } = await supabase.from("parents").insert({
          id: authData.user.id,
          first_name: data.first_name,
          last_name: data.last_name,
          phone: data.phone,
          email: data.email,
        });
        if (parentError) throw parentError;
      } else if (data.role === "student") {
        const { error: studentError } = await supabase.from("students").insert({
          id: authData.user.id,
          first_name: data.first_name,
          last_name: data.last_name,
          civil_id: data.civil_id,
          status: "active",
        });
        if (studentError) throw studentError;
      } else if (data.role === "teacher") {
        const { error: teacherError } = await supabase.from("teachers").insert({
          id: authData.user.id,
          first_name: data.first_name,
          last_name: data.last_name,
          phone: data.phone,
          email: data.email,
        });
        if (teacherError) throw teacherError;
      }

      alert("تم إنشاء الحساب بنجاح");
    } catch (error) {
      console.error("Error during registration:", error);
      alert(error instanceof Error ? error.message : "حدث خطأ أثناء التسجيل");
    }
  };

  return (
    <Card className="p-6 max-w-md mx-auto" dir="rtl">
      <h2 className="text-2xl font-bold mb-6">إنشاء حساب جديد</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label>نوع الحساب</Label>
          <Select onValueChange={(value: any) => setValue("role", value)}>
            <SelectTrigger>
              <SelectValue placeholder="اختر نوع الحساب" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="student">طالب</SelectItem>
              <SelectItem value="teacher">معلم</SelectItem>
              <SelectItem value="parent">ولي أمر</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>الاسم الأول</Label>
          <Input {...register("first_name", { required: true })} />
        </div>

        <div className="space-y-2">
          <Label>اسم العائلة</Label>
          <Input {...register("last_name", { required: true })} />
        </div>

        <div className="space-y-2">
          <Label>البريد الإلكتروني</Label>
          <Input type="email" {...register("email", { required: true })} />
        </div>

        <div className="space-y-2">
          <Label>رقم الهاتف</Label>
          <Input {...register("phone", { required: true })} />
        </div>

        <div className="space-y-2">
          <Label>الرقم المدني</Label>
          <Input {...register("civil_id", { required: true })} />
        </div>

        <div className="space-y-2">
          <Label>كلمة المرور</Label>
          <Input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
          />
        </div>

        <div className="space-y-2">
          <Label>تأكيد كلمة المرور</Label>
          <Input
            type="password"
            {...register("confirmPassword", { required: true })}
          />
        </div>

        <Button type="submit" className="w-full">
          تسجيل
        </Button>
      </form>
    </Card>
  );
}
