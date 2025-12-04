import React from 'react';
import Section from './ui/Section';
import { MousePointer2, User, Mail, MessageCircle, Database, CheckCircle } from 'lucide-react';

const Workflows: React.FC = () => {
  const nodes = [
    { label: "Trigger", icon: MousePointer2, color: "text-purple-400", bg: "bg-purple-400/10" },
    { label: "Lead Capture", icon: User, color: "text-blue-400", bg: "bg-blue-400/10" },
    { label: "Email Alert", icon: Mail, color: "text-yellow-400", bg: "bg-yellow-400/10" },
    { label: "WhatsApp Reply", icon: MessageCircle, color: "text-green-400", bg: "bg-green-400/10" },
    { label: "CRM Update", icon: Database, color: "text-pink-400", bg: "bg-pink-400/10" },
    { label: "Task Done", icon: CheckCircle, color: "text-gray-300", bg: "bg-gray-400/10" },
  ];

  return (
    <div className="bg-[#050505] border-y border-white/5 overflow-hidden">
      <Section className="py-24">
        <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Visual Workflows</h2>
            <p className="text-gray-400">End-to-end automation, visualized.</p>
        </div>

        {/* Scrollable Diagram Container */}
        <div className="relative w-full overflow-x-auto pb-12 hide-scrollbar">
            <div className="min-w-[1000px] flex items-center justify-between px-4">
                
                {/* Connecting Line Layer */}
                <div className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 bg-[#2A2A2A] -z-10"></div>
                
                {nodes.map((node, idx) => (
                    <div key={idx} className="relative group">
                        {/* Connector logic */}
                        {idx < nodes.length - 1 && (
                            <div className="absolute top-1/2 left-full w-[calc(100%-3rem)] h-[2px] bg-gradient-to-r from-[#2A2A2A] to-[#2A2A2A] group-hover:from-blue-500/50 group-hover:to-blue-900/50 transition-all duration-500"></div>
                        )}
                        
                        <div className="flex flex-col items-center gap-4 bg-[#050505] px-4 py-2 z-10">
                            <div className={`w-16 h-16 rounded-2xl ${node.bg} border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ring-2 ring-transparent group-hover:ring-white/10`}>
                                <node.icon className={`w-6 h-6 ${node.color}`} />
                            </div>
                            <span className="text-sm font-medium text-gray-400 bg-[#111315] px-3 py-1 rounded-full border border-[#2A2A2A]">
                                {node.label}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </Section>
    </div>
  );
};

export default Workflows;