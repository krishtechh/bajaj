import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, HelpCircle, ArrowUp, CheckCircle, Linkedin, Twitter, Globe } from 'lucide-react';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
  onSelectCategory?: (categoryId: string) => void;
}

export default function Footer({ onScrollTo, onSelectCategory }: FooterProps) {
  // Local states for Contact inquiry submission
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Newsletter state
  const [newsEmail, setNewsEmail] = useState('');
  const [newsSuccess, setNewsSuccess] = useState(false);

  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API pipeline duration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      // Reset clear success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleNewsSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return;
    setNewsSuccess(true);
    setNewsEmail('');
    setTimeout(() => setNewsSuccess(false), 4000);
  };

  return (
    <footer 
      id="contact" 
      className="bg-slate-900 text-gray-300 relative overflow-hidden pt-24 pb-8"
    >
      {/* Visual top animated gradient divider strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-amber-400 to-brand-navy" />
      
      {/* Faded giant ambient lettering at the bottom of page */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.015] w-full text-center overflow-hidden">
        <span className="font-heading font-black text-[80px] sm:text-[180px] lg:text-[230px] tracking-wider uppercase text-white block leading-none">
          BAJAJ
        </span>
      </div>

      {/* Decorative ambient blobs */}
      <div className="absolute top-1/4 right-[10%] w-72 h-72 bg-brand-orange/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-[5%] w-80 h-80 bg-brand-navy/65 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* UPPER PORTION: INTEGRATED INDUSTRIAL INQUIRY FORM & ADDRESS PANEL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* LEFT COLUMN: CONTACT TELEMETRY & CHANNELS */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <span className="font-heading font-bold text-xs tracking-wider uppercase text-brand-orange mb-3 block">
                GET IN TOUCH
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-6 tracking-tight leading-none">
                Start An Inquiry
              </h2>
              <p className="font-sans font-light text-gray-400 text-base leading-relaxed mb-10">
                Are you looking for custom testing protocols or bulk procurement schedules? Submit your specifications and our regional tech labs will reply with data sheets within 12 business hours.
              </p>

              {/* Direct channels */}
              <div className="space-y-6" id="footer-addresses">
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">Registered Headquarters</h4>
                    <p className="font-sans text-xs text-gray-400 leading-relaxed max-w-sm mt-1">
                      Bajaj House, Plot No. 42, Western Gateway Boulevard, Sector 11, CBD Belapur, Mumbai, Maharashtra - 400614, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">Technical RFQ Desks</h4>
                    <a href="mailto:rfq@bajajinternational.com" className="font-mono text-xs text-brand-orange hover:underline block mt-1">
                      rfq@bajajinternational.com
                    </a>
                    <a href="mailto:alliances@bajajinternational.com" className="font-mono text-xs text-gray-400 hover:underline block">
                      alliances@bajajinternational.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">Logistics Assistance Hotline</h4>
                    <p className="font-mono text-xs text-gray-300 block mt-1">
                      +91 (22) 5576-8900
                    </p>
                    <p className="font-sans text-[11px] text-gray-500">Mon - Sat • 9 am to 6 pm IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro social lines */}
            <div className="flex items-center space-x-4 pt-10 border-t border-white/5 mt-10 lg:mt-0">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-brand-orange hover:border-brand-orange hover:text-white flex items-center justify-center transition-colors text-gray-400"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-brand-orange hover:border-brand-orange hover:text-white flex items-center justify-center transition-colors text-gray-400"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-brand-orange hover:border-brand-orange hover:text-white flex items-center justify-center transition-colors text-gray-400"
                aria-label="Corporate Website"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: HIGH-CONTRAST INQUIRY RFQ FORM */}
          {/* <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[2rem] bg-white/[0.02] border border-white/15 backdrop-blur-md relative overflow-hidden" id="rfq-form-holder">
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="py-12 text-center flex flex-col items-center justify-center"
                    key="success"
                  >
                    <CheckCircle className="w-16 h-16 text-brand-orange mb-4 animate-bounce" />
                    <h3 className="font-heading font-extrabold text-2xl text-white mb-2">Specifications Received</h3>
                    <p className="font-sans font-light text-gray-400 max-w-sm leading-relaxed mb-6">
                      Thank you. Your industrial inquiry parameter set has been forwarded directly to our regional chemistry and dispatch registries.
                    </p>
                    <span className="text-xs font-mono text-brand-orange uppercase bg-brand-orange/10 px-3 py-1 rounded border border-brand-orange/20">
                      TICKET ID: BJI-INF-2026
                    </span>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 text-xs font-mono text-gray-500 hover:text-white underline"
                    >
                      Send another specification schedule
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleInquirySubmit}
                    className="space-y-6 text-left"
                    key="form"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label className="font-heading font-bold text-xs text-gray-400 uppercase tracking-wider mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Shri. Rajesh Sharma"
                          className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-orange text-white text-sm outline-none transition-colors"
                          id="input-name"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-heading font-bold text-xs text-gray-400 uppercase tracking-wider mb-2">Corporate Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="r.sharma@apexprint.com"
                          className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-orange text-white text-sm outline-none transition-colors"
                          id="input-email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label className="font-heading font-bold text-xs text-gray-400 uppercase tracking-wider mb-2">Primary Phone *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+91 98765 43210"
                          className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-orange text-white text-sm outline-none transition-colors"
                          id="input-phone"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-heading font-bold text-xs text-gray-400 uppercase tracking-wider mb-2">Company / Enterprise *</label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          placeholder="Apex Printing & Laminates Ltd"
                          className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-orange text-white text-sm outline-none transition-colors"
                          id="input-company"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="font-heading font-bold text-xs text-gray-400 uppercase tracking-wider mb-2">Required Chemical Spec/Message *</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Please describe film thickness (BOPP 12mic matte), adhesive compound required, application, and estimated metric monthly consumption."
                        className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-orange text-white text-sm outline-none transition-colors resize-none"
                        id="input-message"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2 py-4 rounded-xl bg-brand-orange hover:bg-brand-orange/95 text-white font-sans font-extrabold text-sm tracking-widest uppercase transition-colors duration-300 disabled:opacity-50 cursor-pointer"
                      id="submit-inquiry"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          <span>Routing Specs...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4.5 h-4.5" />
                          <span>Submit Industrial Parameters</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div> */}

        </div>

        {/* MID PORTION: SUTEL LINKS COUMMS & NEWSLETTER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/5 pt-16 mb-16 text-left">
          
          {/* Faded intro brand card */}
          <div className="md:col-span-4 flex flex-col justify-start items-start">
            <img 
              src="/images/logo.png" 
              alt="Bajaj International Logo" 
              className="h-10 w-auto object-contain mb-4 brightness-0 invert opacity-90" 
              referrerPolicy="no-referrer"
            />
            <p className="font-sans font-light text-xs text-gray-500 leading-relaxed max-w-sm">
              Securing national lamination, bulk polymer, and adhesive supply infrastructures since 2011. Certified partner of ISO, GMP, and Eco-safe polymer initiatives.
            </p>
          </div>

          {/* Quick link sets */}
          <div className="md:col-span-2 flex flex-col space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white">Organization</h4>
            <button onClick={() => onScrollTo('about')} className="text-gray-500 hover:text-brand-orange font-sans text-xs transition-colors cursor-pointer text-left">About Vision</button>
            <button onClick={() => onScrollTo('leadership')} className="text-gray-500 hover:text-brand-orange font-sans text-xs transition-colors cursor-pointer text-left">The Board</button>
            <button onClick={() => onScrollTo('gallery')} className="text-gray-500 hover:text-brand-orange font-sans text-xs transition-colors cursor-pointer text-left">Internal Ops</button>
          </div>

          <div className="md:col-span-2 flex flex-col space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white">Solutions catalog</h4>
            <button onClick={() => { onSelectCategory?.('lamination'); window.scrollTo({ top: 0, behavior: 'instant' }); }} className="text-gray-500 hover:text-brand-orange font-sans text-xs transition-colors cursor-pointer text-left">Lamination Films</button>
            <button onClick={() => { onSelectCategory?.('adhesives'); window.scrollTo({ top: 0, behavior: 'instant' }); }} className="text-gray-500 hover:text-brand-orange font-sans text-xs transition-colors cursor-pointer text-left">Water-Based Adhesives</button>
            <button onClick={() => { onSelectCategory?.('hotmelt'); window.scrollTo({ top: 0, behavior: 'instant' }); }} className="text-gray-500 hover:text-brand-orange font-sans text-xs transition-colors cursor-pointer text-left">Hot Melt Solutions</button>
            <button onClick={() => { onSelectCategory?.('industrial-ink'); window.scrollTo({ top: 0, behavior: 'instant' }); }} className="text-gray-500 hover:text-brand-orange font-sans text-xs transition-colors cursor-pointer text-left">Industrial Inks</button>
          </div>

          {/* Newsletter subscription panel */}
          <div className="md:col-span-4 flex flex-col text-left">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white mb-3">Industrial dispatch news</h4>
            <p className="font-sans font-light text-xs text-gray-500 leading-relaxed mb-4">
              Receive notifications regarding newly commissioned polymers, adhesive chemical batches, and global shipping index estimates.
            </p>
            
            {newsSuccess ? (
              <span className="text-xs font-mono text-brand-orange bg-brand-orange/5 px-2 py-1 rounded inline-block self-start border border-brand-orange/20">
                Email registered successfully!
              </span>
            ) : (
              <form onSubmit={handleNewsSubmit} className="flex space-x-2">
                <input
                  type="email"
                  required
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  placeholder="name@enterprise.com"
                  className="px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-brand-orange text-white text-xs outline-none transition-colors flex-1"
                  id="newsletter-email"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-brand-navy hover:bg-brand-orange text-white flex items-center justify-center border border-white/5 cursor-pointer text-xs"
                  aria-label="Subscribe to newsletter"
                  id="submit-newsletter"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-gray-600">
            © 2026 Bajaj International. All Rights Reserved. Designed for premium national distribution networks with ISO 9001 compliance markers.
          </p>

          {/* Scoll to Top of Page button */}
          <button
            onClick={() => onScrollTo('hero')}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-brand-orange text-gray-400 hover:text-white flex items-center justify-center transition-all cursor-pointer group"
            id="scroll-to-top"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-4.5 h-4.5 group-hover:duration-300 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
