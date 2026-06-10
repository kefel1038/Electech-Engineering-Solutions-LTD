"use client";

export default function Footer() {
  return (
    <footer className="bg-industrial-950 border-t border-industrial-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-hazard-orange overflow-hidden bg-industrial-900 flex items-center justify-center p-1">
                <img src="/img/electech-logo.png" alt="Electech Engineering Solutions LTD Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-sans font-extrabold tracking-widest text-white text-[10px] uppercase leading-tight">Electech Engineering<br />Solutions LTD</span>
            </div>
            <p className="text-xs text-industrial-400 font-sans leading-relaxed">
              Engineering Solutions Ltd delivers innovative electrical, energy, telecommunications, and automation solutions across Uganda and East Africa.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="https://wa.me/256787531336" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-industrial-800 flex items-center justify-center text-industrial-400 hover:text-hazard-orange hover:border-hazard-orange transition-all duration-200">
                <i className="fab fa-whatsapp text-xs" />
              </a>
              <a href="#" className="w-8 h-8 border border-industrial-800 flex items-center justify-center text-industrial-400 hover:text-hazard-orange hover:border-hazard-orange transition-all duration-200">
                <i className="fab fa-linkedin-in text-xs" />
              </a>
              <a href="#" className="w-8 h-8 border border-industrial-800 flex items-center justify-center text-industrial-400 hover:text-hazard-orange hover:border-hazard-orange transition-all duration-200">
                <i className="fab fa-twitter text-xs" />
              </a>
              <a href="#" className="w-8 h-8 border border-industrial-800 flex items-center justify-center text-industrial-400 hover:text-hazard-orange hover:border-hazard-orange transition-all duration-200">
                <i className="fab fa-facebook-f text-xs" />
              </a>
              <a href="#" className="w-8 h-8 border border-industrial-800 flex items-center justify-center text-industrial-400 hover:text-hazard-orange hover:border-hazard-orange transition-all duration-200">
                <i className="fab fa-youtube text-xs" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              {["Electrical Engineering", "Renewable Energy", "Telecommunications", "ICT Infrastructure", "Industrial Automation", "Research & Innovation"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-xs text-industrial-400 font-sans hover:text-hazard-orange transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Gallery", href: "#gallery" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-xs text-industrial-400 font-sans hover:text-hazard-orange transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-xs text-industrial-400 font-sans">
                <i className="fas fa-map-marker-alt mt-0.5 text-hazard-orange" />
                Mugema Road, Kampala, Uganda
              </li>
              <li>
                <a href="tel:+256787531336" className="flex items-center gap-3 text-xs text-industrial-400 font-sans hover:text-hazard-orange transition-colors">
                  <i className="fas fa-phone-alt text-hazard-orange" />
                  +256 787 531 336
                </a>
              </li>
              <li>
                <a href="mailto:info@electech.co.ug" className="flex items-center gap-3 text-xs text-industrial-400 font-sans hover:text-hazard-orange transition-colors">
                  <i className="fas fa-envelope text-hazard-orange" />
                  info@electech.co.ug
                </a>
              </li>
            </ul>
            <div className="pt-4 space-y-3">
              <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Stay Updated</h4>
              <form onSubmit={(e) => e.preventDefault()} className="flex border border-industrial-800">
                <input type="email" placeholder="Your email" required
                  className="flex-1 bg-industrial-900 text-white text-xs px-3 py-2 focus:outline-none placeholder:text-industrial-400 font-mono" />
                <button type="submit" className="bg-hazard-orange text-industrial-950 px-3 hover:bg-orange-600 transition-colors">
                  <i className="fas fa-paper-plane text-xs" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-industrial-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-mono text-industrial-400">
            &copy; {new Date().getFullYear()} Electech Engineering Solutions LTD. All rights reserved.
          </p>
          <div className="flex gap-6 text-[10px] font-mono text-industrial-400">
            <a href="#" className="hover:text-hazard-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-hazard-orange transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
