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
import { Download, Printer, Search, Plus, Star } from "lucide-react";

const stats = [
  {
    label: "متوسط درجات الحفظ",
    value: "92%",
    trend: "+5% من الشهر السابق",
    trendUp: true,
  },
  {
    label: "متوسط درجات التجويد",
    value: "88%",
    trend: "+3% من الشهر السابق",
    trendUp: true,
  },
  {
    label: "عدد الختمات",
    value: "5",
    subLabel: "هذا العام",
    trend: "2 طلاب",
  },
  {
    label: "الطلاب المتميزون",
    value: "12",
    subLabel: "طالب وطالبة",
    trend: "درجاتهم 95% وأعلى",
  },
];

const GradesPage = () => {
  return (
    <div className="p-6" dir="rtl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">سجل الدرجات</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            تصدير التقرير
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Printer className="h-4 w-4" />
            طباعة الشهادات
          </Button>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            إضافة تقييم جديد
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
            <h2 className="text-lg font-semibold">سجل التقييمات</h2>
          </div>
          <div className="p-4">
            <div className="flex gap-4 mb-4">
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="نوع التقييم" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع التقييمات</SelectItem>
                  <SelectItem value="memorization">الحفظ</SelectItem>
                  <SelectItem value="tajweed">التجويد</SelectItem>
                  <SelectItem value="recitation">التلاوة</SelectItem>
                  <SelectItem value="monthly">الاختبار الشهري</SelectItem>
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
                  <TableHead>السورة/الجزء</TableHead>
                  <TableHead>نوع التقييم</TableHead>
                  <TableHead>درجة الحفظ</TableHead>
                  <TableHead>درجة التجويد</TableHead>
                  <TableHead>الملاحظات</TableHead>
                  <TableHead>تاريخ التقييم</TableHead>
                  <TableHead>المقيّم</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>أحمد محمد</TableCell>
                  <TableCell>سورة البقرة (1-50)</TableCell>
                  <TableCell>حفظ</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span>95%</span>
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </div>
                  </TableCell>
                  <TableCell>90%</TableCell>
                  <TableCell>ممتاز في الحفظ، يحتاج تحسين في المخارج</TableCell>
                  <TableCell>2024/03/15</TableCell>
                  <TableCell>الشيخ عبدالله</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>فاطمة علي</TableCell>
                  <TableCell>سورة آل عمران (1-30)</TableCell>
                  <TableCell>تجويد</TableCell>
                  <TableCell>88%</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span>96%</span>
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </div>
                  </TableCell>
                  <TableCell>متميزة في أحكام التجويد</TableCell>
                  <TableCell>2024/03/14</TableCell>
                  <TableCell>الشيخة نورة</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Card>

        <Card>
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">التقييمات القادمة</h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {[
                {
                  student: "محمد أحمد",
                  type: "اختبار شهري",
                  surah: "سورة النساء",
                  date: "2024/03/20",
                },
                {
                  student: "نورة سعيد",
                  type: "تقييم حفظ",
                  surah: "سورة المائدة",
                  date: "2024/03/22",
                },
                {
                  student: "عبدالله محمد",
                  type: "تقييم تجويد",
                  surah: "سورة الأنعام",
                  date: "2024/03/25",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <div className="font-medium">{item.student}</div>
                    <div className="text-sm text-gray-500">{item.type}</div>
                    <div className="text-sm text-gray-500">{item.surah}</div>
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-600">{item.date}</div>
                    <Button variant="ghost" size="sm" className="text-xs">
                      تسجيل التقييم
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

export default GradesPage;
