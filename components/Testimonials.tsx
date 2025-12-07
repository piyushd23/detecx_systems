import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "Detecx transformed our vague concept into a market-leading product. Their attention to detail is obsessive, in the best way possible.",
    author: "Elena Fisher",
    role: "CTO",
    company: "Nexus AI"
  },
  {
    id: '2',
    quote: "The team operates with a level of clarity and speed I haven't seen elsewhere. A truly premium engagement from start to finish.",
    author: "Marcus Thorne",
    role: "Founder",
    company: "Ventura Capital"
  }
];

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track scroll progress of the section relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms:
  // Column 1 moves slightly slower/upwards
  const yColumn1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  // Column 2 starts lower and moves upwards faster creates a staggered depth feel
  const yColumn2 = useTransform(scrollYProgress, [0, 1], [40, -80]);

  return (
    <section ref={containerRef} className="py-32 bg-white relative px-6 overflow-hidden">
      {/* Background Enhancements */}
      <div className="absolute inset-0 pointer-events-none z-0">
          {/* Subtle grid pattern to replace image texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
          
          {/* Subtle overlay to soften */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/50" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20">
           <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-cobalt"></div>
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Testimonials</h2>
           </div>
           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Client Stories</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {testimonials.map((t, index) => (
            <motion.div 
              key={t.id} 
              style={{ y: index % 2 === 0 ? yColumn1 : yColumn2 }}
              className="relative bg-white/70 backdrop-blur-sm p-8 rounded-3xl h-fit border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 group"
            >
              <Quote className="w-12 h-12 text-cobalt/20 mb-6 group-hover:text-cobalt/40 transition-colors" />
              <p className="text-2xl md:text-3xl font-light italic text-gray-800 mb-8 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 font-bold text-lg">
                    {t.author.charAt(0)}
                 </div>
                 <div>
                    <h4 className="text-gray-900 font-medium">{t.author}</h4>
                    <p className="text-sm text-gray-500">{t.role}, {t.company}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Strip (Simulated) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-32 pt-12 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale"
        >
           {/* Placeholders for logos - Text based for now but styled */}
           <div className="h-12 flex items-center justify-center text-xl font-bold font-serif text-gray-800 hover:text-cobalt hover:opacity-100 transition-all duration-300 cursor-default">VOGUE</div>
           <div className="h-12 flex items-center justify-center text-xl font-bold font-sans tracking-tighter text-gray-800 hover:text-cobalt hover:opacity-100 transition-all duration-300 cursor-default">stripe</div>
           <div className="h-12 flex items-center justify-center text-xl font-bold font-mono text-gray-800 hover:text-cobalt hover:opacity-100 transition-all duration-300 cursor-default">Uber</div>
           <div className="h-12 flex items-center justify-center text-xl font-bold italic text-gray-800 hover:text-cobalt hover:opacity-100 transition-all duration-300 cursor-default">Nike</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;