import React from 'react';
import Section from './ui/Section';

const ValueProp: React.FC = () => {
  const integrations = ["Gmail", "Airtable", "WhatsApp", "Google Sheets", "Notion", "Slack"];

  return (
    <Section className="py-24 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
        Agentic. Reliable. <span className="text-gray-500">Accurate.</span>
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
        AI-native automations that combine speed, reliability, and flexibility — acting as the glue between your business tools.
      </p>

      {/* Integration Strip */}
      <div className="relative max-w-4xl mx-auto">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
        
        <div className="flex flex-wrap justify-center gap-3 opacity-80">
          {integrations.map((tool, idx) => (
            <div 
              key={idx} 
              className="flex items-center space-x-2 bg-[#111315] border border-[#2A2A2A] px-5 py-2.5 rounded-full hover:border-[#3B82F6]/50 hover:bg-[#1A1D21] transition-all cursor-default"
            >
               {/* Placeholder Icon */}
               <div className="w-4 h-4 rounded-full bg-gradient-to-br from-gray-600 to-gray-800"></div>
               <span className="text-sm font-medium text-gray-300">{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ValueProp;