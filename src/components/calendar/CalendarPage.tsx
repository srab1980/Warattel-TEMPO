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
import { ChevronLeft, ChevronRight, Plus, Filter } from "lucide-react";

const CalendarPage = () => {
  return (
    <div className="p-6" dir="rtl">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">التقويم</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="text-lg font-medium">مارس 2024</div>
          </div>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="month">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="عرض" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">يوم</SelectItem>
              <SelectItem value="week">أسبوع</SelectItem>
              <SelectItem value="month">شهر</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            تصفية
          </Button>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            إضافة موعد
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-8 gap-4">
        <Card className="p-4 col-span-1">
          <div className="space-y-4">
            <div className="font-medium">التصفية</div>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked
                  className="rounded text-blue-600"
                />
                <span>حلقات القرآن</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked
                  className="rounded text-green-600"
                />
                <span>الاختبارات</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked
                  className="rounded text-yellow-600"
                />
                <span>المسابقات</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked
                  className="rounded text-purple-600"
                />
                <span>اجتماعات أولياء الأمور</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked
                  className="rounded text-red-600"
                />
                <span>المحاضرات</span>
              </label>
            </div>

            <div className="font-medium mt-6">المواعيد القادمة</div>
            <div className="space-y-2">
              {[
                {
                  title: "حلقة تحفيظ - سورة البقرة",
                  time: "05:00 ص",
                  type: "class",
                },
                {
                  title: "اختبار حفظ - محمد أحمد",
                  time: "09:00 ص",
                  type: "exam",
                },
                {
                  title: "اجتماع أولياء الأمور",
                  time: "11:00 ص",
                  type: "meeting",
                },
              ].map((event, index) => (
                <div
                  key={index}
                  className="p-2 rounded-lg bg-gray-50 text-sm space-y-1"
                >
                  <div className="font-medium">{event.title}</div>
                  <div className="text-gray-500">{event.time}</div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="col-span-7 p-4">
          <div className="grid grid-cols-7 gap-px bg-gray-200">
            {[
              "الأحد",
              "الإثنين",
              "الثلاثاء",
              "الأربعاء",
              "الخميس",
              "الجمعة",
              "السبت",
            ].map((day) => (
              <div key={day} className="bg-white p-2 text-center font-medium">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 grid-rows-5 gap-px bg-gray-200 h-[600px]">
            {Array.from({ length: 35 }).map((_, index) => (
              <div key={index} className="bg-white p-2 relative">
                <div className="text-sm text-gray-500">{index + 1}</div>
                {index === 15 && (
                  <div className="absolute top-8 left-0 right-0 mx-2">
                    <div className="bg-blue-100 text-blue-800 p-1 rounded text-xs">
                      حلقة تحفيظ
                      <div className="text-[10px]">05:00 ص</div>
                    </div>
                  </div>
                )}
                {index === 16 && (
                  <div className="absolute top-8 left-0 right-0 mx-2">
                    <div className="bg-green-100 text-green-800 p-1 rounded text-xs">
                      اختبار حفظ
                      <div className="text-[10px]">09:00 ص</div>
                    </div>
                  </div>
                )}
                {index === 17 && (
                  <div className="absolute top-8 left-0 right-0 mx-2">
                    <div className="bg-purple-100 text-purple-800 p-1 rounded text-xs">
                      اجتماع أولياء الأمور
                      <div className="text-[10px]">11:00 ص</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CalendarPage;
