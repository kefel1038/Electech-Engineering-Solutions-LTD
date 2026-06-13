"use client";

import { useState } from "react";
import { FolderGit2, Calendar, Target, Settings, ChevronRight, Check } from "lucide-react";

interface ProjectItem {
  title: string;
  category: "Electrical" | "Telecom" | "Solar" | "SCADA" | "Research";
  image: string;
  industry: string;
  scope: string;
  tech: string[];
  result: string;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    title: "33kV Utility Substation Construction",
    category: "Electrical",
    image: "/img/substation.jpg",
    industry: "Energy Utilities",
    scope: "Turnkey EPC construction, line installation, switchgear integrations, and safety auditing.",
    tech: ["IEC 61850", "Siemens Switchgear", "10MVA Transformer", "ERA Guidelines"],
    result: "Successfully commissioned ahead of schedule, expanding primary grid capacity to serve 15,000+ local facility loads."
  },
  {
    title: "150 kWp Grid-Tied Commercial Solar Roof",
    category: "Solar",
    image: "/img/solar staff.jpg",
    industry: "Agro-Processing & Manufacturing",
    scope: "Structural weight analysis, tier-1 panel placement, commercial net-metering integration.",
    tech: ["Tier-1 Panels", "Huawei Inverters", "BESS Batteries", "Net Metering"],
    result: "Displaced grid operational utility consumption by 62.4% with an estimated payback timeline of 4.1 years."
  },
  {
    title: "Metro Fiber Backbone Expansion",
    category: "Telecom",
    image: "/img/bridge.jpg",
    industry: "Telecommunications Carrier",
    scope: "Aerial and underground FTTx GPON deployment, ducting, testing, and optical audits.",
    tech: ["GPON Fiber", "OTDR Testing", "Fusion Splicing", "Underground Ducting"],
    result: "Extended high-speed internet pathways across 45+ kilometers with average optical power readings within -14 dBm."
  },
  {
    title: "Jinja Water Treatment plant SCADA Overhaul",
    category: "SCADA",
    image: "/img/147398970_176437527612834_7077236171885483964_n.jpg",
    industry: "Municipal Water Utilities",
    scope: "Retrofitting legacy controllers, installing remote RTUs, and deploying primary SCADA monitors.",
    tech: ["Schneider PLC", "Modbus/TCP", "ClearSCADA Panel", "Telemetry Loops"],
    result: "Mitigated municipal line pressure leaks and chemical dosing variances by 40% with continuous live dashboards."
  },
  {
    title: "IoT Smart Electric Meter Prototyping",
    category: "Research",
    image: "/img/472309956_1102018888388022_3791014398111395147_n.jpg",
    industry: "Smart Cities & Grid R&D",
    scope: "Designing custom telemetry PCB, embedded firmware development, and LoRaWAN testing.",
    tech: ["PCB Prototyping", "LoRaWAN Protocol", "STM32 MCU", "AI Load Predictor"],
    result: "Developed functional meter prototypes showing real-time utility telemetry, currently in localized pilot testing."
  },
  {
    title: "Hybrid Off-Grid Power System (100kW + 200kWh Storage)",
    category: "Solar",
    image: "/img/solar staff working 2.jpg",
    industry: "Mining & Heavy Utilities",
    scope: "EPC deployment of off-grid solar and microgrid lithium storage to replace diesel generator packs.",
    tech: ["Hybrid Solar", "LFP Batteries", "Microgrid Controller", "Diesel Sync"],
    result: "Reduced remote generator diesel expenditures by 75% while maintaining 99.9% uptime for mine operations."
  }
];

const categories: { value: "All" | ProjectItem["category"]; label: string }[] = [
  { value: "All", label: "All Projects" },
  { value: "Electrical", label: "Electrical" },
  { value: "Solar", label: "Solar & Renewables" },
  { value: "Telecom", label: "Telecommunications" },
  { value: "SCADA", label: "SCADA & SCADA Automation" },
  { value: "Research", label: "R&D Systems" }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"All" | ProjectItem["category"]>("All");

  const filteredProjects = activeTab === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-1.5 rounded-full text-xs font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5" />
            Corporate Portfolio
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight animate-pulse" style={{ animationDuration: '6s' }}>
            Technical Implementations
          </h2>
          <p className="text-sm md:text-base text-slate-650 dark:text-zinc-400 font-sans max-w-2xl mx-auto">
            Explore our engineering milestones. We serve telecommunications carriers, industrial operators, utility corporations, and municipal agencies.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center border-b border-slate-200 dark:border-slate-800 font-mono text-xs overflow-x-auto gap-2 pb-1.5 scrollbar-thin">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveTab(cat.value)}
              className={`py-3 px-4 border-b-2 font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                activeTab === cat.value
                  ? "border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400"
                  : "border-transparent text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group border border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-950/60 p-4 tech-corner hover:border-blue-600 dark:hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative h-48 w-full overflow-hidden border border-slate-200 dark:border-slate-800/80 mb-4 bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <span className="absolute top-3 right-3 bg-slate-900/90 dark:bg-zinc-950/90 border border-slate-700 font-mono text-[9px] text-blue-400 dark:text-cyan-400 px-2 py-0.5 uppercase">
                  {project.category}
                </span>
              </div>

              {/* Text content */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white font-sans group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h4>
                  <div className="text-[10px] font-mono text-slate-400 dark:text-zinc-500 uppercase tracking-widest mt-1">
                    Industry: {project.industry}
                  </div>
                </div>

                {/* Technical Specs box */}
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 border border-slate-200 dark:border-slate-900 text-xs leading-relaxed space-y-2.5">
                  <div className="flex gap-1.5 items-start">
                    <Target className="w-4 h-4 text-blue-600 dark:text-cyan-400 mt-0.5 shrink-0" />
                    <span className="text-slate-600 dark:text-zinc-400 font-sans">
                      <strong className="text-slate-800 dark:text-white block font-mono text-[10px] uppercase">Scope of Work</strong>
                      {project.scope}
                    </span>
                  </div>

                  <div className="flex gap-1.5 items-start">
                    <Settings className="w-4 h-4 text-blue-600 dark:text-cyan-400 mt-0.5 shrink-0" />
                    <span className="text-slate-600 dark:text-zinc-400 font-sans">
                      <strong className="text-slate-800 dark:text-white block font-mono text-[10px] uppercase">Technologies Used</strong>
                      <div className="flex flex-wrap gap-1 mt-1 font-mono text-[9px]">
                        {project.tech.map((t, idx) => (
                          <span key={idx} className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-slate-800 px-1.5 py-0.5 text-slate-650 dark:text-zinc-400">
                            {t}
                          </span>
                        ))}
                      </div>
                    </span>
                  </div>

                  <div className="flex gap-1.5 items-start">
                    <Calendar className="w-4 h-4 text-blue-600 dark:text-cyan-400 mt-0.5 shrink-0" />
                    <span className="text-slate-600 dark:text-zinc-400 font-sans">
                      <strong className="text-slate-800 dark:text-white block font-mono text-[10px] uppercase">Results Achieved</strong>
                      {project.result}
                    </span>
                  </div>
                </div>
              </div>

              {/* B2B call to Action */}
              <div className="pt-4 mt-2">
                <a
                  href="#contact"
                  className="w-full border border-slate-200 dark:border-slate-850 hover:bg-slate-100 dark:hover:bg-slate-900/60 text-slate-700 dark:text-zinc-300 font-mono text-[10px] py-2.5 tracking-wider uppercase transition-colors flex items-center justify-center gap-1 group"
                >
                  Request Similar Implementation Spec
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
