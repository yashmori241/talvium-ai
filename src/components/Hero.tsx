import React from 'react';
import { motion } from 'motion/react';
import { PhoneCall, Play, Sparkles, Volume2, ArrowRight, CheckCircle, Zap, Users } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleCTA = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = servicesSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Mock dialogue sequence for the interactive visual panel (sample interaction)
  const conversationLines = [
    { sender: 'caller', text: "Hi, I'm interested in the 2BHK apartment in Satellite." },
    { sender: 'agent', text: "Hello! I can help with that. When would you like to schedule a viewing?" },
    { sender: 'caller', text: "Tomorrow between 3-5 PM works for me." },
    { sender: 'agent', text: "Perfect! I've booked a viewing for tomorrow at 4 PM. You'll receive a confirmation SMS." }
  ];


  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20 overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle animated grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid-hero" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3B82F6" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-hero)" />
          </svg>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl animate-pulse delay-1000"></div>

        {/* Brand geometric texture */}
        <div
          className="absolute top-1/3 right-[-5%] w-[600px] h-[600px] pointer-events-none opacity-[0.04]"
          aria-hidden="true"
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-600">
            <path d="M 50 12 L 88 82 L 12 82 Z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M 31 82 L 50 44 L 69 82" stroke="currentColor" strokeWidth="1.5" />
            <path d="M 50 44 L 69 44 L 50 82" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

        {/* Left column: Enhanced content with stats and stronger value proposition */}
        <div className="lg:col-span-7 flex flex-col items-start">

          {/* Enhanced headline with stronger value proposition */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-heading font-extrabold tracking-tight text-prussian leading-tight text-[clamp(2.5rem,6vw,4rem)] mb-5 text-left"
          >
            Automate Your <span className="text-royal">Real Estate</span> & <span className="text-royal">Hospitality</span> Operations
          </motion.h1>

          {/* Enhanced supporting sentence with stronger value proposition */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
            className="font-sans font-normal text-denim text-lg md:text-xl leading-relaxed max-w-2xl text-left mb-8"
          >
            We build AI voice agents and automated workflows that handle real calls, qualify actual leads, and free your team to focus on closing deals.
          </motion.p>

          {/* Honest positioning statements */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: 'easeOut' }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 w-full"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 text-royal">
                <Users size={20} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-prussian text-sm mb-1">Founder-Led</h3>
                <p className="text-denim text-xs">Direct access to the person building your system, not a support queue</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 text-royal">
                <Zap size={20} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-prussian text-sm mb-1">Founding Client Pricing</h3>
                <p className="text-denim text-xs">Early partners get direct involvement and better terms than later clients will</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 text-royal">
                <CheckCircle size={20} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-prussian text-sm mb-1">Built in the Open</h3>
                <p className="text-denim text-xs">Every build documented and shown to you in progress, not revealed only at the end</p>
              </div>
            </div>
          </motion.div>

          {/* Enhanced CTA with social proof */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full sm:w-auto mb-10"
          >
            <button
              onClick={handleCTA}
              className="font-heading font-bold text-base tracking-wide text-white bg-royal hover:bg-blue-700 py-4 px-8 rounded-none transition-all duration-300 min-h-[52px] inline-flex items-center justify-center select-none cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Your AI Transformation
            </button>

            <a
              href="#services"
              onClick={handleScrollToServices}
              className="font-heading font-bold text-sm tracking-wider text-denim hover:text-prussian py-2 min-h-[44px] inline-flex items-center justify-center sm:justify-start gap-1 transition-colors"
            >
              See how it works <span className="text-royal">↓</span>
            </a>
          </motion.div>

          {/* Removed fabricated stats - keeping honest positioning */}
        </div>

        {/* Right column: Enhanced visual demo with floating elements */}
        <div className="lg:col-span-5 w-full flex justify-center items-center relative py-4 lg:py-8">
          {/* Floating elements around the demo */}
          <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-royal/10 flex items-center justify-center animate-pulse">
            <Sparkles size={20} className="text-royal" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center animate-pulse delay-500">
            <PhoneCall size={20} className="text-blue-500" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="w-full max-w-[440px] bg-white border border-denim/15 rounded-2xl shadow-xl p-6 flex flex-col gap-4 relative overflow-hidden"
          >
            {/* Enhanced header with gradient */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-royal opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-royal"></span>
                </span>
                <span className="text-[11px] font-mono font-bold text-prussian uppercase tracking-wider">
                  LIVE VOICE AGENT
                </span>
              </div>
              <span className="text-[10px] font-sans font-bold text-royal uppercase tracking-wider bg-royal/10 px-2.5 py-1 rounded-none border border-royal/20 select-none">
                REAL-TIME
              </span>
            </div>

            {/* Enhanced voice panel widget */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-royal/20 p-4 flex items-center justify-between gap-4 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border-2 border-royal flex items-center justify-center text-royal bg-white rounded-full shadow-sm">
                  <Volume2 size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-denim uppercase tracking-wider">ACTIVE CALL</div>
                  <div className="text-sm font-sans font-bold text-prussian">Property Inquiry</div>
                </div>
              </div>

              {/* Enhanced animated audio bars */}
              <div className="flex items-end gap-1.5 h-7">
                <motion.div
                  className="w-1 bg-royal rounded-t"
                  animate={{ height: [8, 24, 12, 20, 8] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                />
                <motion.div
                  className="w-1 bg-blue-600 rounded-t"
                  animate={{ height: [16, 10, 26, 14, 16] }}
                  transition={{ repeat: Infinity, duration: 1.0, ease: 'easeInOut' }}
                />
                <motion.div
                  className="w-1 bg-indigo-500 rounded-t"
                  animate={{ height: [12, 28, 8, 22, 12] }}
                  transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                />
                <motion.div
                  className="w-1 bg-blue-400 rounded-t"
                  animate={{ height: [20, 6, 22, 10, 20] }}
                  transition={{ repeat: Infinity, duration: 1.1, ease: 'easeInOut' }}
                />
                <motion.div
                  className="w-1 bg-royal rounded-t"
                  animate={{ height: [6, 20, 14, 24, 6] }}
                  transition={{ repeat: Infinity, duration: 1.3, ease: 'easeInOut' }}
                />
              </div>
            </div>

            {/* Enhanced conversation bubbles with avatar */}
            <div className="flex flex-col gap-4 my-2 min-h-[220px] justify-center">
              {conversationLines.map((line, index) => {
                const isAgent = line.sender === 'agent';
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isAgent ? 15 : -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.7 }}
                    className={`max-w-[90%] p-4 text-sm leading-relaxed ${
                      isAgent
                        ? 'bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-royal/20 text-prussian self-end rounded-xl relative shadow-sm'
                        : 'bg-gray-100 text-denim self-start rounded-xl'
                    }`}
                  >
                    <div className="font-mono text-[10px] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      {isAgent ? (
                        <>
                          <div className="w-2 h-2 rounded-full bg-royal"></div>
                          <span className="text-royal">AI Assistant</span>
                        </>
                      ) : (
                        <>
                          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                          <span className="text-gray-500">Visitor</span>
                        </>
                      )}
                    </div>
                    <p className="font-sans font-medium">{line.text}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Enhanced bottom info with status indicators */}
            <div className="border-t border-gray-100 pt-3 flex items-center justify-between text-[11px] text-denim font-sans">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                  <span className="font-medium">CRM Sync Active</span>
                </span>
              </div>
              <span className="font-medium">Mumbai Data Center</span>
            </div>

            {/* Floating "Try it now" button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.5 }}
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-royal text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg whitespace-nowrap border-2 border-white"
            >
              Try it now →
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
