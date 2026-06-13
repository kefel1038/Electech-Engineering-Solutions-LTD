"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, Mail, Globe, Sun, Moon, MessageSquare, Menu, X, ChevronDown, Check } from "lucide-react";

const LANGUAGES = [
  { code: "EN", label: "English" },
  { code: "FR", label: "Français" },
  { code: "DE", label: "Deutsch" },
  { code: "ZH", label: "中文" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [langDropdown, setLangDropdown] = useState(false);
  const [activeLang, setActiveLang] = useState("EN");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Monitor scroll for styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple scroll spy mapping sections to navigation links
      const sections = [
        "home",
        "about",
        "services",
        "roi", // Quotation/ROI Section
        "projects",
        "industries",
        "research",
        "careers",
        "blog",
        "contact"
      ];
      const scrollPos = window.scrollY + 120;

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

  // Theme synchronization on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangDropdown(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About Us", href: "#about", id: "about" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Industries", href: "#industries", id: "industries" },
    { label: "Research & Innovation", href: "#research", id: "research" },
    { label: "Careers", href: "#careers", id: "careers" },
    { label: "Blog", href: "#blog", id: "blog" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* 1. TOP UTILITY HEADER BAR */}
      <div className="hidden md:flex h-10 bg-slate-900 text-slate-350 dark:bg-zinc-950 dark:text-zinc-400 border-b border-slate-800 text-[11px] font-mono select-none px-6 lg:px-12 items-center justify-between transition-colors">
        
        {/* Contact Info */}
        <div className="flex items-center gap-6">
          <a href="tel:+256787531336" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
            <Phone className="w-3.5 h-3.5 text-orange-500" />
            +256 787 531 336
          </a>
          <a href="mailto:info@electech.co.ug" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
            <Mail className="w-3.5 h-3.5 text-orange-500" />
            info@electech.co.ug
          </a>
        </div>

        {/* Action Widgets */}
        <div className="flex items-center gap-6">
          {/* Quick WhatsApp Link */}
          <a
            href="https://wa.me/256787531336"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-green-500 transition-colors font-bold"
          >
            <MessageSquare className="w-3.5 h-3.5 text-green-500 animate-pulse" />
            WhatsApp Quick Contact
          </a>

          {/* Lang Selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangDropdown(!langDropdown)}
              className="flex items-center gap-1 hover:text-orange-400 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-orange-500" />
              <span>{activeLang}</span>
              <ChevronDown className="w-3 h-3 text-zinc-500" />
            </button>
            {langDropdown && (
              <div className="absolute right-0 top-6 w-28 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xl rounded-none py-1 z-50 text-[10px]">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setActiveLang(l.code);
                      setLangDropdown(false);
                    }}
                    className="w-full px-3 py-1.5 flex items-center justify-between hover:bg-slate-100 dark:hover:bg-zinc-800 text-left font-mono cursor-pointer text-slate-800 dark:text-zinc-350"
                  >
                    <span>{l.label}</span>
                    {activeLang === l.code && <Check className="w-3 h-3 text-orange-500" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggler */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-1.5 cursor-pointer text-slate-400 hover:text-orange-400"
            title="Toggle color theme"
          >
            {theme === "dark" ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span>LIGHT_MODE</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-orange-600" />
                <span>DARK_MODE</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION NAVBAR */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          scrolled
            ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-slate-200 dark:border-slate-800/80 shadow-lg py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-orange-600 overflow-hidden bg-slate-100 flex items-center justify-center p-1.5 transition-transform group-hover:scale-105 duration-300 shadow-sm">
              <img
                src="/img/electech-logo.png"
                alt="Electech Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-sans font-extrabold tracking-widest text-slate-900 dark:text-zinc-50 text-[10px] md:text-sm uppercase leading-tight">
              Electech Engineering<br />
              <span className="text-[9px] md:text-xs text-orange-600 tracking-wider">Solutions LTD</span>
            </span>
          </a>

          {/* Navigation links - Desktop */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`text-[10px] xl:text-[11px] font-mono tracking-wider uppercase transition-colors relative py-1.5 ${
                  activeSection === link.id
                    ? "text-orange-600 dark:text-orange-500 font-bold"
                    : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-50"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-600 dark:bg-orange-500" />
                )}
              </a>
            ))}
          </div>

          {/* Action CTAs - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Quote Button */}
            <a
              href="#roi"
              className="bg-orange-600 hover:bg-orange-700 text-white font-mono text-xs tracking-wider uppercase px-5 py-3 transition-colors select-none font-bold"
            >
              Request Quote
            </a>
          </div>

          {/* Theme Switcher & Mobile Menu Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-500"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Hamburger menu trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-zinc-300 focus:outline-none"
              aria-label="Toggle navigation drawer"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </nav>

      {/* 3. MOBILE MENU DRAWER */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900 transition-all duration-300 overflow-y-auto max-h-[calc(100vh-4rem)] z-40 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-xs font-mono tracking-widest uppercase py-2 border-b border-slate-100 dark:border-slate-900/60 ${
                activeSection === link.id
                  ? "text-orange-600 dark:text-orange-500 font-bold"
                  : "text-slate-600 dark:text-zinc-400"
              }`}
            >
              {link.label}
            </a>
          ))}
          
          <div className="grid grid-cols-2 gap-3 pt-6">
            <a
              href="#roi"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-orange-600 hover:bg-orange-700 text-white font-mono text-[10px] font-bold tracking-widest uppercase py-3.5"
            >
              Request Quote
            </a>
            <a
              href="https://wa.me/256787531336"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full text-center border border-slate-200 dark:border-slate-800 hover:border-green-500 text-slate-800 dark:text-zinc-350 font-mono text-[10px] font-bold tracking-widest uppercase py-3.5 flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-green-500" /> WhatsApp
            </a>
          </div>

          <div className="flex flex-col gap-2 pt-4 text-[10px] font-mono text-slate-500 dark:text-zinc-500 border-t border-slate-100 dark:border-slate-900">
            <div>Tel: +256 787 531 336</div>
            <div>Email: info@electech.co.ug</div>
          </div>
        </div>
      </div>

    </header>
  );
}
