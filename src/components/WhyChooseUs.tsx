"use client";

import React from "react";
import { Award, CheckSquare, Coins, HelpCircle, HardHat, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: Award,
      title: "Certified Engineering Crew",
      desc: "All design work, single-line diagrams, and network layouts are certified by UIPE professional members and ERB registered engineers."
    },
    {
      icon: ShieldCheck,
      title: "International Standards",
      desc: "We strictly adhere to IEEE, IEC (electrical installations), and local ERA class A regulatory compliance guidelines."
    },
    {
      icon: CheckSquare,
      title: "End-to-End Project Support",
      desc: "We handle the entire project cycle: feasibility studies, design blueprints, installation, testing, and final SCADA control syncing."
    },
    {
      icon: HardHat,
      title: "Rigorous Quality Assurance",
      desc: "Our quality management systems align with ISO 9001 frameworks, backed by strict environmental safety (OHSAS) controls."
    },
    {
      icon: Coins,
      title: "Optimized ROI Structures",
      desc: "Our financial calculators and modeling tools offer maximum price transparency, ensuring competitive pricing and fast payback."
    },
    {
      icon: HelpCircle,
      title: "Technology & Innovation Focused",
      desc: "We integrate custom AI load forecasts and secure IoT sensor endpoints, giving your infrastructure long-term technical durability."
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-4 py-1.5 rounded-full text-xs font-mono text-orange-600 dark:text-orange-500 uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            Core Differentiators
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Partner with Electech
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-zinc-400 font-sans max-w-2xl mx-auto">
            We bridge professional engineering rigor with cutting-edge technology integrations to deliver stable, high-yield utilities across Africa.
          </p>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((p, index) => {
            const Icon = p.icon;
            return (
              <div 
                key={index} 
                className="group border border-slate-200 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-900/20 p-8 tech-corner hover:bg-white dark:hover:bg-slate-900/40 hover:border-orange-600 dark:hover:border-orange-500 hover:shadow-lg dark:hover:shadow-slate-950/10 transition-all duration-300"
              >
                <div className="w-12 h-12 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-orange-600 dark:text-orange-500 group-hover:scale-105 transition-transform duration-300 shadow-sm mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">
                  {p.title}
                </h3>
                
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-sans">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
