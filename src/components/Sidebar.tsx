import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Users,
  GraduationCap,
  BookOpen,
  FileBarChart,
  Settings,
  Home,
  ClipboardList,
  CalendarCheck,
  School,
  UsersRound,
  Wallet,
  CalendarDays,
  Library,
  LayoutDashboard,
  UserCircle,
  Calendar,
  GanttChartSquare,
  BookCheck,
  ScrollText,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "./ui/tooltip";

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
}

interface SidebarProps {
  items?: NavItem[];
  className?: string;
}

const defaultNavItems: NavItem[] = [
  { icon: Home, label: "الرئيسية", href: "/" },
  { icon: Users, label: "إدارة الطلاب", href: "/students" },
  { icon: ClipboardList, label: "إدارة المعلمين", href: "/teachers" },
  { icon: UsersRound, label: "أولياء الأمور", href: "/parents" },
  { icon: CalendarCheck, label: "الحضور", href: "/attendance" },
  { icon: School, label: "الدرجات", href: "/grades" },
  { icon: Wallet, label: "الرسوم", href: "/fees" },
  { icon: CalendarDays, label: "الدورات والفعاليات", href: "/events" },
  { icon: Library, label: "المكتبة", href: "/library" },
  { icon: FileBarChart, label: "التقارير", href: "/reports" },
  { icon: LayoutDashboard, label: "نظام التحفيز", href: "/gamification" },
  { icon: Calendar, label: "التقويم", href: "/calendar" },
  { icon: ScrollText, label: "الاختبارات", href: "/exams" },
  { icon: GanttChartSquare, label: "تخطيط", href: "/planning" },
  { icon: BookCheck, label: "المنهاج", href: "/curriculum" },
  { icon: UserCircle, label: "الملف الشخصي", href: "/profile" },
  { icon: Settings, label: "الإعدادات", href: "/settings" },
];

const Sidebar = ({ items = defaultNavItems, className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "flex h-full flex-col bg-[#1e2f4d] p-4 transition-all duration-300",
        isCollapsed ? "w-[80px]" : "w-[280px]",
        className,
      )}
      dir="rtl"
    >
      <Button
        variant="ghost"
        size="icon"
        className="self-start mb-2 text-white hover:bg-white/10"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? (
          <ChevronLeft className="h-5 w-5" />
        ) : (
          <ChevronRight className="h-5 w-5" />
        )}
      </Button>
      <nav className="flex-1 space-y-1">
        <TooltipProvider>
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Link to={item.href}>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full flex items-center text-white hover:bg-white/10",
                        isCollapsed
                          ? "justify-center px-2"
                          : "justify-start px-4",
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-5 w-5 flex-shrink-0",
                          isCollapsed ? "" : "ml-3",
                        )}
                      />
                      {!isCollapsed && (
                        <span className="flex-grow text-right">
                          {item.label}
                        </span>
                      )}
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </nav>
    </div>
  );
};

export default Sidebar;
