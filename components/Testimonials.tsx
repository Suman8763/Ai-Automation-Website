import React from 'react';
import Section from './ui/Section';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "Our leads now get instant replies. We are closing more customers.",
    author: "Coaching Institute",
    role: "Education"
  },
  {
    quote: "Automation saved us 10 hours per week. Brilliant work.",
    author: "Fitness Trainer",
    role: "Health & Wellness"
  },
  {
    quote: "Very smooth experience. Our business feels more professional now.",
    author: "Small Cafe Owner",
    role: "Hospitality"
  }
];

const Testimonials: React.FC = () => {
  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative">
            <Quote className="h-8 w-8 text-blue-100 absolute top-6 left-6" />
            <p className="text-gray-700 relative z-10 pt-6 mb-6 leading-relaxed italic">
              "{t.quote}"
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-[#4A8CFF] font-bold text-sm">
                {t.author[0]}
              </div>
              <div className="ml-3">
                <div className="font-semibold text-gray-900 text-sm">{t.author}</div>
                <div className="text-xs text-gray-500">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;