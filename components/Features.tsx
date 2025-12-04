import React from 'react';
import { MessageSquare, Bot, Cog, ArrowRight } from 'lucide-react';
import Section from './ui/Section';

const Features: React.FC = () => {
  const cards = [
    {
      title: "Lead Automation",
      desc: "Capture → Respond → Follow-up → Convert.",
      icon: Bot,
      content: (
        <div className="mt-8 relative h-32 w-full border-t border-white/5">
             {/* Abstract visual for lead capture */}
             <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
             <div className="flex justify-around items-end h-full pb-4 px-4 space-x-2">
                 <div className="w-8 h-12 bg-white/5 rounded-t"></div>
                 <div className="w-8 h-16 bg-white/10 rounded-t"></div>
                 <div className="w-8 h-24 bg-blue-500/20 rounded-t border-t border-blue-500/50"></div>
                 <div className="w-8 h-20 bg-white/10 rounded-t"></div>
             </div>
        </div>
      )
    },
    {
      title: "WhatsApp Agents",
      desc: "AI chat assistants for instant replies and FAQs.",
      icon: MessageSquare,
      content: (
        <div className="mt-8 space-y-3 px-2">
            <div className="flex justify-start"><div className="bg-white/5 rounded-lg p-2 px-3 text-xs text-gray-400 w-2/3">Pricing info?</div></div>
            <div className="flex justify-end"><div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-2 px-3 text-xs text-blue-200 w-3/4">Plans start at $49.</div></div>
        </div>
      )
    },
    {
      title: "Workflow Automation",
      desc: "Automate reminders, bookings, tasks, processes.",
      icon: Cog,
      content: (
          <div className="mt-8 flex items-center justify-center space-x-2">
              <div className="h-10 w-10 rounded-full border border-dashed border-white/20 animate-spin-slow"></div>
              <div className="h-1 w-8 bg-white/10"></div>
              <div className="h-8 w-8 bg-[#1A1D21] border border-white/10 rounded flex items-center justify-center">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              </div>
          </div>
      )
    }
  ];

  return (
    <Section id="features" className="py-24">
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
            <div key={idx} className="group relative bg-[#111315] border border-[#2A2A2A] rounded-2xl overflow-hidden hover:border-[#3B82F6]/30 transition-all duration-300">
                <div className="p-8 pb-0 z-10 relative">
                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center border border-white/5 mb-4 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors">
                        <card.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-400">{card.desc}</p>
                </div>
                
                {/* Card visual area */}
                <div className="relative z-0 opacity-70 group-hover:opacity-100 transition-opacity">
                    {card.content}
                </div>

                {/* Hover Glow */}
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 text-[#3B82F6]" />
                </div>
            </div>
        ))}
      </div>
    </Section>
  );
};

export default Features;