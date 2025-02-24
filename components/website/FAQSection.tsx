"use client";
// FAQSection Component
// Purpose: Displays frequently asked questions using an accessible accordion design with modern styling.
// Location: /components/website/FAQSection.tsx

import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is an AI chatbot SaaS?",
      answer: "It is a service that allows businesses to deploy AI-powered chatbots to improve customer engagement and automate support.",
    },
    {
      question: "How does the pricing work?",
      answer: "We offer tiered pricing plans based on the features and usage requirements of your business.",
    },
    {
      question: "Can I integrate with my existing systems?",
      answer: "Yes, our platform supports seamless integrations with a variety of tools and APIs.",
    },
    {
      question: "Is there a free trial available?",
      answer: "We offer a 14-day free trial so you can experience our chatbot capabilities before committing.",
    },
    {
      question: "How secure is the platform?",
      answer: "Security is our top priority. We follow industry best practices to ensure that your data is protected at all times.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="border rounded-lg p-4 group"
            >
              <summary className="flex justify-between items-center font-semibold cursor-pointer">
                {faq.question}
                <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-2 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
} 