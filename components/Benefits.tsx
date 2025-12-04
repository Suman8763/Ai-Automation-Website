import React from 'react';
import Section from './ui/Section';
import { Check, Zap, Code, TrendingUp, Clock, DollarSign, Shield } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    { text: "Built in 48 hours", icon: Clock },
    { text: "No-code + AI", icon: Code },
    { text: "Increases conversions", icon: TrendingUp },
    { text: "Reduces manual labor", icon: Shield },
    { text: "Affordable for small businesses", icon: DollarSign },
    { text: "No technical skills needed", icon: Zap },
  ];

  return (
    <Section className="py-24 bg-[#050505]">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
         <div>
            <h2 className="text-3xl font-bold text-white mb-6">Why Automated?</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Traditional agencies are slow and expensive. We use an AI-first approach to build systems that run themselves, 24/7, without the overhead.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center space-x-3">
                   <div className="p-1.5 rounded bg-blue-500/10 border border-blue-500/20">
                     <b.icon className="w-4 h-4 text-blue-400" />
                   </div>
                   <span className="text-gray-200 font-medium">{b.text}</span>
                </div>
              ))}
            </div>
         </div>

         <div className="relative">
            {/* Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-[60px] opacity-40"></div>
            
            <div className="relative bg-[#111315]/80 backdrop-blur-md border border-[#2A2A2A] rounded-2xl p-8 shadow-2xl">
               <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                 <div>
                   <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Total Savings</div>
                   <div className="text-3xl font-bold text-white">$12,450<span className="text-gray-500 text-lg font-normal">/mo</span></div>
                 </div>
                 <div className="h-10 w-10 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/20">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                 </div>
               </div>
               
               <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                     <span className="text-gray-400">Time Saved</span>
                     <span className="text-white">145 hours</span>
                  </div>
                  <div className="w-full bg-[#0A0A0A] rounded-full h-2">
                     <div className="bg-[#3B82F6] h-2 rounded-full w-[85%]"></div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm mt-4">
                     <span className="text-gray-400">Response Rate</span>
                     <span className="text-white">+400%</span>
                  </div>
                   <div className="w-full bg-[#0A0A0A] rounded-full h-2">
                     <div className="bg-green-500 h-2 rounded-full w-[95%]"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </Section>
  );
};

export default Benefits;