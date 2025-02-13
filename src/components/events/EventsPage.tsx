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
import {
  Download,
  Calendar as CalendarIcon,
  Search,
  Plus,
  Users,
} from "lucide-react";

const stats = [
  {
    label: "الفعاليات القادمة",
    value: "5",
    subLabel: "خلال الشهر القادم",
  },
  {
    label: "المشاركون",
    value: "120",
    subLabel: "طالب وطالبة",
  },
  {
    label: "المسابقات الجارية",
    value: "3",
    subLabel: "مسابقات",
  },
  {
    label: "حفلات التكريم",
    value: "2",
    subLabel: "هذا الشهر",
  },
];

const EventsPage = () => {
  return (
    <div className="p-6" dir="rtl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">إدارة الفعاليات</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            تصدير التقويم
          </Button>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            إضافة فعالية
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
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <Card className="col-span-2">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">الفعاليات القادمة</h2>
          </div>
          <div className="p-4">
            <div className="flex gap-4 mb-4">
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="نوع الفعالية" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الفعاليات</SelectItem>
                  <SelectItem value="competition">مسابقات</SelectItem>
                  <SelectItem value="ceremony">حفلات تكريم</SelectItem>
                  <SelectItem value="workshop">ورش عمل</SelectItem>
                  <SelectItem value="lecture">محاضرات</SelectItem>
                </SelectContent>
              </Select>
              <div className="relative flex-1">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input className="pr-10" placeholder="بحث في الفعاليات..." />
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>اسم الفعالية</TableHead>
                  <TableHead>النوع</TableHead>
                  <TableHead>التاريخ</TableHead>
                  <TableHead>الوقت</TableHead>
                  <TableHead>المكان</TableHead>
                  <TableHead>المشاركون</TableHead>
                  <TableHead>الحالة</TableHead>
                  <TableHead>الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>مسابقة حفظ القرآن الكريم</TableCell>
                  <TableCell>مسابقة</TableCell>
                  <TableCell>2024/04/15</TableCell>
                  <TableCell>09:00 ص</TableCell>
                  <TableCell>القاعة الرئيسية</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>45</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      قريباً
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      التفاصيل
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>حفل تكريم الحفاظ</TableCell>
                  <TableCell>حفل تكريم</TableCell>
                  <TableCell>2024/04/20</TableCell>
                  <TableCell>05:00 م</TableCell>
                  <TableCell>قاعة الاحتفالات</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>120</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      التسجيل مفتوح
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
            <h2 className="text-lg font-semibold">تقويم الفعاليات</h2>
          </div>
          <div className="p-4">
            <Calendar mode="single" className="rounded-md border" />
            <div className="mt-4 space-y-3">
              <h3 className="font-medium mb-2">أحداث اليوم</h3>
              {[
                {
                  title: "ورشة تحسين التلاوة",
                  time: "10:00 ص",
                  location: "قاعة التدريب",
                },
                {
                  title: "محاضرة في علوم القرآن",
                  time: "04:30 م",
                  location: "القاعة الرئيسية",
                },
              ].map((event, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <div className="font-medium">{event.title}</div>
                    <div className="text-sm text-gray-500">
                      {event.location}
                    </div>
                  </div>
                  <div className="text-sm text-blue-600 font-medium">
                    {event.time}
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

export default EventsPage;
