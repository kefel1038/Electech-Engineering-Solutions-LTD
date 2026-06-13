"use client";

import React, { useState, useRef } from "react";
import { Check, ChevronRight, ChevronLeft, Upload, FileText, Loader2, Building2, Cpu, Globe, Mail } from "lucide-react";

interface FormState {
  companyName: string;
  email: string;
  country: string;
  vertical: string;
  category: "Substation" | "Fiber" | "Solar" | "SCADA" | "Audit" | "";
  // Contextual parameters
  targetCapacityMw: string;
  distanceKm: string;
  voltageLevelKv: string;
  rtuEndpoints: string;
  facilitySizeSqm: string;
  // Notes and file
  fileName: string;
  notes: string;
}

const initialFormState: FormState = {
  companyName: "",
  email: "",
  country: "Uganda",
  vertical: "",
  category: "",
  targetCapacityMw: "",
  distanceKm: "",
  voltageLevelKv: "",
  rtuEndpoints: "",
  facilitySizeSqm: "",
  fileName: "",
  notes: "",
};

const verticals = [
  { value: "Energy", label: "Energy & Power Utilities" },
  { value: "Telecom", label: "Telecommunications & Connectivity" },
  { value: "Infrastructure", label: "Public Infrastructure & Civil Works" },
  { value: "Manufacturing", label: "Manufacturing & Heavy Industry" },
  { value: "Mining", label: "Mining & Resource Extraction" },
  { value: "Smart Cities", label: "Smart Cities & Urban Systems" },
];

const categories = [
  { value: "Substation", label: "Electrical Substation (EPC)" },
  { value: "Fiber", label: "Fiber Deployment & Transmission" },
  { value: "Solar", label: "Commercial / Industrial Solar Grid" },
  { value: "SCADA", label: "SCADA Automation & RTU Systems" },
  { value: "Audit", label: "Technical Engineering Audit" },
];

const countries = ["Uganda", "Kenya", "Tanzania", "Rwanda", "Burundi", "South Sudan", "International"];

export default function RfqIntakePipeline() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState | "general" | "file", string>>>({});
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [rfqNumber, setRfqNumber] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const nextErrors: typeof errors = {};

    if (currentStep === 1) {
      if (!form.companyName.trim()) nextErrors.companyName = "Company Name is required";
      if (!form.email.trim()) {
        nextErrors.email = "Representative Email is required";
      } else if (!/\S+@\S+\.\S+/.test(form.email)) {
        nextErrors.email = "Please enter a valid business email address";
      }
      if (!form.country) nextErrors.country = "Please select a country";
      if (!form.vertical) nextErrors.vertical = "Please select your industry vertical";
    }

    if (currentStep === 2) {
      if (!form.category) {
        nextErrors.category = "Please select a project category";
      } else {
        if (form.category === "Solar" && (!form.targetCapacityMw || parseFloat(form.targetCapacityMw) <= 0)) {
          nextErrors.targetCapacityMw = "Enter a valid capacity in MW (greater than 0)";
        }
        if (form.category === "Fiber" && (!form.distanceKm || parseFloat(form.distanceKm) <= 0)) {
          nextErrors.distanceKm = "Enter a valid distance in KM (greater than 0)";
        }
        if (form.category === "Substation" && !form.voltageLevelKv) {
          nextErrors.voltageLevelKv = "Specify voltage level";
        }
        if (form.category === "SCADA" && (!form.rtuEndpoints || parseInt(form.rtuEndpoints) <= 0)) {
          nextErrors.rtuEndpoints = "Specify count of RTU endpoints";
        }
        if (form.category === "Audit" && (!form.facilitySizeSqm || parseFloat(form.facilitySizeSqm) <= 0)) {
          nextErrors.facilitySizeSqm = "Enter valid facility square meters";
        }
      }
    }

    if (currentStep === 3) {
      if (!form.notes.trim() || form.notes.trim().length < 20) {
        nextErrors.notes = "Project overview requires at least 20 characters of technical description";
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  // Drag and Drop File Handlers
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
      handleUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleUploadedFile(e.target.files[0]);
    }
  };

  const handleUploadedFile = (file: File) => {
    const validExtensions = [".dwg", ".pdf", ".xlsx"];
    const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
    
    if (validExtensions.includes(fileExtension)) {
      setForm((prev) => ({ ...prev, fileName: file.name }));
      setErrors((prev) => ({ ...prev, file: "" }));
    } else {
      setErrors((prev) => ({ ...prev, file: "Invalid file type. Only .dwg, .pdf, or .xlsx files are accepted." }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);

    // Simulate enterprise engineering workflow onboarding
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const generatedRfq = `RFQ-EAC-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
      setRfqNumber(generatedRfq);
    }, 1800);
  };

  const resetForm = () => {
    setForm(initialFormState);
    setStep(1);
    setSubmitted(false);
    setRfqNumber("");
    setErrors({});
  };

  return (
    <div className="w-full max-w-2xl mx-auto border border-zinc-850 bg-zinc-950/60 p-6 md:p-8 tech-corner backdrop-blur-md">
      
      {/* Visual Header */}
      <div className="flex justify-between items-center mb-8 border-b border-zinc-900 pb-4">
        <div>
          <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest block mb-0.5">
            [ LEAD CAPTURE ENGINE ]
          </span>
          <h4 className="text-lg font-bold text-zinc-50">Enterprise Project Intake</h4>
        </div>
        <span className="font-mono text-xs text-zinc-500 bg-zinc-900 border border-zinc-800 px-3 py-1 uppercase rounded-none">
          SYSTEM: v3.2
        </span>
      </div>

      {submitted ? (
        /* SUCCESS PAGE */
        <div className="py-8 space-y-6 text-center animate-fadeIn">
          <div className="w-16 h-16 border-2 border-emerald-500 mx-auto flex items-center justify-center bg-emerald-500/10">
            <Check className="w-8 h-8 text-emerald-400" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-zinc-50">Intake Pipeline Initiated</h3>
            <p className="text-xs text-zinc-400 font-mono">
              PORTAL ID: <span className="text-cyan-400 font-bold">{rfqNumber}</span>
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-6 text-left space-y-4 max-w-md mx-auto rounded-none font-mono text-[11px] leading-relaxed">
            <div className="text-zinc-200 uppercase font-semibold">// AUTOMATED NEXT PHASES:</div>
            <div>&gt; Pipeline route: Secure industrial cloud container created</div>
            <div>&gt; Engineering matching: Directing specifications to Senior Project Architect</div>
            <div>&gt; Turnaround benchmark: Response survey dispatched within 12 business hours</div>
            <div>&gt; Audit trails: Confirmation logs transmitted to: <span className="text-emerald-400 font-bold">{form.email}</span></div>
          </div>
          <div className="pt-4">
            <button
              onClick={resetForm}
              className="border border-zinc-800 hover:border-emerald-500 bg-zinc-900 text-zinc-300 font-mono text-xs px-6 py-3 tracking-wider uppercase transition-colors"
            >
              Initiate New Intake Pipeline
            </button>
          </div>
        </div>
      ) : (
        /* STEPPERS AND FORM CONTAINER */
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Progress Indicators */}
          <div className="flex justify-between items-center relative mb-8">
            <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-zinc-850 z-0" />
            
            {/* Step 1 Node */}
            <div className="relative z-10 flex flex-col items-center">
              <div
                className={`w-8 h-8 font-mono text-xs font-bold border flex items-center justify-center transition-colors ${
                  step >= 1
                    ? "bg-emerald-500 text-zinc-950 border-emerald-500"
                    : "bg-zinc-950 text-zinc-500 border-zinc-850"
                }`}
              >
                1
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400 mt-2 bg-zinc-950 px-1">
                Profile
              </span>
            </div>

            {/* Step 2 Node */}
            <div className="relative z-10 flex flex-col items-center">
              <div
                className={`w-8 h-8 font-mono text-xs font-bold border flex items-center justify-center transition-colors ${
                  step >= 2
                    ? "bg-emerald-500 text-zinc-950 border-emerald-500"
                    : "bg-zinc-950 text-zinc-500 border-zinc-850"
                }`}
              >
                2
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400 mt-2 bg-zinc-950 px-1">
                Architecture
              </span>
            </div>

            {/* Step 3 Node */}
            <div className="relative z-10 flex flex-col items-center">
              <div
                className={`w-8 h-8 font-mono text-xs font-bold border flex items-center justify-center transition-colors ${
                  step === 3
                    ? "bg-emerald-500 text-zinc-950 border-emerald-500"
                    : "bg-zinc-950 text-zinc-500 border-zinc-850"
                }`}
              >
                3
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400 mt-2 bg-zinc-950 px-1">
                Payload
              </span>
            </div>
          </div>

          {/* STEP 1 CONTENT: Corporate Profile */}
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Company Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-zinc-500" />
                    Company Name <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={form.companyName}
                    onChange={handleInputChange}
                    placeholder="e.g. Kakira Sugar Ltd"
                    className="w-full bg-zinc-900 border border-zinc-800 text-zinc-50 text-sm px-4 py-3 focus:outline-none focus:border-emerald-500 font-mono transition-colors"
                  />
                  {errors.companyName && <span className="text-[10px] text-amber-500 font-mono">{errors.companyName}</span>}
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-zinc-500" />
                    Representative Email <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder="e.g. technical-lead@kakirasugar.com"
                    className="w-full bg-zinc-900 border border-zinc-800 text-zinc-50 text-sm px-4 py-3 focus:outline-none focus:border-emerald-500 font-mono transition-colors"
                  />
                  {errors.email && <span className="text-[10px] text-amber-500 font-mono">{errors.email}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Country */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-zinc-500" />
                    Country Select <span className="text-emerald-500">*</span>
                  </label>
                  <select
                    name="country"
                    value={form.country}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-900 border border-zinc-800 text-zinc-50 text-sm px-4 py-3 focus:outline-none focus:border-emerald-500 font-mono transition-colors"
                  >
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  {errors.country && <span className="text-[10px] text-amber-500 font-mono">{errors.country}</span>}
                </div>

                {/* Industry Vertical */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-zinc-500" />
                    Industry Vertical <span className="text-emerald-500">*</span>
                  </label>
                  <select
                    name="vertical"
                    value={form.vertical}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-900 border border-zinc-800 text-zinc-50 text-sm px-4 py-3 focus:outline-none focus:border-emerald-500 font-mono transition-colors"
                  >
                    <option value="">-- Select Industry --</option>
                    {verticals.map((v) => (
                      <option key={v.value} value={v.value}>
                        {v.label}
                      </option>
                    ))}
                  </select>
                  {errors.vertical && <span className="text-[10px] text-amber-500 font-mono">{errors.vertical}</span>}
                </div>
              </div>

            </div>
          )}

          {/* STEP 2 CONTENT: Project Architecture Parameters */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Category Radio Group */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                  Project Category <span className="text-emerald-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {categories.map((cat) => (
                    <label
                      key={cat.value}
                      className={`border p-3 flex items-center gap-3 cursor-pointer select-none transition-all duration-200 ${
                        form.category === cat.value
                          ? "border-emerald-500 bg-emerald-500/5 text-zinc-50"
                          : "border-zinc-850 bg-zinc-900/30 text-zinc-400 hover:border-zinc-800 hover:text-zinc-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="category"
                        value={cat.value}
                        checked={form.category === cat.value}
                        onChange={() => {
                          setForm((prev) => ({ ...prev, category: cat.value as any }));
                          setErrors((prev) => ({ ...prev, category: "" }));
                        }}
                        className="sr-only"
                      />
                      <span
                        className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                          form.category === cat.value
                            ? "border-emerald-500 after:content-[''] after:w-1.5 after:h-1.5 after:bg-emerald-500 after:rounded-full"
                            : "border-zinc-700"
                        }`}
                      />
                      <span className="font-mono text-xs">{cat.label}</span>
                    </label>
                  ))}
                </div>
                {errors.category && <span className="text-[10px] text-amber-500 font-mono">{errors.category}</span>}
              </div>

              {/* Contextual Input Fields based on Category selection */}
              {form.category && (
                <div className="border border-zinc-850 bg-zinc-900/20 p-5 animate-slideDown space-y-4">
                  <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest border-b border-zinc-900 pb-2 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                    Category Specific Technical Inputs
                  </div>

                  {form.category === "Solar" && (
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                        Target Capacity (MW) <span className="text-emerald-500">*</span>
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        name="targetCapacityMw"
                        value={form.targetCapacityMw}
                        onChange={handleInputChange}
                        placeholder="e.g. 2.5"
                        className="w-full bg-zinc-900 border border-zinc-800 text-zinc-50 text-sm px-4 py-3 focus:outline-none focus:border-emerald-500 font-mono transition-colors"
                      />
                      {errors.targetCapacityMw && <span className="text-[10px] text-amber-500 font-mono">{errors.targetCapacityMw}</span>}
                    </div>
                  )}

                  {form.category === "Fiber" && (
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                        Deployment Distance (KM) <span className="text-emerald-500">*</span>
                      </label>
                      <input
                        type="number"
                        step="0.5"
                        name="distanceKm"
                        value={form.distanceKm}
                        onChange={handleInputChange}
                        placeholder="e.g. 45"
                        className="w-full bg-zinc-900 border border-zinc-800 text-zinc-50 text-sm px-4 py-3 focus:outline-none focus:border-emerald-500 font-mono transition-colors"
                      />
                      {errors.distanceKm && <span className="text-[10px] text-amber-500 font-mono">{errors.distanceKm}</span>}
                    </div>
                  )}

                  {form.category === "Substation" && (
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                        Voltage Level (kV) <span className="text-emerald-500">*</span>
                      </label>
                      <select
                        name="voltageLevelKv"
                        value={form.voltageLevelKv}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-900 border border-zinc-800 text-zinc-50 text-sm px-4 py-3 focus:outline-none focus:border-emerald-500 font-mono transition-colors"
                      >
                        <option value="">-- Select Grid Voltage --</option>
                        <option value="11kV">11kV (Distribution)</option>
                        <option value="33kV">33kV (Primary Distribution)</option>
                        <option value="132kV">132kV (Sub-transmission)</option>
                        <option value="220kV">220kV (Transmission)</option>
                        <option value="Other">Other / Custom</option>
                      </select>
                      {errors.voltageLevelKv && <span className="text-[10px] text-amber-500 font-mono">{errors.voltageLevelKv}</span>}
                    </div>
                  )}

                  {form.category === "SCADA" && (
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                        Estimated Number of RTU Endpoints <span className="text-emerald-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="rtuEndpoints"
                        value={form.rtuEndpoints}
                        onChange={handleInputChange}
                        placeholder="e.g. 12"
                        className="w-full bg-zinc-900 border border-zinc-800 text-zinc-50 text-sm px-4 py-3 focus:outline-none focus:border-emerald-500 font-mono transition-colors"
                      />
                      {errors.rtuEndpoints && <span className="text-[10px] text-amber-500 font-mono">{errors.rtuEndpoints}</span>}
                    </div>
                  )}

                  {form.category === "Audit" && (
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                        Facility Size (m²) <span className="text-emerald-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="facilitySizeSqm"
                        value={form.facilitySizeSqm}
                        onChange={handleInputChange}
                        placeholder="e.g. 8500"
                        className="w-full bg-zinc-900 border border-zinc-800 text-zinc-50 text-sm px-4 py-3 focus:outline-none focus:border-emerald-500 font-mono transition-colors"
                      />
                      {errors.facilitySizeSqm && <span className="text-[10px] text-amber-500 font-mono">{errors.facilitySizeSqm}</span>}
                    </div>
                  )}
                </div>
              )}

            </div>
          )}

          {/* STEP 3 CONTENT: Payload & Documentation Upload */}
          {step === 3 && (
            <div className="space-y-5 animate-fadeIn">
              
              {/* Drag and Drop Upload zone */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                  Schematic Upload (Single-line diagram or Project brief)
                </label>
                <div
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border border-dashed p-6 text-center cursor-pointer select-none transition-all duration-300 relative ${
                    dragActive
                      ? "border-emerald-500 bg-emerald-500/5 text-zinc-50"
                      : form.fileName
                      ? "border-emerald-500/50 bg-zinc-900/40 text-zinc-300"
                      : "border-zinc-800 bg-zinc-900/20 text-zinc-500 hover:border-zinc-700 hover:text-zinc-400"
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".dwg,.pdf,.xlsx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  
                  <div className="flex flex-col items-center justify-center space-y-3">
                    {form.fileName ? (
                      <>
                        <FileText className="w-8 h-8 text-emerald-400 animate-pulse" />
                        <div className="space-y-1">
                          <p className="text-xs font-mono font-bold text-zinc-50">{form.fileName}</p>
                          <p className="text-[9px] text-zinc-500 font-mono uppercase">Click or Drag to swap document</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <Upload className="w-8 h-8 text-zinc-600 group-hover:text-zinc-500" />
                        <div className="space-y-1">
                          <p className="text-xs font-mono">
                            Drag & drop or <span className="text-emerald-400 font-bold">browse</span>
                          </p>
                          <p className="text-[9px] text-zinc-600 font-mono uppercase">
                            Accepts .dwg, .pdf, .xlsx up to 20MB
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                {errors.file && <span className="text-[10px] text-amber-500 font-mono">{errors.file}</span>}
              </div>

              {/* Technical description / Notes */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                  Project Technical Overview & Requirements <span className="text-emerald-500">*</span>
                </label>
                <textarea
                  name="notes"
                  rows={4}
                  value={form.notes}
                  onChange={handleInputChange}
                  placeholder="Outline key mechanical parameters, voltage demands, specific load profiles, fiber paths, or SCADA controller systems..."
                  className="w-full bg-zinc-900 border border-zinc-800 text-zinc-50 text-sm px-4 py-3 focus:outline-none focus:border-emerald-500 font-mono transition-colors placeholder:text-zinc-600"
                />
                {errors.notes ? (
                  <span className="text-[10px] text-amber-500 font-mono">{errors.notes}</span>
                ) : (
                  <span className="text-[9px] text-zinc-500 font-mono block text-right">
                    Min 20 characters
                  </span>
                )}
              </div>

            </div>
          )}

          {/* BUTTON FOOTER */}
          <div className="flex justify-between items-center pt-6 border-t border-zinc-900 mt-8">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                disabled={isSubmitting}
                className="flex items-center gap-1.5 border border-zinc-800 hover:border-zinc-700 bg-zinc-900 hover:bg-zinc-850 text-zinc-400 hover:text-zinc-200 font-mono text-xs px-5 py-3 tracking-wider uppercase transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Back
              </button>
            ) : (
              <div /> // Spacer
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-mono font-bold text-xs px-5 py-3 tracking-wider uppercase transition-colors"
              >
                Continue <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-mono font-bold text-xs px-6 py-3 tracking-wider uppercase transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    Processing Specs...
                  </>
                ) : (
                  <>
                    Submit RFQ Payload
                    <Check className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            )}
          </div>

        </form>
      )}
    </div>
  );
}
