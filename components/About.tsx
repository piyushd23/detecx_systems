import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Network, ArrowRight, ArrowLeft, Target, Heart, Zap, Users } from 'lucide-react';

interface AboutProps {
  onKnowMore: () => void;
}

const About: React.FC<AboutProps> = ({ onKnowMore }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Text Parallax
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);
  
  // Abstract Shape Parallax & Transformations
  const rotateCircle = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yBackShape = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const scalePulse = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.9, 1.1, 0.9]);
  
  // UI Overlay Opacities
  const uiOpacity1 = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [0, 1, 0]);
  const uiOpacity2 = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);

  return (
    <section ref={containerRef} id="about" className="py-32 md:py-48 px-6 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px]" />
      </div>

      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gray-50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Text Side */}
        <motion.div style={{ opacity, y }} className="order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-cobalt"></div>
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Who We Are</h2>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-gray-900 mb-8">
            Architecting the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt to-cobalt-dark">digital backbone</span><br/> 
            of tomorrow.
          </h2>
          
          <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-xl mb-8">
            Detecx Systems creates digital products that feel inevitable. We strip away the noise to reveal the essential, combining human-centric design with robust, scalable technology.
          </p>

          <button 
            onClick={onKnowMore}
            className="group flex items-center gap-2 text-cobalt font-bold tracking-wide hover:gap-3 transition-all duration-300"
          >
            Know More About Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Image Side - Tech Visuals */}
        <div className="relative h-[600px] w-full order-1 lg:order-2 flex items-center justify-center">
           
           {/* Parallax Background Shapes */}
           <motion.div 
             style={{ y: yBackShape, rotate: rotateCircle }}
             className="absolute top-0 right-0 w-96 h-96 border border-gray-200 border-dashed rounded-full z-0 opacity-40" 
           />
           <motion.div 
             style={{ y: yBackShape, scale: scalePulse }}
             className="absolute bottom-10 left-10 w-64 h-64 bg-cobalt/5 rounded-full z-0 blur-3xl" 
           />

           {/* Main Image Container */}
           <div className="relative w-full h-full lg:h-[550px] overflow-hidden rounded-2xl shadow-2xl shadow-gray-200/50 z-10 bg-gray-100">
             <motion.div 
                style={{ 
                  scale: useTransform(scrollYProgress, [0.2, 0.8], [1.15, 1])
                }}
                className="absolute inset-0"
              >
                {/* Tech-focused image */}
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop" 
                  alt="Tech Innovation Lab" 
                  className="w-full h-full object-cover grayscale contrast-125 opacity-90 transition-all duration-700"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cobalt/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-black/20" />
              </motion.div>
              
              {/* HUD / Tech Overlays */}
              <div className="absolute inset-0 pointer-events-none">
                  {/* Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
                  
                  {/* Animated Markers */}
                  <motion.div 
                    style={{ opacity: uiOpacity1, top: '25%', left: '20%' }}
                    className="absolute flex flex-col gap-1"
                  >
                     <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                        <span className="text-[10px] font-mono text-white/90 tracking-widest bg-black/20 backdrop-blur-sm px-1 rounded">SYS_OP</span>
                     </div>
                     <div className="w-16 h-[1px] bg-white/40" />
                  </motion.div>

                  <motion.div 
                    style={{ opacity: uiOpacity2, bottom: '30%', right: '20%' }}
                    className="absolute flex items-center gap-3"
                  >
                     <div className="text-right">
                        <div className="text-[10px] font-mono text-white/90 tracking-widest">DATA_STREAM</div>
                        <div className="text-[8px] font-mono text-cobalt-light">SYNCING...</div>
                     </div>
                     <Network className="w-5 h-5 text-white/80" />
                  </motion.div>

                  {/* Corner Brackets */}
                  <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-white/30 rounded-tl-lg" />
                  <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-white/30 rounded-br-lg" />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export const AboutDetailPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const values = [
    {
      title: "Radical Precision",
      description: "We don't do 'approximate'. Every pixel, every line of code, and every strategy is calculated for maximum impact.",
      icon: Target
    },
    {
      title: "Human-Centric Tech",
      description: "Technology is the vehicle, not the destination. We build systems that amplify human potential, not replace it.",
      icon: Heart
    },
    {
      title: "Relentless Innovation",
      description: "We constantly challenge the status quo. If there's a better, faster, or smarter way to do it, we will find it.",
      icon: Zap
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen relative"
    >
      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
         <button 
           onClick={onBack}
           className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-cobalt transition-colors"
         >
           <ArrowLeft size={18} /> Back to Home
         </button>
         <div className="font-bold text-gray-900 hidden md:block">About Detecx.</div>
      </div>

      {/* Hero Section */}
      <div className="relative py-24 px-6 border-b border-gray-100 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
           <motion.h1 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
           >
             We Are Builders.
           </motion.h1>
           <motion.p 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.1 }}
             className="text-xl text-gray-500 max-w-2xl mx-auto font-light"
           >
             A collective of designers, engineers, and strategists obsessed with the future of digital interaction.
           </motion.p>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-24 px-6 max-w-4xl mx-auto">
         <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-cobalt"></div>
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Our Story</h2>
         </div>
         <div className="prose prose-lg prose-gray">
            <p className="text-2xl text-gray-800 leading-relaxed font-light mb-8">
               Founded in 2024, Detecx Systems emerged from a simple observation: the digital landscape was becoming noisy, cluttered, and disconnected from human needs.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
               We saw businesses struggling to navigate the rapid evolution of AI and web technologies, often resulting in bloated products that confused users rather than serving them. We believed there was a better way—a way to fuse artistic minimalism with rigorous engineering.
            </p>
            <p className="text-gray-500 leading-relaxed">
               Today, we function as a high-precision strike team for companies ready to define their category. We don't just build websites or apps; we build digital ecosystems that scale, adapt, and perform. Our studio culture is built on transparency, deep collaboration, and an unwavering commitment to quality.
            </p>
         </div>
      </div>

      {/* Values Grid */}
      <div className="py-24 px-6 bg-gray-900 text-white relative overflow-hidden">
         {/* Background Glows */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cobalt/20 rounded-full blur-[100px]" />
         
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex items-center gap-3 mb-16">
                <div className="w-12 h-[1px] bg-cobalt"></div>
                <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Core Values</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {values.map((val, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="space-y-4"
                  >
                     <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                        <val.icon className="text-cobalt" />
                     </div>
                     <h3 className="text-2xl font-bold">{val.title}</h3>
                     <p className="text-gray-400 leading-relaxed">
                        {val.description}
                     </p>
                  </motion.div>
               ))}
            </div>
         </div>
      </div>

      {/* Team / Culture Teaser */}
      <div className="py-24 px-6 max-w-7xl mx-auto">
         <div className="bg-gray-50 rounded-3xl p-12 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-12">
            <div>
               <h2 className="text-3xl font-bold text-gray-900 mb-4">Join the Collective</h2>
               <p className="text-gray-500 mb-8 max-w-md">
                  We are always looking for visionary thinkers to join our team. If you are obsessed with quality and curious about the future, let's talk.
               </p>
               <button 
                  onClick={() => {
                     onBack();
                     setTimeout(() => {
                         document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                     }, 100);
                  }}
                  className="flex items-center gap-2 text-cobalt font-bold hover:gap-3 transition-all"
               >
                  View Open Positions <ArrowRight size={18} />
               </button>
            </div>
            <div className="flex -space-x-4">
               {[1,2,3,4].map(i => (
                  <div key={i} className="w-16 h-16 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center text-gray-400 font-bold">
                     <Users size={20} />
                  </div>
               ))}
               <div className="w-16 h-16 rounded-full border-4 border-white bg-cobalt text-white flex items-center justify-center font-bold">
                  +5
               </div>
            </div>
         </div>
      </div>

      {/* Footer CTA */}
      <div className="py-24 bg-white text-center">
         <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to build something great?</h2>
         <button 
            onClick={() => {
               onBack();
               setTimeout(() => {
                   document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
               }, 100);
            }}
            className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-cobalt transition-colors shadow-xl"
         >
            Start a Project
         </button>
      </div>

    </motion.div>
  );
};

export default About;