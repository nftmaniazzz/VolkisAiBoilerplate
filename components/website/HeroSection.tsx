"use client";
// HeroSection Component
// Purpose: Displays a modern hero section promoting the AI Chatbot SaaS with text and an app screenshot.
// Location: /components/website/HeroSection.tsx

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Text and call-to-action */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Revolutionize Your Conversations
          </h1>
          <p className="text-xl mb-8">
            Unlock the power of AI to engage your customers with intelligent chatbots.
          </p>
          <Button variant="default" size="lg">
            Get Started
          </Button>
        </div>
        {/* Right: Image of app screenshot */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://via.placeholder.com/500x400?text=App+Screenshot"
            alt="App Screenshot"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
} 