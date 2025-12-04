import React from 'react';
import Section from './ui/Section';

const Metrics: React.FC = () => {
  return (
    <Section className="py-24">
      <div className="grid md:grid-cols-3 gap-6 h-full md:h-80">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#111315] to-black border border-[#2A2A2A] p-8 flex flex-col justify-end group">
           <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
           <div className="relative z-10">
             <div className="text-6xl font-bold text-white mb-2 tracking-tighter">90%</div>
             <div className="text-gray-400 font-medium">Reduction in manual follow-ups</div>
           </div>
           <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full group-hover:bg-blue-500/20 transition-all"></div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#111315] to-black border border-[#2A2A2A] p-8 flex flex-col justify-end group">
           <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
           <div className="relative z-10">
             <div className="text-6xl font-bold text-white mb-2 tracking-tighter">100%</div>
             <div className="text-gray-400 font-medium">Automation of repetitive tasks</div>
           </div>
           <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full group-hover:bg-purple-500/20 transition-all"></div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#111315] to-black border border-[#2A2A2A] p-8 flex flex-col justify-end group">
           <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
           <div className="relative z-10">
             <div className="text-6xl font-bold text-white mb-2 tracking-tighter">80%</div>
             <div className="text-gray-400 font-medium">Faster response time</div>
           </div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-green-500/10 blur-[40px] rounded-full group-hover:bg-green-500/20 transition-all"></div>
        </div>
      </div>
    </Section>
  );
};

export default Metrics;