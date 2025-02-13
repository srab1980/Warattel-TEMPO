import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, Printer, Search, CalendarDays } from "lucide-react";

const stats = [
  { label: "نسبة الحضور", value: "85%", chart: true },
  { label: "عدد الحضور اليوم", value: "45", subLabel: "من أصل 50" },
  { label: "متوسط الحضور الأسبوعي", value: "90%" },
  { label: "الغياب المتكرر", value: "3", subLabel: "طلاب" },
];

const AttendancePage = () => {
  return (
    <div className="p-6" dir="rtl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">سجل الحضور</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            تصدير التقرير
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Printer className="h-4 w-4" />
            طباعة السجل
          </Button>
          <Button className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            تسجيل الحضور
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-4">
            {stat.chart ? (
              <>
                <div className="text-sm text-gray-500 mb-2">{stat.label}</div>
                <div className="relative h-20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {stat.value}
                    </div>
                  </div>
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="3"
                      strokeDasharray="85, 100"
                    />
                  </svg>
                </div>
              </>
            ) : (
              <>
                <div className="text-sm text-gray-500">{stat.label}</div>
                <div className="text-2xl font-bold">{stat.value}</div>
                {stat.subLabel && (
                  <div className="text-xs text-gray-400">{stat.subLabel}</div>
                )}
              </>
            )}
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <Card className="col-span-2">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">سجل الحضور اليومي</h2>
          </div>
          <div className="p-4">
            <div className="flex gap-4 mb-4">
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="اختر الحلقة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الحلقات</SelectItem>
                  <SelectItem value="1">حلقة الفجر</SelectItem>
                  <SelectItem value="2">حلقة الظهر</SelectItem>
                  <SelectItem value="3">حلقة العصر</SelectItem>
                  <SelectItem value="4">حلقة المغرب</SelectItem>
                </SelectContent>
              </Select>
              <div className="relative flex-1">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input className="pr-10" placeholder="بحث عن طالب..." />
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>اسم الطالب</TableHead>
                  <TableHead>الحلقة</TableHead>
                  <TableHead>وقت الحضور</TableHead>
                  <TableHead>المحفوظات</TableHead>
                  <TableHead>ملاحظات</TableHead>
                  <TableHead>الحالة</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>أحمد محمد</TableCell>
                  <TableCell>حلقة الفجر</TableCell>
                  <TableCell>05:30 ص</TableCell>
                  <TableCell>سورة البقرة</TableCell>
                  <TableCell>حفظ ممتاز</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      حاضر
                    </span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>فاطمة علي</TableCell>
                  <TableCell>حلقة الظهر</TableCell>
                  <TableCell>01:15 م</TableCell>
                  <TableCell>سورة آل عمران</TableCell>
                  <TableCell>تحتاج مراجعة</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      متأخر
                    </span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Card>

        <Card>
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">التقويم</h2>
          </div>
          <div className="p-4">
            <Calendar mode="single" className="rounded-md border" />
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>الحضور اليوم</span>
                <span className="font-medium text-green-600">45/50</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>الغياب اليوم</span>
                <span className="font-medium text-red-600">5/50</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AttendancePage;
