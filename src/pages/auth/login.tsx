import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "@/components/auth/LoginForm";
import { Card } from "@/components/ui/card";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Card className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">
              مركز تعليم القرآن الكريم
            </h1>
            <p className="text-gray-600">قم بتسجيل الدخول للمتابعة</p>
          </div>
          <LoginForm />
          <div className="mt-6 text-center text-sm text-gray-600">
            ليس لديك حساب؟{" "}
            <Link to="/auth/register" className="text-blue-600 hover:underline">
              إنشاء حساب جديد
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
