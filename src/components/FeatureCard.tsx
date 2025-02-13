import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "@/lib/utils";
import { Lightbulb, Calendar, GraduationCap, BookOpen } from "lucide-react";

interface FeatureCardProps {
  title?: string;
  description?: string;
  icon?: React.ElementType;
  className?: string;
}

const defaultFeatures = [
  {
    title: "شهادات معتمدة",
    description: "احصل على شهادات معترف بها دولياً عند إكمال برامجنا.",
    icon: GraduationCap,
  },
  {
    title: "جدول مرن",
    description: "اختر أوقات الدروس التي تناسب جدولك ووتيرة تعلمك.",
    icon: Calendar,
  },
  {
    title: "معلمون مؤهلون",
    description: "تعلم على يد معلمين وعلماء قرآن ذوي خبرة ومعتمدين.",
    icon: GraduationCap,
  },
  {
    title: "منهج شامل",
    description: "اتبع منهجاً منظماً وشاملاً مصمم لجميع المستويات.",
    icon: BookOpen,
  },
];

const FeatureCard = ({
  title = "Feature Title",
  description = "This is a description of the feature that highlights its benefits and value to users.",
  icon: Icon = Lightbulb,
  className,
}: FeatureCardProps) => {
  return (
    <Card className={cn("bg-white transition-all hover:shadow-lg", className)}>
      <CardHeader className="space-y-2">
        <div className="flex items-center space-x-reverse space-x-2">
          <div className="rounded-full bg-[#1e2f4d] p-2">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-xl font-bold text-[#1e2f4d]">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-gray-600 text-right">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export { defaultFeatures };
export default FeatureCard;
