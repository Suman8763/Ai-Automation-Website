import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlatformPreview from './components/PlatformPreview';
import ValueProp from './components/ValueProp';
import Workflows from './components/Workflows';
import Features from './components/Features';
import Metrics from './components/Metrics';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#3B82F6] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <PlatformPreview />
        <ValueProp />
        <Workflows />
        <Features />
        <Metrics />
        <Benefits />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;