import React from 'react';
import { Zap, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
             <div className="bg-white/5 border border-white/10 p-1.5 rounded-lg">
                <Zap className="h-5 w-5 text-[#3B82F6]" fill="currentColor" />
             </div>
            <span className="font-bold text-xl tracking-tight text-white">Automation Studio</span>
          </div>
          
          <div className="flex space-x-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#features" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8">
            <div className="text-center md:text-left text-xs text-gray-600 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Automation Studio. All rights reserved.
            </div>
            
            <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-white transition-colors"><Twitter className="h-4 w-4" /></a>
                <a href="#" className="text-gray-600 hover:text-white transition-colors"><Github className="h-4 w-4" /></a>
                <a href="#" className="text-gray-600 hover:text-white transition-colors"><Linkedin className="h-4 w-4" /></a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;