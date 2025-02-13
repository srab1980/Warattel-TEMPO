import React from "react";
import FeatureCard from "./FeatureCard";
import { defaultFeatures } from "./FeatureCard";

interface FeatureGridProps {
  features?: Array<{
    title: string;
    description: string;
    icon?: React.ElementType;
  }>;
}

const FeatureGrid = ({ features = defaultFeatures }: FeatureGridProps) => {
  return (
    <div className="bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
