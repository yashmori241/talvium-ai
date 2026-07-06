import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const newErrors = { name: '', email: '', phone: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setSubmitError('');

    try {
      // Replace with your actual form submission endpoint
      // Example using a generic endpoint:
      await fetch('https://your-form-handler.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          business: formData.business,
          message: formData.message,
        })
      });

      // Form submitted successfully
      setIsSubmitted(true);
    } catch (err) {
      setSubmitError('Something went wrong — please email talviumofficial@gmail.com directly instead.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-onyx to-blue-950/90 text-white py-24 md:py-32 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="footer-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#3B82F6" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footer-grid)" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-indigo-500/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Enhanced CTA Message & Direct Founder Contacts */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-mono font-bold tracking-widest text-royal uppercase bg-royal/10 px-3 py-1 rounded-full mb-4 inline-block">
                START YOUR TRANSFORMATION
              </span>
              <h2 className="font-heading font-extrabold leading-tight text-3xl md:text-4xl lg:text-5xl tracking-tight text-white mb-6">
                Ready to <span className="text-royal">Automate</span> Your Business?
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl mb-10 font-sans font-normal">
                Book an engineering consultation to audit your current manual bottlenecks and review a
                tailored automation integration roadmap for the US or Indian markets.
              </p>
            </motion.div>

            {/* Enhanced benefits with icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="mt-1 text-royal">
                  <Check size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-sm mb-1">Zero Obligation</h3>
                  <p className="text-gray-400 text-xs">Free technical assessment</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start gap-3"
              >
                <div className="mt-1 text-royal">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-sm mb-1">Fast Turnaround</h3>
                  <p className="text-gray-400 text-xs">7-day feasibility report</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start gap-3"
              >
                <div className="mt-1 text-royal">
                  <Check size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-sm mb-1">Expert Access</h3>
                  <p className="text-gray-400 text-xs">Direct founder consultation</p>
                </div>
              </motion.div>
            </div>

            {/* Enhanced contact information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
            >
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-royal block mb-4">
                DIRECT CONTACT
              </span>
              <p className="text-sm text-gray-300 font-sans mb-6 leading-relaxed">
                Prefer to talk directly? Reach the founder for immediate systems mapping or advisory questions.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-royal">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-gray-400 block mb-1">
                      EMAIL
                    </span>
                    <a
                      href="mailto:talviumofficial@gmail.com"
                      className="text-white hover:text-royal transition-colors text-sm font-medium"
                    >
                      talviumofficial@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-royal">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-gray-400 block mb-1">
                      PHONE
                    </span>
                    <a
                      href="tel:+919825720836"
                      className="text-white hover:text-royal transition-colors text-sm font-medium"
                    >
                      +91 98257 20836
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-royal">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-gray-400 block mb-1">
                      HEADQUARTERS
                    </span>
                    <span className="text-white text-sm font-medium">
                      Mumbai, India
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Enhanced Technical Consultation Form */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border border-white/10 p-8 md:p-10 rounded-2xl backdrop-blur-sm relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-royal/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="border-b border-white/10 pb-4 mb-6">
                    <h3 className="font-heading font-bold text-xl text-white mb-2">
                      Request Consultation
                    </h3>
                    <p className="text-sm text-gray-300">
                      Direct engineering intake. Responses guaranteed within 24 hours.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-semibold uppercase text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal rounded-lg placeholder:text-gray-500 transition-colors min-h-[46px]"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1 font-sans font-medium">{errors.name}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-semibold uppercase text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="john@company.com"
                        className="w-full bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal rounded-lg placeholder:text-gray-500 transition-colors min-h-[46px]"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1 font-sans font-medium">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-mono font-semibold uppercase text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="text"
                        required
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal rounded-lg placeholder:text-gray-500 transition-colors min-h-[46px]"
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-xs mt-1 font-sans font-medium">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="business" className="block text-xs font-mono font-semibold uppercase text-gray-300 mb-2">
                      Business Name
                    </label>
                    <input
                      id="business"
                      type="text"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      placeholder="e.g. Apex Realty"
                      className="w-full bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal rounded-lg placeholder:text-gray-500 transition-colors min-h-[46px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono font-semibold uppercase text-gray-300 mb-2">
                      What are you looking to automate?
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your current manual tasks or bottlenecks..."
                      className="w-full bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal rounded-lg placeholder:text-gray-500 transition-colors resize-none"
                    />
                  </div>

                  {submitError && (
                    <div className="bg-red-950/40 border border-red-500/30 p-4 text-xs text-red-300 font-sans font-medium rounded-lg">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full font-heading font-bold text-base tracking-wide text-white bg-gradient-to-r from-royal to-blue-600 hover:from-blue-600 hover:to-blue-700 py-4 px-6 rounded-lg transition-all duration-300 min-h-[52px] flex items-center justify-center gap-2 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {isLoading ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Consultation</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-12 text-center relative z-10"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-royal to-blue-600 mx-auto flex items-center justify-center rounded-full mb-6">
                    <Check size={36} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-4">
                    Request Confirmed!
                  </h3>
                  <p className="text-gray-300 text-base max-w-md mx-auto leading-relaxed mb-8 font-sans">
                    Thanks for reaching out. We'll get back to you within 24 hours with next steps.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', business: '', message: '' });
                    }}
                    className="font-heading font-bold text-sm tracking-wider text-gray-300 hover:text-white transition-colors uppercase border-b border-gray-600 hover:border-white py-2 min-h-[44px]"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Enhanced Footer legal area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-white/10 mt-24 pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <Logo size={28} className="text-white" />
            <span className="font-heading font-bold text-white text-lg">Talvium AI</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="flex items-center gap-8">
              <a
                href="#privacy"
                onClick={(e) => { e.preventDefault(); }}
                className="text-sm text-gray-400 hover:text-white transition-colors min-h-[44px] flex items-center"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                onClick={(e) => { e.preventDefault(); }}
                className="text-sm text-gray-400 hover:text-white transition-colors min-h-[44px] flex items-center"
              >
                Terms of Service
              </a>
            </div>

            <p className="text-sm text-gray-500 font-sans">
              &copy; {new Date().getFullYear()} Talvium AI. All rights reserved.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
