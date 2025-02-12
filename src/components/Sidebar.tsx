import React from "react";
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
  { icon: Home, label: "تعليم القرآن", href: "/" },
  { icon: ClipboardList, label: "التسجيلات", href: "/registrations" },
  { icon: CalendarCheck, label: "الحضور", href: "/attendance" },
  { icon: School, label: "الدرجات", href: "/grades" },
  { icon: UsersRound, label: "أولياء الأمور", href: "/parents" },
  { icon: Wallet, label: "الرسوم", href: "/fees" },
  { icon: CalendarDays, label: "الفعاليات", href: "/events" },
  { icon: Library, label: "المكتبة", href: "/library" },
  { icon: FileBarChart, label: "التقارير", href: "/reports" },
  { icon: LayoutDashboard, label: "لوحة التحكم", href: "/dashboard" },
  { icon: UserCircle, label: "الملف الشخصي", href: "/profile" },
  { icon: Calendar, label: "التقويم", href: "/calendar" },
  { icon: ScrollText, label: "الاختبارات", href: "/exams" },
  { icon: GanttChartSquare, label: "تخطيط", href: "/planning" },
  { icon: BookCheck, label: "المنهاج", href: "/curriculum" },
  { icon: Settings, label: "الإعدادات", href: "/settings" },
];

const Sidebar = ({ items = defaultNavItems, className }: SidebarProps) => {
  return (
    <div
      className={cn(
        "flex h-full w-[280px] flex-col bg-[#1e2f4d] p-4",
        className,
      )}
    >
      <nav className="flex-1 space-y-1">
        <TooltipProvider>
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full flex-row-reverse text-white hover:bg-white/10"
                  >
                    {item.label}
                    <Icon className="ml-3 h-5 w-5" />
                  </Button>
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
