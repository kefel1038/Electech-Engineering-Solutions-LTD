"use client";

import { useEffect, useState, useRef } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
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
          const step = Math.ceil(target / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const metrics = [
    { icon: "fa-bolt", target: 12, unit: " MW", label: "Installed Solar Capacity" },
    { icon: "fa-satellite-dish", target: 200, unit: "+ km", label: "Fiber Network Coverage" },
    { icon: "fa-building", target: 85, unit: "+", label: "Buildings Supported" },
    { icon: "fa-car-battery", target: 8, unit: " MWh", label: "Battery Storage Capacity" },
    { icon: "fa-globe-africa", target: 4, unit: "+", label: "Regions Served" },
    { icon: "fa-microchip", target: 1500, unit: "+", label: "Smart Devices Connected" },
  ];

  return (
    <section className="py-16 bg-industrial-900 border-b border-industrial-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {metrics.map((m, i) => (
            <div key={i} className="text-center p-4 border border-industrial-800 bg-industrial-950/40 tech-corner">
              <div className="w-10 h-10 mx-auto mb-3 border border-industrial-800 bg-industrial-900 flex items-center justify-center text-hazard-orange">
                <i className={`fas ${m.icon} text-sm`} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white font-mono">
                <Counter target={m.target} />
                <span className="text-hazard-electric">{m.unit}</span>
              </div>
              <p className="text-[10px] font-mono text-industrial-400 uppercase tracking-wider mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
