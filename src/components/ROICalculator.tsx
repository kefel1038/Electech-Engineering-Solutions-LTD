"use client";

import { useState, useEffect } from "react";

const facilityTypes = [
  { value: "office", label: "Commercial Office" },
  { value: "factory", label: "Manufacturing / Factory" },
  { value: "warehouse", label: "Warehouse / Logistics" },
  { value: "hospital", label: "Hospital / Clinic" },
  { value: "school", label: "School / University" },
  { value: "mall", label: "Shopping Mall" },
  { value: "hotel", label: "Hotel / Resort" },
  { value: "farm", label: "Agro-Processing" },
];

const orientations = [
  { value: "excellent", label: "Excellent (North-facing, no shade)" },
  { value: "good", label: "Good (North/East, partial shade)" },
  { value: "fair", label: "Fair (East/West)" },
  { value: "poor", label: "Poor (South-facing / heavy shade)" },
];

const usableRatio: Record<string, number> = {
  office: 0.6, factory: 0.7, warehouse: 0.8, hospital: 0.5,
  school: 0.5, mall: 0.6, hotel: 0.5, farm: 0.4,
};

const orientFactor: Record<string, number> = {
  excellent: 1.0, good: 0.85, fair: 0.7, poor: 0.5,
};

function formatUGX(n: number) {
  return "UGX " + n.toLocaleString("en-US");
}

export default function ROICalculator() {
  const [bill, setBill] = useState(5000000);
  const [area, setArea] = useState(1000);
  const [facility, setFacility] = useState("office");
  const [orientation, setOrientation] = useState("good");

  const ratio = usableRatio[facility] || 0.6;
  const usableArea = area * ratio;
  const ofactor = orientFactor[orientation] || 0.85;

  let systemKw = Math.round((usableArea * 0.15 * ofactor) * 10) / 10;
  systemKw = Math.min(systemKw, bill * 0.000012);

  const annualKwh = Math.round(systemKw * 4.5 * 365 * 0.85 * ofactor);
  const costPerKw = 5500000;
  const capex = Math.round(systemKw * costPerKw);
  const ratePerKwh = 500;
  const annualSavings = Math.round(annualKwh * ratePerKwh * 0.85);
  const payback = annualSavings > 0 ? capex / annualSavings : 99;
  const year25Benefit = Math.round(annualSavings * 25 - capex);

  const gridCostAnnual = bill * 12;
  const solarCostAnnual = Math.round(capex / 20 + annualKwh * 50 * 0.15);
  const maxCost = Math.max(gridCostAnnual, solarCostAnnual, 1);
  const gridPct = Math.min((gridCostAnnual / maxCost) * 100, 100);
  const solarPct = Math.min((solarCostAnnual / maxCost) * 100, 100);

  return (
    <section id="roi" className="py-24 bg-industrial-950 border-b border-industrial-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="font-mono text-xs text-hazard-orange uppercase tracking-widest block">
            [ Solar ROI Calculator ]
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Solar ROI Calculator</h2>
          <p className="text-sm md:text-base text-industrial-400 font-sans leading-relaxed">
            Estimate your commercial facility&apos;s solar savings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="border border-industrial-800 bg-industrial-900/60 p-8 tech-corner space-y-6">
            <h3 className="text-lg font-bold text-white font-mono flex items-center gap-3">
              <i className="fas fa-calculator text-hazard-orange" /> Facility Parameters
            </h3>

            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-wider text-industrial-400">Facility Type</label>
              <select
                value={facility}
                onChange={(e) => setFacility(e.target.value)}
                className="w-full bg-industrial-950 border border-industrial-800 text-white text-sm px-4 py-3 focus:outline-none focus:border-hazard-orange font-mono"
              >
                {facilityTypes.map((f) => (
                  <option key={f.value} value={f.value}>{f.label}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-wider text-industrial-400">
                Monthly Electricity Bill (UGX): <span className="text-hazard-orange">{formatUGX(bill)}</span>
              </label>
              <input
                type="range" min={1000000} max={50000000} step={500000} value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="w-full accent-hazard-orange"
              />
              <div className="flex justify-between text-[9px] font-mono text-industrial-400">
                <span>UGX 1M</span><span>UGX 50M</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-wider text-industrial-400">
                Roof / Land Area (m&sup2;): <span className="text-hazard-orange">{area.toLocaleString()} m&sup2;</span>
              </label>
              <input
                type="range" min={100} max={10000} step={50} value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full accent-hazard-orange"
              />
              <div className="flex justify-between text-[9px] font-mono text-industrial-400">
                <span>100 m&sup2;</span><span>10,000 m&sup2;</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-wider text-industrial-400">System Orientation</label>
              <select
                value={orientation}
                onChange={(e) => setOrientation(e.target.value)}
                className="w-full bg-industrial-950 border border-industrial-800 text-white text-sm px-4 py-3 focus:outline-none focus:border-hazard-orange font-mono"
              >
                {orientations.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results */}
          <div className="border border-industrial-800 bg-industrial-900/60 p-8 tech-corner space-y-5">
            <h3 className="text-lg font-bold text-white font-mono flex items-center gap-3">
              <i className="fas fa-chart-line text-hazard-electric" /> Projected Returns
            </h3>

            <div className="divide-y divide-industrial-800/60">
              <ResultRow label="Recommended System" value={`${systemKw.toFixed(1)} kWp`} />
              <ResultRow label="Estimated Cost (CAPEX)" value={formatUGX(capex)} />
              <ResultRow label="Annual Generation" value={`${annualKwh.toLocaleString()} kWh`} electric />
              <ResultRow label="Annual Savings" value={formatUGX(annualSavings)} />
              <ResultRow label="Payback Period" value={`${payback.toFixed(1)} years`} green />
              <ResultRow label="25-Year Net Benefit" value={formatUGX(Math.max(year25Benefit, 0))} green />
            </div>

            <div className="space-y-3 pt-4 border-t border-industrial-800/60">
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono text-industrial-400">
                  <span>Grid Cost</span><span>{formatUGX(gridCostAnnual)}/yr</span>
                </div>
                <div className="h-3 bg-industrial-950 border border-industrial-800">
                  <div className="h-full bg-industrial-400 transition-all duration-300" style={{ width: `${gridPct}%` }} />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono text-industrial-400">
                  <span>Solar Cost</span><span>{formatUGX(solarCostAnnual)}/yr</span>
                </div>
                <div className="h-3 bg-industrial-950 border border-industrial-800">
                  <div className="h-full bg-gradient-to-r from-hazard-electric to-hazard-orange transition-all duration-300" style={{ width: `${solarPct}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultRow({ label, value, electric, green }: { label: string; value: string; electric?: boolean; green?: boolean }) {
  return (
    <div className="flex justify-between py-3 text-sm">
      <span className="font-mono text-industrial-400">{label}</span>
      <span className={`font-mono font-bold ${electric ? "text-hazard-electric" : green ? "text-green-400" : "text-white"}`}>
        {value}
      </span>
    </div>
  );
}
