"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <section id="contact" className="py-24 bg-industrial-900 border-b border-industrial-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="font-mono text-xs text-hazard-orange uppercase tracking-widest block">
              [ Contact Us ]
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Get in Touch</h2>
            <p className="text-sm md:text-base text-industrial-400 font-sans leading-relaxed">
              Ready to start your project? Reach out for a consultation or site survey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Info */}
            <div className="lg:col-span-5 border border-industrial-800 bg-industrial-950 p-8 tech-corner">
              <div className="flex items-center justify-center h-32 mb-6 text-hazard-orange text-5xl">
                <i className="fas fa-map-marked-alt" />
              </div>
              <h3 className="text-xl font-bold text-white font-sans text-center mb-4">
                Mugema Road, Kampala, Uganda
              </h3>
              <p className="text-sm text-industrial-400 font-sans text-center mb-8 leading-relaxed">
                Visit our offices or call us to schedule a meeting with our engineering team.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-industrial-400 font-mono">
                  <div className="w-10 h-10 border border-industrial-800 bg-industrial-900 flex items-center justify-center text-hazard-orange shrink-0">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <a href="tel:+256787531336" className="hover:text-hazard-orange transition-colors">+256 787 531 336</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-industrial-400 font-mono">
                  <div className="w-10 h-10 border border-industrial-800 bg-industrial-900 flex items-center justify-center text-hazard-orange shrink-0">
                    <i className="fas fa-envelope" />
                  </div>
                  <a href="mailto:info@electech.co.ug" className="hover:text-hazard-orange transition-colors">info@electech.co.ug</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-industrial-400 font-mono">
                  <div className="w-10 h-10 border border-industrial-800 bg-industrial-900 flex items-center justify-center text-hazard-orange shrink-0">
                    <i className="fas fa-clock" />
                  </div>
                  <span>Mon – Fri: 8:00 AM – 5:00 PM</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 border border-industrial-800 bg-industrial-950 p-8 tech-corner">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center space-y-4">
                  <div className="w-16 h-16 border-2 border-hazard-orange flex items-center justify-center">
                    <i className="fas fa-check text-2xl text-hazard-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                  <p className="text-sm text-industrial-400">Our team will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Your Name" required
                      className="w-full bg-industrial-900 border border-industrial-800 text-white text-sm px-4 py-3 focus:outline-none focus:border-hazard-orange transition-colors placeholder:text-industrial-400 font-mono" />
                    <input type="text" placeholder="Company Name"
                      className="w-full bg-industrial-900 border border-industrial-800 text-white text-sm px-4 py-3 focus:outline-none focus:border-hazard-orange transition-colors placeholder:text-industrial-400 font-mono" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="tel" placeholder="Phone Number" required
                      className="w-full bg-industrial-900 border border-industrial-800 text-white text-sm px-4 py-3 focus:outline-none focus:border-hazard-orange transition-colors placeholder:text-industrial-400 font-mono" />
                    <input type="email" placeholder="Email Address" required
                      className="w-full bg-industrial-900 border border-industrial-800 text-white text-sm px-4 py-3 focus:outline-none focus:border-hazard-orange transition-colors placeholder:text-industrial-400 font-mono" />
                  </div>
                  <select
                    className="w-full bg-industrial-900 border border-industrial-800 text-industrial-400 text-sm px-4 py-3 focus:outline-none focus:border-hazard-orange transition-colors font-mono"
                  >
                    <option value="">Service Needed</option>
                    <option>Electrical Engineering</option>
                    <option>Renewable Energy / Solar</option>
                    <option>Telecommunications</option>
                    <option>ICT Infrastructure</option>
                    <option>Industrial Automation</option>
                    <option>Electronics & Embedded</option>
                    <option>Research & Innovation</option>
                    <option>Other</option>
                  </select>
                  <textarea rows={4} placeholder="Tell us about your project..." required
                    className="w-full bg-industrial-900 border border-industrial-800 text-white text-sm px-4 py-3 focus:outline-none focus:border-hazard-orange transition-colors placeholder:text-industrial-400 font-mono" />
                  <div className="flex flex-wrap gap-3 pt-2">
                    <button type="submit"
                      className="bg-hazard-orange hover:bg-orange-600 text-industrial-950 font-mono font-bold text-xs px-6 py-4 tracking-wider uppercase transition-all duration-200 flex items-center gap-2">
                      <i className="fas fa-paper-plane" /> Request Consultation
                    </button>
                    <a href="https://wa.me/256787531336" target="_blank" rel="noopener noreferrer"
                      className="border border-industrial-800 hover:border-hazard-orange bg-industrial-900/50 hover:bg-industrial-900 text-white font-mono text-xs px-6 py-4 tracking-wider uppercase transition-all duration-200 flex items-center gap-2">
                      <i className="fab fa-whatsapp text-hazard-orange" /> Get a Quote
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/256787531336"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-hazard-orange hover:bg-orange-600 text-white flex items-center justify-center shadow-lg shadow-hazard-orange/30 hover:scale-110 transition-all duration-300"
        title="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl" />
      </a>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 w-10 h-10 bg-industrial-800 hover:bg-hazard-orange text-industrial-400 hover:text-white flex items-center justify-center border border-industrial-800 transition-all duration-300"
        title="Back to Top"
      >
        <i className="fas fa-chevron-up text-sm" />
      </button>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-industrial-950 border-t border-industrial-800 flex">
        <a href="tel:+256787531336" className="flex-1 flex flex-col items-center py-2 text-[9px] font-mono uppercase tracking-wider text-industrial-400 hover:text-hazard-orange transition-colors gap-0.5">
          <i className="fas fa-phone-alt text-sm" /><span>Call</span>
        </a>
        <a href="https://wa.me/256787531336" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center py-2 text-[9px] font-mono uppercase tracking-wider text-industrial-400 hover:text-hazard-orange transition-colors gap-0.5">
          <i className="fab fa-whatsapp text-sm" /><span>WhatsApp</span>
        </a>
        <a href="mailto:info@electech.co.ug" className="flex-1 flex flex-col items-center py-2 text-[9px] font-mono uppercase tracking-wider text-industrial-400 hover:text-hazard-orange transition-colors gap-0.5">
          <i className="fas fa-envelope text-sm" /><span>Email</span>
        </a>
        <a href="#contact" className="flex-1 flex flex-col items-center py-2 text-[9px] font-mono uppercase tracking-wider bg-hazard-orange text-industrial-950 font-bold gap-0.5">
          <i className="fas fa-file-invoice text-sm" /><span>Quote</span>
        </a>
      </div>
    </>
  );
}
