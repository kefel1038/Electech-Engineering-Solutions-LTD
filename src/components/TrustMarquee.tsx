export default function TrustMarquee() {
  const logos = [
    "Ministry of Energy",
    "UECCC",
    "UMEME",
    "MTN Uganda",
    "Airtel Uganda",
    "Makerere University",
    "UNRA",
    "NWSC",
  ];

  // Double the array to ensure smooth infinite loop scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900 border-t border-b border-slate-200 dark:border-slate-800 overflow-hidden relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-center text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-zinc-500">
          Trusted by Industry Leaders Across Uganda &amp; East Africa
        </p>
      </div>

      <div className="w-full relative overflow-hidden flex items-center py-2">
        {/* Soft fading masks on sides */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-900 dark:to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-900 dark:to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-8">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-6 py-3 border border-slate-250 dark:border-slate-800 bg-white dark:bg-slate-950/40 text-xs md:text-sm font-mono text-slate-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-600 dark:hover:border-cyan-400 transition-all duration-300 select-none whitespace-nowrap cursor-default"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

