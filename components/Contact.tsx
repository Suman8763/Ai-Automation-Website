import React, { useState } from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your request! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', businessType: '', requirements: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Section id="contact" className="py-32">
      <div className="max-w-3xl mx-auto bg-[#111315] rounded-3xl p-1 px-8 md:px-12 py-12 border border-[#2A2A2A] relative overflow-hidden">
        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="text-center mb-10 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-2">Start Automating Today</h2>
          <p className="text-gray-400">Tell us what you need, and we'll build the system.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">Name</label>
                <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] text-white focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-none transition-all placeholder-gray-600"
                placeholder="John Doe"
                />
            </div>
            <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">Email</label>
                <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] text-white focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-none transition-all placeholder-gray-600"
                placeholder="john@company.com"
                />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] text-white focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-none transition-all placeholder-gray-600"
                placeholder="+1 234 567 890"
              />
            </div>
             <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">Business Type</label>
                <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] text-white focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-none transition-all"
                >
                <option value="" className="bg-[#111315]">Select your industry</option>
                <option value="retail" className="bg-[#111315]">Retail / E-commerce</option>
                <option value="agency" className="bg-[#111315]">Agency</option>
                <option value="realestate" className="bg-[#111315]">Real Estate</option>
                <option value="saas" className="bg-[#111315]">SaaS</option>
                <option value="other" className="bg-[#111315]">Other</option>
                </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">What do you want to automate?</label>
            <textarea
              name="requirements"
              rows={4}
              value={formData.requirements}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] text-white focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-none transition-all placeholder-gray-600"
              placeholder="Describe your workflow..."
            ></textarea>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button type="submit" variant="primary" className="flex-1">
                Submit Request
              </Button>
              <a href="https://wa.me/" target="_blank" rel="noreferrer" className="flex-1">
                <Button type="button" variant="secondary" fullWidth className="bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 border-[#25D366]/20">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat on WhatsApp
                </Button>
              </a>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Contact;