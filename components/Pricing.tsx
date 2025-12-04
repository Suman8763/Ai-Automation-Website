import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { Check } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: "Starter",
    price: "₹4,999",
    features: [
      "1 Simple Automation",
      "Basic support",
      "Perfect for beginners"
    ]
  },
  {
    name: "Growth",
    price: "₹9,999",
    features: [
      "Lead + WhatsApp automation",
      "Workflow optimization",
      "Priority support"
    ],
    highlight: true
  },
  {
    name: "Scale",
    price: "₹19,999",
    features: [
      "Full workflow automation",
      "Advanced chatbot",
      "Monitoring & updates"
    ]
  }
];

const Pricing: React.FC = () => {
  return (
    <Section id="pricing" className="py-32">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Transparent Pricing</h2>
        <p className="text-gray-400">Choose the plan that fits your business scale.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {tiers.map((tier, index) => (
          <div 
            key={index} 
            className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
              tier.highlight 
                ? 'bg-[#111315] border border-[#3B82F6]/50 shadow-[0_0_30px_rgba(59,130,246,0.15)] transform md:-translate-y-4' 
                : 'bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#3B82F6]/30'
            }`}
          >
            {tier.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                Most Popular
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-white">{tier.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold tracking-tight text-white">{tier.price}</span>
                <span className="ml-1 text-sm font-medium text-gray-500">/project</span>
              </div>
            </div>

            <ul className="mb-8 space-y-4 flex-1">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mr-3">
                    <Check className="h-3 w-3 text-[#3B82F6]" />
                  </div>
                  <span className="text-gray-400 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="w-full">
              <Button 
                variant={tier.highlight ? 'primary' : 'outline'} 
                fullWidth
                className={!tier.highlight ? 'hover:border-[#3B82F6] hover:text-[#3B82F6]' : ''}
              >
                Get Started
              </Button>
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Pricing;