import React from 'react';
import { motion } from 'motion/react';
import { Shield, Tag, Layers, Trophy, CheckCircle, ArrowRight } from 'lucide-react';

export const ProofOfWork: React.FC = () => {
  return (
    <section id="solutions" className="py-24 md:py-32 bg-gradient-to-b from-white to-blue-50/20 border-t border-gray-100 relative">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="proof-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#3B82F6" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#proof-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Enhanced Section Header */}
        <div className="max-w-4xl mb-16 md:mb-20 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="text-xs font-mono font-bold tracking-widest text-royal uppercase bg-royal/10 px-3 py-1 rounded-full mb-4 inline-block">
              PROOF OF VALUE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-prussian leading-tight text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6"
          >
            Real Results. <span className="text-royal">Proven Impact.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-denim text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-sans font-normal"
          >
            We operate with complete honesty. Below is a structured blueprint card configured as a
            fully customizable placeholder, ready for your real-world case studies and system outcomes.
          </motion.p>
        </div>

        {/* Enhanced CASE STUDY PLACEHOLDER */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="border-2 border-dashed border-royal/30 p-8 md:p-12 relative bg-gradient-to-br from-blue-50/50 to-indigo-50/30 rounded-2xl"
          >
            {/* Enhanced Developer/Compliance Tag */}
            <div className="absolute -top-4 left-6 bg-white border border-royal/30 px-4 py-2 font-mono text-xs text-royal uppercase tracking-wider font-bold select-none flex items-center gap-2 shadow-lg rounded-lg">
              <Shield size={14} className="text-royal" />
              CASE STUDY BLUEPRINT
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

              {/* Enhanced Left Details column */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap gap-3 mb-8"
                  >
                    <span className="inline-flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 text-sm text-prussian font-sans font-medium rounded-lg shadow-sm">
                      <Tag size={14} className="text-royal" />
                      Industry: [ENTER INDUSTRY TAG]
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 text-sm text-prussian font-sans font-medium rounded-lg shadow-sm">
                      <Layers size={14} className="text-royal" />
                      Tech: [ENTER TECH STACK]
                    </span>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="font-heading font-extrabold text-2xl md:text-3xl text-prussian tracking-tight mb-6"
                  >
                    [Insert Your Case Study Title Here]
                  </motion.h3>

                  <div className="space-y-5 mb-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="bg-white border border-gray-200/60 p-5 rounded-xl shadow-sm"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        </div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-denim">
                          System Challenge
                        </span>
                      </div>
                      <p className="text-sm text-denim leading-relaxed font-sans font-normal">
                        [Insert a brief overview of the operational bottleneck here. For example: "The partner had a manual staff of 4 handling 300+ phone inquiries daily, resulting in a 40% missed call rate during peak hours."]
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="bg-white border border-gray-200/60 p-5 rounded-xl shadow-sm"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                          <CheckCircle size={14} className="text-green-500" />
                        </div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-denim">
                          Engineered Solution
                        </span>
                      </div>
                      <p className="text-sm text-denim leading-relaxed font-sans font-normal">
                        [Explain how your automated voice agents or workflows resolved the challenge. For example: "Designed an automated cloud voice agent that answers, qualifies, and books guests synchronously, integrated directly into their PMS."]
                      </p>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="border-t border-gray-200/60 pt-6"
                >
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-prussian block mb-3">
                    ACTION REQUIRED
                  </span>
                  <p className="text-sm text-denim font-sans leading-relaxed bg-blue-50/50 border border-blue-100 p-4 rounded-lg">
                    To showcase a real case study here, simply edit the props or content of this block in
                    the source code with actual metrics, names, and software stacks.
                  </p>
                </motion.div>
              </div>

              {/* Enhanced Right Outcomes Column */}
              <div className="lg:col-span-5 bg-white/80 border border-gray-200/80 p-6 md:p-8 rounded-2xl flex flex-col justify-between shadow-lg">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-center gap-3 mb-8"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-royal to-blue-600 rounded-lg flex items-center justify-center">
                      <Trophy size={20} className="text-white" />
                    </div>
                    <span className="text-sm font-mono font-bold uppercase tracking-wider text-prussian">
                      Outcome Metrics
                    </span>
                  </motion.div>

                  {/* Enhanced stat-card components */}
                  <div className="space-y-5">

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      whileHover={{ y: -5 }}
                      className="bg-gradient-to-br from-white to-blue-50/50 border border-gray-200 p-5 rounded-xl shadow-sm hover:border-royal/30 hover:shadow-md transition-all duration-300"
                    >
                      <span className="text-xs font-sans text-denim block mb-2 font-semibold uppercase tracking-wider">
                        [Metric 1 Label]
                      </span>
                      <div className="font-heading font-extrabold text-4xl text-prussian tracking-tight mb-1">
                        [00]%
                      </div>
                      <span className="text-xs font-mono text-denim/70 block">
                        E.g., "Reduction in booking latency"
                      </span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      whileHover={{ y: -5 }}
                      className="bg-gradient-to-br from-white to-blue-50/50 border border-gray-200 p-5 rounded-xl shadow-sm hover:border-royal/30 hover:shadow-md transition-all duration-300"
                    >
                      <span className="text-xs font-sans text-denim block mb-2 font-semibold uppercase tracking-wider">
                        [Metric 2 Label]
                      </span>
                      <div className="font-heading font-extrabold text-4xl text-prussian tracking-tight mb-1">
                        $[00],000
                      </div>
                      <span className="text-xs font-mono text-denim/70 block">
                        E.g., "Monthly administrative overhead saved"
                      </span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      whileHover={{ y: -5 }}
                      className="bg-gradient-to-br from-white to-blue-50/50 border border-gray-200 p-5 rounded-xl shadow-sm hover:border-royal/30 hover:shadow-md transition-all duration-300"
                    >
                      <span className="text-xs font-sans text-denim block mb-2 font-semibold uppercase tracking-wider">
                        [Metric 3 Label]
                      </span>
                      <div className="font-heading font-extrabold text-4xl text-royal tracking-tight mb-1">
                        [0].0x
                      </div>
                      <span className="text-xs font-mono text-denim/70 block">
                        E.g., "Operational efficiency multiplier"
                      </span>
                    </motion.div>

                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="mt-8 pt-6 border-t border-gray-100 text-center"
                >
                  <button className="w-full font-heading font-bold text-sm tracking-wider text-royal border border-royal/30 hover:border-royal bg-transparent py-3.5 rounded-lg transition-all duration-300 min-h-[48px] flex items-center justify-center gap-2 select-none opacity-70 cursor-not-allowed">
                    <span>Locked — Edit Source Code</span>
                    <ArrowRight size={16} />
                  </button>
                </motion.div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Additional value proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-royal/10 to-blue-500/10 border border-royal/20 rounded-2xl p-8">
            <h3 className="font-heading font-extrabold text-2xl text-prussian mb-4">
              Ready to See Your Results?
            </h3>
            <p className="text-denim text-lg mb-6">
              Contact us to discuss how we can showcase your success story.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-heading font-bold text-sm tracking-wider text-white bg-gradient-to-r from-royal to-blue-600 hover:from-blue-600 hover:to-blue-700 py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>Get Started</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
