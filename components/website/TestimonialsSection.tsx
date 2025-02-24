"use client";
// TestimonialsSection Component
// Purpose: Displays client testimonials in a modern grid layout with gold star ratings and stylish testimonial cards.
// Location: /components/website/TestimonialsSection.tsx

import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alice Johnson",
      role: "CEO, TechCorp",
      quote:
        "This AI chatbot transformed our customer service. It's fast, reliable, and incredibly user-friendly.",
      avatar: "https://via.placeholder.com/80?text=Alice",
    },
    {
      name: "Bob Smith",
      role: "CTO, Innovate Inc.",
      quote:
        "The integration was seamless and the performance is top-notch. I highly recommend this service.",
      avatar: "https://via.placeholder.com/80?text=Bob",
    },
    {
      name: "Catherine Lee",
      role: "Product Manager, Creatives",
      quote:
        "Our customer engagement skyrocketed after using these chatbots. The analytics provide valuable insights.",
      avatar: "https://via.placeholder.com/80?text=Catherine",
    },
    // You can add more testimonials as needed.
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-xl border border-gray-200 hover:scale-105 transition-transform duration-200 flex flex-col"
            >
              {/* Gold Stars Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              
              {/* Testimonial Quote */}
              <p className="italic text-gray-700 text-lg mb-6">"{testimonial.quote}"</p>
              
              {/* Client Details */}
              <div className="flex items-center mt-auto">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 