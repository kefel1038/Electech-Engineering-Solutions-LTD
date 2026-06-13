"use client";

import React from "react";
import RfqIntakePipeline from "./RfqIntakePipeline";
import { Phone, Mail, Clock, MapPin, MessageSquare, ChevronUp } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-mono text-xs text-orange-600 dark:text-orange-500 uppercase tracking-widest block">
              [ Connect With Us ]
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Get in Touch
            </h2>
            <p className="text-sm md:text-base text-slate-655 dark:text-zinc-400 font-sans max-w-2xl mx-auto">
              Ready to initiate infrastructure designs? Reach out for turnkey EPC engineering, feasibility evaluations, or SCADA sync loops.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Info and Map Column (Left) */}
            <div className="lg:col-span-5 border border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-950/60 p-8 tech-corner flex flex-col justify-between space-y-8 shadow-sm">
              
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-600 dark:text-orange-500" />
                  Kampala Office
                </h3>
                
                {/* Google Map Iframe with Dark Mode support */}
                <div className="w-full h-48 border border-slate-200 dark:border-slate-850 overflow-hidden mb-6 relative bg-slate-100 dark:bg-slate-900">
                  <iframe
                    title="Electech Corporate Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7594957691866!2d32.5350993!3d-0.315053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb1b51860d5b%3A0xc3f8e6b1897e974e!2sMugema%20Rd%2C%20Kampala!5e0!3m2!1sen!2sug!4v1718228000000!5m2!1sen!2sug"
                    className="w-full h-full border-none filter contrast-105 dark:invert dark:grayscale dark:contrast-125 transition-all duration-300"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-sans mb-6">
                  Address: Mugema Road, Kampala, Uganda. Call or visit to schedule a formal project briefing with our Engineering Board.
                </p>

                <div className="space-y-4 text-xs font-mono text-slate-700 dark:text-zinc-350">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-orange-600 dark:text-orange-500 shrink-0 shadow-sm">
                      <Phone className="w-4 h-4" />
                    </div>
                    <a href="tel:+256787531336" className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors">
                      +256 787 531 336
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-orange-600 dark:text-orange-500 shrink-0 shadow-sm">
                      <Mail className="w-4 h-4" />
                    </div>
                    <a href="mailto:info@electech.co.ug" className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors">
                      info@electech.co.ug
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-orange-600 dark:text-orange-500 shrink-0 shadow-sm">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span>Mon – Fri: 8:00 AM – 5:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2.5 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                <a
                  href="https://wa.me/256787531336"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] border border-slate-200 dark:border-slate-800 hover:border-green-500 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-zinc-350 font-mono text-[10px] font-bold py-3.5 uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-green-500" /> WhatsApp Chat
                </a>
              </div>
            </div>

            {/* RFQ Intake Pipeline Column (Right) */}
            <div className="lg:col-span-7 w-full flex justify-center lg:justify-end">
              <RfqIntakePipeline />
            </div>

          </div>
        </div>
      </section>

      {/* Floating Action Button - Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-40 w-10 h-10 bg-slate-200 dark:bg-slate-850 hover:bg-orange-600 dark:hover:bg-orange-500 text-slate-600 hover:text-white dark:text-zinc-400 dark:hover:text-slate-950 flex items-center justify-center border border-slate-250 dark:border-slate-800 transition-all duration-300 shadow-md cursor-pointer"
        title="Back to Top"
      >
        <ChevronUp className="w-5 h-5 animate-pulse" />
      </button>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 flex text-center font-mono select-none">
        <a href="tel:+256787531336" className="flex-1 py-3 text-[9px] uppercase tracking-wider text-slate-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-500 border-r border-slate-200 dark:border-slate-900 transition-colors">
          Call Office
        </a>
        <a href="https://wa.me/256787531336" target="_blank" rel="noopener noreferrer" className="flex-1 py-3 text-[9px] uppercase tracking-wider text-slate-600 dark:text-zinc-400 hover:text-green-500 border-r border-slate-200 dark:border-slate-900 transition-colors">
          WhatsApp
        </a>
        <a href="#contact" className="flex-1 py-3 text-[9px] uppercase tracking-wider bg-orange-600 text-white dark:bg-orange-500 dark:text-slate-950 font-bold">
          Submit RFQ
        </a>
      </div>
    </>
  );
}
