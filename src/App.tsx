import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import Home from "@/components/home";
import { useRoutes } from "react-router-dom";
import routes from "tempo-routes";
import DashboardLayout from "@/layouts/DashboardLayout";
import StudentsPage from "@/components/students/StudentsPage";

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* For the tempo routes */}
      {import.meta.env.VITE_TEMPO && useRoutes(routes)}

      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />

        {/* Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Home />
            </DashboardLayout>
          }
        />
        <Route
          path="/students"
          element={
            <DashboardLayout>
              <StudentsPage />
            </DashboardLayout>
          }
        />

        {/* Add this before the catchall route */}
        {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}

        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </div>
  );
};

export default App;
