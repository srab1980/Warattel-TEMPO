import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Settings, Book, GraduationCap, Users, Shield } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="p-6" dir="rtl">
      <Card className="max-w-5xl mx-auto">
        <div className="p-6">
          <div className="flex items-start gap-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=teacher" />
              <AvatarFallback>عا</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold">عبدالرحمن العثمان</h1>
                  <p className="text-gray-500">معلم القرآن الكريم والتجويد</p>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="secondary">إجازة في القراءات العشر</Badge>
                    <Badge variant="secondary">خبرة 15 سنة</Badge>
                  </div>
                </div>
                <Button>
                  <Settings className="h-4 w-4 ml-2" />
                  تعديل الملف الشخصي
                </Button>
              </div>
            </div>
          </div>

          <Tabs defaultValue="personal" className="mt-6">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="personal">المعلومات الشخصية</TabsTrigger>
              <TabsTrigger value="qualifications">المؤهلات العلمية</TabsTrigger>
              <TabsTrigger value="students">الطلاب</TabsTrigger>
              <TabsTrigger value="security">الأمان</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>الاسم الكامل</Label>
                  <Input defaultValue="عبدالرحمن محمد العثمان" />
                </div>
                <div className="space-y-2">
                  <Label>البريد الإلكتروني</Label>
                  <Input defaultValue="abdulrahman@example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <Label>رقم الهاتف</Label>
                  <Input defaultValue="+965 9999-8888" />
                </div>
                <div className="space-y-2">
                  <Label>تاريخ الميلاد</Label>
                  <Input defaultValue="1980/05/15" type="date" />
                </div>
                <div className="space-y-2">
                  <Label>الجنسية</Label>
                  <Input defaultValue="كويتي" />
                </div>
                <div className="space-y-2">
                  <Label>الرقم المدني</Label>
                  <Input defaultValue="280051500123" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="qualifications" className="space-y-6">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className="font-semibold">إجازة في القراءات العشر</h3>
                    <p className="text-sm text-gray-500">جامعة الأزهر - 2005</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <Book className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className="font-semibold">شهادة في علوم القرآن</h3>
                    <p className="text-sm text-gray-500">
                      معهد القراءات - 2003
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className="font-semibold">بكالوريوس في الشريعة</h3>
                    <p className="text-sm text-gray-500">جامعة الكويت - 2000</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="students" className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">إحصائيات الطلاب</h3>
                  <Badge variant="outline">45 طالب</Badge>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <Card className="p-4">
                    <h4 className="text-sm text-gray-500">متوسط الحفظ</h4>
                    <p className="text-2xl font-bold">92%</p>
                  </Card>
                  <Card className="p-4">
                    <h4 className="text-sm text-gray-500">نسبة الحضور</h4>
                    <p className="text-2xl font-bold">88%</p>
                  </Card>
                  <Card className="p-4">
                    <h4 className="text-sm text-gray-500">عدد الختمات</h4>
                    <p className="text-2xl font-bold">15</p>
                  </Card>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h3 className="font-semibold">الحلقات الحالية</h3>
                  <div className="space-y-3">
                    {[
                      { name: "حلقة الفجر", students: 15, time: "05:00 ص" },
                      { name: "حلقة الظهر", students: 20, time: "01:30 م" },
                      { name: "حلقة العصر", students: 10, time: "04:00 م" },
                    ].map((circle, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <Users className="w-5 h-5 text-blue-600" />
                          <div>
                            <p className="font-medium">{circle.name}</p>
                            <p className="text-sm text-gray-500">
                              {circle.time}
                            </p>
                          </div>
                        </div>
                        <Badge variant="secondary">
                          {circle.students} طالب
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <Shield className="w-8 h-8 text-blue-600" />
                  <div className="flex-1">
                    <h3 className="font-semibold">تغيير كلمة المرور</h3>
                    <p className="text-sm text-gray-500">
                      قم بتحديث كلمة المرور الخاصة بك بشكل دوري
                    </p>
                  </div>
                  <Button variant="outline">تغيير</Button>
                </div>

                <div className="space-y-2">
                  <Label>البريد الإلكتروني للتحقق</Label>
                  <Input defaultValue="abdulrahman@example.com" type="email" />
                  <p className="text-sm text-gray-500">
                    سيتم استخدام هذا البريد للتحقق من هويتك
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>رقم الهاتف للتحقق</Label>
                  <Input defaultValue="+965 9999-8888" />
                  <p className="text-sm text-gray-500">
                    سيتم استخدام هذا الرقم للتحقق بخطوتين
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;
