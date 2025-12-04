import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-black/70 backdrop-blur-xl border-white/10 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-sm opacity-50 rounded-lg"></div>
              <div className="relative bg-black border border-white/20 p-1.5 rounded-lg">
                <Zap className="h-5 w-5 text-[#3B82F6]" fill="currentColor" />
              </div>
            </div>
            <span className="font-bold text-xl tracking-tight text-white">Automation Studio</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#product" className="text-sm text-gray-400 hover:text-white transition-colors">Product</a>
            <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</a>
            <a href="#contact">
              <Button variant="secondary" size="sm" className="!rounded-full border-white/20">
                Book Demo
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-white/10 absolute w-full z-50">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
            <a href="#product" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Product</a>
            <a href="#features" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Features</a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Pricing</a>
            <div className="pt-2">
              <a href="#contact" onClick={() => setIsOpen(false)}>
                <Button fullWidth variant="primary">Book Demo</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;