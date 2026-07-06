import React from 'react';
import { motion } from 'motion/react';
import { Search, Palette, Rocket, BarChart3 } from 'lucide-react';

interface ProcessStep {
  icon: React.ReactNode;
  num: string;
  title: string;
  description: string;
  deliverable: string;
}

export const Process: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      icon: <Search className="w-6 h-6 text-royal" />,
      num: '01',
      title: 'Discover',
      description: 'We audit your current operations, isolate manual workflow bottlenecks, and map out the exact ROI potential of AI voice and lead automation integrations.',
      deliverable: 'Operational Assessment & Initial Tech Proposal'
    },
    {
      icon: <Palette className="w-6 h-6 text-royal" />,
      num: '02',
      title: 'Design',
      description: 'We architect complete conversational flows, database integrations, and multi-agent systems matching your properties or booking software precisely.',
      deliverable: 'Technical System Architecture Design Document'
    },
    {
      icon: <Rocket className="w-6 h-6 text-royal" />,
      num: '03',
      title: 'Implement',
      description: 'Our engineers build, test, and host the customized voice agents and autonomous workflows, securing the setup through standard cloud infrastructure.',
      deliverable: 'Functional Deployment & API Integrations'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-royal" />,
      num: '04',
      title: 'Optimize',
      description: 'We continuously train the speech models and streamline API actions based on live production logs, ensuring near-perfect completion rates.',
      deliverable: 'Continuous Training Logs & Bottleneck Audits'
    }
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-gradient-to-b from-white to-blue-50/20 border-t border-gray-100 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="process-grid-enhanced" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3B82F6" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#process-grid-enhanced)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Enhanced Section Header */}
        <div className="max-w-4xl mb-20 md:mb-28 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="text-xs font-mono font-bold tracking-widest text-royal uppercase bg-royal/10 px-3 py-1 rounded-full mb-4 inline-block">
              OUR APPROACH
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-prussian leading-tight text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6"
          >
            Precision-Engineered <span className="text-royal">AI Solutions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-denim text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-sans font-normal"
          >
            No trial-and-error setups. We adhere to a structured, four-phase engineering framework
            designed to deliver high-availability, fully reliable AI systems.
          </motion.p>
        </div>

        {/* Enhanced Process Flow with timeline visualization */}
        <div className="relative">
          {/* Enhanced progress rail with gradient */}
          <div className="hidden lg:block absolute top-[4rem] left-[10%] right-[10%] h-1 bg-gradient-to-r from-royal/20 via-royal to-royal/20 z-0 rounded-full" />

          {/* Progress nodes for mobile */}
          <div className="lg:hidden flex justify-between mb-12 mx-8">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-royal border-4 border-white shadow"></div>
                {num < 4 && <div className="w-16 h-1 bg-royal/20 mt-2"></div>}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -10 }}
                className="border border-gray-200 p-8 flex flex-col justify-between hover:border-royal hover:shadow-xl transition-all duration-300 relative bg-white rounded-xl"
              >
                {/* Enhanced step indicator */}
                <div className="absolute -top-5 left-8 w-10 h-10 bg-royal border-4 border-white rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="font-heading font-bold text-white text-sm">
                    {step.num.replace('0', '')}
                  </span>
                </div>

                <div>
                  {/* Enhanced icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-14 h-14 bg-royal/10 rounded-xl flex items-center justify-center mb-6"
                  >
                    {step.icon}
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="font-heading font-bold text-xl text-prussian mb-4"
                  >
                    {step.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-denim text-sm leading-relaxed mb-6 font-sans font-normal"
                  >
                    {step.description}
                  </motion.p>
                </div>

                {/* Enhanced deliverable section */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="border-t border-gray-100 pt-5 mt-auto"
                >
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-denim block mb-2">
                    PHASE DELIVERABLE
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-royal/10 to-blue-500/10 border border-royal/20 text-xs font-sans font-semibold text-royal tracking-wide rounded-lg">
                    {step.deliverable}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional value proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-24 bg-gradient-to-r from-royal to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="font-heading font-extrabold text-2xl md:text-3xl mb-4">
            Results Delivered in Weeks, Not Months
          </h3>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-6">
            Our streamlined process ensures you see tangible improvements to your operations in record time.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="font-heading font-extrabold text-3xl text-white">2x</div>
              <div className="text-blue-100 text-sm">Faster Deployment</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-extrabold text-3xl text-white">98%</div>
              <div className="text-blue-100 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-extrabold text-3xl text-white">70%</div>
              <div className="text-blue-100 text-sm">Cost Reduction</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
