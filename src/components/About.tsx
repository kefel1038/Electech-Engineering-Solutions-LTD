export default function About() {
  const cards = [
    {
      title: "Mission",
      description: "To deliver innovative, reliable, and sustainable engineering solutions that improve lives across Africa.",
      icon: "fa-bullseye",
    },
    {
      title: "Vision",
      description: "To become East Africa's leading engineering and technology solutions company.",
      icon: "fa-eye",
    },
    {
      title: "Values",
      description: "Innovation, Integrity, Excellence, Professionalism, and long-term environmental Sustainability.",
      icon: "fa-handshake",
    },
  ];

  return (
    <section id="about" className="py-24 bg-industrial-900 border-b border-industrial-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side Founder Portrait */}
          <div className="lg:col-span-5 relative group">
            <div className="border border-industrial-800 bg-industrial-950 p-3 tech-corner shadow-2xl">
              <div className="relative h-[480px] w-full overflow-hidden border border-industrial-800">
                <img
                  src="/img/founder image.png"
                  alt="Eng Lubega Felix Ken - Founder & CEO"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            
            {/* Overlay Est Badge */}
            <div className="absolute -bottom-5 -right-5 bg-hazard-orange text-industrial-950 px-6 py-4 flex items-center gap-3 font-mono font-bold text-sm shadow-xl shadow-hazard-orange/20">
              <i className="fas fa-calendar-alt text-lg animate-pulse" />
              <span>EST. 2018</span>
            </div>
          </div>

          {/* Right Side About Content */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6 pt-6 lg:pt-0">
            <div className="inline-flex items-center gap-2 border border-industrial-800 bg-industrial-950 px-3 py-1.5 text-[10px] font-mono text-hazard-orange uppercase tracking-widest">
              <i className="fas fa-building" />
              About Electech Engineering Solutions LTD
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-sans leading-tight">
              ENGINEERING INNOVATION.<br />
              POWERING POSSIBILITIES.
            </h2>
            
            <p className="text-sm md:text-base text-industrial-400 font-sans leading-relaxed">
              Electech Engineering Solutions LTD was established by a team of experienced engineers with a clear mission: to deliver world-class engineering solutions tailored to the unique needs of East Africa.
            </p>
            
            <p className="text-sm md:text-base text-industrial-400 font-sans leading-relaxed">
              Our founder, Eng. Lubega Felix Ken, recognized a gap in the market for a company that combines international engineering standards with deep local knowledge. Today, we serve government institutions, private enterprises, and development organizations across the region.
            </p>

            {/* Core Mini Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="border border-industrial-800 bg-industrial-950 p-5 tech-corner flex flex-col justify-between hover:border-hazard-orange/30 transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="w-9 h-9 border border-industrial-800 bg-industrial-900 flex items-center justify-center text-hazard-orange">
                      <i className={`fas ${card.icon} text-sm`} />
                    </div>
                    <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                      {card.title}
                    </h3>
                    <p className="text-xs text-industrial-400 leading-relaxed font-sans">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-hazard-orange group transition-colors duration-200"
              >
                Initiate Consultation Review 
                <span className="group-hover:translate-x-1 transition-transform duration-200 text-sm">→</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
