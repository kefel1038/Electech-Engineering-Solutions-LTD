"use client";

import React from "react";
import { 
  Zap, Wifi, Factory, Construction, Landmark, 
  GraduationCap, Activity, Tractor, HardHat, Eye 
} from "lucide-react";

export default function Industries() {
  const sectors = [
    { icon: Zap, name: "Energy & Utilities", desc: "Utility-scale power networks, transformers, and renewable grid sync systems." },
    { icon: Wifi, name: "Telecommunications", desc: "National FTTx GPON fibers, GSM backhauls, and telecom site construction." },
    { icon: Factory, name: "Manufacturing", desc: "Industrial automation, PLC process loops, SCADA, and machinery electrical feeds." },
    { icon: Construction, name: "Construction", desc: "Civil works electrification, smart building architectures, and infrastructure specs." },
    { icon: Landmark, name: "Government Agencies", desc: "Public grids, municipal water utility automation, and regulatory audits." },
    { icon: GraduationCap, name: "Education Systems", desc: "Campus-wide fiber networks, solar backup installations, and engineering R&D labs." },
    { icon: Activity, name: "Healthcare Facilities", desc: "High-integrity UPS installations, hybrid backup solar arrays, and clean room wiring." },
    { icon: Tractor, name: "Agro-Processing", desc: "Solar-powered irrigation telemetry, factory packaging line controls, and milling automations." },
    { icon: HardHat, name: "Mining operations", desc: "Off-grid microgrid setups, heavy machinery substations, and fiber telemetry backbones." },
    { icon: Eye, name: "Smart Cities", desc: "IoT grid monitoring, security protocols, AI-enabled analytics, and intelligent transport networks." }
  ];

  return (
    <section id="industries" className="py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-4 py-1.5 rounded-full text-xs font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-widest">
            <Landmark className="w-3.5 h-3.5" />
            Market Sectors
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-zinc-400 font-sans max-w-2xl mx-auto">
            Our multi-disciplinary team delivers specialized engineering expertise and technology-inspired systems to ten core industrial sectors.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div 
                key={index} 
                className="group border border-slate-250 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-900/20 p-5 tech-corner hover:bg-white dark:hover:bg-slate-900/40 hover:border-blue-600 dark:hover:border-cyan-400 hover:shadow-lg dark:hover:shadow-slate-950/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-blue-600 dark:text-cyan-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-cyan-400 dark:group-hover:text-slate-950 transition-all duration-300 shadow-sm mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white font-mono uppercase tracking-wider mb-2">
                    {sector.name}
                  </h3>
                  
                  <p className="text-[11px] text-slate-650 dark:text-zinc-400 leading-relaxed font-sans">
                    {sector.desc}
                  </p>
                </div>

                <div className="pt-4 font-mono text-[9px] text-slate-400 dark:text-zinc-550 border-t border-slate-200 dark:border-slate-800/80 mt-4 flex justify-between">
                  <span>SECTOR // 0{index + 1}</span>
                  <span className="uppercase text-[8px] text-blue-500 dark:text-cyan-500 font-semibold">Ready</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
