"use client";

import React from "react";
import { Zap, Wifi, Sun, Cpu, Binary, LayoutList, ArrowUpRight } from "lucide-react";

export default function Services() {
  const serviceCards = [
    {
      icon: Zap,
      title: "Electrical Engineering",
      tagline: "Utility & Grid Infrastructure",
      items: [
        "High/Medium voltage substation setup",
        "Industrial grid distribution design",
        "HVAC & building electrical systems",
        "Power quality analysis & stabilization"
      ],
      colorClass: "border-orange-600/20 group-hover:border-orange-600 text-orange-600 dark:text-orange-400"
    },
    {
      icon: Wifi,
      title: "Telecommunications",
      tagline: "Connectivity & Backhaul Transmission",
      items: [
        "FTTx fiber deployment (GPON/Active)",
        "GSM tower & wireless link installations",
        "Structured corporate cabling systems",
        "ICT data center architectures"
      ],
      colorClass: "border-orange-500/20 group-hover:border-orange-500 text-orange-500 dark:text-orange-500"
    },
    {
      icon: Sun,
      title: "Renewable Energy",
      tagline: "Commercial & Industrial Solar Solutions",
      items: [
        "On-grid & hybrid solar installations",
        "BESS battery storage integrations",
        "Corporate facility energy auditing",
        "Backup UPS & stabilizer systems"
      ],
      colorClass: "border-emerald-500/20 group-hover:border-emerald-500 text-emerald-500 dark:text-emerald-400"
    },
    {
      icon: Cpu,
      title: "Industrial Automation",
      tagline: "SCADA & Operational Control Systems",
      items: [
        "PLC/HMI controller programming",
        "RTU telemetry & remote sensor loops",
        "Industrial process controls audits",
        "Custom instrument integration"
      ],
      colorClass: "border-indigo-600/20 group-hover:border-indigo-500 text-indigo-600 dark:text-indigo-400"
    },
    {
      icon: Binary,
      title: "Research & Development",
      tagline: "IoT, Embedded Systems & AI Integration",
      items: [
        "Custom firmware & PCB prototyping",
        "Wireless telemetry grids (LoRa/NB-IoT)",
        "AI predictive load analytics engines",
        "Cyber-physical systems testing"
      ],
      colorClass: "border-purple-600/20 group-hover:border-purple-500 text-purple-600 dark:text-purple-400"
    },
    {
      icon: LayoutList,
      title: "Technical Consultancy",
      tagline: "Engineering Design & Audits",
      items: [
        "Feasibility modeling & site surveys",
        "Drafting single-line diagrams (.dwg)",
        "Turnkey project management (PMO)",
        "Regulatory compliance audits (ERA/ERB)"
      ],
      colorClass: "border-pink-600/20 group-hover:border-pink-500 text-pink-600 dark:text-pink-400"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-4 py-1.5 rounded-full text-xs font-mono text-orange-600 dark:text-orange-500 uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '10s' }} />
            Operational Divisions
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering Capabilities
          </h2>
          <p className="text-sm md:text-base text-slate-550 dark:text-zinc-400 font-sans max-w-2xl mx-auto">
            From hardware prototyping to high-voltage grid integrations, we engineer industrial infrastructures conforming to international quality codes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group border bg-slate-50/50 dark:bg-slate-900/20 p-8 tech-corner hover:bg-white dark:hover:bg-slate-900/40 hover:shadow-xl dark:hover:shadow-slate-950/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon and Link arrow */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 border bg-white dark:bg-slate-900 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300 ${service.colorClass}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <a href="#contact" className="text-slate-300 dark:text-slate-800 group-hover:text-orange-500 dark:group-hover:text-orange-500 transition-colors" title="Request consultation">
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Title and Tagline */}
                  <div className="space-y-1 mb-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[10px] font-mono text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Service Items List */}
                  <ul className="space-y-2 border-t border-slate-200 dark:border-slate-800/80 pt-4">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-xs text-slate-600 dark:text-zinc-400 items-start">
                        <span className="text-orange-600 dark:text-orange-500 mt-1 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card footer details */}
                <div className="pt-6 font-mono text-[9px] text-slate-400 dark:text-zinc-500 flex justify-between">
                  <span>DIV // 0{index + 1}</span>
                  <span className="uppercase tracking-widest text-[8px] border border-slate-200 dark:border-slate-800 px-1.5 py-0.5">IEC/IEEE Standards</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
