"use client";

import React, { useState, useRef } from "react";
import { Briefcase, GraduationCap, ChevronRight, X, Upload, FileText, Check, Loader2, Award } from "lucide-react";

interface JobItem {
  id: string;
  title: string;
  type: string;
  location: string;
  department: string;
  desc: string;
}

const JOBS_DATA: JobItem[] = [
  {
    id: "job-01",
    title: "Senior Substation Project Manager",
    type: "Full-Time",
    location: "Kampala, Uganda (with travel)",
    department: "Electrical Engineering",
    desc: "Overseeing turnkey EPC construction of 33kV substations, utility integrations, and managing on-site engineering crews."
  },
  {
    id: "job-02",
    title: "SCADA & RTU Systems Integrator",
    type: "Full-Time",
    location: "Jinja, Uganda",
    department: "Industrial Automation",
    desc: "Programming PLC loops, remote RTU pings, and configuring SCADA visualization terminals for industrial clients."
  },
  {
    id: "job-03",
    title: "Graduate Engineer Trainee (Renewable Energy)",
    type: "1-Year Contract",
    location: "Kampala, Uganda",
    department: "Solar & Renewables",
    desc: "Assisting in site solar irradiance studies, drafting SLD schematics, and analyzing ROI financial payloads."
  },
  {
    id: "job-04",
    title: "Telecom Fiber Splicing Technician",
    type: "Contract-Based",
    location: "Regional (East Africa)",
    department: "Telecommunications",
    desc: "Deploying metro fiber lines, executing fusion splicing, and conducting OTDR optical diagnostics."
  }
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<JobItem | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState("");
  
  // Application Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [fileName, setFileName] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleApply = (job: JobItem) => {
    setSelectedJob(job);
    setSubmitted(false);
    setName("");
    setEmail("");
    setFileName("");
    setNotes("");
    setError("");
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.name.endsWith(".pdf") || file.name.endsWith(".docx")) {
        setFileName(file.name);
        setError("");
      } else {
        setError("Only PDF or DOCX resume formats are supported.");
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.name.endsWith(".pdf") || file.name.endsWith(".docx")) {
        setFileName(file.name);
        setError("");
      } else {
        setError("Only PDF or DOCX resume formats are supported.");
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !fileName) {
      setError("Please fill in all required fields and upload your resume.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTrackingId(`TALENT-EAC-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`);
    }, 1500);
  };

  return (
    <section id="careers" className="py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-4 py-1.5 rounded-full text-xs font-mono text-orange-600 dark:text-orange-500 uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5" />
            Talent Acquisition
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Careers at Electech
          </h2>
          <p className="text-sm md:text-base text-slate-650 dark:text-zinc-400 font-sans max-w-2xl mx-auto">
            Join a technical community solving infrastructure obstacles. We run formal internship drives, graduate engineer programs, and permanent technical roles.
          </p>
        </div>

        {/* Programs section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="border border-slate-200 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-900/20 p-6 tech-corner flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 font-mono text-xs text-orange-600 dark:text-orange-500 uppercase font-bold mb-3">
                <GraduationCap className="w-5 h-5" /> Graduate Engineer Trainee Program (GET)
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-sans">
                A structured 12-month program targeting newly graduated engineers. GET trainees rotate across Substation construction, Fiber backhaul splice audits, and SCADA automation coding.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-850 text-[10px] font-mono text-slate-550 dark:text-zinc-400">
              NEXT INTAKE: SEPTEMBER 2026
            </div>
          </div>

          <div className="border border-slate-200 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-900/20 p-6 tech-corner flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 font-mono text-xs text-orange-600 dark:text-orange-500 uppercase font-bold mb-3">
                <Award className="w-5 h-5" /> Technical Internship Portal
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-sans">
                A 3-month internship program designed for university undergraduates in Electrical, Telecom, or Automation departments seeking real-world site experience and regulatory align certifications.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-850 text-[10px] font-mono text-slate-550 dark:text-zinc-400">
              NEXT INTAKE: AUGUST 2026
            </div>
          </div>
        </div>

        {/* Current Vacancies list */}
        <div className="space-y-6 pt-8 border-t border-slate-200 dark:border-slate-900">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans text-center">
            Current Vacancies
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {JOBS_DATA.map((job) => (
              <div 
                key={job.id} 
                className="border border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-950/60 p-6 tech-corner flex flex-col justify-between hover:border-orange-600 dark:hover:border-orange-500 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-slate-800 text-[9px] font-mono font-bold text-orange-600 dark:text-orange-500 px-2 py-0.5 uppercase">
                      {job.department}
                    </span>
                    <span className="text-[9px] font-mono text-slate-400 dark:text-zinc-550">
                      {job.type}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white font-sans">
                    {job.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-zinc-450 leading-normal font-sans">
                    {job.desc}
                  </p>
                  <div className="text-[10px] font-mono text-slate-500 dark:text-zinc-500">
                    Location: {job.location}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-200 dark:border-slate-800/80">
                  <button
                    onClick={() => handleApply(job)}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-mono text-xs font-bold py-2.5 uppercase tracking-wider transition-colors flex items-center justify-center gap-1 group cursor-pointer"
                  >
                    Apply Now
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* JOBS MODAL DIALOG */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-lg bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 p-6 md:p-8 relative tech-corner shadow-2xl">
            
            {/* Close */}
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 p-1.5 border border-slate-200 dark:border-slate-800 hover:border-orange-600 dark:hover:border-orange-500 text-slate-500 dark:text-zinc-400 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              /* Success screen */
              <div className="py-8 space-y-6 text-center">
                <div className="w-14 h-14 border-2 border-orange-600 mx-auto flex items-center justify-center bg-orange-600/10">
                  <Check className="w-6 h-6 text-orange-500" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Application Received</h4>
                  <p className="text-[10px] font-mono text-slate-400 dark:text-zinc-500 uppercase">
                    TALENT PATH ID: <span className="text-orange-500 font-bold">{trackingId}</span>
                  </p>
                </div>
                <p className="text-xs text-slate-600 dark:text-zinc-400 font-sans leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong className="text-slate-900 dark:text-white">{name}</strong>. Your application dossier has been archived under our candidate queue. A recruitment manager will inspect your CV soon.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-zinc-350 font-mono text-xs px-6 py-2.5 uppercase tracking-wider cursor-pointer"
                  >
                    Close Portal
                  </button>
                </div>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-200 dark:border-slate-850 pb-3">
                  <span className="font-mono text-[9px] text-orange-600 dark:text-orange-500 uppercase tracking-widest block font-bold mb-0.5">
                    [ Candidate Intake ]
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Apply: {selectedJob.title}
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-zinc-500">
                    Dept: {selectedJob.department}
                  </span>
                </div>

                {error && (
                  <div className="border border-amber-500/50 bg-amber-500/5 p-3 text-xs text-amber-500 font-mono">
                    &gt; {error}
                  </div>
                )}

                <div className="space-y-4 text-xs">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 block">
                      Full Name <span className="text-orange-600 dark:text-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Okot John"
                      className="w-full bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-3 py-2.5 font-mono focus:outline-none focus:border-orange-600 dark:focus:border-orange-500 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 block">
                      Email Address <span className="text-orange-600 dark:text-orange-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. john.okot@gmail.com"
                      className="w-full bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-3 py-2.5 font-mono focus:outline-none focus:border-orange-600 dark:focus:border-orange-500 transition-colors"
                    />
                  </div>

                  {/* Resume Upload */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 block">
                      Resume CV Upload (.pdf / .docx) <span className="text-orange-600 dark:text-orange-500">*</span>
                    </label>
                    <div
                      onDragEnter={handleDrag}
                      onDragOver={handleDrag}
                      onDragLeave={handleDrag}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`border border-dashed p-4 text-center cursor-pointer select-none transition-colors relative ${
                        dragActive
                          ? "border-orange-500 bg-orange-500/5"
                          : fileName
                          ? "border-orange-600/50 bg-slate-50 dark:bg-zinc-900"
                          : "border-slate-250 dark:border-slate-800 hover:border-orange-600 dark:hover:border-orange-500 bg-slate-50 dark:bg-zinc-900"
                      }`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      
                      <div className="flex flex-col items-center justify-center space-y-1 text-slate-500 dark:text-zinc-400">
                        {fileName ? (
                          <>
                            <FileText className="w-6 h-6 text-orange-500" />
                            <span className="font-mono text-[10px] text-slate-850 dark:text-zinc-200 font-bold">{fileName}</span>
                            <span className="text-[8px] uppercase text-zinc-500">Resume attached</span>
                          </>
                        ) : (
                          <>
                            <Upload className="w-6 h-6 text-slate-400 dark:text-zinc-600" />
                            <span className="font-mono text-[9px]">Click or drag to upload CV</span>
                            <span className="text-[7px] uppercase">Accepts PDF or DOCX up to 10MB</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Short Note */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 block">
                      Cover Note / Core Technical Qualifications
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Outline your engineering registry tags, software capabilities, or site references..."
                      className="w-full bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-3 py-2.5 font-mono focus:outline-none focus:border-orange-600 dark:focus:border-orange-500 transition-colors placeholder:text-slate-400 dark:placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-850 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    disabled={isSubmitting}
                    className="flex-1 border border-slate-200 dark:border-slate-850 bg-slate-50 hover:bg-slate-100 dark:bg-zinc-900 dark:hover:bg-zinc-850 text-slate-650 dark:text-zinc-350 font-mono text-xs py-3 uppercase tracking-wider cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-mono text-xs font-bold py-3 uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        Submit CV Dossier
                        <Check className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
