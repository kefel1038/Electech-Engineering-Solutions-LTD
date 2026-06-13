"use client";

import { useEffect, useRef, useState } from "react";
import { Activity, Clock, Terminal, Cpu, Database, AlertCircle } from "lucide-react";

const SIMULATED_LOGS = [
  "[SYS_OK] IEC 61850 substation packet received",
  "[SOLAR_IN] Inverter 03 outputting 415V (3-phase)",
  "[GRID_SYNC] Phase synchronization lock active",
  "[MODBUS] Querying register 40001 (Active Power)...",
  "[MODBUS] Register 40001 value: 124.8 kW",
  "[SYS_INFO] SCADA controller firmware v3.2.1-build88",
  "[FIBER_RX] Optical power: -14.2 dBm (Excellent)",
  "[TRANSFORMER] Winding temp: 62.4°C (Normal)",
  "[BATTERY_SYS] State of Charge: 94.2% (Floating)",
  "[METERING] Active consumption: 418.6 kW",
  "[GRID_FREQ] Phase A frequency: 50.01 Hz",
  "[SYS_OK] Remote telemetry terminal unit (RTU) online",
  "[SECURITY] TLS 1.3 handshake successful with grid-control",
  "[SOLAR_IN] Met-station solar irradiance: 852 W/m²"
];

export default function TelemetryHud() {
  // 1. Grid Frequency State
  const [frequency, setFrequency] = useState(50.0);
  
  // 2. Uptime Millisecond State
  const [uptime, setUptime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    ms: 0,
  });

  // 3. Modbus Logs State
  const [logs, setLogs] = useState<string[]>([]);
  const logsEndRef = useRef<HTMLDivElement>(null);
  const logsContainerRef = useRef<HTMLDivElement>(null);

  // 4. Canvas Waveform
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Setup mount time for Uptime Clock
  useEffect(() => {
    const startTime = Date.now() - (3 * 3600 * 1000 + 42 * 60 * 1000 + 15 * 1000); // starts with 3h 42m 15s to look established
    let animationFrameId: number;

    const updateUptime = () => {
      const diff = Date.now() - startTime;
      const totalSeconds = Math.floor(diff / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      const ms = diff % 1000;

      setUptime({ hours, minutes, seconds, ms });
      animationFrameId = requestAnimationFrame(updateUptime);
    };

    animationFrameId = requestAnimationFrame(updateUptime);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Grid Frequency shift logic
  useEffect(() => {
    const interval = setInterval(() => {
      // Shifting between 49.98 Hz and 50.02 Hz
      const randomFreq = 49.98 + Math.random() * 0.04;
      setFrequency(parseFloat(randomFreq.toFixed(3)));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Modbus Log Addition Loop
  useEffect(() => {
    // Initial logs
    setLogs([
      `[SYS_INIT] Remote Terminal Unit Online at ${new Date().toISOString().slice(11, 19)}`,
      "[SYS_OK] Establishing TLS handshake...",
      "[SECURITY] TLS 1.3 channel secured."
    ]);

    const logInterval = setInterval(() => {
      const randomLog = SIMULATED_LOGS[Math.floor(Math.random() * SIMULATED_LOGS.length)];
      const timestamp = new Date().toISOString().slice(11, 19) + "." + String(Date.now() % 1000).padStart(3, "0");
      setLogs((prev) => [...prev.slice(-30), `[${timestamp}] ${randomLog}`]);
    }, 2500);

    return () => clearInterval(logInterval);
  }, []);

  // Auto scroll logs (scoped to container only)
  useEffect(() => {
    if (logsContainerRef.current) {
      logsContainerRef.current.scrollTop = logsContainerRef.current.scrollHeight;
    }
  }, [logs]);

  // Canvas drawing loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let offset = 0;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * (window.devicePixelRatio || 1);
      canvas.height = rect.height * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const draw = () => {
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, width, height);

      // Draw Grid Background
      ctx.strokeStyle = "rgba(31, 41, 55, 0.2)";
      ctx.lineWidth = 1;
      const gridSize = 20;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw horizontal baseline
      ctx.strokeStyle = "rgba(31, 41, 55, 0.4)";
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();

      // Waving sine trendline mimicking grid cycles
      ctx.strokeStyle = "#f97316";
      ctx.lineWidth = 2;
      ctx.shadowBlur = 8;
      ctx.shadowColor = "rgba(249, 115, 22, 0.5)";
      ctx.beginPath();

      for (let x = 0; x < width; x++) {
        // Compose multiple sine waves for realistic electrical cycle noise
        const cycleSpeed = 0.04;
        const amplitude1 = height * 0.25;
        const amplitude2 = height * 0.05;
        
        const y = height / 2 +
          Math.sin(x * 0.015 + offset) * amplitude1 +
          Math.sin(x * 0.08 - offset * 1.5) * amplitude2 +
          (Math.random() - 0.5) * 1.2; // micro noise

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
      ctx.shadowBlur = 0; // reset

      offset += 0.05;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="border border-zinc-800 bg-zinc-950 p-6 tech-corner font-mono space-y-6 shadow-2xl backdrop-blur-md self-start lg:self-center w-full max-w-lg mx-auto">
      {/* Header bar */}
      <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-orange-500 animate-spin" style={{ animationDuration: '6s' }} />
          <span className="text-xs text-zinc-50 font-bold tracking-wider">
            SCADA_TELEMETRY // FEED
          </span>
        </div>
        <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded uppercase">
          MODBUS/TCP
        </span>
      </div>

      {/* Primary Telemetry Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Grid Frequency Box */}
        <div className="border border-zinc-900 bg-zinc-950/60 p-4 relative group hover:border-zinc-800 transition-colors">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[10px] text-zinc-400 uppercase tracking-wider">Grid Freq</span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </div>
          <div className="text-xl md:text-2xl font-bold text-zinc-50 tracking-tight flex items-baseline">
            {frequency.toFixed(2)}
            <span className="text-xs text-zinc-500 ml-1">Hz</span>
          </div>
          <div className="text-[9px] text-emerald-500 font-bold mt-1 uppercase tracking-widest flex items-center gap-1">
            <Activity className="w-3 h-3 text-emerald-400" />
            EAC_GRID_v4.1
          </div>
        </div>

        {/* Uptime Box */}
        <div className="border border-zinc-900 bg-zinc-950/60 p-4 relative group hover:border-zinc-800 transition-colors">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[10px] text-zinc-400 uppercase tracking-wider">RTU Uptime</span>
            <Clock className="w-3.5 h-3.5 text-amber-500" />
          </div>
          <div className="text-sm md:text-base font-bold text-zinc-50 tracking-normal flex flex-wrap gap-x-0.5">
            <span>{String(uptime.hours).padStart(2, "0")}</span>
            <span className="text-zinc-600 animate-pulse">:</span>
            <span>{String(uptime.minutes).padStart(2, "0")}</span>
            <span className="text-zinc-600 animate-pulse">:</span>
            <span>{String(uptime.seconds).padStart(2, "0")}</span>
            <span className="text-amber-500 text-xs mt-0.5">.{String(uptime.ms).padStart(3, "0")}</span>
          </div>
          <div className="text-[9px] text-zinc-500 font-bold mt-1 uppercase tracking-widest flex items-center gap-1">
            <Database className="w-3 h-3 text-amber-500" />
            LIVE_UPTIME
          </div>
        </div>
      </div>

      {/* Live Oscilloscope canvas */}
      <div className="space-y-1.5">
        <div className="flex justify-between items-center text-[10px] text-zinc-400 uppercase tracking-wider">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-none bg-orange-500 animate-pulse" />
            Phase Cycle Oscillation
          </span>
          <span className="text-orange-500 text-right">λ = 50.0 Hz</span>
        </div>
        <div className="h-28 w-full bg-zinc-950 border border-zinc-850 relative overflow-hidden">
          <canvas ref={canvasRef} className="w-full h-full block" />
        </div>
      </div>

      {/* Ticker logs */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-[10px] text-zinc-400 uppercase tracking-wider border-b border-zinc-900 pb-1">
          <span className="flex items-center gap-1">
            <Terminal className="w-3 h-3 text-zinc-500" />
            Hardware Ingestion Ticker
          </span>
          <span className="text-[9px] text-zinc-600">BUF_SIZE: 30</span>
        </div>
        
        <div ref={logsContainerRef} className="h-28 bg-zinc-950/80 border border-zinc-900 p-2 font-mono text-[9px] leading-relaxed overflow-y-auto space-y-1.5 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
          {logs.map((log, index) => {
            const isError = log.includes("[ERR]") || log.includes("[SECURITY]");
            const isSolar = log.includes("[SOLAR");
            return (
              <div
                key={index}
                className={`${
                  isError
                    ? "text-amber-400"
                    : isSolar
                    ? "text-orange-500"
                    : "text-zinc-400"
                } transition-opacity duration-300`}
              >
                &gt; {log}
              </div>
            );
          })}
          <div ref={logsEndRef} />
        </div>
      </div>

      {/* Subsystem status indicators footer */}
      <div className="grid grid-cols-3 gap-2 text-[9px] uppercase tracking-widest text-zinc-500 pt-2 border-t border-zinc-900">
        <div className="flex items-center gap-1 justify-center bg-zinc-900/40 py-1 border border-zinc-900">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Modbus_Ok
        </div>
        <div className="flex items-center gap-1 justify-center bg-zinc-900/40 py-1 border border-zinc-900">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Grid_Sync
        </div>
        <div className="flex items-center gap-1 justify-center bg-zinc-900/40 py-1 border border-zinc-900">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Shield_On
        </div>
      </div>
    </div>
  );
}
