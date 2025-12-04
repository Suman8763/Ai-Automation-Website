import React from 'react';
import { Bot, Layers, Star, MessageSquare } from 'lucide-react';
import Section from './ui/Section';
import { ServiceCardProps } from '../types';

const services: ServiceCardProps[] = [
  {
    title: "Lead Automation",
    description: "Capture leads → Auto WhatsApp reply → Add to CRM → Send email — fully automated.",
    icon: Layers
  },
  {
    title: "WhatsApp Chatbots",
    description: "AI-powered WhatsApp bots that respond instantly, 24/7.",
    icon: MessageSquare
  },
  {
    title: "Business Workflow Automation",
    description: "Invoices, reminders, booking, notifications — streamlined end-to-end.",
    icon: Bot
  },
  {
    title: "Review & Feedback Automation",
    description: "Get more Google reviews with automated feedback flows.",
    icon: Star
  }
];

const Services: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <Section id="services">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Automate</h2>
          <p className="text-gray-600">Streamline your operations with our core automation services designed for modern businesses.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-[#4A8CFF]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Services;