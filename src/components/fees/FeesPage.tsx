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
import { Download, Printer, Search, Plus, Receipt } from "lucide-react";

const stats = [
  {
    label: "إجمالي الإيرادات",
    value: "1,200",
    subLabel: "د.ك",
    trend: "+12% من الشهر السابق",
    trendUp: true,
  },
  {
    label: "الرسوم المستحقة",
    value: "280",
    subLabel: "د.ك",
    trend: "8 طلاب",
    trendUp: false,
  },
  {
    label: "نسبة التحصيل",
    value: "85%",
    trend: "مقارنة بـ 78% الشهر السابق",
    trendUp: true,
  },
  {
    label: "متوسط الرسوم",
    value: "40",
    subLabel: "د.ك/شهر",
    trend: "لكل طالب",
  },
];

const FeesPage = () => {
  return (
    <div className="p-6" dir="rtl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">إدارة الرسوم الدراسية</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            تصدير التقرير
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Printer className="h-4 w-4" />
            طباعة الإيصالات
          </Button>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            تسجيل رسوم جديدة
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
            <h2 className="text-lg font-semibold">سجل المدفوعات</h2>
          </div>
          <div className="p-4">
            <div className="flex gap-4 mb-4">
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="نوع الرسوم" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الرسوم</SelectItem>
                  <SelectItem value="monthly">رسوم شهرية</SelectItem>
                  <SelectItem value="registration">رسوم التسجيل</SelectItem>
                  <SelectItem value="books">رسوم الكتب</SelectItem>
                  <SelectItem value="activities">رسوم الأنشطة</SelectItem>
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
                  <TableHead>رقم الإيصال</TableHead>
                  <TableHead>اسم الطالب</TableHead>
                  <TableHead>نوع الرسوم</TableHead>
                  <TableHead>المبلغ</TableHead>
                  <TableHead>تاريخ الدفع</TableHead>
                  <TableHead>طريقة الدفع</TableHead>
                  <TableHead>الحالة</TableHead>
                  <TableHead>الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>INV-001</TableCell>
                  <TableCell>أحمد محمد</TableCell>
                  <TableCell>رسوم شهرية</TableCell>
                  <TableCell>40 د.ك</TableCell>
                  <TableCell>2024/03/15</TableCell>
                  <TableCell>تحويل بنكي</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      مدفوع
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-1"
                    >
                      <Receipt className="h-4 w-4" />
                      عرض الإيصال
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>INV-002</TableCell>
                  <TableCell>فاطمة علي</TableCell>
                  <TableCell>رسوم التسجيل</TableCell>
                  <TableCell>25 د.ك</TableCell>
                  <TableCell>2024/03/14</TableCell>
                  <TableCell>نقداً</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      مدفوع
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-1"
                    >
                      <Receipt className="h-4 w-4" />
                      عرض الإيصال
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Card>

        <Card>
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">الرسوم المستحقة</h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {[
                { student: "محمد أحمد", amount: "40", dueDate: "2024/03/20" },
                { student: "نورة سعيد", amount: "40", dueDate: "2024/03/22" },
                {
                  student: "عبدالله محمد",
                  amount: "25",
                  dueDate: "2024/03/25",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <div className="font-medium">{item.student}</div>
                    <div className="text-sm text-gray-500">
                      تاريخ الاستحقاق: {item.dueDate}
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-red-600">
                      {item.amount} د.ك
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs">
                      تسجيل دفعة
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

export default FeesPage;
