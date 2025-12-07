import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, Loader2, CheckCircle, BrainCircuit, RefreshCw, ChevronDown } from 'lucide-react';
import { analyzeProjectBrief } from '../services/geminiService';
import { GeminiAnalysisResponse } from '../types';
import { countries, Country } from '../data/countries';

const Contact: React.FC = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');

   // Phone State
   const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]); // Default to India
   const [phoneNumber, setPhoneNumber] = useState('');
   const [showCountryDropdown, setShowCountryDropdown] = useState(false);
   const dropdownRef = useRef<HTMLDivElement>(null);

   const [brief, setBrief] = useState('');
   const [isAnalyzing, setIsAnalyzing] = useState(false);
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [analysis, setAnalysis] = useState<GeminiAnalysisResponse | null>(null);
   const [error, setError] = useState<string | null>(null);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL;

      const fullPhone = phoneNumber ? `${selectedCountry.dial_code} ${phoneNumber}` : '';

      const data = {
         name,
         email,
         phone: fullPhone,
         brief,
         analysisSummary: analysis ? analysis.summary : 'No AI Analysis'
      };

      try {
         // Standard fetch to support services like SheetDB
         const response = await fetch(GOOGLE_SHEET_URL, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
         });

         if (!response.ok) {
            throw new Error('Network response was not ok');
         }

         alert("Request Sent! We'll be in touch shortly.");
         transition = {{ duration: 20, repeat: Infinity, ease: "linear" }
      }
               className = "absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-cobalt/10 via-blue-100/20 to-transparent rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"
         />
         </div >

   <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">

      {/* Left Column: Human Input */}
      <div className="flex flex-col justify-center">
         <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-cobalt"></div>
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Contact</h2>
         </div>
         <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">Let's build.</h2>
         <p className="text-lg text-gray-500 mb-10 max-w-md font-light leading-relaxed">
            Ready to start? Fill out the form or use our AI Architect to generate an instant technical roadmap for your idea.
         </p>

         <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                  <label className="text-xs text-gray-400 uppercase tracking-wider font-bold">Name</label>
                  <input
                     type="text"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     className="w-full bg-gray-50 border-b-2 border-transparent focus:border-cobalt rounded-lg px-4 py-3 text-gray-900 transition-all outline-none hover:bg-gray-100 focus:bg-white"
                     placeholder="John Doe"
                     required
                  />
               </div>
               <div className="space-y-2">
                  <label className="text-xs text-gray-400 uppercase tracking-wider font-bold">Email</label>
                  <input
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     className="w-full bg-gray-50 border-b-2 border-transparent focus:border-cobalt rounded-lg px-4 py-3 text-gray-900 transition-all outline-none hover:bg-gray-100 focus:bg-white"
                     placeholder="john@company.com"
                     required
                  />
               </div>
            </div>

            <div className="space-y-2" ref={dropdownRef}>
               <label className="text-xs text-gray-400 uppercase tracking-wider font-bold">Phone (Optional)</label>
               <div className="flex gap-2">
                  {/* Custom Dropdown */}
                  <div className="relative">
                     <button
                        type="button"
                        onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                        className="h-full bg-gray-50 border-b-2 border-transparent hover:bg-gray-100 focus:border-cobalt rounded-lg px-3 py-3 flex items-center gap-2 min-w-[100px] transition-all outline-none"
                     >
                        <span className="text-xl">{selectedCountry.flag}</span>
                        <span className="text-gray-700 font-medium text-sm">{selectedCountry.dial_code}</span>
                        <ChevronDown size={14} className="text-gray-400 ml-auto" />
                     </button>

                     {/* Dropdown Options */}
                     <AnimatePresence>
                        {showCountryDropdown && (
                           <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute top-full left-0 mt-2 w-64 max-h-60 bg-white rounded-xl shadow-lg border border-gray-100 overflow-y-auto z-50 custom-scrollbar"
                           >
                              {countries.map((country) => (
                                 <button
                                    key={country.code}
                                    type="button"
                                    onClick={() => {
                                       setSelectedCountry(country);
                                       setShowCountryDropdown(false);
                                    }}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-3 transition-colors"
                                 >
                                    <span className="text-xl">{country.flag}</span>
                                    <span className="text-sm font-medium text-gray-700">{country.name}</span>
                                    <span className="text-xs text-gray-400 ml-auto">{country.dial_code}</span>
                                 </button>
                              ))}
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>

                  {/* Numeric Input */}
                  <input
                     type="tel"
                     value={phoneNumber}
                     onChange={(e) => {
                        const val = e.target.value;
                        if (/^\d*$/.test(val)) setPhoneNumber(val);
                     }}
                     className="flex-1 bg-gray-50 border-b-2 border-transparent focus:border-cobalt rounded-lg px-4 py-3 text-gray-900 transition-all outline-none hover:bg-gray-100 focus:bg-white"
                     placeholder="000 000 0000"
                  />
               </div>
            </div>

            <div className="space-y-2">
               <label className="text-xs text-gray-400 uppercase tracking-wider font-bold flex items-center justify-between">
                  <span>Project Vision</span>
                  <span className="text-[10px] text-cobalt flex items-center gap-1 bg-cobalt/5 px-2 py-0.5 rounded-full border border-cobalt/10">
                     <Sparkles size={10} /> AI Enhanced
                  </span>
               </label>
               <div className="relative">
                  <textarea
                     value={brief}
                     onChange={(e) => setBrief(e.target.value)}
                     rows={4}
                     className="w-full bg-gray-50 rounded-xl border-0 p-4 text-gray-900 text-base focus:ring-2 focus:ring-cobalt/20 transition-all resize-none placeholder-gray-400 min-h-[160px]"
                     placeholder="E.g. I need a mobile app for a fitness brand that uses AI to track workouts..."
                     required
                  />
                  <div className="absolute bottom-3 right-3">
                     <button
                        type="button"
                        onClick={handleAnalyze}
                        disabled={!brief.trim() || isAnalyzing}
                        className="flex items-center gap-2 bg-white text-cobalt text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 hover:border-cobalt hover:bg-cobalt hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                     >
                        {isAnalyzing ? <Loader2 className="animate-spin w-3 h-3" /> : <BrainCircuit className="w-3 h-3" />}
                        {analysis ? "Re-Analyze" : "Analyze"}
                     </button>
                  </div>
               </div>
            </div>

            <button
               type="submit"
               disabled={isSubmitting}
               className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-black transition-all flex items-center justify-center gap-3 mt-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
            >
               {isSubmitting ? <Loader2 className="animate-spin" size={16} /> : <><Send size={16} /> Send Request</>}
            </button>
         </form>
      </div>

      {/* Right Column: AI System Dashboard */}
      <div className="relative h-full min-h-[500px] flex flex-col justify-center">
         <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-auto lg:h-[750px] bg-[#051025] rounded-[2.5rem] border border-gray-800 shadow-2xl overflow-hidden flex flex-col">

            {/* Dashboard Header */}
            <div className="h-14 border-b border-gray-800 bg-[#0F131C] px-6 flex items-center justify-between shrink-0">
               <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
               </div>
               <div className="text-[10px] font-mono text-gray-500 flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${isAnalyzing ? 'bg-cobalt animate-pulse' : 'bg-gray-600'}`} />
                  DETECX_AI_CORE_V2.4
               </div>
            </div>

            {/* Dashboard Content Area */}
            <div className="flex-1 relative p-6 md:p-8 overflow-hidden">

               {/* Background Grid */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />

               <AnimatePresence mode="wait">
                  {analysis ? (
                     <motion.div
                        key="result"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="relative z-10 h-full flex flex-col"
                     >
                        <div className="flex items-center justify-between mb-8">
                           <div>
                              <h3 className="text-white font-bold text-lg flex items-center gap-2">
                                 <CheckCircle className="text-green-500 w-5 h-5" />
                                 Analysis Complete
                              </h3>
                              <p className="text-gray-500 text-xs mt-1">Strategic roadmap generated.</p>
                           </div>
                           <button
                              onClick={resetAnalysis}
                              className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                              title="New Analysis"
                           >
                              <RefreshCw size={16} />
                           </button>
                        </div>

                        <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                           {/* Summary Card */}
                           <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-md">
                              <h4 className="text-[10px] font-bold text-cobalt uppercase tracking-widest mb-2">Strategy</h4>
                              <p className="text-sm text-gray-300 leading-relaxed font-light">"{analysis.summary}"</p>
                           </div>

                           {/* Stats Grid */}
                           <div className="grid grid-cols-2 gap-3">
                              <div className="p-4 rounded-xl bg-gray-800/30 border border-gray-800">
                                 <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Timeline</h4>
                                 <p className="text-white font-mono font-medium">{analysis.estimatedTimeline}</p>
                              </div>
                              <div className="p-4 rounded-xl bg-gray-800/30 border border-gray-800">
                                 <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Stack</h4>
                                 <div className="flex gap-1 overflow-hidden">
                                    {analysis.technicalStack.slice(0, 2).map((t, i) => (
                                       <span key={i} className="text-[10px] px-1.5 py-0.5 bg-gray-700 rounded text-gray-300 whitespace-nowrap">{t}</span>
                                    ))}
                                    {analysis.technicalStack.length > 2 && <span className="text-[10px] text-gray-500">+{analysis.technicalStack.length - 2}</span>}
                                 </div>
                              </div>
                           </div>

                           {/* Services */}
                           <div className="p-4 rounded-xl bg-cobalt/10 border border-cobalt/20">
                              <h4 className="text-[10px] font-bold text-cobalt-light uppercase tracking-widest mb-3">Recommended Scope</h4>
                              <div className="space-y-2">
                                 {analysis.suggestedServices.map((s, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                       <div className="w-1 h-1 bg-cobalt rounded-full" />
                                       {s}
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </motion.div>
                  ) : (
                     <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative z-10 h-full flex flex-col items-center justify-center text-center"
                     >
                        <div className="relative w-24 h-24 mb-6">
                           {isAnalyzing ? (
                              <>
                                 <motion.div
                                    className="absolute inset-0 border-t-2 border-cobalt rounded-full"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                 />
                                 <motion.div
                                    className="absolute inset-2 border-r-2 border-cobalt/30 rounded-full"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                 />
                                 <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-xs font-mono text-cobalt animate-pulse">AI_PROC</span>
                                 </div>
                              </>
                           ) : (
                              <div className="w-full h-full rounded-full border border-gray-800 bg-gray-900/50 flex items-center justify-center">
                                 <BrainCircuit className="w-8 h-8 text-gray-600" />
                              </div>
                           )}
                        </div>

                        <h3 className="text-white font-bold text-xl mb-2">
                           {isAnalyzing ? "Processing Brief..." : "AI Project Architect"}
                        </h3>
                        <p className="text-gray-500 text-sm max-w-[200px] leading-relaxed">
                           {isAnalyzing
                              ? "Analyzing requirements and structuring technical roadmap."
                              : "Awaiting input. Enter a brief to generate a strategic plan."
                           }
                        </p>
                     </motion.div>
                  )}
               </AnimatePresence>
            </div>
         </div>
      </div>
   </div>
      </section >
   );
};

export default Contact;