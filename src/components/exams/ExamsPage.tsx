import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
import { Download, Printer, Search, Plus, Medal, BookOpen } from "lucide-react";

const stats = [
  {
    label: "اختبارات هذا الشهر",
    value: "15",
    subLabel: "اختبار",
  },
  {
    label: "متوسط الدرجات",
    value: "88%",
    trend: "+5% من الشهر السابق",
    trendUp: true,
  },
  {
    label: "الطلاب المختبرين",
    value: "45",
    subLabel: "طالب وطالبة",
  },
  {
    label: "نسبة النجاح",
    value: "92%",
    trend: "في الاختبارات الأخيرة",
  },
];

const ExamsPage = () => {
  return (
    <div className="p-6" dir="rtl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">إدارة الاختبارات</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            تصدير النتائج
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Printer className="h-4 w-4" />
            طباعة الشهادات
          </Button>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            إضافة اختبار جديد
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-4">
            <div className="text-sm text-gray-500">{stat.label}</div>
            <div className="flex items-baseline gap-2">
              <div className="text-2xl font-bold">{stat.value}</div>
              {stat.subLabel && (
                <div className="text-sm text-gray-500">{stat.subLabel}</div>
              )}
            </div>
            {stat.trend && (
              <div
                className={`text-xs ${stat.trendUp ? "text-green-600" : "text-gray-500"}`}
              >
                {stat.trend}
              </div>
            )}
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <Card className="col-span-2">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">جدول الاختبارات</h2>
          </div>
          <div className="p-4">
            <div className="flex gap-4 mb-4">
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="نوع الاختبار" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الاختبارات</SelectItem>
                  <SelectItem value="memorization">اختبار الحفظ</SelectItem>
                  <SelectItem value="tajweed">اختبار التجويد</SelectItem>
                  <SelectItem value="tafsir">اختبار التفسير</SelectItem>
                  <SelectItem value="final">الاختبار النهائي</SelectItem>
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
                  <TableHead>نوع الاختبار</TableHead>
                  <TableHead>المحتوى</TableHead>
                  <TableHead>التاريخ</TableHead>
                  <TableHead>المقيّم</TableHead>
                  <TableHead>الدرجة</TableHead>
                  <TableHead>الحالة</TableHead>
                  <TableHead>الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>أحمد محمد</TableCell>
                  <TableCell>اختبار حفظ</TableCell>
                  <TableCell>سورة البقرة (1-100)</TableCell>
                  <TableCell>2024/03/20</TableCell>
                  <TableCell>الشيخ عبدالله</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Medal className="h-4 w-4 text-yellow-500" />
                      <span>95%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      ناجح
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      التفاصيل
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>فاطمة علي</TableCell>
                  <TableCell>اختبار تجويد</TableCell>
                  <TableCell>أحكام النون الساكنة</TableCell>
                  <TableCell>2024/03/18</TableCell>
                  <TableCell>الشيخة نورة</TableCell>
                  <TableCell>88%</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      ناجح
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      التفاصيل
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Card>

        <Card>
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">الاختبارات القادمة</h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {[
                {
                  student: "محمد أحمد",
                  type: "اختبار حفظ",
                  content: "سورة آل عمران (1-50)",
                  date: "2024/03/25",
                  time: "09:00 ص",
                },
                {
                  student: "نورة سعيد",
                  type: "اختبار تجويد",
                  content: "المدود وأحكامها",
                  date: "2024/03/26",
                  time: "10:30 ص",
                },
                {
                  student: "عبدالله محمد",
                  type: "اختبار تفسير",
                  content: "تفسير جزء عم",
                  date: "2024/03/27",
                  time: "11:00 ص",
                },
              ].map((exam, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <div className="font-medium">{exam.student}</div>
                    <div className="text-sm text-gray-500">{exam.type}</div>
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {exam.content}
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-600">{exam.date}</div>
                    <div className="text-sm text-blue-600">{exam.time}</div>
                    <Button variant="ghost" size="sm" className="text-xs">
                      بدء الاختبار
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ExamsPage;
