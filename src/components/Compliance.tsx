export default function Compliance() {
  const certifications = [
    {
      title: "ERA Licensed",
      authority: "Electricity Regulatory Authority",
      code: "LIC // E071/24",
      description: "Class A electrical installation license for high-voltage and utility infrastructure projects.",
      icon: "fa-bolt",
    },
    {
      title: "UIPE Corporate Member",
      authority: "Uganda Institution of Professional Engineers",
      code: "MEMB // M-2841",
      description: "Official corporate alignment ensuring compliance with professional engineering standards.",
      icon: "fa-certificate",
    },
    {
      title: "ERB Registered",
      authority: "Engineers Registration Board",
      code: "REG // ERB-2024-18",
      description: "Registered and certified professional engineering practitioners in Uganda.",
      icon: "fa-industry",
    },
    {
      title: "UNRA Class 6 Contractor",
      authority: "Uganda National Roads Authority",
      code: "CAT // CLASS-6",
      description: "Pre-qualified engineering firm for civil, electrical, and urban road network infrastructures.",
      icon: "fa-road",
    },
    {
      title: "NSSF Compliant",
      authority: "National Social Security Fund",
      code: "CERT // NSSF-UGA",
      description: "Fully compliant with national social security policies and labor standards.",
      icon: "fa-shield-alt",
    },
    {
      title: "URA Tax Clearance",
      authority: "Uganda Revenue Authority",
      code: "STAT // COMPLIANT",
      description: "Up-to-date national tax clearances for large-scale corporate procurement.",
      icon: "fa-file-invoice",
    },
  ];

  return (
    <section className="py-20 bg-industrial-950 border-b border-industrial-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs text-hazard-orange uppercase tracking-widest block">
            [ Regulatory Alignment ]
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            LOCAL COMPLIANCE FRAMEWORK
          </h2>
          <p className="text-sm md:text-base text-industrial-400 font-sans leading-relaxed">
            Electech operates under strict regulatory oversight, adhering to the highest standards set by Ugandan and East African engineering authorities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="border border-industrial-800 bg-industrial-900/60 p-6 tech-corner hover:border-hazard-orange/40 transition-colors duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 bg-industrial-950 border border-industrial-800 flex items-center justify-center text-hazard-orange group-hover:bg-hazard-orange group-hover:text-industrial-950 transition-all duration-300">
                    <i className={`fas ${cert.icon} text-lg`} />
                  </div>
                  <span className="font-mono text-[10px] text-hazard-electric bg-industrial-950 px-2 py-0.5 border border-industrial-800">
                    {cert.code}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white font-sans group-hover:text-hazard-orange transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-[11px] font-mono text-industrial-400/80 uppercase tracking-wider">
                    {cert.authority}
                  </p>
                </div>

                <p className="text-xs text-industrial-400 leading-relaxed font-sans">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
