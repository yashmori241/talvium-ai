import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Target, Workflow, Search } from 'lucide-react';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  deliverables: string[];
  gridClass: string;
  isFeatured?: boolean;
}

export const Services: React.FC = () => {
  const servicesData: ServiceItem[] = [
    {
      icon: <Zap className="w-10 h-10 text-royal" />,
      title: 'AI Voice Agents',
      description: 'Fully conversational voice systems deployed on reliable cloud telephony lines, talking to guests and clients naturally while booking sessions directly into your CRM.',
      deliverables: [
        'Natural speech processing in US & Indian accents',
        'Direct synchronization with property management (PMS) & CRM databases',
        '24/7 autonomous booking and inquiry dispatching'
      ],
      gridClass: 'lg:col-span-12 md:col-span-2 p-10 md:p-12 border-2 border-prussian/10 shadow-xl relative overflow-hidden bg-gradient-to-br from-white to-blue-50/30',
      isFeatured: true
    },
    {
      icon: <Target className="w-8 h-8 text-royal" />,
      title: 'AI Lead Management',
      description: 'End-to-end autonomous lead qualification pipelines that ingest inquiries from all major real estate portals and hospitality reservation channels.',
      deliverables: [
        'Multi-channel lead ingestion (email, portal, WhatsApp)',
        'Automated profiling to filter and rank serious buyers or guests',
        'Instant agent assignment and priority dispatching'
      ],
      gridClass: 'lg:col-span-4 md:col-span-1 border border-gray-200 p-8 md:p-10 hover:shadow-lg transition-all duration-300'
    },
    {
      icon: <Workflow className="w-8 h-8 text-royal" />,
      title: 'Agentic Workflow Automation',
      description: 'Intelligent multi-agent systems designed to coordinate complex multi-step background operations, completely replacing manual administrative task loads.',
      deliverables: [
        'Coordinated digital assistants that handle multi-step back-office jobs safely',
        'Custom document ingestion and automated generation',
        'Seamless connections between your new tools and your current software'
      ],
      gridClass: 'lg:col-span-4 md:col-span-1 border border-gray-200 p-8 md:p-10 hover:shadow-lg transition-all duration-300'
    },
    {
      icon: <Search className="w-8 h-8 text-royal" />,
      title: 'AI Consulting & Auditing',
      description: 'Technical assessment of existing operations, custom feasibility blueprints, and clean infrastructure designs to map out high-return automation paths.',
      deliverables: [
        'Detailed reports identifying manual workflow bottlenecks',
        'Custom technical integration blueprints',
        'Full security and privacy checks to protect buyer & guest data'
      ],
      gridClass: 'lg:col-span-4 md:col-span-2 lg:col-span-4 border border-gray-200 p-8 md:p-10 hover:shadow-lg transition-all duration-300'
    }
  ];

  const handleConsultClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
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

  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-white to-blue-50/20 border-t border-gray-100 relative">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="services-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#3B82F6" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Enhanced Section Header */}
        <div className="max-w-4xl mb-16 md:mb-24 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="text-xs font-mono font-bold tracking-widest text-royal uppercase bg-royal/10 px-3 py-1 rounded-full mb-4 inline-block">
              OUR CORE SERVICES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-prussian leading-tight text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6"
          >
            Transform Operations with <span className="text-royal">AI Automation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-denim text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-sans font-normal"
          >
            We architect and build concrete software systems that handle critical business processes,
            directly reducing human error and latency for real estate and hospitality operators.
          </motion.p>
        </div>

        {/* Services Grid with enhanced animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {servicesData.map((service, index) => {
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -5 }}
                className={`${service.gridClass} flex flex-col justify-between transition-all duration-300 group bg-white rounded-xl`}
              >
                <div>
                  {/* Enhanced Flagship accent label */}
                  {service.isFeatured && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="mb-4 inline-flex items-center px-3 py-1 bg-gradient-to-r from-royal/20 to-blue-500/20 text-royal text-[11px] font-mono font-bold uppercase tracking-wider rounded-full"
                    >
                      <Zap size={12} className="mr-1.5" />
                      Flagship Capability
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`w-16 h-16 flex items-center justify-center mb-6 shrink-0 rounded-xl ${
                      service.isFeatured
                        ? 'bg-gradient-to-br from-royal/10 to-blue-500/10 border-2 border-royal/20'
                        : 'bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {service.icon}
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={`font-heading font-bold text-prussian mb-4 ${service.isFeatured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-denim text-sm md:text-base leading-relaxed mb-6 font-sans font-normal"
                  >
                    {service.description}
                  </motion.p>

                  {/* Enhanced deliverables section */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="border-t border-gray-100 pt-6 mb-8"
                  >
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-prussian block mb-3">
                      System Deliverables:
                    </span>
                    <ul className={`grid gap-3 ${service.isFeatured ? 'grid-cols-1 md:grid-cols-3 md:gap-4' : 'grid-cols-1'}`}>
                      {service.deliverables.map((item, dIndex) => (
                        <motion.li
                          key={dIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.6 + dIndex * 0.1 }}
                          className="flex items-start gap-3 text-sm text-denim font-sans"
                        >
                          <span className="text-royal shrink-0 mt-1">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="pt-2"
                >
                  <a
                    href="#contact"
                    onClick={handleConsultClick}
                    className="font-heading font-bold text-xs tracking-wider text-prussian uppercase border-b-2 border-transparent hover:border-royal hover:text-royal py-1.5 transition-all duration-200 inline-flex items-center gap-1.5 min-h-[44px] group/link"
                  >
                    Discuss This Service <ArrowRight size={14} className="group-hover/link:translate-x-1.5 transition-transform duration-200 text-royal" />
                  </a>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced TOOLS/STACK STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="border-t border-gray-100 pt-20 mt-28"
        >
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-royal uppercase bg-royal/10 px-3 py-1 rounded-full inline-block mb-4">
              TRUSTED TECHNOLOGY STACK
            </span>
            <h3 className="font-heading font-extrabold text-prussian text-2xl md:text-3xl mb-4">
              Enterprise-Grade Infrastructure
            </h3>
            <p className="text-denim text-base font-sans max-w-2xl mx-auto">
              We leverage production-grade platforms and modern APIs to build highly resilient, compliant agentic systems.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'ElevenLabs', category: 'Voice AI' },
              { name: 'Vapi', category: 'Telephony' },
              { name: 'n8n', category: 'Automation' },
              { name: 'LangChain', category: 'AI Orchestration' },
              { name: 'Twilio', category: 'Communications' },
              { name: 'Google Cloud', category: 'Infrastructure' },
              { name: 'Supabase', category: 'Database' },
              { name: 'Cal.com', category: 'Scheduling' },
              { name: 'Railway', category: 'Deployment' },
              { name: 'WhatsApp API', category: 'Messaging' },
              { name: 'Google Sheets', category: 'Data' },
              { name: 'Zapier', category: 'Integration' }
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-200 p-5 rounded-xl text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="font-heading font-bold text-sm text-denim group-hover:text-royal transition-colors mb-1">
                  {tool.name}
                </div>
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                  {tool.category}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
