import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Download,
  Printer,
  FileBarChart,
  TrendingUp,
  Users,
  BookOpen,
} from "lucide-react";

const ReportsPage = () => {
  return (
    <div className="p-6" dir="rtl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">التقارير والإحصائيات</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            تصدير التقارير
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Printer className="h-4 w-4" />
            طباعة التقارير
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="text-sm text-gray-500">إجمالي الطلاب</div>
          <div className="text-2xl font-bold mt-1">150</div>
          <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
            <TrendingUp className="h-3 w-3" />
            <span>+12% من العام السابق</span>
          </div>
        </Card>

        <Card className="p-4">
          <div className="text-sm text-gray-500">متوسط الحفظ</div>
          <div className="text-2xl font-bold mt-1">92%</div>
          <div className="text-xs text-gray-500 mt-1">15 ختمة كاملة</div>
        </Card>

        <Card className="p-4">
          <div className="text-sm text-gray-500">نسبة الحضور</div>
          <div className="text-2xl font-bold mt-1">88%</div>
          <div className="text-xs text-gray-500 mt-1">معدل شهري</div>
        </Card>

        <Card className="p-4">
          <div className="text-sm text-gray-500">عدد المعلمين</div>
          <div className="text-2xl font-bold mt-1">25</div>
          <div className="text-xs text-gray-500 mt-1">معلم ومعلمة</div>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <Card>
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">تقارير الأداء</h2>
          </div>
          <div className="p-4 space-y-4">
            {[
              {
                title: "تقرير الحفظ الشهري",
                icon: BookOpen,
                description: "إحصائيات تقدم الطلاب في حفظ القرآن",
              },
              {
                title: "تقرير الحضور والغياب",
                icon: Users,
                description: "تحليل نسب الحضور والغياب للطلاب",
              },
              {
                title: "تقرير الاختبارات",
                icon: FileBarChart,
                description: "نتائج وتحليلات الاختبارات الدورية",
              },
            ].map((report, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
              >
                <div className="rounded-full bg-blue-100 p-2">
                  <report.icon className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{report.title}</h3>
                  <p className="text-sm text-gray-500">{report.description}</p>
                </div>
                <Button variant="outline" size="sm">
                  عرض التقرير
                </Button>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">التقارير المالية</h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">إجمالي الإيرادات</div>
                  <div className="text-2xl font-bold mt-1">1,200 د.ك</div>
                  <div className="text-xs text-gray-500 mt-1">هذا الشهر</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">الرسوم المستحقة</div>
                  <div className="text-2xl font-bold mt-1">280 د.ك</div>
                  <div className="text-xs text-gray-500 mt-1">8 طلاب</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <div className="text-sm font-medium">نسبة التحصيل</div>
                  <div className="text-xs text-gray-500">
                    مقارنة بالشهر السابق
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-green-600">85%</div>
                  <div className="text-xs text-green-600">+7%</div>
                </div>
              </div>

              <Button className="w-full" variant="outline">
                عرض التقرير المالي المفصل
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">تقارير مخصصة</h2>
            <Select defaultValue="monthly">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="الفترة الزمنية" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">أسبوعي</SelectItem>
                <SelectItem value="monthly">شهري</SelectItem>
                <SelectItem value="quarterly">ربع سنوي</SelectItem>
                <SelectItem value="yearly">سنوي</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                title: "تقرير تقدم الطلاب",
                description: "تحليل مستوى تقدم كل طالب في الحفظ والتجويد",
              },
              {
                title: "تقرير أداء المعلمين",
                description: "تقييم أداء المعلمين وإنجازات طلابهم",
              },
              {
                title: "تقرير الحلقات",
                description: "إحصائيات وتحليلات لكل حلقة تحفيظ",
              },
              {
                title: "تقرير المسابقات",
                description: "نتائج وإحصائيات المسابقات والفعاليات",
              },
              {
                title: "تقرير التواصل مع أولياء الأمور",
                description: "تحليل مستوى التواصل والمتابعة مع الأهالي",
              },
              {
                title: "تقرير الإنجازات",
                description: "ملخص الإنجازات والنجاحات خلال الفترة",
              },
            ].map((report, index) => (
              <Card key={index} className="p-4">
                <h3 className="font-medium">{report.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {report.description}
                </p>
                <Button className="w-full mt-4" variant="outline" size="sm">
                  إنشاء التقرير
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ReportsPage;
