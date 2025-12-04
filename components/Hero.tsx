import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import Button from './ui/Button';
import Section from './ui/Section';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <Section className="pt-32 lg:pt-40 pb-20 relative z-10">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none blur-3xl" />
      <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px]" />
      
      <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-sm font-medium text-gray-300 tracking-wide">Automating the Future of Work</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6"
        >
          Automate Your Business <br/> with <span className="text-[#3B82F6] drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">AI Agents</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Simplify operations, automate workflows, and never lose a lead again — with AI-powered automations designed for small businesses and growing teams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a href="#contact">
            <Button variant="primary" size="lg" className="group">
              Request Access 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a href="#features">
            <Button variant="secondary" size="lg" className="group">
              <Play className="mr-2 h-4 w-4 fill-white text-white opacity-80" />
              View Demo
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Tilted UI Preview */}
      <motion.div
        initial={{ opacity: 0, rotateX: 20, y: 40 }}
        animate={{ opacity: 1, rotateX: 10, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{ perspective: '1000px' }}
        className="relative max-w-5xl mx-auto mt-12"
      >
        <div className="relative bg-[#111315] border border-[#2A2A2A] rounded-xl shadow-2xl overflow-hidden transform transition-transform duration-700 hover:rotate-0">
          {/* Mock Browser Header */}
          <div className="h-10 bg-[#0A0A0A] border-b border-[#2A2A2A] flex items-center px-4 space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500/20"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500/20"></div>
            <div className="h-3 w-3 rounded-full bg-green-500/20"></div>
          </div>

          {/* Mock Interface Content */}
          <div className="p-8 grid grid-cols-12 gap-6 bg-grid-pattern-small">
            {/* Sidebar */}
            <div className="col-span-3 space-y-3 hidden md:block">
              <div className="h-8 w-24 bg-white/10 rounded mb-6"></div>
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="flex items-center space-x-3 p-2 rounded hover:bg-white/5">
                  <div className="h-4 w-4 bg-white/10 rounded"></div>
                  <div className="h-3 w-20 bg-white/10 rounded"></div>
                </div>
              ))}
            </div>

            {/* Main Content */}
            <div className="col-span-12 md:col-span-9 space-y-6">
              <div className="flex justify-between items-center mb-8">
                <div className="h-8 w-48 bg-white/10 rounded"></div>
                <div className="h-8 w-8 rounded-full bg-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                 {[1, 2, 3].map(i => (
                   <div key={i} className="bg-[#0A0A0A] border border-white/5 p-4 rounded-lg">
                      <div className="h-4 w-12 bg-blue-500/20 rounded mb-2"></div>
                      <div className="h-6 w-24 bg-white/10 rounded"></div>
                   </div>
                 ))}
              </div>

              <div className="bg-[#0A0A0A] border border-white/5 rounded-lg p-6 h-64 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Abstract Flow Visual inside the UI */}
                    <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 rounded-lg border border-blue-500/30 bg-blue-500/10 flex items-center justify-center">
                           <div className="h-6 w-6 rounded bg-blue-500/50"></div>
                        </div>
                        <div className="w-16 h-[2px] bg-gradient-to-r from-blue-500/50 to-purple-500/50"></div>
                        <div className="h-12 w-12 rounded-lg border border-purple-500/30 bg-purple-500/10 flex items-center justify-center">
                           <div className="h-6 w-6 rounded bg-purple-500/50"></div>
                        </div>
                         <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500/50 to-green-500/50"></div>
                        <div className="h-12 w-12 rounded-lg border border-green-500/30 bg-green-500/10 flex items-center justify-center">
                           <div className="h-6 w-6 rounded bg-green-500/50"></div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Glass Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
        </div>

        {/* Glow Underneath */}
        <div className="absolute -bottom-10 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent opacity-50 blur-sm"></div>
      </motion.div>
    </Section>
  );
};

export default Hero;