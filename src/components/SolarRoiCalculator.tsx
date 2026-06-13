"use client";

import React, { useState, useEffect } from "react";
import { DollarSign, Landmark, TrendingUp, Sun, ArrowRight, Zap, RefreshCw } from "lucide-react";

const EXCHANGE_RATE = 3750; // 1 USD = 3,750 UGX
const COST_PER_KW_USD = 1250; // Capital expense cost per kW of solar capacity in USD

// Slider Bounds
const CAPACITY_MIN = 10;
const CAPACITY_MAX = 500;

const BILL_USD_MIN = 500;
const BILL_USD_MAX = 20000;
const BILL_USD_STEP = 500;

const BILL_UGX_MIN = 2000000;
const BILL_UGX_MAX = 75000000;
const BILL_UGX_STEP = 1000000;

export default function SolarRoiCalculator() {
  const [currency, setCurrency] = useState<"USD" | "UGX">("UGX");
  const [capacity, setCapacity] = useState<number>(100); // System Capacity in kW
  
  // Average Monthly Bill in USD and UGX
  const [monthlyBill, setMonthlyBill] = useState<number>(25000000); // 25,000,000 UGX (~6,666 USD)

  // Sync Bill Value when currency changes to keep calculations consistent
  const handleCurrencyToggle = () => {
    if (currency === "UGX") {
      // UGX to USD
      const newBill = Math.round((monthlyBill / EXCHANGE_RATE) / BILL_USD_STEP) * BILL_USD_STEP;
      setMonthlyBill(Math.max(BILL_USD_MIN, Math.min(BILL_USD_MAX, newBill)));
      setCurrency("USD");
    } else {
      // USD to UGX
      const newBill = Math.round((monthlyBill * EXCHANGE_RATE) / BILL_UGX_STEP) * BILL_UGX_STEP;
      setMonthlyBill(Math.max(BILL_UGX_MIN, Math.min(BILL_UGX_MAX, newBill)));
      setCurrency("UGX");
    }
  };

  // Convert monthly bill to USD for unified internal calculations
  const monthlyBillUSD = currency === "USD" ? monthlyBill : monthlyBill / EXCHANGE_RATE;

  // CAPEX Calculation
  const capexUSD = capacity * COST_PER_KW_USD;
  const capexUGX = capexUSD * EXCHANGE_RATE;
  const activeCapex = currency === "USD" ? capexUSD : capexUGX;

  // Solar Performance Yield (Uganda context)
  // Average solar yield = 4.5 peak sun hours * 365 days * 0.82 system efficiency factor
  const annualGenerationKwh = capacity * 4.5 * 365 * 0.82; 

  // Grid Displacement Savings (assuming industrial tariff is $0.16 USD / 600 UGX per kWh)
  const gridRateUSD = 0.16;
  const theoreticalAnnualSavingsUSD = annualGenerationKwh * gridRateUSD;
  
  // Cap savings to max 90% of their actual electricity bill
  const annualBillUSD = monthlyBillUSD * 12;
  const actualAnnualSavingsUSD = Math.min(theoreticalAnnualSavingsUSD, annualBillUSD * 0.90);
  
  // Payback period (fractional years)
  const paybackPeriod = actualAnnualSavingsUSD > 0 ? capexUSD / actualAnnualSavingsUSD : 0;

  // 25-Year Cumulative Savings Projection
  // Incorporating:
  // - 0.5% yearly solar panel degradation
  // - 3.0% yearly grid electricity tariff inflation
  // - 1.0% of CAPEX in annual maintenance/operations starting year 2
  const get25YearSavings = () => {
    let cumulativeSavingsUSD = 0;
    const yearlyProjections: { year: number; savings: number; netBenefit: number }[] = [];
    
    for (let year = 1; year <= 25; year++) {
      const degradationFactor = Math.pow(1 - 0.005, year - 1);
      const inflationFactor = Math.pow(1 + 0.03, year - 1);
      const maintenanceCostUSD = year === 1 ? 0 : capexUSD * 0.01;

      const solarGenerationYear = annualGenerationKwh * degradationFactor;
      const displacedSavingsUSD = Math.min(
        solarGenerationYear * (gridRateUSD * inflationFactor),
        (annualBillUSD * inflationFactor) * 0.90
      );

      const netYearlySavingUSD = displacedSavingsUSD - maintenanceCostUSD;
      cumulativeSavingsUSD += netYearlySavingUSD;

      yearlyProjections.push({
        year,
        savings: netYearlySavingUSD * (currency === "USD" ? 1 : EXCHANGE_RATE),
        netBenefit: (cumulativeSavingsUSD - capexUSD) * (currency === "USD" ? 1 : EXCHANGE_RATE),
      });
    }

    return {
      totalUSD: cumulativeSavingsUSD - capexUSD,
      totalActive: (cumulativeSavingsUSD - capexUSD) * (currency === "USD" ? 1 : EXCHANGE_RATE),
      projections: yearlyProjections,
    };
  };

  const financialModel = get25YearSavings();

  const formatCurrency = (val: number) => {
    if (currency === "USD") {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(val);
    } else {
      return "UGX " + new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 0,
      }).format(val);
    }
  };

  return (
    <section id="roi" className="py-24 bg-zinc-950 border-b border-zinc-900 relative">
      {/* Background visual accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 rounded-full text-xs font-mono text-emerald-400 uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            Financial Engineering
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-50 tracking-tight">
            Commercial Solar ROI Model
          </h2>
          <p className="text-sm md:text-base text-zinc-400 font-sans max-w-2xl mx-auto">
            Input your parameters to simulate your capital expenditure, operational savings, and cumulative payback timeline based on East African grid regulations.
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="flex justify-center mb-10">
          <div className="bg-zinc-900 border border-zinc-800 p-1.5 rounded-lg flex items-center gap-1">
            <button
              onClick={() => currency === "USD" && handleCurrencyToggle()}
              className={`px-5 py-2 font-mono text-xs font-bold uppercase transition-all duration-300 ${
                currency === "UGX"
                  ? "bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/10"
                  : "text-zinc-400 hover:text-zinc-50"
              }`}
            >
              UGX (Ugandan Shilling)
            </button>
            <button
              onClick={() => currency === "UGX" && handleCurrencyToggle()}
              className={`px-5 py-2 font-mono text-xs font-bold uppercase transition-all duration-300 ${
                currency === "USD"
                  ? "bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/10"
                  : "text-zinc-400 hover:text-zinc-50"
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Slider Inputs Control (Column 1-7) */}
          <div className="lg:col-span-7 border border-zinc-800 bg-zinc-900/40 p-8 tech-corner flex flex-col justify-between space-y-8 backdrop-blur-sm">
            <div>
              <h3 className="text-lg font-bold text-zinc-50 font-sans flex items-center gap-3 border-b border-zinc-800/60 pb-4 mb-6">
                <Sun className="w-5 h-5 text-emerald-400" /> 
                Facility Solar Parameters
              </h3>

              {/* Slider 1: System Capacity */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-baseline font-mono text-xs">
                  <span className="text-zinc-400 uppercase tracking-wider">Target System Capacity</span>
                  <span className="text-emerald-400 text-lg font-bold">
                    {capacity} <span className="text-[10px] text-zinc-500">kWp</span>
                  </span>
                </div>
                <input
                  type="range"
                  min={CAPACITY_MIN}
                  max={CAPACITY_MAX}
                  step={10}
                  value={capacity}
                  onChange={(e) => setCapacity(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                  <span>10 kW (Commercial)</span>
                  <span>250 kW</span>
                  <span>500 kW (Industrial Scale)</span>
                </div>
              </div>

              {/* Slider 2: Average Monthly Bill */}
              <div className="space-y-4">
                <div className="flex justify-between items-baseline font-mono text-xs">
                  <span className="text-zinc-400 uppercase tracking-wider">Average Monthly Electricity Bill</span>
                  <span className="text-cyan-400 text-lg font-bold">
                    {formatCurrency(monthlyBill)}
                  </span>
                </div>
                <input
                  type="range"
                  min={currency === "USD" ? BILL_USD_MIN : BILL_UGX_MIN}
                  max={currency === "USD" ? BILL_USD_MAX : BILL_UGX_MAX}
                  step={currency === "USD" ? BILL_USD_STEP : BILL_UGX_STEP}
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                  <span>
                    {currency === "USD" ? "$500" : "UGX 2.0M"}
                  </span>
                  <span>
                    {currency === "USD" ? "$10,000" : "UGX 38.5M"}
                  </span>
                  <span>
                    {currency === "USD" ? "$20,000+" : "UGX 75.0M+"}
                  </span>
                </div>
              </div>
            </div>

            {/* Note on mathematical parameters */}
            <div className="bg-zinc-950/60 border border-zinc-800 p-4 font-mono text-[10px] leading-relaxed text-zinc-400 space-y-1.5 mt-6">
              <div className="text-zinc-200 font-semibold mb-1 uppercase tracking-wider">// DESIGN MATRIX BASIS:</div>
              <div>&gt; Baseline Sun Hours: 4.5 Peak Sun Hours / Day (East Africa Index)</div>
              <div>&gt; Performance Ratio: 82.0% System Derate Factor (dust, cabling, inverter conversion)</div>
              <div>&gt; Exchange Tariff Reference: 1 USD = {EXCHANGE_RATE} UGX (Static Constant)</div>
              <div>&gt; Base CAPEX cost: {formatCurrency(COST_PER_KW_USD * (currency === "USD" ? 1 : EXCHANGE_RATE))} / kWp Fully-commissioned Tier-1 equipment</div>
            </div>
          </div>

          {/* Results outputs (Column 8-12) */}
          <div className="lg:col-span-5 border border-zinc-800 bg-zinc-900/60 p-8 tech-corner flex flex-col justify-between space-y-6 backdrop-blur-sm">
            <div>
              <h3 className="text-lg font-bold text-zinc-50 font-sans flex items-center gap-3 border-b border-zinc-800/60 pb-4 mb-6">
                <Landmark className="w-5 h-5 text-emerald-400" />
                Financial Modeling Outputs
              </h3>

              <div className="space-y-4">
                {/* Out 1: CAPEX */}
                <div className="border border-zinc-800/60 bg-zinc-950/40 p-4 rounded-none">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1">Estimated CAPEX (EPC Cost)</div>
                  <div className="text-2xl font-mono font-bold text-zinc-50">
                    {formatCurrency(activeCapex)}
                  </div>
                </div>

                {/* Out 2: Payback Period */}
                <div className="border border-zinc-800/60 bg-zinc-950/40 p-4 rounded-none">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1">Payback Period</div>
                  <div className="text-2xl font-mono font-bold text-emerald-400 flex items-baseline gap-1">
                    {paybackPeriod.toFixed(1)}
                    <span className="text-xs text-zinc-500 font-normal">Years</span>
                  </div>
                </div>

                {/* Out 3: Cumulative 25 Year Savings */}
                <div className="border border-zinc-800/60 bg-zinc-950/40 p-4 rounded-none">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1">25-Year Net Savings (After CAPEX)</div>
                  <div className="text-2xl font-mono font-bold text-cyan-400">
                    {formatCurrency(Math.max(0, financialModel.totalActive))}
                  </div>
                </div>
              </div>
            </div>

            {/* Micro-bar chart showing cumulative benefits */}
            <div className="space-y-3 pt-4 border-t border-zinc-800/60">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">Net Savings Trajectory</span>
              <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-mono">
                {/* Year 5 */}
                <div className="space-y-1">
                  <div className="h-12 bg-zinc-950 border border-zinc-850 flex items-end justify-center p-[2px]">
                    <div 
                      className="bg-emerald-500/80 w-full transition-all duration-500" 
                      style={{ height: `${Math.max(5, Math.min(100, (financialModel.projections[4].netBenefit / (financialModel.totalActive || 1)) * 100))}%` }}
                    />
                  </div>
                  <div className="text-zinc-400">Yr 5</div>
                </div>
                {/* Year 10 */}
                <div className="space-y-1">
                  <div className="h-12 bg-zinc-950 border border-zinc-850 flex items-end justify-center p-[2px]">
                    <div 
                      className="bg-emerald-500/80 w-full transition-all duration-500" 
                      style={{ height: `${Math.max(5, Math.min(100, (financialModel.projections[9].netBenefit / (financialModel.totalActive || 1)) * 100))}%` }}
                    />
                  </div>
                  <div className="text-zinc-400">Yr 10</div>
                </div>
                {/* Year 20 */}
                <div className="space-y-1">
                  <div className="h-12 bg-zinc-950 border border-zinc-850 flex items-end justify-center p-[2px]">
                    <div 
                      className="bg-cyan-400/80 w-full transition-all duration-500" 
                      style={{ height: `${Math.max(5, Math.min(100, (financialModel.projections[19].netBenefit / (financialModel.totalActive || 1)) * 100))}%` }}
                    />
                  </div>
                  <div className="text-zinc-400">Yr 20</div>
                </div>
                {/* Year 25 */}
                <div className="space-y-1">
                  <div className="h-12 bg-zinc-950 border border-zinc-850 flex items-end justify-center p-[2px]">
                    <div 
                      className="bg-cyan-400 w-full transition-all duration-500" 
                      style={{ height: '100%' }}
                    />
                  </div>
                  <div className="text-cyan-400 font-bold">Yr 25</div>
                </div>
              </div>
            </div>

            {/* B2B Call to Action */}
            <div className="pt-2">
              <a
                href="#contact"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-mono font-bold text-xs py-3.5 tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 group shadow-lg shadow-emerald-500/10"
              >
                Request Custom Solar Feasibility Study
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
