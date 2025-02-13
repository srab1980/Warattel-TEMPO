import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "@/components/auth/RegisterForm";
import { Card } from "@/components/ui/card";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Card className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">إنشاء حساب جديد</h1>
            <p className="text-gray-600">اختر نوع الحساب وأدخل بياناتك</p>
          </div>
          <RegisterForm />
          <div className="mt-6 text-center text-sm text-gray-600">
            لديك حساب بالفعل؟{" "}
            <Link to="/auth/login" className="text-blue-600 hover:underline">
              تسجيل الدخول
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
