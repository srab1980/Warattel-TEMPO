import React from "react";
import Sidebar from "@/components/Sidebar";
import FeatureGrid from "@/components/FeatureGrid";
import TestimonialsSection from "@/components/TestimonialsSection";

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#1e2f4d] text-right">
              مركز تعليم القرآن الكريم
            </h1>
            <p className="mt-2 text-gray-600 text-right">
              اكتشف برامجنا التعليمية الشاملة وابدأ رحلتك اليوم.
            </p>
          </div>

          <FeatureGrid />

          <div className="mt-8">
            <TestimonialsSection />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
