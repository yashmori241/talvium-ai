import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { ProofOfWork } from './components/ProofOfWork';
import { Values } from './components/Values';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-prussian selection:bg-royal/20 selection:text-prussian flex flex-col">
      {/* Fixed Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section - Enhanced with modern design */}
        <Hero />

        {/* Services Section - Core offerings with improved visuals */}
        <Services />

        {/* Process Section - Enhanced step-by-step approach */}
        <Process />

        {/* Proof of Work Section - Case studies and results */}
        <ProofOfWork />

        {/* Values Section - Company principles and culture */}
        <Values />
      </main>

      {/* Footer with contact form and company info */}
      <Footer />
    </div>
  );
}
