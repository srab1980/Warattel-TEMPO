import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  GraduationCap,
  Users,
  Star,
  ArrowRight,
  CalendarDays,
} from "lucide-react";

const Home = () => {
  return (
    <div className="p-6" dir="rtl">
      {/* Welcome Section */}
      <Card className="p-8 bg-[#1e2f4d] text-white mb-6">
        <div className="max-w-3xl">
          <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">
            مرحباً بك في مركز تعليم وتحفيظ القرآن الكريم
          </Badge>
          <h1 className="text-4xl font-bold mb-4">
            ابدأ رحلة حفظ القرآن الكريم اليوم
          </h1>
          <p className="text-gray-300 mb-6">
            نقدم تجربة تعليمية متكاملة في حفظ وتجويد القرآن الكريم بإشراف نخبة
            من المعلمين المتخصصين
          </p>
          <div className="flex gap-3">
            <Button
              size="lg"
              className="bg-white text-[#1e2f4d] hover:bg-white/90"
            >
              تسجيل طالب جديد
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              استعراض الحلقات
            </Button>
          </div>
        </div>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Card className="p-6">
          <div className="flex flex-col items-center text-center">
            <Users className="h-8 w-8 text-blue-600 mb-2" />
            <div className="text-2xl font-bold">150+</div>
            <div className="text-sm text-gray-500">طالب وطالبة</div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex flex-col items-center text-center">
            <GraduationCap className="h-8 w-8 text-blue-600 mb-2" />
            <div className="text-2xl font-bold">25</div>
            <div className="text-sm text-gray-500">معلم ومعلمة</div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex flex-col items-center text-center">
            <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
            <div className="text-2xl font-bold">18</div>
            <div className="text-sm text-gray-500">حلقة تحفيظ</div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex flex-col items-center text-center">
            <Star className="h-8 w-8 text-blue-600 mb-2" />
            <div className="text-2xl font-bold">45</div>
            <div className="text-sm text-gray-500">ختمة كاملة</div>
          </div>
        </Card>
      </div>

      {/* Today's Circles */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <Card className="col-span-2">
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold">حلقات اليوم</h2>
          </div>
          <div className="p-4 space-y-4">
            {[
              {
                name: "حلقة الفجر",
                time: "05:00 ص",
                students: 15,
                progress: 80,
                surah: "سورة البقرة",
              },
              {
                name: "حلقة الظهر",
                time: "01:30 م",
                students: 20,
                progress: 65,
                surah: "سورة آل عمران",
              },
              {
                name: "حلقة العصر",
                time: "04:00 م",
                students: 18,
                progress: 75,
                surah: "سورة النساء",
              },
              {
                name: "حلقة المغرب",
                time: "06:30 م",
                students: 12,
                progress: 90,
                surah: "سورة المائدة",
              },
            ].map((circle, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-lg">{circle.name}</h3>
                    <div className="text-sm text-gray-500">{circle.surah}</div>
                  </div>
                  <Badge variant="outline" className="font-medium">
                    {circle.time}
                  </Badge>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {circle.students} طالب
                    </span>
                  </div>
                  <div className="flex-1">
                    <Progress value={circle.progress} />
                  </div>
                  <span className="text-sm text-gray-600">
                    {circle.progress}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold">الإنجازات الأخيرة</h2>
          </div>
          <div className="p-4 space-y-4">
            {[
              {
                student: "أحمد محمد",
                achievement: "ختم القرآن الكريم",
                date: "اليوم",
              },
              {
                student: "فاطمة علي",
                achievement: "إتمام حفظ 15 جزء",
                date: "أمس",
              },
              {
                student: "عبدالله أحمد",
                achievement: "إجازة في التجويد",
                date: "منذ يومين",
              },
              {
                student: "نورة سعد",
                achievement: "حفظ سورة البقرة",
                date: "منذ 3 أيام",
              },
            ].map((achievement, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <div className="font-medium">{achievement.student}</div>
                  <div className="text-sm text-gray-500">
                    {achievement.achievement}
                  </div>
                </div>
                <Badge variant="secondary">{achievement.date}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Upcoming Events */}
      <Card>
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold">الفعاليات القادمة</h2>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                title: "مسابقة حفظ القرآن",
                date: "15 رمضان",
                description: "مسابقة سنوية لحفظ القرآن الكريم مع جوائز قيمة",
                icon: Star,
              },
              {
                title: "دورة التجويد المكثفة",
                date: "1 شوال",
                description: "دورة متخصصة في أحكام التجويد لمدة أسبوعين",
                icon: BookOpen,
              },
              {
                title: "حفل تكريم الحفاظ",
                date: "10 شوال",
                description: "حفل تكريم الطلاب الذين أتموا حفظ القرآن الكريم",
                icon: GraduationCap,
              },
            ].map((event, index) => (
              <Card key={index} className="p-4">
                <div className="flex flex-col h-full">
                  <div className="rounded-full bg-blue-100 p-2 w-fit mb-4">
                    <event.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold mb-2">{event.title}</h3>
                  <Badge className="w-fit mb-2">{event.date}</Badge>
                  <p className="text-sm text-gray-500 flex-1">
                    {event.description}
                  </p>
                  <Button className="w-full mt-4" variant="outline">
                    التسجيل
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
