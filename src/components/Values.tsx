import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, ShieldCheck, Eye, Sparkles, Handshake } from 'lucide-react';

interface ValueItem {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  description: string;
  gridClass: string;
}

export const Values: React.FC = () => {
  const valuesData: ValueItem[] = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously prototype on the cutting edge of language and voice models, filtering out hype to build what actually creates bottom-line leverage.',
      gridClass: 'lg:col-span-7 md:col-span-6'
    },
    {
      icon: ShieldCheck,
      title: 'Reliability',
      description: 'Our software is built defensively. We monitor uptime, handle API failures gracefully, and design with redundant fallback mechanisms.',
      gridClass: 'lg:col-span-5 md:col-span-6'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We communicate technical limitations as openly as capabilities. If a process cannot be reliably automated, we tell you immediately.',
      gridClass: 'lg:col-span-4 md:col-span-6'
    },
    {
      icon: Sparkles,
      title: 'Simplicity',
      description: 'We believe clean code and simple integrations are the most robust. We build lightweight interfaces that do exactly what is required and no more.',
      gridClass: 'lg:col-span-4 md:col-span-6'
    },
    {
      icon: Handshake,
      title: 'Long-term Partnership',
      description: 'We do not build-and-forget. We maintain deep, long-term relationships to keep your custom models fully aligned with your business processes.',
      gridClass: 'lg:col-span-4 md:col-span-12'
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-br from-prussian to-blue-950 text-white relative overflow-hidden">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="dark-grid-enhanced" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#3B82F6" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dark-grid-enhanced)" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-indigo-500/5 to-transparent"></div>
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
              OUR FOUNDATION
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold leading-tight text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6"
          >
            The Standards of Our <span className="text-royal">Partnership</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-sans font-normal"
          >
            We operate under a strict code of engineering ethics and execution discipline.
            These five foundational values guide every line of code we write and system we architect.
          </motion.p>
        </div>

        {/* Enhanced Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {valuesData.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -10 }}
                className={`${value.gridClass} border border-white/10 p-6 md:p-8 flex flex-col justify-between hover:border-royal/50 transition-all duration-300 bg-white/[0.03] backdrop-blur-sm rounded-2xl relative overflow-hidden group`}
              >
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-royal/5 rounded-full blur-xl"></div>
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-indigo-500/5 rounded-full blur-xl"></div>

                <div className="relative z-10">
                  {/* Enhanced Icon & Label */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center justify-between mb-6"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-royal/20 to-blue-500/20 border border-white/10 flex items-center justify-center text-royal rounded-xl">
                      <IconComponent size={24} />
                    </div>
                    <span className="font-mono text-xs text-royal tracking-widest uppercase font-bold select-none flex items-center gap-2">
                      <span className="w-2 h-2 bg-royal rounded-full" /> PRINCIPLE 0{index + 1}
                    </span>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="font-heading font-bold text-xl md:text-2xl text-white mb-4"
                  >
                    {value.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-gray-300 text-sm md:text-base leading-relaxed font-sans font-normal"
                  >
                    {value.description}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional value proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto backdrop-blur-sm">
            <h3 className="font-heading font-extrabold text-2xl text-white mb-4">
              Partner with a Team That Shares Your Values
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Our commitment to excellence drives everything we do.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-heading font-bold text-sm tracking-wider text-white bg-gradient-to-r from-royal to-blue-600 hover:from-blue-600 hover:to-blue-700 py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <span>Start Your Journey</span>
              <Sparkles size={16} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
