import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";

type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) throw error;

      // Redirect based on user role
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) throw new Error("User not found");

      // Get user metadata which contains the role
      const {
        data: { user: userData },
      } = await supabase.auth.getUser();
      const role = userData?.user_metadata?.role;

      if (role) {
        switch (role) {
          case "student":
            window.location.href = "/dashboard";
            break;
          case "teacher":
            window.location.href = "/dashboard";
            break;
          case "parent":
            window.location.href = "/dashboard";
            break;
          default:
            window.location.href = "/";
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert(
        error instanceof Error ? error.message : "حدث خطأ أثناء تسجيل الدخول",
      );
    }
  };

  return (
    <Card className="p-6 max-w-md mx-auto" dir="rtl">
      <h2 className="text-2xl font-bold mb-6">تسجيل الدخول</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label>البريد الإلكتروني</Label>
          <Input type="email" {...register("email", { required: true })} />
        </div>

        <div className="space-y-2">
          <Label>كلمة المرور</Label>
          <Input
            type="password"
            {...register("password", { required: true })}
          />
        </div>

        <Button type="submit" className="w-full">
          دخول
        </Button>
      </form>
    </Card>
  );
}
