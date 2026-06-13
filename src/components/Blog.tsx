"use client";

import React, { useState } from "react";
import { BookOpen, Calendar, User, ArrowUpRight, Search } from "lucide-react";

interface PostItem {
  title: string;
  category: "Articles" | "Insights" | "Publications";
  date: string;
  author: string;
  excerpt: string;
  readTime: string;
}

const POSTS_DATA: PostItem[] = [
  {
    title: "Overcoming Phase Synchronization Noise in Modbus/TCP Substation Grids",
    category: "Publications",
    date: "June 2026",
    author: "Eng. Lubega Felix Ken",
    excerpt: "An engineering paper analyzing phase synchronization noise in municipal substation RCU relays. Includes register configurations for IEC 61850.",
    readTime: "12 min read"
  },
  {
    title: "Commercial Solar ROI Modeling: UGX vs USD Financing Analysis",
    category: "Articles",
    date: "May 2026",
    author: "Eng. Mukasa David",
    excerpt: "A financial modeling report dissecting the impact of forex volatility on commercial solar battery storage payback schedules in East Africa.",
    readTime: "8 min read"
  },
  {
    title: "Designing Resilient GPON Fiber Routes Across Rural Soil Formations",
    category: "Insights",
    date: "April 2026",
    author: "Eng. Namara Brenda",
    excerpt: "Best practices for underground fiber optic installations in clay and volcanic soil grids, covering bending ratios and OTDR diagnostics.",
    readTime: "6 min read"
  },
  {
    title: "AI Neural Network Load Diagnostics inside Jinja 33kV Substations",
    category: "Publications",
    date: "March 2026",
    author: "Dr. Okello Moses",
    excerpt: "Scientific research on training recurrent neural networks (LSTM) to forecast electricity load spikes, limiting substation transformer shutdowns.",
    readTime: "15 min read"
  },
  {
    title: "Micro-Grid Sync: Syncing Off-Grid Solar with Legacy Diesel Generators",
    category: "Insights",
    date: "February 2026",
    author: "Eng. Lubega Felix Ken",
    excerpt: "A technical architectural review detailing sync loops, microgrid controller configurations, and LFP battery charge float margins.",
    readTime: "10 min read"
  },
  {
    title: "The Security Implications of IoT Endpoints in Municipal SCADA Networks",
    category: "Articles",
    date: "January 2026",
    author: "Dr. Okello Moses",
    excerpt: "Practical cybersecurity procedures for shielding remote RTU telemetry channels, preventing TLS injection vectors in utility meters.",
    readTime: "7 min read"
  }
];

export default function Blog() {
  const [activeTab, setActiveTab] = useState<"All" | PostItem["category"]>("All");

  const filteredPosts = activeTab === "All"
    ? POSTS_DATA
    : POSTS_DATA.filter((p) => p.category === activeTab);

  return (
    <section id="blog" className="py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-4 py-1.5 rounded-full text-xs font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            Knowledge Base
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Blog & Publications
          </h2>
          <p className="text-sm md:text-base text-slate-655 dark:text-zinc-400 font-sans max-w-2xl mx-auto">
            Read technical whitepapers, infrastructure analysis, and system engineering breakthroughs written by our in-house engineering team.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center border-b border-slate-200 dark:border-slate-800 font-mono text-xs overflow-x-auto gap-2 pb-1.5 scrollbar-thin">
          <button
            onClick={() => setActiveTab("All")}
            className={`py-3 px-4 border-b-2 font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "All"
                ? "border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400"
                : "border-transparent text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
            }`}
          >
            All Publications
          </button>
          <button
            onClick={() => setActiveTab("Articles")}
            className={`py-3 px-4 border-b-2 font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "Articles"
                ? "border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400"
                : "border-transparent text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
            }`}
          >
            Articles
          </button>
          <button
            onClick={() => setActiveTab("Insights")}
            className={`py-3 px-4 border-b-2 font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "Insights"
                ? "border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400"
                : "border-transparent text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
            }`}
          >
            Technology Insights
          </button>
          <button
            onClick={() => setActiveTab("Publications")}
            className={`py-3 px-4 border-b-2 font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "Publications"
                ? "border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400"
                : "border-transparent text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
            }`}
          >
            Research Publications
          </button>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <div 
              key={index} 
              className="group border border-slate-200 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-900/20 p-6 tech-corner hover:bg-white dark:hover:bg-slate-900/40 hover:border-blue-600 dark:hover:border-cyan-400 hover:shadow-lg dark:hover:shadow-slate-950/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-slate-800 text-[9px] font-mono font-bold text-blue-600 dark:text-cyan-400 px-2.5 py-0.5 uppercase">
                    {post.category}
                  </span>
                  <span className="font-mono text-[9px] text-slate-400 dark:text-zinc-550 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-sans">
                  {post.excerpt}
                </p>
              </div>

              {/* Footer info & link */}
              <div className="pt-6 mt-5 border-t border-slate-150 dark:border-slate-850/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 dark:text-zinc-500">
                  <User className="w-3.5 h-3.5 text-blue-500" />
                  <span>{post.author}</span>
                </div>
                
                <a 
                  href="#contact" 
                  className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-450 hover:underline flex items-center gap-0.5"
                  title="Request PDF copy of publication"
                >
                  Request Copy
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
