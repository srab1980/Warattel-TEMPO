import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Trophy,
  Star,
  Medal,
  Crown,
  Gift,
  Target,
  Award,
  Flame,
} from "lucide-react";

const GamificationPage = () => {
  return (
    <div className="p-6" dir="rtl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">نظام التحفيز</h1>
        <Button className="flex items-center gap-2">
          <Gift className="h-4 w-4" />
          إضافة مكافأة جديدة
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="text-sm text-gray-500">مجموع النقاط</div>
          <div className="text-2xl font-bold mt-1">15,240</div>
          <div className="text-xs text-gray-500 mt-1">نقطة مكتسبة</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-500">الإنجازات</div>
          <div className="text-2xl font-bold mt-1">28</div>
          <div className="text-xs text-gray-500 mt-1">إنجاز محقق</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-500">المتصدرون</div>
          <div className="text-2xl font-bold mt-1">12</div>
          <div className="text-xs text-gray-500 mt-1">طالب متميز</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-500">التحديات النشطة</div>
          <div className="text-2xl font-bold mt-1">5</div>
          <div className="text-xs text-gray-500 mt-1">تحدي حالي</div>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <Card>
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">المتصدرون هذا الشهر</h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {[
                {
                  name: "أحمد محمد",
                  points: 2500,
                  level: "حافظ متميز",
                  achievements: ["ختم القرآن", "إتقان التجويد"],
                  rank: 1,
                },
                {
                  name: "فاطمة علي",
                  points: 2300,
                  level: "متقن التجويد",
                  achievements: ["حفظ 20 جزء"],
                  rank: 2,
                },
                {
                  name: "عبدالله أحمد",
                  points: 2100,
                  level: "حافظ متقدم",
                  achievements: ["حفظ 15 جزء"],
                  rank: 3,
                },
              ].map((student, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                        index === 0
                          ? "bg-yellow-500"
                          : index === 1
                            ? "bg-gray-400"
                            : "bg-amber-600"
                      }`}
                    >
                      {index === 0 ? (
                        <Crown className="h-5 w-5" />
                      ) : (
                        <Medal className="h-5 w-5" />
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{student.name}</div>
                      <div className="text-sm text-gray-500">
                        {student.level}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-blue-600">
                      {student.points} نقطة
                    </div>
                    <div className="flex gap-1 mt-1">
                      {student.achievements.map((achievement, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">التحديات الحالية</h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {[
                {
                  title: "تحدي الحفظ السريع",
                  description: "احفظ جزء كامل خلال شهر",
                  reward: "500 نقطة",
                  progress: 65,
                  participants: 25,
                },
                {
                  title: "تحدي التجويد",
                  description: "أتقن 10 أحكام تجويد جديدة",
                  reward: "300 نقطة",
                  progress: 40,
                  participants: 18,
                },
                {
                  title: "تحدي المراجعة",
                  description: "راجع 5 أجزاء بإتقان",
                  reward: "400 نقطة",
                  progress: 80,
                  participants: 30,
                },
              ].map((challenge, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg space-y-3"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{challenge.title}</h3>
                      <p className="text-sm text-gray-500">
                        {challenge.description}
                      </p>
                    </div>
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      <Trophy className="h-3 w-3" />
                      {challenge.reward}
                    </Badge>
                  </div>
                  <Progress value={challenge.progress} />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{challenge.progress}% مكتمل</span>
                    <span>{challenge.participants} مشارك</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          {
            title: "حافظ القرآن",
            icon: Award,
            description: "أتم حفظ القرآن كاملاً",
            points: 10000,
            color: "bg-purple-100 text-purple-600",
          },
          {
            title: "متقن التجويد",
            icon: Star,
            description: "أتقن جميع أحكام التجويد",
            points: 5000,
            color: "bg-blue-100 text-blue-600",
          },
          {
            title: "المثابر",
            icon: Flame,
            description: "حضور 100 يوم متتالي",
            points: 3000,
            color: "bg-orange-100 text-orange-600",
          },
          {
            title: "المتميز",
            icon: Target,
            description: "حصل على تقييم ممتاز 10 مرات",
            points: 2000,
            color: "bg-green-100 text-green-600",
          },
        ].map((achievement, index) => (
          <Card key={index} className="p-4">
            <div className="flex flex-col items-center text-center">
              <div
                className={`w-12 h-12 rounded-full ${achievement.color} flex items-center justify-center mb-3`}
              >
                <achievement.icon className="h-6 w-6" />
              </div>
              <h3 className="font-medium mb-1">{achievement.title}</h3>
              <p className="text-sm text-gray-500 mb-2">
                {achievement.description}
              </p>
              <Badge variant="secondary">{achievement.points} نقطة</Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GamificationPage;
