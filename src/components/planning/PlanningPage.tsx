import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Search, Filter, MoreVertical } from "lucide-react";

const lists = [
  {
    title: "قيد التخطيط",
    cards: [
      {
        title: "مسابقة حفظ القرآن",
        description: "تنظيم مسابقة لحفظ القرآن الكريم للمستوى المتقدم",
        labels: ["فعاليات", "مسابقات"],
        dueDate: "2024/04/15",
        assignees: ["أحمد", "محمد"],
      },
      {
        title: "تطوير منهج التجويد",
        description: "تحديث منهج التجويد للمستوى التمهيدي",
        labels: ["تطوير", "مناهج"],
        dueDate: "2024/04/20",
        assignees: ["فاطمة"],
      },
    ],
  },
  {
    title: "قيد التنفيذ",
    cards: [
      {
        title: "إعداد الاختبارات الشهرية",
        description: "تجهيز اختبارات الحفظ والتجويد لجميع المستويات",
        labels: ["اختبارات", "تقييم"],
        dueDate: "2024/03/25",
        assignees: ["عبدالله", "نورة"],
      },
    ],
  },
  {
    title: "قيد المراجعة",
    cards: [
      {
        title: "تقييم أداء المعلمين",
        description: "مراجعة وتقييم أداء المعلمين للفصل الدراسي الحالي",
        labels: ["تقييم", "إدارة"],
        dueDate: "2024/03/28",
        assignees: ["خالد"],
      },
    ],
  },
  {
    title: "مكتمل",
    cards: [
      {
        title: "تحديث نظام الحضور",
        description: "تطوير آلية تسجيل الحضور والغياب",
        labels: ["تطوير", "نظام"],
        dueDate: "2024/03/15",
        assignees: ["سارة"],
        completed: true,
      },
    ],
  },
];

const PlanningPage = () => {
  return (
    <div className="p-6" dir="rtl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">لوحة التخطيط</h1>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              className="pr-10 w-[300px]"
              placeholder="البحث في المهام..."
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            تصفية
          </Button>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            إضافة مهمة
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {lists.map((list, listIndex) => (
          <div key={listIndex} className="space-y-4">
            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
              <h2 className="font-semibold">{list.title}</h2>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-3">
              {list.cards.map((card, cardIndex) => (
                <Card
                  key={cardIndex}
                  className={`p-4 ${card.completed ? "bg-gray-50" : ""}`}
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{card.title}</h3>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>

                    <p className="text-sm text-gray-500">{card.description}</p>

                    <div className="flex flex-wrap gap-1">
                      {card.labels.map((label, labelIndex) => (
                        <span
                          key={labelIndex}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {label}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex -space-x-2 space-x-reverse">
                        {card.assignees.map((assignee, assigneeIndex) => (
                          <div
                            key={assigneeIndex}
                            className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium"
                            title={assignee}
                          >
                            {assignee[0]}
                          </div>
                        ))}
                      </div>
                      <span className="text-gray-500">{card.dueDate}</span>
                    </div>
                  </div>
                </Card>
              ))}

              <Button
                variant="ghost"
                className="w-full text-gray-500 hover:text-gray-700"
              >
                <Plus className="h-4 w-4 ml-2" />
                إضافة بطاقة
              </Button>
            </div>
          </div>
        ))}

        <div>
          <Button
            variant="outline"
            className="w-full h-[42px] border-dashed text-gray-500 hover:text-gray-700"
          >
            <Plus className="h-4 w-4 ml-2" />
            إضافة قائمة جديدة
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlanningPage;
