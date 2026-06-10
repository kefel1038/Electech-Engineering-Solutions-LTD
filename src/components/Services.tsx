export default function Services() {
  const serviceList = [
    {
      id: "SRV-ELE",
      title: "Electrical Engineering",
      icon: "fa-bolt",
      description: "Comprehensive power system design, low & medium voltage installations, substation design, energy audits, and reactive power compensation.",
      tags: ["Distribution", "Substations", "Power Audits", "Switchgears"],
    },
    {
      id: "SRV-REN",
      title: "Renewable Energy",
      icon: "fa-solar-panel",
      description: "Commercial & industrial solar hybrid engineering, battery energy storage systems (BESS), solar water pumping, and microgrid management.",
      tags: ["Solar Hybrid", "BESS", "Microgrids", "Pumping"],
    },
    {
      id: "SRV-TEL",
      title: "Telecommunications",
      icon: "fa-satellite-dish",
      description: "Fiber optic backbone construction, last-mile telecom deployment, civil works, GSM tower builds, and structured cabling solutions.",
      tags: ["Fiber Splicing", "P2P Wireless", "GSM Towers", "Cabling"],
    },
    {
      id: "SRV-ICT",
      title: "ICT Infrastructure",
      icon: "fa-network-wired",
      description: "Tier-III equivalent data center installations, enterprise network administration, cybersecurity compliance, and cloud systems setup.",
      tags: ["Data Centers", "Routing", "Cyber Security", "VMware"],
    },
    {
      id: "SRV-AUT",
      title: "Industrial Automation",
      icon: "fa-robot",
      description: "PLC programming (Siemens S7), SCADA design and telemetry, Modbus/Profibus networking, HMI interface builds, and VFD setups.",
      tags: ["SCADA", "Siemens S7", "Modbus TCP", "Telemetry"],
    },
    {
      id: "SRV-EMB",
      title: "Electronics & Embedded",
      icon: "fa-microchip",
      description: "Custom PCB design and prototyping, micro-controller programming (ESP32/Arduino), firmware compilation, and IoT product builds.",
      tags: ["PCB Layout", "Firmware", "ESP32 Nodes", "Sensors"],
    },
    {
      id: "SRV-RND",
      title: "Research & Innovation",
      icon: "fa-flask",
      description: "Technology prototyping, smart agricultural incubations, custom robotics assemblies, and telemetry field trials.",
      tags: ["R&D Labs", "Robotics", "IoT Mesh", "Prototypes"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-industrial-950 border-b border-industrial-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs text-hazard-orange uppercase tracking-widest block">
            [ Core Competencies ]
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            COMPREHENSIVE ENGINEERING SOLUTIONS
          </h2>
          <p className="text-sm md:text-base text-industrial-400 font-sans leading-relaxed">
            From power systems to digital infrastructure, we deliver end-to-end engineering services designed for high availability and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((srv, idx) => (
            <div
              key={idx}
              className="border border-industrial-800 bg-industrial-900/40 p-8 tech-corner flex flex-col justify-between hover:border-hazard-orange/40 hover:bg-industrial-900/60 transition-all duration-300 group"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[10px] text-industrial-400 font-semibold tracking-wider">
                    {srv.id}
                  </span>
                  <div className="w-10 h-10 bg-industrial-950 border border-industrial-800 flex items-center justify-center text-hazard-orange group-hover:bg-hazard-orange group-hover:text-industrial-950 transition-all duration-300">
                    <i className={`fas ${srv.icon} text-sm`} />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white font-sans group-hover:text-hazard-orange transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-industrial-400 leading-relaxed font-sans">
                    {srv.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-industrial-800/60">
                <div className="flex flex-wrap gap-1.5">
                  {srv.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[9px] text-hazard-electric bg-industrial-950 border border-industrial-800/80 px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
