import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/components/home";
import StudentsPage from "@/components/students/StudentsPage";
import AttendancePage from "@/components/attendance/AttendancePage";
import FeesPage from "@/components/fees/FeesPage";
import GradesPage from "@/components/grades/GradesPage";
import EventsPage from "@/components/events/EventsPage";
import ParentsPage from "@/components/parents/ParentsPage";
import ProfilePage from "@/components/profile/ProfilePage";
import ExamsPage from "@/components/exams/ExamsPage";
import CalendarPage from "@/components/calendar/CalendarPage";
import ReportsPage from "@/components/reports/ReportsPage";
import LibraryPage from "@/components/library/LibraryPage";
import CurriculumPage from "@/components/curriculum/CurriculumPage";
import PlanningPage from "@/components/planning/PlanningPage";
import SettingsPage from "@/components/settings/SettingsPage";
import TeachersPage from "@/components/teachers/TeachersPage";
import GamificationPage from "@/components/gamification/GamificationPage";
import Sidebar from "@/components/Sidebar";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 overflow-auto transition-all duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/attendance" element={<AttendancePage />} />
            <Route path="/fees" element={<FeesPage />} />
            <Route path="/grades" element={<GradesPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/parents" element={<ParentsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/exams" element={<ExamsPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/curriculum" element={<CurriculumPage />} />
            <Route path="/planning" element={<PlanningPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/gamification" element={<GamificationPage />} />
          </Routes>
        </main>
      </div>
    </Suspense>
  );
}

export default App;
