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
import {
  Download,
  MessageSquare,
  Search,
  Plus,
  Phone,
  Mail,
} from "lucide-react";

const stats = [
  {
    label: "إجمالي أولياء الأمور",
    value: "150",
    subLabel: "ولي أمر",
  },
  {
    label: "متوسط عدد الأبناء",
    value: "2",
    subLabel: "لكل ولي أمر",
  },
  {
    label: "نسبة التواصل",
    value: "85%",
    subLabel: "تفاعل شهري",
  },
  {
    label: "اجتماعات هذا الشهر",
    value: "12",
    subLabel: "اجتماع",
  },
];

const ParentsPage = () => {
  return (
    <div className="p-6" dir="rtl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">إدارة أولياء الأمور</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            إرسال تعميم
          </Button>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            إضافة ولي أمر
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
            <h2 className="text-lg font-semibold">قائمة أولياء الأمور</h2>
          </div>
          <div className="p-4">
            <div className="flex gap-4 mb-4">
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="تصفية حسب" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الجميع</SelectItem>
                  <SelectItem value="active">نشط</SelectItem>
                  <SelectItem value="inactive">غير نشط</SelectItem>
                </SelectContent>
              </Select>
              <div className="relative flex-1">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input className="pr-10" placeholder="بحث عن ولي أمر..." />
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>اسم ولي الأمر</TableHead>
                  <TableHead>عدد الأبناء</TableHead>
                  <TableHead>رقم الهاتف</TableHead>
                  <TableHead>البريد الإلكتروني</TableHead>
                  <TableHead>آخر تواصل</TableHead>
                  <TableHead>حالة التفاعل</TableHead>
                  <TableHead>الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>محمد أحمد</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      <span>+965 9876-5432</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      <span>mohammed@example.com</span>
                    </div>
                  </TableCell>
                  <TableCell>2024/03/15</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      نشط
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      عرض التفاصيل
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>فاطمة علي</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      <span>+965 5555-4444</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      <span>fatima@example.com</span>
                    </div>
                  </TableCell>
                  <TableCell>2024/03/10</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      متأخر
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      عرض التفاصيل
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Card>

        <Card>
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">الاجتماعات القادمة</h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {[
                {
                  parent: "محمد أحمد",
                  type: "اجتماع فردي",
                  topic: "متابعة تقدم الطالب",
                  date: "2024/03/20",
                  time: "10:00 ص",
                },
                {
                  parent: "فاطمة علي",
                  type: "اجتماع دوري",
                  topic: "مناقشة المستوى",
                  date: "2024/03/22",
                  time: "11:30 ص",
                },
                {
                  parent: "أحمد خالد",
                  type: "اجتماع طارئ",
                  topic: "مناقشة الغياب",
                  date: "2024/03/25",
                  time: "09:00 ص",
                },
              ].map((meeting, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <div className="font-medium">{meeting.parent}</div>
                    <div className="text-sm text-gray-500">{meeting.type}</div>
                    <div className="text-sm text-gray-500">{meeting.topic}</div>
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-600">{meeting.date}</div>
                    <div className="text-sm text-blue-600">{meeting.time}</div>
                    <Button variant="ghost" size="sm" className="text-xs">
                      تأكيد الموعد
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

export default ParentsPage;
