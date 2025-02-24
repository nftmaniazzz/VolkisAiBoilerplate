"use client";
// FeaturesSection Component
// Purpose: Displays key features of the AI Chatbot SaaS with an alternating layout (image and explanation).
// Location: /components/website/FeaturesSection.tsx

import { Bot, Settings, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeaturesSection() {
  const features = [
    {
      title: "Intelligent Chatbots",
      description: "Leverage AI to automate conversations and provide instant support.",
      icon: Bot,
    },
    {
      title: "Seamless Integrations",
      description: "Easily integrate with your existing tools and platforms.",
      icon: Settings,
    },
    {
      title: "Real-Time Analytics",
      description: "Monitor chatbot performance and user interactions in real-time.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 space-y-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={`https://via.placeholder.com/400x300?text=${encodeURIComponent(
                  feature.title
                )}`}
                alt={`${feature.title} Image`}
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* Text */}
            <div className="md:w-1/2 mt-8 md:mt-0 md:px-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <feature.icon className="w-8 h-8 text-primary" />
                {feature.title}
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                {feature.description}
              </p>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 