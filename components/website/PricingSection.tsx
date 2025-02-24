"use client";
// PricingSection Component
// Purpose: Displays the pricing plans for the AI Chatbot SaaS using modern card layouts with subtle hover effects.
// Location: /components/website/PricingSection.tsx

import { Button } from "@/components/ui/button";

export default function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "$19/mo",
      features: ["Chatbot interactions", "Basic analytics", "Email support"],
    },
    {
      name: "Pro",
      price: "$49/mo",
      features: ["All Basic features", "Advanced integrations", "Priority support"],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Custom solutions", "Dedicated support", "Unlimited usage"],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border p-6 rounded-lg shadow transition transform hover:scale-105 flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-4 text-center">
                {plan.name}
              </h3>
              <p className="text-center text-3xl font-bold mb-6">
                {plan.price}
              </p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground">
                    • {feature}
                  </li>
                ))}
              </ul>
              <Button variant="default" className="mt-auto mx-auto">
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 