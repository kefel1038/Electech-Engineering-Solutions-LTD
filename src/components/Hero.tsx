"use client";

import React from "react";
import TelemetryHud from "./TelemetryHud";
import { ArrowRight, Settings } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-50 dark:bg-slate-950 bg-grid-pattern flex items-center px-6 lg:px-16 overflow-hidden pt-28 pb-16 transition-colors duration-300"
    >
      {/* Background gradients and photo overlay */}
      <div 
        className="absolute inset-0 opacity-15 dark:opacity-[0.07] bg-cover bg-center pointer-events-none z-0" 
        style={{ backgroundImage: "url('/img/substation.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100/50 via-slate-50 to-slate-50 dark:from-slate-950/20 dark:via-slate-950 dark:to-slate-950 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(37,99,235,0.06)_0%,transparent_60%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_30%,rgba(34,211,238,0.04)_0%,transparent_50%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Headline Column */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Top tag */}
          <div className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 px-4 py-1.5 text-[10px] md:text-xs font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-widest tech-corner shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
            Infrastructure & Technology Systems Integrator
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight font-sans">
            Engineering Tomorrow&apos;s <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 dark:from-blue-400 dark:via-cyan-400 dark:to-emerald-400">
              Infrastructure
            </span> <br />
            Through Innovation
          </h1>

          {/* Subheadline */}
          <p className="text-sm md:text-base text-slate-600 dark:text-zinc-400 max-w-2xl font-sans leading-relaxed">
            Providing Electrical Engineering, Telecommunications, Renewable Energy, Automation, AI Solutions, Industrial Systems, and Technical Consulting Across Africa and Beyond.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-mono font-bold text-xs md:text-sm px-6 py-4 tracking-wider uppercase transition-all duration-200 shadow-md shadow-blue-500/10 flex items-center gap-2"
            >
              Request Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#projects"
              className="border border-slate-200 hover:border-blue-600 dark:border-slate-850 dark:hover:border-cyan-400 bg-white/50 hover:bg-white dark:bg-slate-900/50 dark:hover:bg-slate-900 text-slate-800 dark:text-white font-mono text-xs md:text-sm px-6 py-4 tracking-wider uppercase transition-all duration-200"
            >
              View Projects
            </a>
          </div>

          {/* Affiliation footer */}
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200 dark:border-slate-900 text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-zinc-500">
            <div className="flex items-center gap-1.5">
              <Settings className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>ERA Licensed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Settings className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>UIPE Certified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Settings className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>ERB Registered</span>
            </div>
          </div>
        </div>

        {/* Right Telemetry Column */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <TelemetryHud />
        </div>
      </div>
    </section>
  );
}
