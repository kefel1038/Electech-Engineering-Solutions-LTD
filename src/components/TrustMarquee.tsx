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
    <section className="py-12 bg-industrial-900 border-t border-b border-industrial-800 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-center text-[10px] font-mono uppercase tracking-widest text-industrial-400">
          Trusted by Industry Leaders Across Uganda &amp; East Africa
        </p>
      </div>

      <div className="w-full relative overflow-hidden flex items-center py-2">
        {/* Soft fading masks on sides */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-industrial-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-industrial-900 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-8">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-6 py-3 border border-industrial-800 bg-industrial-950/40 text-xs md:text-sm font-mono text-industrial-400 hover:text-hazard-orange hover:border-hazard-orange/30 transition-all duration-300 select-none whitespace-nowrap cursor-default"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
