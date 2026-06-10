"use client";

import { useState } from "react";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "electrical", label: "Electrical Engineering" },
  { id: "solar", label: "Solar & Renewable Energy" },
  { id: "telecom", label: "Telecommunications" },
  { id: "ict", label: "ICT Infrastructure" },
  { id: "automation", label: "Industrial Automation" },
  { id: "innovation", label: "Research & Innovation" },
  { id: "smart", label: "Smart Technologies" },
];

const projects = [
  {
    category: "solar",
    title: "Solar Hybrid Power System",
    location: "Wakiso District",
    industry: "Education Sector",
    badge: "Solar & Renewable",
    challenge: "Frequent power outages affecting learning and administrative operations.",
    solution: "Designed and installed a hybrid solar system with lithium battery backup and remote monitoring.",
    stack: ["Solar PV", "Lithium Batteries", "Hybrid Inverters", "Remote Monitoring"],
    specs: { id: "WAK-SLR-001", arch: "PV+HYBRID", protocol: "MODBUS RTU", capacity: "150 KWp" },
    results: [
      { num: "65", suffix: "%", label: "Cost Reduction" },
      { num: "24", suffix: "/7", label: "Power Available" },
      { num: "100", suffix: "%", label: "Grid Independence" },
    ],
    gradient: "from-[#0F2027] via-[#203A43] to-[#2C5364]",
  },
  {
    category: "electrical",
    title: "Industrial Plant Power Distribution",
    location: "Kampala Industrial Park",
    industry: "Manufacturing",
    badge: "Electrical Engineering",
    challenge: "Inadequate power infrastructure for a 50,000 sqm manufacturing facility expansion.",
    solution: "Complete electrical design, switchgear installation, and power distribution with backup systems.",
    stack: ["Switchgear", "Transformers", "SCADA", "UPS Systems"],
    specs: { id: "KMP-IND-002", arch: "11kV RING MAIN", protocol: "IEC 61850", capacity: "8.5 MVA" },
    results: [
      { num: "40", suffix: "%", label: "Efficiency Gain" },
      { num: "99.9", suffix: "%", label: "Uptime" },
      { num: "3", suffix: "x", label: "Capacity Increase" },
    ],
    gradient: "from-[#1A1A2E] via-[#16213E] to-[#0F3460]",
  },
  {
    category: "telecom",
    title: "Metro Fiber & Last-Mile Network",
    location: "Greater Kampala",
    industry: "ISP / Telecom",
    badge: "Telecommunications",
    challenge: "Limited broadband connectivity in underserved urban and peri-urban areas.",
    solution: "Deployed 80km of fiber optic backbone with last-mile wireless extensions and tower installations.",
    stack: ["Fiber Optic", "MikroTik", "Wireless P2P", "GPON"],
    specs: { id: "KMP-FIB-001", arch: "GPON+WIRELESS", protocol: "MPLS-TP", capacity: "N/A" },
    results: [
      { num: "80", suffix: "km", label: "Fiber Deployed" },
      { num: "50", suffix: "+", label: "Towers Installed" },
      { num: "10000", suffix: "+", label: "Users Connected" },
    ],
    gradient: "from-[#141E30] via-[#243B55] to-[#1A1A2E]",
  },
  {
    category: "automation",
    title: "Water Treatment SCADA System",
    location: "Jinja, Uganda",
    industry: "Water & Sanitation",
    badge: "Industrial Automation",
    challenge: "Manual operations causing inefficiencies in a municipal water treatment facility.",
    solution: "SCADA system design and PLC integration for automated monitoring and control of water treatment processes.",
    stack: ["SCADA", "PLC", "HMI", "VFD Drives"],
    specs: { id: "JIN-SCA-001", arch: "SCADA RTU", protocol: "IEC 60870", capacity: "1.8 MW" },
    results: [
      { num: "60", suffix: "%", label: "Efficiency Gain" },
      { num: "24", suffix: "/7", label: "Automated Ops" },
      { num: "500K", suffix: "+", label: "People Served" },
    ],
    gradient: "from-[#0D1117] via-[#161B22] to-[#1F2937]",
  },
  {
    category: "ict",
    title: "Regional Data Center Deployment",
    location: "Kampala, Uganda",
    industry: "Financial Services",
    badge: "ICT Infrastructure",
    challenge: "Need for secure, reliable data hosting with disaster recovery capabilities.",
    solution: "Designed and deployed a Tier III-equivalent data center with redundant power, cooling, and network infrastructure.",
    stack: ["Cisco", "VMware", "UPS Systems", "Precision Cooling"],
    specs: { id: "KMP-DAT-001", arch: "DUAL FEED + UPS", protocol: "SNMP V3", capacity: "3.2 MW" },
    results: [
      { num: "99.99", suffix: "%", label: "Uptime SLA" },
      { num: "50", suffix: "+", label: "Racks Deployed" },
      { num: "5", suffix: "MW", label: "Power Capacity" },
    ],
    gradient: "from-[#0B192C] via-[#1A2A4A] to-[#0F3460]",
  },
  {
    category: "smart",
    title: "IoT Smart Agriculture Pilot",
    location: "Central Uganda",
    industry: "Agriculture",
    badge: "Smart Technologies",
    challenge: "Farmers lack real-time data on soil conditions, weather, and crop health for optimized yields.",
    solution: "Deployed IoT sensor network with ESP32 nodes, cloud analytics, and mobile dashboard for precision agriculture.",
    stack: ["ESP32", "LoRaWAN", "Cloud Analytics", "Arduino"],
    specs: { id: "UGA-IOT-001", arch: "LoRaWAN MESH", protocol: "MQTT", capacity: "200+ Sensors" },
    results: [
      { num: "30", suffix: "%", label: "Yield Increase" },
      { num: "40", suffix: "%", label: "Water Savings" },
      { num: "200", suffix: "+", label: "Sensors Deployed" },
    ],
    gradient: "from-[#0B0F19] via-[#1F2937] to-[#F59E0B]",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-industrial-950 border-b border-industrial-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="font-mono text-xs text-hazard-orange uppercase tracking-widest block">
            [ Engineering Projects ]
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Transforming Communities Through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-hazard-orange">
              Energy, Technology
            </span>{" "}
            & Innovation
          </h2>
          <p className="text-sm md:text-base text-industrial-400 font-sans leading-relaxed">
            Explore how Electech delivers practical engineering solutions across Uganda and East Africa.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`font-mono text-[10px] tracking-wider uppercase px-3 py-2 transition-all duration-200 ${
                filter === cat.id
                  ? "bg-hazard-orange text-industrial-950 font-bold"
                  : "bg-industrial-900 text-industrial-400 border border-industrial-800 hover:border-hazard-orange/50 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, idx) => (
            <div
              key={idx}
              className="border border-industrial-800 bg-industrial-900/60 tech-corner flex flex-col"
            >
              {/* Image header */}
              <div className={`h-32 bg-gradient-to-br ${p.gradient} relative flex items-center justify-center`}>
                <span className="font-mono text-[10px] bg-industrial-950/80 text-hazard-orange px-3 py-1 border border-industrial-800 uppercase tracking-wider">
                  {p.badge}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-white font-sans mb-1">{p.title}</h3>
                <div className="flex gap-3 text-[10px] font-mono text-industrial-400 mb-4">
                  <span><i className="fas fa-map-marker-alt mr-1 text-hazard-electric" />{p.location}</span>
                  <span><i className="fas fa-industry mr-1 text-hazard-electric" />{p.industry}</span>
                </div>

                <div className="space-y-2 text-xs text-industrial-400 font-sans mb-4 flex-1">
                  <p><strong className="text-white">Challenge:</strong> {p.challenge}</p>
                  <p><strong className="text-white">Solution:</strong> {p.solution}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.stack.map((t, i) => (
                    <span key={i} className="font-mono text-[9px] text-hazard-electric bg-industrial-950 border border-industrial-800/80 px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Specs */}
                <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-industrial-800/40">
                  {Object.entries(p.specs).map(([key, val]) => (
                    <span key={key} className="font-mono text-[9px] bg-industrial-950 border border-industrial-800/60 px-2 py-0.5">
                      <span className="text-industrial-400 uppercase">{key.replace("_", ".")}:</span>{" "}
                      <span className="text-hazard-orange font-semibold">{val}</span>
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="flex gap-4 pt-3 border-t border-industrial-800/40">
                  {p.results.map((r, i) => (
                    <div key={i} className="text-center">
                      <div className="text-sm font-bold text-white font-mono">
                        {r.num}<span className="text-hazard-electric">{r.suffix}</span>
                      </div>
                      <div className="text-[9px] font-mono text-industrial-400 uppercase tracking-wider">{r.label}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-wider text-hazard-orange hover:text-white transition-colors"
                >
                  View Case Study <i className="fas fa-arrow-right text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
