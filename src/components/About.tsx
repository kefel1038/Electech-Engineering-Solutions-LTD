"use client";

import { useState } from "react";
import { Building2, Milestone, ShieldCheck, Cpu, UserCheck, CheckCircle } from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState<"profile" | "mission" | "leadership">("profile");

  const coreValues = [
    { title: "Innovation", desc: "Developing bleeding-edge automation, AI, and IoT solutions for infrastructural resilience." },
    { title: "Integrity", desc: "Upholding absolute engineering rigor, safety specifications, and transparent B2B alignment." },
    { title: "Excellence", desc: "Adhering to international standards (IEEE, IEC, ISO) on all construction and grid installations." },
    { title: "Sustainability", desc: "Powering ecological longevity via commercial solar arrays and clean network operations." }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Corporate Image Overlays */}
          <div className="lg:col-span-5 relative group">
            <div className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-3 tech-corner shadow-xl">
              <div className="relative h-[480px] w-full overflow-hidden border border-slate-250 dark:border-slate-800">
                <img
                  src="/img/founder image.png"
                  alt="Eng Lubega Felix Ken - Founder & CEO"
                  className="w-full h-full object-cover filter contrast-105 hover:contrast-100 transition-all duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Visual Label */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 dark:bg-zinc-950/95 border border-slate-800 p-4 font-mono text-[11px] leading-relaxed text-zinc-350">
                  <div className="text-zinc-50 font-bold uppercase tracking-wider">Eng. Lubega Felix Ken</div>
                  <div className="text-orange-500 dark:text-orange-500 font-bold uppercase tracking-widest text-[9px]">Founder & Lead Systems Architect</div>
                  <div className="text-zinc-500 text-[9px] mt-1">Reg: ERB-2024-18 // Corporate Member: UIPE</div>
                </div>
              </div>
            </div>
            
            {/* EST Badge */}
            <div className="absolute -top-3 -right-3 bg-orange-600 text-white dark:bg-orange-500 dark:text-slate-950 px-4 py-2 font-mono font-bold text-xs shadow-lg uppercase tracking-wider">
              EST. 2018
            </div>
          </div>

          {/* Right Side: Tabbed Interface Content */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6">
            
            <div className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3 py-1.5 text-[10px] font-mono text-orange-600 dark:text-orange-500 uppercase tracking-widest">
              <Building2 className="w-3.5 h-3.5" />
              Corporate Identity & Credentials
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Engineering Innovation.<br />
              Powering International Possibilities.
            </h2>

            {/* Tabs Selector */}
            <div className="flex border-b border-slate-200 dark:border-slate-800 font-mono text-xs overflow-x-auto">
              <button
                onClick={() => setActiveTab("profile")}
                className={`py-3 px-4 border-b-2 font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === "profile"
                    ? "border-orange-600 dark:border-orange-500 text-orange-600 dark:text-orange-500"
                    : "border-transparent text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
                }`}
              >
                Company Profile
              </button>
              <button
                onClick={() => setActiveTab("mission")}
                className={`py-3 px-4 border-b-2 font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === "mission"
                    ? "border-orange-600 dark:border-orange-500 text-orange-600 dark:text-orange-500"
                    : "border-transparent text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
                }`}
              >
                Mission & Values
              </button>
              <button
                onClick={() => setActiveTab("leadership")}
                className={`py-3 px-4 border-b-2 font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === "leadership"
                    ? "border-orange-600 dark:border-orange-500 text-orange-600 dark:text-orange-500"
                    : "border-transparent text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
                }`}
              >
                Leadership Crew
              </button>
            </div>

            {/* TAB CONTENT: PROFILE */}
            {activeTab === "profile" && (
              <div className="space-y-4 animate-fadeIn">
                <p className="text-sm md:text-base text-slate-650 dark:text-zinc-400 leading-relaxed font-sans">
                  Electech Engineering Solutions LTD was established in 2018 by an elite team of technical practitioners with a unified vision: to deploy world-class utility grid infrastructure, telecommunication backbones, and smart automation across Africa.
                </p>
                <p className="text-sm md:text-base text-slate-650 dark:text-zinc-400 leading-relaxed font-sans">
                  We blend rigorous international standards (IEEE, IEC) with deep local regulatory acumen (ERA, ERB alignment) to execute complex engineering procurement and construction (EPC) projects.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 text-xs font-mono">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-zinc-350 border-b border-slate-200 dark:border-slate-800 pb-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 dark:text-orange-500 shrink-0" />
                    <span>ERA Licensed (Class A)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-zinc-350 border-b border-slate-200 dark:border-slate-800 pb-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 dark:text-orange-500 shrink-0" />
                    <span>UIPE Certified Personnel</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-zinc-350 pb-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 dark:text-orange-500 shrink-0" />
                    <span>ISO 9001 Alignment</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-zinc-350 pb-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 dark:text-orange-500 shrink-0" />
                    <span>Sub-saharan Operations</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: MISSION & VALUES */}
            {activeTab === "mission" && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 rounded-none">
                    <div className="text-[10px] font-mono text-orange-600 dark:text-orange-500 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                      <Milestone className="w-4 h-4" /> OUR MISSION
                    </div>
                    <p className="text-xs text-slate-650 dark:text-zinc-400 leading-relaxed font-sans">
                      To deliver resilient electrical, telecommunications, and automated tech systems that power sustainable economic growth across the East African Community and international markets.
                    </p>
                  </div>
                  
                  <div className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 rounded-none">
                    <div className="text-[10px] font-mono text-orange-600 dark:text-orange-500 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                      <Cpu className="w-4 h-4" /> OUR VISION
                    </div>
                    <p className="text-xs text-slate-650 dark:text-zinc-400 leading-relaxed font-sans">
                      To lead as Africa&apos;s primary integrator of smart cyber-physical systems, utility energy distributions, and AI-enabled infrastructure solutions.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider">// CORE VALUES</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {coreValues.map((value, i) => (
                      <div key={i} className="flex gap-2.5 items-start">
                        <CheckCircle className="w-4 h-4 text-orange-600 dark:text-orange-500 mt-0.5 shrink-0" />
                        <div>
                          <strong className="text-slate-900 dark:text-white block font-mono">{value.title}</strong>
                          <span className="text-slate-500 dark:text-zinc-400">{value.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: LEADERSHIP */}
            {activeTab === "leadership" && (
              <div className="space-y-4 animate-fadeIn">
                <p className="text-sm md:text-base text-slate-650 dark:text-zinc-400 leading-relaxed font-sans">
                  Our technical direction is headed by our founder, **Eng. Lubega Felix Ken**, along with a corporate board of directors representing electrical practitioners, communications network architects, and financial analysts.
                </p>
                
                <div className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-5 rounded-none font-mono text-xs space-y-2 text-slate-700 dark:text-zinc-300">
                  <div className="text-slate-900 dark:text-white font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-orange-600 dark:text-orange-500" />
                    Technical Leadership Profile
                  </div>
                  <div>&gt; Chief Executive: Eng. Lubega Felix Ken</div>
                  <div>&gt; Licensure: Registered Engineer, Engineers Registration Board (ERB)</div>
                  <div>&gt; Academics: BSc Electrical Engineering (Makerere Univ)</div>
                  <div>&gt; Affiliation: Corporate Member, Uganda Institution of Professional Engineers (UIPE)</div>
                  <div>&gt; Expertise: Utility substation design, automation, grid SCADA integrations</div>
                </div>
              </div>
            )}

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-500 group transition-colors duration-200"
              >
                Initiate Corporate Consultation Review 
                <span className="group-hover:translate-x-1 transition-transform duration-200 text-sm">→</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
