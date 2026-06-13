"use client";

import { useEffect, useState, useRef } from "react";
import { Award, ShieldCheck, HeartHandshake, Briefcase, Users, Earth, CheckCircle2 } from "lucide-react";

function Counter({ target, suffix = "", decimals = 0 }: { target: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          let start = 0;
          const duration = 2000;
          const steps = 60;
          const stepValue = target / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            start += stepValue;
            if (currentStep >= steps) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(parseFloat(start.toFixed(decimals)));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, decimals]);

  return (
    <span ref={ref} className="font-mono">
      {count.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const metrics = [
    { icon: Briefcase, target: 8, decimals: 0, unit: "+", label: "Years of Experience" },
    { icon: CheckCircle2, target: 120, decimals: 0, unit: "+", label: "Projects Completed" },
    { icon: Users, target: 45, decimals: 0, unit: "+", label: "Technical Personnel" },
    { icon: Earth, target: 4, decimals: 0, unit: "+", label: "Countries Served" },
    { icon: HeartHandshake, target: 99.2, decimals: 1, unit: "%", label: "Client Satisfaction" },
  ];

  const badges = [
    {
      icon: Award,
      title: "Registered Company",
      subtitle: "URSB Certified",
      desc: "Incorporated engineering firm authorized to execute utility infrastructure contracts in East Africa."
    },
    {
      icon: CheckCircle2,
      title: "Engineering Certifications",
      subtitle: "UIPE & ERB Aligned",
      desc: "All projects are certified and stamped by registered professional engineers of Uganda."
    },
    {
      icon: ShieldCheck,
      title: "Safety Compliance",
      subtitle: "ISO & OHSAS Standards",
      desc: "Strict adherence to international occupational health, safety, and environmental protection guidelines."
    },
    {
      icon: Users,
      title: "Industry Memberships",
      subtitle: "Professional Corporations",
      desc: "Active corporate affiliation with leading technical institutions and energy regulatory bodies."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        
        {/* Core numbers grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <div key={i} className="text-center p-6 border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 tech-corner transition-colors">
                <div className="w-10 h-10 mx-auto mb-4 border border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-900 flex items-center justify-center text-blue-600 dark:text-cyan-400 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl font-extrabold text-slate-950 dark:text-zinc-50 tracking-tight flex items-baseline justify-center">
                  <Counter target={m.target} decimals={m.decimals} />
                  <span className="text-blue-600 dark:text-cyan-400 ml-0.5">{m.unit}</span>
                </div>
                <p className="text-[10px] font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-widest mt-2">{m.label}</p>
              </div>
            );
          })}
        </div>

        {/* Credentials and safety compliance badges */}
        <div className="pt-12 border-t border-slate-200 dark:border-slate-900/60">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="font-mono text-xs text-blue-600 dark:text-cyan-400 uppercase tracking-widest block">
              [ Accreditation Framework ]
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Trust & Regulatory Credentials
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {badges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div 
                  key={idx} 
                  className="border border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-900/20 p-6 flex flex-col justify-between group hover:border-blue-600 dark:hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-blue-600 dark:text-cyan-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-cyan-400 dark:group-hover:text-slate-950 transition-all duration-300 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase font-mono tracking-wider">
                          {badge.title}
                        </h4>
                        <span className="text-[9px] font-mono text-blue-600 dark:text-cyan-400 font-bold tracking-widest uppercase">
                          {badge.subtitle}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-sans">
                      {badge.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
