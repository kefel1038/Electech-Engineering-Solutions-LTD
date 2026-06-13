"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, Download, FileText, Check, Cpu, Zap, Wifi, Layers, Calendar, Loader2 } from "lucide-react";

type ServiceType = "Solar" | "Fiber" | "Substation" | "SCADA";

export default function InteractiveQuote() {
  const [service, setService] = useState<ServiceType>("Solar");
  
  // Custom Slider values depending on service selection
  const [solarCapacity, setSolarCapacity] = useState(100); // kW
  const [fiberDistance, setFiberDistance] = useState(10); // KM
  const [substationMva, setSubstationMva] = useState(5); // MVA
  const [scadaEndpoints, setScadaEndpoints] = useState(20); // RTU counts

  const [downloading, setDownloading] = useState(false);
  const [proposalDownloaded, setProposalDownloaded] = useState(false);

  // Math rules for quotation estimates
  const getEstimation = () => {
    let capex = 0;
    let opexYearly = 0;
    let timelineWeeks = 0;
    let specs: string[] = [];

    switch (service) {
      case "Solar":
        capex = solarCapacity * 1250; // $1,250 per kW
        opexYearly = capex * 0.012; // 1.2% maintenance
        timelineWeeks = Math.ceil(solarCapacity < 50 ? 4 : solarCapacity < 200 ? 8 : 16);
        specs = [
          `Capacity: ${solarCapacity} kWp PV Array`,
          "Tier-1 monocrystalline half-cell panels",
          "Utility grid synchronization switchgear",
          "BESS energy storage sync layout readiness"
        ];
        break;
      case "Fiber":
        capex = fiberDistance * 6500; // $6,500 per KM including civil works
        opexYearly = fiberDistance * 300; // splice audits
        timelineWeeks = Math.ceil(fiberDistance < 10 ? 3 : fiberDistance < 40 ? 6 : 12);
        specs = [
          `Distance: ${fiberDistance} Kilometers FTTx`,
          "Underground micro-trenching duct design",
          "Aerial overhead ADSS splice loops",
          "OTDR optical power budget reports"
        ];
        break;
      case "Substation":
        capex = substationMva * 250000; // $250k per MVA base
        opexYearly = capex * 0.015; // 1.5% grid maintenance
        timelineWeeks = Math.ceil(substationMva < 5 ? 12 : 24);
        specs = [
          `Utility Capacity: ${substationMva} MVA transformer`,
          "Class A ERA regulatory compliance alignment",
          "IEC 61850 protocol digital substation layout",
          "Outdoor SF6 circuit breakers & busbars"
        ];
        break;
      case "SCADA":
        capex = scadaEndpoints * 3500; // $3,500 per telemetry endpoint loop
        opexYearly = capex * 0.04; // firmware SLA
        timelineWeeks = Math.ceil(scadaEndpoints < 15 ? 4 : scadaEndpoints < 50 ? 8 : 14);
        specs = [
          `Endpoints: ${scadaEndpoints} Modbus RTU loops`,
          "Centralized SCADA visualization terminal",
          "TLS 1.3 encrypted remote radio telemetry",
          "Alarm thresholds & historical logs DB"
        ];
        break;
    }

    return { capex, opexYearly, timelineWeeks, specs };
  };

  const currentEst = getEstimation();

  const handleDownloadProposal = () => {
    setDownloading(true);
    
    // Generate text dossier payload to download
    const title = `ELECTECH_PROPOSAL_${service.toUpperCase()}_ESTIMATE.txt`;
    const body = `========================================================================
ELECTECH ENGINEERING SOLUTIONS LTD - ESTIMATED PRELIMINARY PROPOSAL
Generated Date: ${new Date().toLocaleDateString()}
Tracking System: B2B-QUOTE-v3.2
========================================================================

PROJECT DETAILS:
- Category: ${service} Infrastructure
${currentEst.specs.map(s => `- ${s}`).join("\n")}

ESTIMATED FINANCIAL modeling (USD):
- Capital Expenditure (CAPEX): $${currentEst.capex.toLocaleString()} USD
- Est. Yearly Operations/O&M: $${currentEst.opexYearly.toLocaleString()} USD/Year
- Target Completion Timeline: ${currentEst.timelineWeeks} Weeks

REGULATORY ACCREDITATION & CODES:
- ERA Licensing: Class A grid integration alignment
- Design standard: IEEE/IEC compliant
- Stamped by Registered Professional Engineers (ERB)

DISCLAIMER:
This estimates represents a static mathematical feasibility study. Real site parameters, exchange rates, and structural load analysis are required to finalize binding price matrices.

========================================================================
For surveys or site evaluations, initiate intake pipelines at:
URL: http://electech.co.ug/#contact | Tel: +256 787 531 336
========================================================================`;

    setTimeout(() => {
      // Trigger actual browser client download
      const blob = new Blob([body], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = title;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setDownloading(false);
      setProposalDownloaded(true);
      setTimeout(() => setProposalDownloaded(false), 5000);
    }, 1500);
  };

  return (
    <section id="roi" className="py-24 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-1.5 rounded-full text-xs font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Quotation
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Online Quotation System
          </h2>
          <p className="text-sm md:text-base text-slate-655 dark:text-zinc-400 font-sans max-w-2xl mx-auto">
            Select a service category and configure your target specifications to generate a preliminary cost projection and downloadable capability brief.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls - left (Col 1-7) */}
          <div className="lg:col-span-7 border border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-950/60 p-8 tech-corner flex flex-col justify-between space-y-8 shadow-sm">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans flex items-center gap-3 border-b border-slate-150 dark:border-slate-900 pb-4 mb-6">
                <Cpu className="w-5 h-5 text-blue-650 dark:text-cyan-400" />
                Configure Project Specs
              </h3>

              {/* Service tabs selection */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 font-mono text-xs">
                {(["Solar", "Fiber", "Substation", "SCADA"] as ServiceType[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setService(s)}
                    className={`py-2 px-3 border uppercase font-bold tracking-wider transition-colors cursor-pointer text-center ${
                      service === s
                        ? "bg-blue-600 border-blue-600 text-white dark:bg-cyan-400 dark:border-cyan-400 dark:text-slate-950"
                        : "border-slate-200 dark:border-slate-800 text-slate-500 dark:text-zinc-400 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-700 dark:hover:text-zinc-200"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              {/* Solar Controls */}
              {service === "Solar" && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex justify-between items-baseline font-mono text-xs">
                    <span className="text-slate-500 dark:text-zinc-400 uppercase tracking-wider">PV Array Target Capacity</span>
                    <span className="text-blue-655 dark:text-cyan-400 text-lg font-bold">
                      {solarCapacity} <span className="text-[10px] text-slate-400">kWp</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={1000}
                    step={10}
                    value={solarCapacity}
                    onChange={(e) => setSolarCapacity(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 dark:bg-slate-850 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:accent-cyan-450 focus:outline-none"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400 dark:text-zinc-500">
                    <span>10 kW (Commercial)</span>
                    <span>500 kW</span>
                    <span>1000 kW (Utility scale)</span>
                  </div>
                </div>
              )}

              {/* Fiber Controls */}
              {service === "Fiber" && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex justify-between items-baseline font-mono text-xs">
                    <span className="text-slate-500 dark:text-zinc-400 uppercase tracking-wider">Fiber Backhaul Distance</span>
                    <span className="text-blue-655 dark:text-cyan-400 text-lg font-bold">
                      {fiberDistance} <span className="text-[10px] text-slate-400">KM</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={100}
                    step={1}
                    value={fiberDistance}
                    onChange={(e) => setFiberDistance(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 dark:bg-slate-850 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:accent-cyan-450 focus:outline-none"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400 dark:text-zinc-500">
                    <span>1 KM (Short Link)</span>
                    <span>50 KM</span>
                    <span>100 KM (Regional Ring)</span>
                  </div>
                </div>
              )}

              {/* Substation Controls */}
              {service === "Substation" && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex justify-between items-baseline font-mono text-xs">
                    <span className="text-slate-500 dark:text-zinc-400 uppercase tracking-wider">Substation Transformer Capacity</span>
                    <span className="text-blue-655 dark:text-cyan-400 text-lg font-bold">
                      {substationMva} <span className="text-[10px] text-slate-400">MVA</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={20}
                    step={1}
                    value={substationMva}
                    onChange={(e) => setSubstationMva(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 dark:bg-slate-850 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:accent-cyan-450 focus:outline-none"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400 dark:text-zinc-500">
                    <span>1 MVA (Distribution)</span>
                    <span>10 MVA</span>
                    <span>20 MVA (Utility substation)</span>
                  </div>
                </div>
              )}

              {/* SCADA Controls */}
              {service === "SCADA" && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex justify-between items-baseline font-mono text-xs">
                    <span className="text-slate-500 dark:text-zinc-400 uppercase tracking-wider">Remote Telemetry Endpoints (RTUs)</span>
                    <span className="text-blue-655 dark:text-cyan-400 text-lg font-bold">
                      {scadaEndpoints} <span className="text-[10px] text-slate-400">Endpoints</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={150}
                    step={5}
                    value={scadaEndpoints}
                    onChange={(e) => setScadaEndpoints(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 dark:bg-slate-850 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:accent-cyan-450 focus:outline-none"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400 dark:text-zinc-500">
                    <span>5 RTUs (Small Plant)</span>
                    <span>75 RTUs</span>
                    <span>150 RTUs (Utility network)</span>
                  </div>
                </div>
              )}
            </div>

            {/* Note on estimation parameters */}
            <div className="bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-slate-800 p-4 font-mono text-[10px] leading-relaxed text-slate-500 dark:text-zinc-400 space-y-1 mt-6">
              <div className="text-slate-900 dark:text-white font-bold uppercase tracking-wider">// SYSTEM DESIGN CRITERIA:</div>
              <div>&gt; Cost modeling bases are referenced in USD currency amounts.</div>
              <div>&gt; Includes base switchgears, testing calibration, and local regulatory signing.</div>
              <div>&gt; Stamped and certified under ERB/UIPE engineers protocols.</div>
            </div>
          </div>

          {/* Outputs - right (Col 8-12) */}
          <div className="lg:col-span-5 border border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-950/60 p-8 tech-corner flex flex-col justify-between space-y-6 shadow-sm">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans flex items-center gap-3 border-b border-slate-150 dark:border-slate-900 pb-4 mb-6">
                <Layers className="w-5 h-5 text-blue-650 dark:text-cyan-400" />
                Preliminary Feasibility Estimates
              </h3>

              <div className="space-y-4">
                {/* CAPEX Output */}
                <div className="border border-slate-150 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-900/40 p-4">
                  <div className="text-[10px] font-mono text-slate-400 dark:text-zinc-550 uppercase tracking-widest mb-1">CAPEX Cost (EPC Turnkey)</div>
                  <div className="text-2xl font-mono font-bold text-slate-950 dark:text-zinc-50">
                    ${currentEst.capex.toLocaleString()}{" "}
                    <span className="text-xs text-slate-500">USD</span>
                  </div>
                </div>

                {/* Operations O&M Output */}
                <div className="border border-slate-150 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-900/40 p-4">
                  <div className="text-[10px] font-mono text-slate-400 dark:text-zinc-550 uppercase tracking-widest mb-1">Est. Yearly Operations (O&M)</div>
                  <div className="text-2xl font-mono font-bold text-slate-950 dark:text-zinc-50">
                    ${currentEst.opexYearly.toLocaleString()}{" "}
                    <span className="text-xs text-slate-500">/Year</span>
                  </div>
                </div>

                {/* Delivery Timeline Output */}
                <div className="border border-slate-150 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-900/40 p-4">
                  <div className="text-[10px] font-mono text-slate-400 dark:text-zinc-550 uppercase tracking-widest mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" /> Commissioning Timeline
                  </div>
                  <div className="text-2xl font-mono font-bold text-blue-600 dark:text-cyan-400">
                    {currentEst.timelineWeeks}{" "}
                    <span className="text-xs text-slate-500 font-normal">Weeks</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Spec items listed below */}
            <div className="space-y-2 text-xs text-slate-600 dark:text-zinc-400">
              <span className="text-[10px] font-mono text-slate-400 dark:text-zinc-500 uppercase tracking-widest block">// PROJECT ARCHITECTURE</span>
              <ul className="space-y-1.5">
                {currentEst.specs.map((spec, index) => (
                  <li key={index} className="flex gap-2 items-center">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span className="font-mono text-[11px] text-slate-750 dark:text-zinc-300">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Quote button */}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-850/80">
              <button
                onClick={handleDownloadProposal}
                disabled={downloading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-mono font-bold text-xs py-3.5 tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 cursor-pointer"
              >
                {downloading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Generating Dossier...
                  </>
                ) : proposalDownloaded ? (
                  <>
                    Feasibility Sheet Downloaded!
                    <Check className="w-4 h-4 text-emerald-400" />
                  </>
                ) : (
                  <>
                    Generate Proposal PDF
                    <Download className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
