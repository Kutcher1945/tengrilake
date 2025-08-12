'use client';

import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Dr. Sarah Chen',
    company: 'TechVision Labs',
    role: 'Lead Data Scientist',
    content: 'TengriLake AI has revolutionized how we manage our ML experiments and data pipelines. The task tracking is incredibly intuitive.',
    rating: 5
  },
  {
    name: 'Michael Rodriguez',
    company: 'DataStream Inc.',
    role: 'Data Engineering Manager',
    content: 'The best tool for managing complex data workflows. Our team productivity increased by 60% since adopting TengriLake AI.',
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Data Engineering Leaders
          </h2>
          <p className="text-xl text-gray-600">See what industry experts have to say</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl border">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full h-12 w-12 flex items-center justify-center">
                  <span className="text-white font-medium">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}