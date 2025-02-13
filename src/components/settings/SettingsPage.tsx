import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Building,
  Mail,
  Phone,
  Globe,
  Bell,
  Shield,
  BookOpen,
  Users,
  Wallet,
  Save,
} from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="p-6" dir="rtl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">إعدادات النظام</h1>
        <Button className="flex items-center gap-2">
          <Save className="h-4 w-4" />
          حفظ التغييرات
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 mb-6">
          <TabsTrigger value="general">عام</TabsTrigger>
          <TabsTrigger value="academic">أكاديمي</TabsTrigger>
          <TabsTrigger value="financial">مالي</TabsTrigger>
          <TabsTrigger value="notifications">الإشعارات</TabsTrigger>
          <TabsTrigger value="security">الأمان</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-6">معلومات المركز</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>اسم المركز</Label>
                  <Input defaultValue="مركز تعليم القرآن الكريم" />
                </div>
                <div className="space-y-2">
                  <Label>البريد الإلكتروني</Label>
                  <Input defaultValue="info@quran-center.com" type="email" />
                </div>
                <div className="space-y-2">
                  <Label>رقم الهاتف</Label>
                  <Input defaultValue="+965 2222-1111" />
                </div>
                <div className="space-y-2">
                  <Label>الموقع الإلكتروني</Label>
                  <Input defaultValue="www.quran-center.com" />
                </div>
                <div className="space-y-2">
                  <Label>العنوان</Label>
                  <Input defaultValue="الكويت - منطقة حولي" />
                </div>
                <div className="space-y-2">
                  <Label>الرقم الضريبي</Label>
                  <Input defaultValue="123456789" />
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-6">تخصيص النظام</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>اللغة الافتراضية</Label>
                    <div className="text-sm text-gray-500">
                      اختر لغة واجهة النظام
                    </div>
                  </div>
                  <Select defaultValue="ar">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="اختر اللغة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ar">العربية</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>المظهر</Label>
                    <div className="text-sm text-gray-500">
                      اختر مظهر النظام
                    </div>
                  </div>
                  <Select defaultValue="light">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="اختر المظهر" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">فاتح</SelectItem>
                      <SelectItem value="dark">داكن</SelectItem>
                      <SelectItem value="system">حسب النظام</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="academic" className="space-y-6">
          <Card>
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-6">
                الإعدادات الأكاديمية
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>الحد الأقصى للطلاب في الحلقة</Label>
                    <Input type="number" defaultValue="20" />
                  </div>
                  <div className="space-y-2">
                    <Label>مدة الحصة (بالدقائق)</Label>
                    <Input type="number" defaultValue="45" />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <Label>أيام الدوام</Label>
                  <div className="flex gap-2">
                    {[
                      "الأحد",
                      "الإثنين",
                      "الثلاثاء",
                      "الأربعاء",
                      "الخميس",
                      "الجمعة",
                      "السبت",
                    ].map((day, index) => (
                      <Button
                        key={index}
                        variant={index < 5 ? "default" : "outline"}
                        className="flex-1"
                      >
                        {day}
                      </Button>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <Label>الحلقات المتاحة</Label>
                  <div className="space-y-2">
                    {[
                      { name: "حلقة الفجر", time: "05:00 ص" },
                      { name: "حلقة الظهر", time: "01:30 م" },
                      { name: "حلقة العصر", time: "04:00 م" },
                      { name: "حلقة المغرب", time: "06:30 م" },
                    ].map((circle, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <BookOpen className="w-5 h-5 text-blue-600" />
                          <div>
                            <p className="font-medium">{circle.name}</p>
                            <p className="text-sm text-gray-500">
                              {circle.time}
                            </p>
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="financial" className="space-y-6">
          <Card>
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-6">الإعدادات المالية</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>الرسوم الشهرية</Label>
                    <Input type="number" defaultValue="40" />
                  </div>
                  <div className="space-y-2">
                    <Label>رسوم التسجيل</Label>
                    <Input type="number" defaultValue="25" />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <Label>طرق الدفع المتاحة</Label>
                  <div className="space-y-2">
                    {[
                      "الدفع النقدي",
                      "التحويل البنكي",
                      "البطاقة الائتمانية",
                      "كي-نت",
                    ].map((method, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <Wallet className="w-5 h-5 text-blue-600" />
                          <span>{method}</span>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-6">إعدادات الإشعارات</h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <Label>إشعارات النظام</Label>
                  <div className="space-y-2">
                    {[
                      {
                        title: "تذكير الحضور",
                        description: "إرسال تذكير قبل موعد الحلقة",
                      },
                      {
                        title: "تقارير الأداء",
                        description: "إشعار عند إصدار تقارير جديدة",
                      },
                      {
                        title: "المدفوعات",
                        description: "إشعار عند استحقاق الرسوم",
                      },
                      {
                        title: "الأنشطة والفعاليات",
                        description: "إشعار عند إضافة نشاط جديد",
                      },
                    ].map((notification, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <Bell className="w-5 h-5 text-blue-600" />
                          <div>
                            <p className="font-medium">{notification.title}</p>
                            <p className="text-sm text-gray-500">
                              {notification.description}
                            </p>
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-6">إعدادات الأمان</h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <Label>الصلاحيات والأدوار</Label>
                  <div className="space-y-2">
                    {[
                      {
                        role: "مدير النظام",
                        users: 2,
                        permissions: "صلاحيات كاملة",
                      },
                      {
                        role: "المعلمون",
                        users: 15,
                        permissions: "إدارة الطلاب والحلقات",
                      },
                      {
                        role: "المشرفون",
                        users: 5,
                        permissions: "مراقبة وتقييم",
                      },
                      {
                        role: "السكرتارية",
                        users: 3,
                        permissions: "إدارة التسجيل والمدفوعات",
                      },
                    ].map((role, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <Shield className="w-5 h-5 text-blue-600" />
                          <div>
                            <p className="font-medium">{role.role}</p>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-500">
                                {role.permissions}
                              </span>
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                                {role.users} مستخدم
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          تعديل الصلاحيات
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
