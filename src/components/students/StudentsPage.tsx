import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, Printer, Search, UserPlus } from "lucide-react";

const stats = [
  { label: "توزيع الطلاب", value: "نشط", chart: true },
  { label: "متوسط الدرجات", value: "90.00" },
  { label: "متوسط الحضور", value: "66.7%" },
  { label: "إجمالي الطلاب", value: "2", subLabel: "طالب وطالبة" },
];

const filters = [
  "الكل",
  "الطلاب النشطون",
  "الطلاب غير النشطاء",
  "الطلاب المنقطعين",
];

const StudentsPage = () => {
  return (
    <div className="p-6" dir="rtl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">إدارة الطلاب</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            استيراد البيانات
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Printer className="h-4 w-4" />
            طباعة البيانات
          </Button>
          <Button className="flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            إضافة طالب جديد
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-4">
            {stat.chart ? (
              <>
                <div className="text-sm text-gray-500 mb-2">{stat.label}</div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-blue-600 rounded-full" />
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-blue-600 rounded-full" />
                  </div>
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

      <div className="mb-6">
        <div className="flex gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input className="pr-10" placeholder="البحث عن طالب..." />
          </div>
          <Button variant="outline">البحث المتقدم</Button>
        </div>

        <div className="flex gap-2 mb-4">
          {filters.map((filter, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>

      <Card>
        <div className="p-4 border-b">
          <div className="grid grid-cols-6 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="النوع" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">ذكر</SelectItem>
                <SelectItem value="female">أنثى</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="الصف الدراسي" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">الصف الأول</SelectItem>
                <SelectItem value="2">الصف الثاني</SelectItem>
                <SelectItem value="3">الصف الثالث</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="العمر" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10 سنوات</SelectItem>
                <SelectItem value="11">11 سنة</SelectItem>
                <SelectItem value="12">12 سنة</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="المنطقة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">المنطقة 1</SelectItem>
                <SelectItem value="2">المنطقة 2</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="حفظ القرآن" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">جزء واحد</SelectItem>
                <SelectItem value="2">جزءان</SelectItem>
                <SelectItem value="3">ثلاثة أجزاء</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[30px] text-center">
                <Checkbox />
              </TableHead>
              <TableHead>الاسم</TableHead>
              <TableHead>الرقم المدني</TableHead>
              <TableHead>ولي الأمر</TableHead>
              <TableHead>رقم الهاتف</TableHead>
              <TableHead>أجزاء القرآن</TableHead>
              <TableHead>الصف</TableHead>
              <TableHead>العمر</TableHead>
              <TableHead>الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-center">
                <Checkbox />
              </TableCell>
              <TableCell>أحمد محمد</TableCell>
              <TableCell>123456789012</TableCell>
              <TableCell>محمد أحمد</TableCell>
              <TableCell>87654321</TableCell>
              <TableCell>5 أجزاء</TableCell>
              <TableCell>السادس</TableCell>
              <TableCell>12</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">
                  عرض التفاصيل
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center">
                <Checkbox />
              </TableCell>
              <TableCell>فاطمة علي</TableCell>
              <TableCell>123456789013</TableCell>
              <TableCell>علي حسن</TableCell>
              <TableCell>12345678</TableCell>
              <TableCell>3 أجزاء</TableCell>
              <TableCell>الخامس</TableCell>
              <TableCell>11</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">
                  عرض التفاصيل
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default StudentsPage;
