"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot, Check, Loader2 } from "lucide-react";

interface ChatMessage {
  sender: "user" | "bot";
  text: string;
  timestamp: string;
}

const QUICK_REPLIES = [
  { text: "What services do you offer?", value: "services" },
  { text: "Are you licensed by the ERA?", value: "licensing" },
  { text: "How do I request a quote?", value: "quote" },
  { text: "Where are your offices located?", value: "location" }
];

export default function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [notification, setNotification] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize welcome message
  useEffect(() => {
    setMessages([
      {
        sender: "bot",
        text: "Hello! I am the Electech AI Systems Assistant. How can I help you coordinate your grid, telecom, or solar engineering designs today?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  }, []);

  // Auto scroll (scoped to container)
  useEffect(() => {
    const el = messagesEndRef.current;
    if (!el) return;
    const container = el.closest(".overflow-y-auto");
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: ChatMessage = { sender: "user", text, timestamp: userTime };
    
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    // Compute chatbot response based on query
    setTimeout(() => {
      let botResponse = "";
      const lower = text.toLowerCase();

      if (lower.includes("service") || lower.includes("offer") || lower.includes("do you do")) {
        botResponse = "Electech operates six core engineering divisions: 1. Electrical Substation EPC, 2. Metro Fiber Optic Deployments, 3. Commercial & Industrial Solar grids, 4. Industrial SCADA/PLC Automation, 5. Hardware Prototyping (IoT/AI), and 6. Technical Engineering Audits.";
      } else if (lower.includes("license") || lower.includes("era") || lower.includes("erb") || lower.includes("uipe")) {
        botResponse = "Yes. Electech is fully certified. We hold a Class A electrical installation license from the Electricity Regulatory Authority (ERA - LIC//E071/24). Our founder Eng. Lubega Felix Ken is registered under ERB-2024-18, and all designs are stamped by certified professional engineers.";
      } else if (lower.includes("quote") || lower.includes("price") || lower.includes("cost") || lower.includes("rfq")) {
        botResponse = "You can calculate preliminary cost metrics using our Online Quotation System located on this landing page. For customized bids, please fill out the B2B RFQ Intake Pipeline inside the Contact section or contact info@electech.co.ug.";
      } else if (lower.includes("location") || lower.includes("office") || lower.includes("find you") || lower.includes("kampala")) {
        botResponse = "Our primary corporate office is located on Mugema Road, Kampala, Uganda. We operate Mon – Fri: 8:00 AM – 5:00 PM. Site surveys and technical audits can be scheduled throughout East Africa.";
      } else {
        botResponse = "Thank you for that specification. I have logged your technical query. If you would like a direct follow-up from our Chief Substation Engineer, please submit your company details through the B2B Project Intake pipeline on this page.";
      }

      const botTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse, timestamp: botTime }]);
      setIsTyping(false);
    }, 1200);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputText);
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 select-none">
      
      {/* 1. COLLAPSED BADGE TRIGGER */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setNotification(false);
          }}
          className="relative w-14 h-14 bg-blue-600 dark:bg-cyan-400 hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-lg shadow-blue-500/30 text-white dark:text-slate-950 cursor-pointer"
          title="Open Engineering Support Assistant"
        >
          <MessageSquare className="w-6 h-6" />
          {notification && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[8px] text-white font-mono font-bold items-center justify-center">1</span>
            </span>
          )}
        </button>
      )}

      {/* 2. EXPANDED CHAT WIDGET */}
      {isOpen && (
        <div className="w-80 md:w-96 h-[480px] bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-2xl flex flex-col justify-between tech-corner animate-fadeIn">
          
          {/* Header */}
          <div className="bg-slate-900 text-white dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Bot className="w-5 h-5 text-blue-500 dark:text-cyan-400" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase font-mono tracking-wider">Electech Systems AI</h4>
                <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">Online // Technical Support</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Dialogue Window */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50 dark:bg-zinc-950/80 font-sans text-xs scrollbar-thin">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex flex-col max-w-[80%] ${
                  msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                }`}
              >
                <div 
                  className={`p-3 rounded-none border leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-850 text-slate-800 dark:text-zinc-300"
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[8px] text-slate-400 dark:text-zinc-550 font-mono mt-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 text-slate-400 dark:text-zinc-550 mr-auto max-w-[80%]">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-500" />
                <span className="font-mono text-[9px] uppercase tracking-widest">AI compiling diagnostics...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies Panel */}
          {messages.length === 1 && !isTyping && (
            <div className="px-4 py-2 border-t border-slate-150 dark:border-slate-850/60 bg-white dark:bg-zinc-950 text-[10px] space-y-1.5">
              <span className="font-mono text-[8px] text-slate-400 dark:text-zinc-500 uppercase tracking-wider block">Suggested Questions</span>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_REPLIES.map((reply, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(reply.text)}
                    className="border border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-cyan-400 bg-slate-50 dark:bg-zinc-900 text-slate-700 dark:text-zinc-350 px-2.5 py-1 text-left cursor-pointer transition-colors"
                  >
                    {reply.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chat Form Input */}
          <form 
            onSubmit={handleFormSubmit}
            className="border-t border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-3 flex gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about substations, fiber, audits..."
              className="flex-1 bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-slate-850 text-slate-900 dark:text-white px-3 py-2 text-xs font-mono focus:outline-none focus:border-blue-600 dark:focus:border-cyan-400 transition-colors"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-cyan-400 dark:hover:bg-cyan-500 text-white dark:text-slate-950 px-3.5 flex items-center justify-center cursor-pointer transition-colors shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
