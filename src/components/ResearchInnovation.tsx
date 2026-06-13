"use client";

import React from "react";
import { Cpu, Lightbulb, LineChart, ShieldCheck, Activity, Terminal } from "lucide-react";

export default function ResearchInnovation() {
  const initiatives = [
    {
      icon: Cpu,
      title: "AI-Powered Grid Systems",
      desc: "Developing machine-learning neural networks to predict commercial facility load shedding and optimize substation transformer load distributions."
    },
    {
      icon: ShieldCheck,
      title: "Secure IoT telemetry",
      desc: "Designing secure smart meters running custom TLS-secured firmware on STM32 microchips, utilizing LoRaWAN for low-power long-range transmission."
    },
    {
      icon: Lightbulb,
      title: "Smart City Integrations",
      desc: "Prototyping intelligent municipal traffic sensors, automated water line diagnostic valves, and centralized SCADA platforms."
    }
  ];

  const roadmap = [
    {
      year: "2026",
      phase: "Phase 1: Pilot Telemetry",
      title: "IoT Smart Meter Deployment",
      desc: "Deploying 1,500 smart energy meters in commercial zones (Kampala and Jinja) to pilot real-time load diagnostics."
    },
    {
      year: "2027",
      phase: "Phase 2: Predictive Control",
      title: "AI Grid Balancer Beta",
      desc: "Testing localized neural grid load forecasting sync loops inside primary 33kV substations."
    },
    {
      year: "2028",
      phase: "Phase 3: Decentralized Sync",
      title: "Micro-Grid Energy Pools",
      desc: "Launching peer-to-peer decentralized solar hybrid microgrid synchronization protocols to support remote mining communities."
    },
    {
      year: "2029",
      phase: "Phase 4: Autonomous SCADA",
      title: "Smart City Orchestrator",
      desc: "Interlinking smart municipal water systems and power grids under a unified AI-driven remote SCADA controller."
    }
  ];

  return (
    <section id="research" className="py-24 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-1.5 rounded-full text-xs font-mono text-orange-600 dark:text-orange-500 uppercase tracking-widest">
            <LineChart className="w-3.5 h-3.5" />
            R&D Innovation Hub
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Research & Innovation Center
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-zinc-400 font-sans max-w-2xl mx-auto">
            We operate a dedicated technology prototyping lab where our engineers develop smart systems to address regional energy, connectivity, and telemetry challenges.
          </p>
        </div>

        {/* Core R&D Focus areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((init, idx) => {
            const Icon = init.icon;
            return (
              <div 
                key={idx} 
                className="border border-slate-250 dark:border-slate-850 bg-white dark:bg-slate-950/40 p-8 tech-corner group hover:border-orange-600 dark:hover:border-orange-500 hover:shadow-lg dark:hover:shadow-slate-950/10 transition-all duration-300"
              >
                <div className="w-12 h-12 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-orange-600 dark:text-orange-500 group-hover:scale-105 transition-transform duration-300 shadow-sm mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans mb-3">
                  {init.title}
                </h3>
                
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-sans">
                  {init.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Chronological Roadmap Timeline */}
        <div className="pt-12 border-t border-slate-200 dark:border-slate-800/60">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-2">
            <span className="font-mono text-xs text-orange-600 dark:text-orange-500 uppercase tracking-widest block">
              [ Future Outlook ]
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Electech Innovation Roadmap
            </h3>
            <p className="text-xs text-slate-500 dark:text-zinc-450 max-w-lg mx-auto">
              Our 4-year development plan to deploy smart technologies and decentralized utility systems across the East African Community.
            </p>
          </div>

          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 max-w-4xl mx-auto pl-6 sm:pl-10 space-y-12">
            
            {roadmap.map((item, index) => (
              <div key={index} className="relative group">
                
                {/* Visual Bullet dot */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full border bg-white dark:bg-slate-950 flex items-center justify-center border-slate-200 dark:border-slate-800 group-hover:border-orange-600 dark:group-hover:border-orange-500 group-hover:scale-110 transition-all duration-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-600 dark:bg-orange-500 animate-pulse" />
                </div>

                {/* Content Panel */}
                <div className="border border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-950/40 p-6 tech-corner group-hover:border-orange-600 dark:group-hover:border-orange-500 transition-all duration-300">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2 font-mono text-xs">
                    <span className="text-lg font-extrabold text-orange-600 dark:text-orange-500">{item.year}</span>
                    <span className="text-slate-400 dark:text-zinc-500 uppercase tracking-widest text-[10px]">{item.phase}</span>
                  </div>
                  
                  <h4 className="text-base font-bold text-slate-900 dark:text-white font-sans mb-2">
                    {item.title}
                  </h4>
                  
                  <p className="text-xs text-slate-655 dark:text-zinc-400 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
