"use client";
// CTASection Component
// Purpose: Provides a compelling call-to-action for visitors to convert into customers.
// Location: /components/website/CTASection.tsx

import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Customer Experience?
        </h2>
        <p className="mb-8 text-lg">
          Join the future of customer engagement with our state-of-the-art AI chatbots.
        </p>
        <Button variant="default" size="lg">
          Start Your Free Trial
        </Button>
      </div>
    </section>
  );
} 