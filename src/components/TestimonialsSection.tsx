import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  isArabic?: boolean;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "محمد أحمد",
    role: "طالب",
    content:
      "لقد كانت تجربة رائعة في تعلم القرآن الكريم. المعلمون متميزون والمنهج شامل.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
    isArabic: true,
  },
  {
    id: 2,
    name: "نور علي",
    role: "طالبة",
    content:
      "مرونة البرنامج وجودة التعليم فاقت توقعاتي. أشعر بتحسن كبير في تلاوتي.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
    isArabic: true,
  },
  {
    id: 3,
    name: "عائشة محمود",
    role: "والدة طالب",
    content:
      "أنا سعيدة جداً بتقدم ابني في حفظ القرآن. المعلمون صبورون ومحترفون.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
    isArabic: true,
  },
];

const TestimonialsSection = ({
  testimonials = defaultTestimonials,
}: TestimonialsSectionProps) => {
  return (
    <div className="w-full bg-[#1e2f4d] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-right mb-8">
          آراء طلابنا
        </h2>
        <Carousel className="w-full">
          <CarouselContent className="-mr-2 md:-mr-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pr-2 md:pr-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-reverse space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                      <Quote className="h-6 w-6 text-[#1e2f4d] opacity-50" />
                    </div>
                    <p
                      className={`mt-4 text-gray-600 ${
                        testimonial.isArabic ? "text-right" : ""
                      }`}
                      dir={testimonial.isArabic ? "rtl" : "ltr"}
                    >
                      {testimonial.content}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialsSection;
