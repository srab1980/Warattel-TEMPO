import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ScrollText,
  BookOpen,
  GraduationCap,
  Users,
  Download,
  Plus,
} from "lucide-react";

const CurriculumPage = () => {
  return (
    <div className="p-6" dir="rtl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">المنهج الدراسي</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            تحميل المنهج
          </Button>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            إضافة مستوى جديد
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="text-sm text-gray-500">المستويات الدراسية</div>
          <div className="text-2xl font-bold mt-1">6</div>
          <div className="text-xs text-gray-500 mt-1">مستويات</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-500">الطلاب المسجلين</div>
          <div className="text-2xl font-bold mt-1">150</div>
          <div className="text-xs text-gray-500 mt-1">طالب وطالبة</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-500">نسبة إتمام المنهج</div>
          <div className="text-2xl font-bold mt-1">75%</div>
          <div className="text-xs text-gray-500 mt-1">المتوسط العام</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-500">المعلمين المشرفين</div>
          <div className="text-2xl font-bold mt-1">12</div>
          <div className="text-xs text-gray-500 mt-1">معلم ومعلمة</div>
        </Card>
      </div>

      <Tabs defaultValue="levels" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="levels" className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            المستويات الدراسية
          </TabsTrigger>
          <TabsTrigger value="content" className="flex items-center gap-2">
            <ScrollText className="h-4 w-4" />
            المحتوى التعليمي
          </TabsTrigger>
          <TabsTrigger value="progress" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            تقدم الطلاب
          </TabsTrigger>
        </TabsList>

        <TabsContent value="levels" className="space-y-4">
          {[
            {
              level: "المستوى التمهيدي",
              duration: "3 أشهر",
              students: 35,
              content: [
                "تعلم القراءة الصحيحة",
                "أساسيات التجويد",
                "حفظ جزء عم",
              ],
            },
            {
              level: "المستوى الأول",
              duration: "6 أشهر",
              students: 28,
              content: [
                "إتقان أحكام التجويد",
                "حفظ الجزء 29 و 30",
                "تفسير مبسط",
              ],
            },
            {
              level: "المستوى المتقدم",
              duration: "12 شهر",
              students: 22,
              content: ["القراءات العشر", "حفظ 5 أجزاء", "علوم القرآن"],
            },
          ].map((level, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{level.level}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary">{level.duration}</Badge>
                    <Badge variant="outline">{level.students} طالب</Badge>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  تعديل المستوى
                </Button>
              </div>
              <div className="space-y-3">
                {level.content.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-blue-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="content" className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                title: "حفظ القرآن",
                sections: [
                  "المقدمة في الحفظ",
                  "طرق الحفظ الفعالة",
                  "تثبيت الحفظ",
                  "المراجعة الدورية",
                ],
                progress: 85,
              },
              {
                title: "التجويد",
                sections: [
                  "مخارج الحروف",
                  "صفات الحروف",
                  "أحكام النون الساكنة",
                  "المدود",
                ],
                progress: 70,
              },
              {
                title: "علوم القرآن",
                sections: [
                  "تاريخ القرآن",
                  "أسباب النزول",
                  "المكي والمدني",
                  "الناسخ والمنسوخ",
                ],
                progress: 60,
              },
            ].map((subject, index) => (
              <Card key={index} className="p-4">
                <h3 className="text-lg font-semibold mb-4">{subject.title}</h3>
                <div className="space-y-4">
                  {subject.sections.map((section, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{section}</span>
                        <Badge variant="outline">وحدة {idx + 1}</Badge>
                      </div>
                      <Progress value={subject.progress - idx * 10} />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="progress" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                student: "أحمد محمد",
                level: "المستوى المتقدم",
                progress: 85,
                achievements: [
                  "إتمام حفظ 5 أجزاء",
                  "إجازة في التجويد",
                  "اجتياز اختبار القراءات",
                ],
              },
              {
                student: "فاطمة علي",
                level: "المستوى الأول",
                progress: 70,
                achievements: [
                  "حفظ جزء عم كاملاً",
                  "إتقان أحكام النون الساكنة",
                ],
              },
            ].map((student, index) => (
              <Card key={index} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{student.student}</h3>
                    <Badge variant="secondary" className="mt-1">
                      {student.level}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">
                      {student.progress}%
                    </div>
                    <div className="text-sm text-gray-500">نسبة الإنجاز</div>
                  </div>
                </div>
                <Progress value={student.progress} className="mb-4" />
                <div className="space-y-2">
                  <h4 className="font-medium">الإنجازات:</h4>
                  {student.achievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <GraduationCap className="h-4 w-4 text-blue-600" />
                      {achievement}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CurriculumPage;
