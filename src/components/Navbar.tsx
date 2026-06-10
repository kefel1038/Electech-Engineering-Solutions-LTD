"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Section tracking
      const sections = ["home", "about", "services", "projects", "roi", "contact"];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "ROI Calculator", href: "#roi", id: "roi" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 border-b ${
        scrolled
          ? "bg-industrial-950/95 backdrop-blur-md border-industrial-800 shadow-xl"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-hazard-orange overflow-hidden bg-industrial-900 flex items-center justify-center p-1">
              <img
                src="/img/electech-logo.svg"
                alt="Electech Logo"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="font-sans font-black tracking-widest text-white text-sm md:text-base uppercase">
              ELECTECH
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`text-xs font-mono tracking-wider uppercase transition-colors duration-200 relative py-2 ${
                  activeSection === link.id
                    ? "text-hazard-orange"
                    : "text-industrial-400 hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-hazard-orange" />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="bg-industrial-900 hover:bg-industrial-800 text-white border border-industrial-800 hover:border-hazard-orange font-mono text-xs tracking-wider uppercase px-5 py-2.5 transition-all duration-200 tech-corner"
            >
              <i className="fas fa-file-invoice mr-2 text-hazard-orange"></i> Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span
              className={`w-6 h-[2px] bg-white rounded transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-white rounded transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-white rounded transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bg-industrial-950 border-b border-industrial-800 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-5 bg-grid-pattern bg-industrial-900/40">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-mono tracking-widest uppercase py-1 border-b border-industrial-800/40 ${
                activeSection === link.id ? "text-hazard-orange font-bold" : "text-industrial-400"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-hazard-orange hover:bg-orange-600 text-industrial-950 font-mono text-sm font-bold tracking-widest uppercase py-3 mt-4"
          >
            <i className="fas fa-file-invoice mr-2"></i> Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
