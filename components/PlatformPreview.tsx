import React from 'react';
import { MessageSquare, Inbox, Zap, Share2 } from 'lucide-react';
import Section from './ui/Section';

const PlatformPreview: React.FC = () => {
  return (
    <Section id="product" className="relative pb-32">
       <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
       
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
         <div className="lg:col-span-4 lg:pr-8 mb-12 lg:mb-0">
           <h2 className="text-3xl font-bold text-white mb-4">Centralize Your Operations</h2>
           <p className="text-gray-400 leading-relaxed mb-6">
             See everything in one place. Our platform acts as the command center for your business automation, giving you visibility and control.
           </p>
         </div>

         <div className="lg:col-span-8 relative h-[500px] w-full flex items-center justify-center perspective-[2000px]">
            {/* Card 1: Workflow Diagram (Back) */}
            <div className="absolute top-0 right-0 w-[60%] md:w-[350px] bg-[#111315] rounded-xl border border-[#2A2A2A] p-6 shadow-2xl opacity-60 scale-90 translate-x-12 translate-y-12 z-0">
               <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg"><Share2 className="w-5 h-5 text-blue-400"/></div>
                  <div className="text-sm font-medium text-gray-300">Workflow Engine</div>
               </div>
               <div className="space-y-3">
                  <div className="h-2 w-full bg-white/10 rounded"></div>
                  <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                  <div className="h-24 w-full bg-[#0A0A0A] border border-white/5 rounded-lg mt-4 flex items-center justify-center">
                    <div className="text-xs text-gray-600">Flow Visualizer</div>
                  </div>
               </div>
            </div>

            {/* Card 2: Lead Inbox (Middle) */}
            <div className="absolute top-10 left-10 w-[60%] md:w-[350px] bg-[#111315] rounded-xl border border-[#2A2A2A] p-6 shadow-2xl opacity-80 scale-95 -translate-x-8 z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-green-500/20 rounded-lg"><Inbox className="w-5 h-5 text-green-400"/></div>
                  <div className="text-sm font-medium text-gray-300">Unified Inbox</div>
               </div>
               <div className="space-y-2">
                 {[1,2,3].map(i => (
                    <div key={i} className="flex items-center justify-between p-2 bg-[#0A0A0A] rounded border border-white/5">
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 rounded-full bg-white/10"></div>
                            <div className="w-16 h-2 bg-white/10 rounded"></div>
                        </div>
                        <div className="w-8 h-2 bg-blue-500/20 rounded"></div>
                    </div>
                 ))}
               </div>
            </div>

            {/* Card 3: WhatsApp Automation (Front) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] md:w-[400px] bg-[#111315] rounded-xl border border-[#2A2A2A] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 hover:scale-[1.02] transition-transform duration-500">
               <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                     <div className="p-2 bg-[#3B82F6]/20 rounded-lg"><MessageSquare className="w-5 h-5 text-[#3B82F6]"/></div>
                     <div>
                       <div className="text-sm font-medium text-white">WhatsApp Agent</div>
                       <div className="text-xs text-green-400">● Active</div>
                     </div>
                  </div>
                  <div className="h-6 w-12 bg-white/5 rounded-full border border-white/10"></div>
               </div>
               
               <div className="space-y-4">
                  {/* Chat Message Left */}
                  <div className="flex justify-start">
                     <div className="bg-[#1A1D21] p-3 rounded-2xl rounded-tl-none border border-white/5 text-xs text-gray-300 max-w-[80%]">
                        Hello! I'd like to book a demo for next Tuesday.
                     </div>
                  </div>
                  
                  {/* Chat Message Right (AI) */}
                  <div className="flex justify-end">
                     <div className="bg-[#3B82F6] p-3 rounded-2xl rounded-tr-none text-xs text-white shadow-lg shadow-blue-900/20 max-w-[80%]">
                        I can help with that. I have a slot at 2:00 PM. Should I confirm?
                     </div>
                  </div>
                  
                   {/* Action Buttons */}
                   <div className="flex gap-2 pt-2">
                      <div className="h-8 flex-1 bg-white/5 rounded border border-white/10 flex items-center justify-center text-xs text-gray-400">Confirm</div>
                      <div className="h-8 flex-1 bg-white/5 rounded border border-white/10 flex items-center justify-center text-xs text-gray-400">Reschedule</div>
                   </div>
               </div>
            </div>
         </div>
       </div>
    </Section>
  );
};

export default PlatformPreview;