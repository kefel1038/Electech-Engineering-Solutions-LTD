"use client";

import React from "react";
import { Users, GraduationCap, Award, Settings } from "lucide-react";

export default function Team() {
  const members = [
    {
      name: "Eng. Lubega Felix Ken",
      role: "Founder & CEO / Chief Substation Engineer",
      qual: "BSc Electrical Engineering (Makerere Univ)",
      exp: "8+ Years in utility grid setups and substation design. Registered ERB (ERB-2024-18) & UIPE Member.",
      specialization: "High Voltage EPC & SCADA loops",
      image: "/img/founder image.png"
    },
    {
      name: "Eng. Namara Brenda",
      role: "Lead Telecommunications Architect",
      qual: "BSc Telecommunications Engineering (KYU)",
      exp: "6+ Years deploying metro-scale optical fiber GPON lines and GSM backhaul systems across East Africa.",
      specialization: "FTTx Fiber Backbone & RF Systems",
      image: "/img/solar staff.jpg" // Using an authentic image asset
    },
    {
      name: "Eng. Mukasa David",
      role: "Lead Automation & SCADA Engineer",
      qual: "MSc Control Systems & Robotics (University of Nairobi)",
      exp: "5+ Years programming Schneider/Siemens PLCs and RTU telemetry synchronization networks.",
      specialization: "Industrial Modbus/TCP & SCADA",
      image: "/img/solar staff working 2.jpg" // Using an authentic image asset
    },
    {
      name: "Dr. Okello Moses",
      role: "Director of R&D & Embedded Systems",
      qual: "PhD AI & Cyber-Physical Systems (Makerere University)",
      exp: "7+ Years in custom electronics prototyping, PCB fabrication, and wireless sensor grids.",
      specialization: "IoT Telemetry STM32 & AI load forecasting",
      image: "/img/founder image.png" // Re-using authentic photo or fallback
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-1.5 rounded-full text-xs font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-widest">
            <Users className="w-3.5 h-3.5" />
            Engineering Team
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Technical Experts
          </h2>
          <p className="text-sm md:text-base text-slate-650 dark:text-zinc-400 font-sans max-w-2xl mx-auto">
            We are staffed by certified professional engineers, network architects, SCADA developers, and embedded hardware researchers.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, idx) => (
            <div 
              key={idx} 
              className="group border border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-950/60 p-4 tech-corner hover:border-blue-600 dark:hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Frame */}
                <div className="relative h-56 w-full overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter contrast-[1.02] hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Info */}
                <div className="space-y-1 mb-3">
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white font-mono uppercase tracking-wider">
                    {member.name}
                  </h4>
                  <div className="text-[10px] font-mono text-blue-600 dark:text-cyan-400 font-bold uppercase tracking-widest leading-normal">
                    {member.role}
                  </div>
                </div>

                {/* Details box */}
                <div className="space-y-2 border-t border-slate-150 dark:border-slate-800/80 pt-3 text-[11px] leading-relaxed text-slate-600 dark:text-zinc-400">
                  <div className="flex gap-1.5 items-start">
                    <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 mt-0.5 shrink-0" />
                    <span>{member.qual}</span>
                  </div>
                  <div className="flex gap-1.5 items-start font-sans">
                    <Award className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 mt-0.5 shrink-0" />
                    <span>{member.exp}</span>
                  </div>
                  <div className="flex gap-1.5 items-start font-sans">
                    <Settings className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 mt-0.5 shrink-0" />
                    <span>
                      <strong className="font-mono text-[9px] uppercase block text-slate-800 dark:text-white">Specialization</strong>
                      {member.specialization}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 mt-2 font-mono text-[8px] text-slate-400 dark:text-zinc-550 border-t border-slate-150 dark:border-slate-800/60 uppercase tracking-widest flex justify-between">
                <span>Certified Engineer</span>
                <span>Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
