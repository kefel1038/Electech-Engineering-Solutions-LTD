"use client";

import React, { useState } from "react";
import { Send, Check, Mail, ShieldAlert, Cpu } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubscribed(true);
    setError("");
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 dark:bg-zinc-950 dark:text-zinc-400 border-t border-slate-800 pt-16 pb-24 lg:pb-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        
        {/* Core directory grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Col 1: Brand overview (Col size 4) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full border border-blue-600 overflow-hidden bg-slate-100 flex items-center justify-center p-1.5 shadow-sm">
                <img
                  src="/img/electech-logo.png"
                  alt="Electech Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-sans font-extrabold tracking-widest text-white text-xs uppercase leading-tight">
                Electech Engineering<br />
                <span className="text-[9px] text-blue-450 tracking-wider">Solutions LTD</span>
              </span>
            </a>
            
            <p className="text-xs leading-relaxed text-slate-400 dark:text-zinc-500 font-sans max-w-sm">
              Electech Engineering Solutions LTD is a certified EPC contractor and technology systems integrator, delivering high-voltage grids, fiber optics, and smart automation across East Africa.
            </p>

            <div className="font-mono text-[9px] text-slate-500 dark:text-zinc-650 uppercase tracking-widest">
              <div>Reg: ERB-2024-18 // ERA Class A</div>
              <div>Kampala, Uganda</div>
            </div>
          </div>

          {/* Col 2: Quick Links (Col size 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase font-mono tracking-widest border-l-2 border-blue-600 pl-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#home" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a></li>
              <li><a href="#industries" className="hover:text-blue-500 transition-colors">Industries</a></li>
              <li><a href="#research" className="hover:text-blue-500 transition-colors">R&D Hub</a></li>
              <li><a href="#careers" className="hover:text-blue-500 transition-colors">Careers</a></li>
              <li><a href="#blog" className="hover:text-blue-500 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Col 3: Services (Col size 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase font-mono tracking-widest border-l-2 border-blue-600 pl-2">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Electrical Grid Substation EPC</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">FTTx Fiber & GSM Networks</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Commercial Solar & BESS Storage</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">SCADA & Industrial PLC Loops</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Hardware Prototyping (IoT/AI)</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Technical Engineering Audits</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter signup (Col size 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase font-mono tracking-widest border-l-2 border-blue-600 pl-2">
              Knowledge Dispatch
            </h4>
            <p className="text-xs leading-relaxed text-slate-400 dark:text-zinc-500 font-sans">
              Subscribe to receive technical bulletins, solar feasibility briefs, and grid telemetry updates.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 text-xs">
              <div className="flex bg-slate-800 dark:bg-zinc-900 border border-slate-700 dark:border-slate-800 p-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="business-lead@domain.com"
                  className="flex-1 bg-transparent px-2.5 py-1.5 focus:outline-none font-mono text-white placeholder:text-zinc-600 w-full"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 flex items-center justify-center cursor-pointer transition-colors shadow-sm"
                  title="Subscribe to Newsletter"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed ? (
                <span className="text-[10px] text-emerald-500 font-mono flex items-center gap-1">
                  <Check className="w-3 h-3" /> Subscription confirmed!
                </span>
              ) : error ? (
                <span className="text-[10px] text-amber-500 font-mono block">
                  {error}
                </span>
              ) : null}
            </form>
          </div>

        </div>

        {/* Legal credentials and copyright footer */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono gap-4">
          
          {/* Left copyright */}
          <div>
            &copy; {currentYear} Electech Engineering Solutions LTD. All rights reserved.
          </div>

          {/* Middle links */}
          <div className="flex gap-4">
            <a href="#contact" className="hover:text-blue-500 transition-colors uppercase tracking-wider">Privacy Policy</a>
            <span className="text-slate-800">|</span>
            <a href="#contact" className="hover:text-blue-500 transition-colors uppercase tracking-wider">Terms & Conditions</a>
          </div>

          {/* Right badge */}
          <div className="flex items-center gap-1 text-[9px] uppercase tracking-widest text-slate-600">
            <Cpu className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
            EAC Systems integrators
          </div>

        </div>

      </div>
    </footer>
  );
}
