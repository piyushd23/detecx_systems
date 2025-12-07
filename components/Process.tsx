import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useInView } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ProcessStep } from '../types';

const steps: ProcessStep[] = [
  {
    id: '01',
    number: '01',
    title: 'Discovery',
    description: 'We immerse ourselves in your world. Through workshops and data analysis, we uncover the core problem and the golden opportunity.'
  },
  {
    id: '02',
    number: '02',
    title: 'Design',
    description: 'Function meets form. We prototype, test, and refine high-fidelity interfaces that are as intuitive as they are beautiful.'
  },
  {
    id: '03',
    number: '03',
    title: 'Development',
    description: 'Clean code, robust architecture. Our engineering team brings the vision to life using cutting-edge scalable technologies.'
  },
  {
    id: '04',
    number: '04',
    title: 'Deployment',
    description: 'Launch is just the beginning. We ensure smooth rollout, monitor performance, and iterate for continuous growth.'
  }
];

// --- High Fidelity Graphics ---

const DiscoveryGraphic = () => (
  <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-white rounded-3xl overflow-hidden shadow-inner border border-gray-100">
    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
    
    {/* Scanning Radar */}
    <div className="relative w-64 h-64">
       <motion.div 
         className="absolute inset-0 border-2 border-dashed border-cobalt/30 rounded-full"
         animate={{ rotate: 360 }}
         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
       />
       <motion.div 
         className="absolute inset-8 border border-cobalt/20 rounded-full"
         animate={{ rotate: -360 }}
         transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
       />
       <motion.div 
         className="absolute inset-0 bg-gradient-to-tr from-cobalt/5 to-transparent rounded-full"
         animate={{ opacity: [0.5, 0.8, 0.5] }}
         transition={{ duration: 3, repeat: Infinity }}
       />
       
       {/* Scanner Line */}
       <motion.div 
         className="absolute top-1/2 left-1/2 w-[50%] h-[2px] bg-gradient-to-r from-cobalt to-transparent origin-left"
         style={{ top: '50%', left: '50%' }}
         animate={{ rotate: 360 }}
         transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
       />

       {/* Data Points Found */}
       {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-cobalt rounded-full shadow-lg shadow-cobalt/50"
            style={{ 
                top: `${20 + i * 20}%`, 
                left: `${30 + (i % 2) * 40}%` 
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
            transition={{ delay: i * 0.8, duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
          >
             <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap text-[10px] font-mono text-cobalt font-bold bg-white px-1 rounded shadow-sm">
                DATA_{i}4
             </div>
          </motion.div>
       ))}
       
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cobalt rounded-full shadow-xl z-10" />
    </div>
  </div>
);

const DesignGraphic = () => (
  <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-gray-50 rounded-3xl overflow-hidden border border-gray-100">
     {/* Grid Background */}
     <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
     
     <div className="relative w-72 h-96 perspective-1000">
         {/* Back Layers (Wireframe) */}
         <motion.div 
            className="absolute inset-0 bg-white border-2 border-gray-200 rounded-xl shadow-lg opacity-60"
            initial={{ rotateY: -10, rotateX: 5, z: -50 }}
            animate={{ rotateY: -10, rotateX: 5, z: -50 }}
         />
         
         {/* Mid Layer (Blueprint) */}
         <motion.div 
            className="absolute inset-0 bg-cobalt/5 border border-cobalt/30 rounded-xl shadow-xl backdrop-blur-sm flex flex-col p-4"
            initial={{ rotateY: -10, rotateX: 5, z: 0, x: 20, y: -20 }}
            animate={{ y: [-20, -25, -20] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
         >
            <div className="w-1/3 h-3 bg-cobalt/20 rounded mb-4" />
            <div className="flex gap-2 mb-4">
                <div className="w-1/2 h-20 bg-cobalt/10 rounded" />
                <div className="w-1/2 h-20 bg-cobalt/10 rounded" />
            </div>
            <div className="space-y-2">
                <div className="w-full h-2 bg-cobalt/10 rounded" />
                <div className="w-full h-2 bg-cobalt/10 rounded" />
                <div className="w-3/4 h-2 bg-cobalt/10 rounded" />
            </div>
         </motion.div>

         {/* Front Layer (UI) */}
         <motion.div 
            className="absolute inset-0 bg-white border border-gray-100 rounded-xl shadow-2xl p-4 flex flex-col"
            initial={{ rotateY: -10, rotateX: 5, z: 50, x: 40, y: -40, opacity: 0 }}
            animate={{ opacity: 1, y: [-40, -45, -40] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
         >
            <div className="flex items-center justify-between mb-4">
               <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cobalt to-purple-500" />
               <div className="w-4 h-4 rounded-full bg-gray-100" />
            </div>
            <div className="w-2/3 h-4 bg-gray-800 rounded mb-2" />
            <div className="w-1/2 h-2 bg-gray-300 rounded mb-6" />
            
            <div className="flex-1 bg-gray-50 rounded-lg border border-gray-100 p-2 relative overflow-hidden">
                <motion.div 
                   className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
                   animate={{ x: ['-100%', '100%'] }}
                   transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
            </div>
            
            <motion.div 
               className="absolute -right-6 top-10 bg-black text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg"
               initial={{ opacity: 0, x: -10 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 1 }}
            >
               8px GRID
            </motion.div>
         </motion.div>
     </div>
  </div>
);

const DevelopmentGraphic = () => (
  <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-[#0F1117] rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
     {/* Background Code Rain */}
     <div className="absolute inset-0 overflow-hidden opacity-20 font-mono text-[10px] text-cobalt p-4">
        {Array.from({ length: 10 }).map((_, i) => (
           <motion.div 
              key={i} 
              className="absolute top-0 w-4 break-words text-center"
              style={{ left: `${i * 10}%` }}
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "linear" }}
           >
              010101101010010101110
           </motion.div>
        ))}
     </div>

     {/* Central Processing Unit */}
     <div className="relative z-10 w-full max-w-xs">
        <div className="bg-[#1A1D24] rounded-xl border border-gray-700 p-6 shadow-2xl">
           <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-auto text-xs text-gray-500 font-mono">server.ts</span>
           </div>
           
           <div className="space-y-2 font-mono text-xs">
              <div className="flex gap-2">
                 <span className="text-purple-400">import</span> 
                 <span className="text-white">{`{ AI }`}</span> 
                 <span className="text-purple-400">from</span> 
                 <span className="text-green-400">'@detecx/core'</span>
              </div>
              <div className="h-2" />
              <div className="flex gap-2">
                 <span className="text-blue-400">async function</span> 
                 <span className="text-yellow-300">deploy</span><span className="text-gray-400">()</span> 
                 <span className="text-white">{`{`}</span>
              </div>
              
              <div className="pl-4 border-l border-gray-700 my-1">
                 <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-gray-400"
                 >
                    // Initializing sequence...
                 </motion.div>
                 <div className="flex gap-2 items-center">
                    <span className="text-purple-400">await</span>
                    <span className="text-blue-300">system.optimize</span><span className="text-white">();</span>
                    <motion.div 
                       className="w-1.5 h-4 bg-cobalt ml-1"
                       animate={{ opacity: [1, 0] }}
                       transition={{ duration: 0.8, repeat: Infinity }}
                    />
                 </div>
              </div>
              <span className="text-white">{`}`}</span>
           </div>
        </div>

        {/* Floating Abstract Cubes */}
        <motion.div 
           className="absolute -top-6 -right-6 w-12 h-12 bg-cobalt rounded-lg shadow-lg shadow-cobalt/50 border border-white/10"
           animate={{ y: [0, 10, 0], rotate: [0, 10, 0] }}
           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
           className="absolute -bottom-4 -left-4 w-8 h-8 bg-gray-700 rounded-lg border border-gray-600"
           animate={{ y: [0, -10, 0], rotate: [0, -10, 0] }}
           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
     </div>
  </div>
);

const DeploymentGraphic = () => (
  <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white rounded-3xl overflow-hidden border border-blue-100">
     {/* Expanding Ripples */}
     <div className="absolute inset-0 flex items-center justify-center">
        {[1, 2, 3].map((i) => (
           <motion.div
             key={i}
             className="absolute rounded-full border border-cobalt/30"
             initial={{ width: 0, height: 0, opacity: 0.8, borderWidth: 2 }}
             animate={{ width: 600, height: 600, opacity: 0, borderWidth: 0 }}
             transition={{ duration: 4, delay: i * 1, repeat: Infinity, ease: "easeOut" }}
           />
        ))}
     </div>

     {/* Central Rocket/Launch Metaphor */}
     <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.div 
           className="relative w-20 h-20 bg-gradient-to-tr from-cobalt to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cobalt/40"
           animate={{ y: [-10, 10, -10] }}
           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
           <motion.div
              className="absolute inset-0 bg-white/20 rounded-2xl"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
           />
           <CheckCircle2 className="w-10 h-10 text-white" />
        </motion.div>

        {/* Status Indicators */}
        <div className="mt-8 flex gap-3">
           <motion.div 
              className="px-4 py-2 bg-white border border-green-200 rounded-full shadow-sm flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
           >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-green-700 uppercase tracking-wide">Live</span>
           </motion.div>
           
           <motion.div 
              className="px-4 py-2 bg-white border border-blue-200 rounded-full shadow-sm flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
           >
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">Global</span>
           </motion.div>
        </div>
     </div>
  </div>
);

const getGraphic = (id: string) => {
  switch (id) {
    case '01': return <DiscoveryGraphic />;
    case '02': return <DesignGraphic />;
    case '03': return <DevelopmentGraphic />;
    case '04': return <DeploymentGraphic />;
    default: return null;
  }
};

// --- Wizard Component ---

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next

  // Hook into scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const isInView = useInView(containerRef, { amount: 0.3 });

  // Update active step based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const stepCount = steps.length;
    const targetStep = Math.min(stepCount - 1, Math.floor(latest * stepCount));
    
    if (targetStep !== activeStep) {
      setDirection(targetStep > activeStep ? 1 : -1);
      setActiveStep(targetStep);
    }
  });

  const scrollWindowToStep = (index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    
    const containerTop = container.offsetTop;
    const containerHeight = container.offsetHeight;
    const scrollableDistance = containerHeight - window.innerHeight;
    
    const segmentSize = scrollableDistance / steps.length;
    const targetScrollY = containerTop + (index * segmentSize) + (segmentSize * 0.5);

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      if (activeStep < steps.length - 1) {
        scrollWindowToStep(activeStep + 1);
      }
    }, 4500); 

    return () => clearInterval(timer);
  }, [activeStep, isInView]);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      scrollWindowToStep(activeStep + 1);
    }
  };

  const handlePrev = () => {
    if (activeStep > 0) {
      scrollWindowToStep(activeStep - 1);
    }
  };

  return (
    <section ref={containerRef} className="relative h-[220vh] hidden md:block bg-white">
      {/* Background Enhancements */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-white">
          {/* Technical overlay grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
          
          {/* Subtle gradient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cobalt/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent pointer-events-none" />

      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pb-20">
        <div className="max-w-7xl mx-auto px-6 w-full h-[80vh] flex flex-col">
          
          {/* Header */}
          <div className="mb-8 md:flex justify-between items-end border-b border-gray-100 pb-6 shrink-0 relative z-10 bg-white/50 backdrop-blur-sm">
             <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-[1px] bg-cobalt"></div>
                  <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Our Process</h2>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">How We Build</h2>
                <p className="text-gray-500 mt-2">The framework for excellence.</p>
             </div>
             <div className="hidden md:flex gap-2 mt-4 md:mt-0">
                {steps.map((step, index) => (
                  <button
                    key={step.id} 
                    onClick={() => scrollWindowToStep(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${activeStep === index ? 'w-12 bg-cobalt' : 'w-4 bg-gray-200 hover:bg-gray-300'}`}
                    aria-label={`Go to step ${step.title}`}
                  />
                ))}
             </div>
          </div>

          {/* Wizard Container */}
          <div className="bg-white rounded-[2rem] border border-gray-100 shadow-2xl shadow-gray-200/50 overflow-hidden flex-1 flex flex-col lg:flex-row relative z-10">
             
             {/* Left: Navigation & Text */}
             <div className="w-full lg:w-5/12 p-8 md:p-12 flex flex-col relative z-10 bg-white">
                
                {/* Step List */}
                <div className="flex flex-col gap-2 mb-8 overflow-y-auto max-h-[200px] lg:max-h-none lg:overflow-visible custom-scrollbar">
                   {steps.map((step, index) => (
                      <button 
                         key={step.id}
                         onClick={() => scrollWindowToStep(index)}
                         className={`flex-shrink-0 flex items-center gap-4 group text-left px-4 py-3 rounded-xl transition-all duration-300 ${activeStep === index ? 'bg-gray-50 border border-gray-200 shadow-sm' : 'hover:bg-gray-50 border border-transparent'}`}
                      >
                         <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${activeStep === index ? 'bg-cobalt text-white shadow-md shadow-cobalt/30 scale-110' : 'bg-gray-100 text-gray-400 group-hover:text-gray-600'}`}>
                            {activeStep > index ? <CheckCircle2 size={16} /> : step.number}
                         </div>
                         <span className={`font-medium transition-colors ${activeStep === index ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'}`}>
                            {step.title}
                         </span>
                      </button>
                   ))}
                </div>

                {/* Active Step Content */}
                <div className="flex-1 flex flex-col justify-center relative">
                   <AnimatePresence mode="wait">
                      <motion.div
                         key={activeStep}
                         initial={{ opacity: 0, x: direction * 20 }}
                         animate={{ opacity: 1, x: 0 }}
                         exit={{ opacity: 0, x: direction * -20 }}
                         transition={{ duration: 0.4, ease: "easeOut" }}
                         className="space-y-6"
                      >
                         <span className="inline-block px-3 py-1 bg-cobalt/5 text-cobalt text-xs font-bold rounded-full uppercase tracking-wider border border-cobalt/10">
                            Phase {steps[activeStep].number}
                         </span>
                         <h3 className="text-4xl font-bold text-gray-900 tracking-tight">{steps[activeStep].title}</h3>
                         <p className="text-lg text-gray-500 leading-relaxed">
                            {steps[activeStep].description}
                         </p>
                      </motion.div>
                   </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                <div className="mt-8 flex items-center gap-4">
                   <button 
                      onClick={handlePrev}
                      disabled={activeStep === 0}
                      className="p-4 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                   >
                      <ArrowLeft size={24} />
                   </button>
                   <div className="h-px flex-1 bg-gray-100" />
                   <button 
                      onClick={handleNext}
                      disabled={activeStep === steps.length - 1}
                      className="p-4 rounded-full bg-gray-900 text-white shadow-lg hover:bg-cobalt hover:shadow-cobalt/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                   >
                      <ArrowRight size={24} />
                   </button>
                </div>
             </div>

             {/* Right: Graphic Visualization */}
             <div className="w-full lg:w-7/12 bg-gray-50 p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-gray-100 flex flex-col justify-center items-center overflow-hidden relative">
                 <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />
                 <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      className="w-full h-full relative z-10"
                      initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                       {getGraphic(steps[activeStep].id)}
                    </motion.div>
                 </AnimatePresence>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const MobileProcess: React.FC = () => {
  return (
    <section className="py-24 bg-white relative md:hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
           <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-cobalt"></div>
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Our Process</h2>
           </div>
           <h2 className="text-4xl font-bold text-gray-900 mb-2">How We Build</h2>
           <p className="text-gray-500">The framework for excellence.</p>
        </div>
        <div className="space-y-8">
          {steps.map((step) => (
             <div key={step.id} className="bg-gray-50 border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                <div className="h-[300px] w-full relative p-6">
                   <div className="absolute inset-0">
                      {getGraphic(step.id)}
                   </div>
                </div>
                <div className="p-8 bg-white border-t border-gray-100">
                   <div className="flex items-center gap-3 mb-3">
                     <span className="w-8 h-8 rounded-full bg-cobalt text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-cobalt/20">
                       {step.number}
                     </span>
                     <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                   </div>
                   <p className="text-gray-500 text-sm leading-relaxed">
                     {step.description}
                   </p>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;