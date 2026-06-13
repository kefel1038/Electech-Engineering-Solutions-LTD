"use client";

import { useState } from "react";
import { Maximize2, X } from "lucide-react";

const categories = [
  { id: "all", label: "All Works" },
  { id: "solar", label: "Solar PV" },
  { id: "electrical", label: "Electrical" },
  { id: "telecom", label: "Telecom" },
  { id: "automation", label: "Automation" },
  { id: "training", label: "Training" },
];

const images = [
  { src: "/img/116363666_1803845613091293_3190002061562231843_n.jpg", category: "electrical" },
  { src: "/img/116882352_1805623442913510_7819026327708559621_n.jpg", category: "solar" },
  { src: "/img/117973628_1820740681401786_8852297143243833428_n.jpg", category: "telecom" },
  { src: "/img/118003424_1823860824423105_8818571609410715163_n.jpg", category: "automation" },
  { src: "/img/120040565_1852353344907186_6132075019586387228_n.jpg", category: "training" },
  { src: "/img/120042773_1852353538240500_5204626069860258112_n.jpg", category: "solar" },
  { src: "/img/122024919_1883233578485829_9062144332802943422_n.jpg", category: "electrical" },
  { src: "/img/123392517_1893556504120203_3875509733133310775_n.jpg", category: "telecom" },
  { src: "/img/123452711_1895632490579271_324458252909728803_n.jpg", category: "automation" },
  { src: "/img/124171550_1901347826674404_3894256006364433758_n.jpg", category: "training" },
  { src: "/img/124445497_1901348000007720_3185292525878599346_n.jpg", category: "solar" },
  { src: "/img/144240205_172238271366093_2816302673846830628_n.jpg", category: "electrical" },
  { src: "/img/147398970_176437527612834_7077236171885483964_n.jpg", category: "telecom" },
  { src: "/img/147892102_176437227612864_9014445873704145937_n.jpg", category: "automation" },
  { src: "/img/147911712_176437270946193_708857527863100088_n.jpg", category: "training" },
  { src: "/img/179736787_233364278586825_6106631139195701861_n.jpg", category: "solar" },
  { src: "/img/203922245_273431844580068_3417934875253393871_n.jpg", category: "electrical" },
  { src: "/img/34199599_1124350431040818_6872658452032782336_n.jpg", category: "telecom" },
  { src: "/img/468567464_1078641224059122_8212291243043276245_n.jpg", category: "automation" },
  { src: "/img/470164255_1089084786348099_2015868360761215441_n.jpg", category: "training" },
  { src: "/img/472019889_1102026985053879_2744094857665442204_n.jpg", category: "solar" },
  { src: "/img/472052157_1102022291721015_1974009967947644256_n.jpg", category: "electrical" },
  { src: "/img/472209857_1102026955053882_5236468992333811574_n.jpg", category: "telecom" },
  { src: "/img/472210008_1102021935054384_2035695693369726376_n.jpg", category: "automation" },
  { src: "/img/472309512_1102027185053859_7527040684057209300_n.jpg", category: "training" },
  { src: "/img/472309956_1102018888388022_3791014398111395147_n.jpg", category: "solar" },
  { src: "/img/472348354_1102606484995929_3597291804769732204_n.jpg", category: "electrical" },
  { src: "/img/472459722_1102022271721017_125774249356400735_n.jpg", category: "telecom" },
  { src: "/img/472670911_1102019838387927_7865064423008279263_n.jpg", category: "automation" },
  { src: "/img/474065823_1114007450522499_8737604322852876822_n.jpg", category: "training" },
  { src: "/img/475091108_1116762293580348_63728835556522456_n.jpg", category: "solar" },
  { src: "/img/504350248_3308968745912298_2353387083406532083_n.jpg", category: "electrical" },
  { src: "/img/505506738_3316262238516282_4418640922675795366_n.jpg", category: "telecom" },
  { src: "/img/720126196_1449706320533026_8506114185016250635_n.jpg", category: "automation" },
  { src: "/img/77396556_1558649470944243_1494412567605411840_n.jpg", category: "training" },
  { src: "/img/78893698_1563846150424575_6147374866719834112_n.jpg", category: "solar" },
  { src: "/img/79010386_1573164142826109_4458986251583750144_n.jpg", category: "electrical" },
  { src: "/img/79393582_1558478340961356_5869497281601863680_n.jpg", category: "telecom" },
  { src: "/img/79423417_1571977109611479_6353994241407975424_n.jpg", category: "automation" },
  { src: "/img/80233389_1573163932826130_8213752975072428032_n.jpg", category: "training" },
  { src: "/img/80781461_1581464675329389_5711376815059107840_n.jpg", category: "solar" },
  { src: "/img/95224395_1710937955715393_8858558012948742144_n.jpg", category: "electrical" },
  { src: "/img/95601798_1710938159048706_3097740682589110272_n.jpg", category: "telecom" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === "all" ? images : images.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="py-24 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="font-mono text-xs text-orange-600 dark:text-orange-500 uppercase tracking-widest block">
            [ Operations Gallery ]
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">Our Work in Action</h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-zinc-400 font-sans leading-relaxed">
            Real projects, real results — browse our archives of field installations.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`font-mono text-[10px] tracking-wider uppercase px-4 py-2 transition-all duration-200 cursor-pointer ${
                filter === cat.id
                  ? "bg-orange-600 dark:bg-orange-500 text-white dark:text-slate-950 font-bold"
                  : "bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 text-slate-600 dark:text-zinc-400 hover:border-orange-600/50 dark:hover:border-orange-500/50 hover:text-slate-900 dark:hover:text-zinc-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filtered.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setLightbox(img.src)}
              className="group relative aspect-square overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 cursor-pointer"
            >
              <img
                src={img.src}
                alt={`Electech - ${img.category}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/60 transition-all duration-300 flex items-center justify-center">
                <Maximize2 className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/90 flex items-center justify-center p-4 cursor-pointer backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-12 h-12 border border-slate-800 bg-slate-900 flex items-center justify-center text-white hover:text-cyan-455 transition-colors z-10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={lightbox}
            alt="Electech Project"
            className="max-w-full max-h-[90vh] object-contain border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

