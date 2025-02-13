import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Download,
  Search,
  Plus,
  BookOpen,
  Headphones,
  Video,
  FileText,
} from "lucide-react";

const LibraryPage = () => {
  return (
    <div className="p-6" dir="rtl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">المكتبة الإلكترونية</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            تحميل الفهرس
          </Button>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            إضافة مصدر جديد
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="text-sm text-gray-500">الكتب الإلكترونية</div>
          <div className="text-2xl font-bold mt-1">120</div>
          <div className="text-xs text-gray-500 mt-1">كتاب ومرجع</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-500">المواد الصوتية</div>
          <div className="text-2xl font-bold mt-1">250</div>
          <div className="text-xs text-gray-500 mt-1">تسجيل صوتي</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-500">المواد المرئية</div>
          <div className="text-2xl font-bold mt-1">85</div>
          <div className="text-xs text-gray-500 mt-1">فيديو تعليمي</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-500">الملفات التعليمية</div>
          <div className="text-2xl font-bold mt-1">180</div>
          <div className="text-xs text-gray-500 mt-1">ملف تعليمي</div>
        </Card>
      </div>

      <div className="mb-6">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input className="pr-10" placeholder="البحث في المكتبة..." />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="تصنيف المحتوى" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">جميع المحتويات</SelectItem>
              <SelectItem value="quran">علوم القرآن</SelectItem>
              <SelectItem value="tajweed">التجويد</SelectItem>
              <SelectItem value="tafsir">التفسير</SelectItem>
              <SelectItem value="qiraat">القراءات</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="books" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="books" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            الكتب الإلكترونية
          </TabsTrigger>
          <TabsTrigger value="audio" className="flex items-center gap-2">
            <Headphones className="h-4 w-4" />
            المواد الصوتية
          </TabsTrigger>
          <TabsTrigger value="video" className="flex items-center gap-2">
            <Video className="h-4 w-4" />
            المواد المرئية
          </TabsTrigger>
          <TabsTrigger value="files" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            الملفات التعليمية
          </TabsTrigger>
        </TabsList>

        <TabsContent value="books" className="space-y-4">
          <div className="grid grid-cols-4 gap-4">
            {[
              {
                title: "متن الشاطبية",
                author: "الإمام الشاطبي",
                category: "القراءات",
                format: "PDF",
                size: "2.5 MB",
              },
              {
                title: "التحفة السمنودية",
                author: "الشيخ السمنودي",
                category: "التجويد",
                format: "PDF",
                size: "1.8 MB",
              },
              {
                title: "هداية القاري",
                author: "عبد الفتاح المرصفي",
                category: "التجويد",
                format: "PDF",
                size: "3.2 MB",
              },
              {
                title: "غاية المريد",
                author: "عطية قابل نصر",
                category: "التجويد",
                format: "PDF",
                size: "4.1 MB",
              },
            ].map((book, index) => (
              <Card key={index} className="p-4">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
                    <h3 className="font-medium mb-1">{book.title}</h3>
                    <p className="text-sm text-gray-500">{book.author}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {book.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {book.format}
                      </span>
                      <span className="text-xs text-gray-500">{book.size}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline" size="sm">
                    تحميل الكتاب
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="audio" className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                title: "تلاوة سورة البقرة",
                reciter: "الشيخ محمود خليل الحصري",
                duration: "2:15:00",
                size: "45 MB",
              },
              {
                title: "شرح متن الجزرية",
                lecturer: "الشيخ أيمن سويد",
                duration: "1:30:00",
                size: "30 MB",
              },
              {
                title: "دروس في التجويد",
                lecturer: "الشيخ محمد الحبش",
                duration: "45:00",
                size: "15 MB",
              },
            ].map((audio, index) => (
              <Card key={index} className="p-4">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <Headphones className="h-8 w-8 text-blue-600 mb-2" />
                    <h3 className="font-medium mb-1">{audio.title}</h3>
                    <p className="text-sm text-gray-500">
                      {audio.reciter || audio.lecturer}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-gray-500">
                        {audio.duration}
                      </span>
                      <span className="text-xs text-gray-500">
                        {audio.size}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline" size="sm">
                    استماع
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="video" className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                title: "شرح أحكام التجويد",
                instructor: "د. أحمد عيسى المعصراوي",
                duration: "45:00",
                episodes: 12,
              },
              {
                title: "تعليم القراءات العشر",
                instructor: "د. محمد السحيم",
                duration: "1:30:00",
                episodes: 24,
              },
              {
                title: "منهجية الحفظ",
                instructor: "د. عبدالرحمن الشهري",
                duration: "1:00:00",
                episodes: 8,
              },
            ].map((video, index) => (
              <Card key={index} className="p-4">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <Video className="h-8 w-8 text-blue-600 mb-2" />
                    <h3 className="font-medium mb-1">{video.title}</h3>
                    <p className="text-sm text-gray-500">{video.instructor}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-gray-500">
                        {video.episodes} حلقة
                      </span>
                      <span className="text-xs text-gray-500">
                        {video.duration} لكل حلقة
                      </span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline" size="sm">
                    مشاهدة
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="files" className="space-y-4">
          <div className="grid grid-cols-4 gap-4">
            {[
              {
                title: "مذكرة التجويد",
                type: "ملف PDF",
                size: "1.2 MB",
                downloads: 250,
              },
              {
                title: "اختبارات الحفظ",
                type: "ملف Word",
                size: "800 KB",
                downloads: 180,
              },
              {
                title: "جداول المراجعة",
                type: "ملف Excel",
                size: "500 KB",
                downloads: 320,
              },
              {
                title: "خطة الحفظ السنوية",
                type: "ملف PDF",
                size: "900 KB",
                downloads: 420,
              },
            ].map((file, index) => (
              <Card key={index} className="p-4">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <FileText className="h-8 w-8 text-blue-600 mb-2" />
                    <h3 className="font-medium mb-1">{file.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                        {file.type}
                      </span>
                      <span className="text-xs text-gray-500">{file.size}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {file.downloads} تحميل
                    </p>
                  </div>
                  <Button className="w-full mt-4" variant="outline" size="sm">
                    تحميل الملف
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LibraryPage;
