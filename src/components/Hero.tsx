"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-industrial-950 bg-blueprint-grid bg-grid-pattern border-b border-industrial-800 flex items-center px-6 lg:px-16 overflow-hidden pt-20"
    >
      {/* Background overlay gradient to make grid subtle */}
      <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-transparent to-transparent pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,107,0,0.06)_0%,transparent_60%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_30%,rgba(14,165,233,0.04)_0%,transparent_50%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16">
        {/* Left Headline Column */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 border border-industrial-800 bg-industrial-900/80 px-4 py-1.5 text-[10px] md:text-xs font-mono text-hazard-electric uppercase tracking-widest tech-corner">
            <span
              className={`w-2.5 h-2.5 rounded-full bg-hazard-electric transition-opacity duration-500 ${
                pulse ? "opacity-100" : "opacity-40"
              }`}
            />
            Infrastructure & Energy Systems Integration
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white font-sans leading-none">
            INNOVATIVE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-industrial-400 to-hazard-orange">
              ENGINEERING SOLUTIONS
            </span>
          </h1>

          <p className="text-base md:text-lg text-industrial-400 max-w-2xl font-sans leading-relaxed">
            Delivering high-capacity power distribution, industrial automation, and scalable solar microgrids across the East African Community. Built for operational resilience.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="bg-hazard-orange hover:bg-orange-600 text-industrial-950 font-mono font-bold text-xs md:text-sm px-6 py-4 tracking-wider uppercase transition-all duration-200 shadow-lg shadow-hazard-orange/15 hover:translate-y-[-1px] text-center"
            >
              Initiate Project Intake
            </a>
            <a
              href="#projects"
              className="border border-industrial-800 hover:border-hazard-orange bg-industrial-900/50 hover:bg-industrial-900 text-white font-mono text-xs md:text-sm px-6 py-4 tracking-wider uppercase transition-all duration-200 text-center"
            >
              Review Technical Specs
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-industrial-800/40 text-xs font-mono uppercase tracking-widest text-industrial-400">
            <div className="flex items-center gap-2">
              <i className="fas fa-shield-alt text-hazard-electric text-sm" />
              <span>ERA Licensed</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-certificate text-hazard-electric text-sm" />
              <span>UIPE Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-hard-hat text-hazard-electric text-sm" />
              <span>ERB Registered</span>
            </div>
          </div>
        </div>

        {/* Right Telemetry Column */}
        <div className="lg:col-span-5 border border-industrial-800 bg-industrial-900/90 p-6 tech-corner font-mono space-y-6 shadow-2xl backdrop-blur-sm self-start lg:self-center">
          <div className="flex justify-between items-center border-b border-industrial-800 pb-3">
            <span className="text-xs text-industrial-50 font-bold tracking-wider">
              SYSTEM_TELEMETRY // LIVE
            </span>
            <span className="text-xs text-hazard-orange font-bold animate-pulse">
              EAC_GRID_v4.1
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between border-b border-industrial-800/40 pb-2">
              <span className="text-industrial-400">SYS_REGULATORY:</span>
              <span className="text-white font-semibold">ERA / ERB COMPLIANT</span>
            </div>
            <div className="flex justify-between border-b border-industrial-800/40 pb-2">
              <span className="text-industrial-400">ACTIVE_PROJECTS:</span>
              <span className="text-white font-semibold">JINJA_WTP / KLA_SOLAR</span>
            </div>
            <div className="flex justify-between border-b border-industrial-800/40 pb-2">
              <span className="text-industrial-400">SUB_STATION_CAP:</span>
              <span className="text-hazard-electric font-semibold">33kV / 11kV SETUP</span>
            </div>
            <div className="flex justify-between pb-1">
              <span className="text-industrial-400">GRID_AVAILABILITY:</span>
              <span className="text-white font-semibold">99.7% OPERATIONAL</span>
            </div>
          </div>

          <div className="space-y-1.5 pt-2">
            <div className="flex justify-between text-[10px] text-industrial-400 uppercase tracking-widest">
              <span>LOAD_CAPACITY // MAIN</span>
              <span>80.4%</span>
            </div>
            <div className="h-2.5 w-full bg-industrial-950 rounded-none border border-industrial-800 overflow-hidden p-[2px]">
              <div className="h-full w-[80.4%] bg-gradient-to-r from-hazard-electric to-hazard-orange animate-pulse" />
            </div>
          </div>

          <div className="text-[10px] text-industrial-400/80 bg-industrial-950/60 p-3 border border-industrial-800/60 space-y-1.5">
            <div>&gt; CONNECTED TO SUPABASE SECURITY SHIELD</div>
            <div>&gt; SCADA CONTROLLER STATUS: ONLINE</div>
            <div>&gt; INTAKE PORTAL v3.2.1 DEPLOYED</div>
          </div>
        </div>
      </div>
    </section>
  );
}
