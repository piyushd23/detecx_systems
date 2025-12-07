import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Layers, Cpu, Globe, Plus } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 pt-20 bg-white">
      {/* Abstract Tech Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-gray-50/30">

        {/* 1. Base Grid & Perspective Plane */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_100%)] z-10" /> {/* Fade edges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        />

        {/* 2. Floating Geometric Artifacts (New Layer) */}
        <div className="absolute inset-0 z-0 opacity-40 max-w-[120rem] mx-auto">
          {/* Floating Square */}
          <motion.div
            className="absolute top-[20%] left-[10%] w-24 h-24 border border-gray-300/60 rounded-xl"
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 45, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Dashed Circle */}
          <motion.div
            className="absolute bottom-[25%] right-[10%] w-32 h-32 border border-dashed border-gray-300/60 rounded-full"
            animate={{
              y: [20, -20, 20],
              rotate: [0, -90, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Diamond */}
          <motion.div
            className="absolute top-[40%] right-[25%] w-16 h-16 border border-gray-200 bg-gray-50/50 backdrop-blur-sm rotate-45"
            animate={{
              y: [-30, 30, -30],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Plus Markers */}
          <motion.div
            className="absolute top-[15%] right-[15%] text-gray-300"
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Plus size={24} strokeWidth={1} />
          </motion.div>
          <motion.div
            className="absolute bottom-[20%] left-[20%] text-gray-300"
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          >
            <Plus size={24} strokeWidth={1} />
          </motion.div>
        </div>

        {/* 3. Central Rotating Geometry (The "Brain" / Core) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] lg:w-[50rem] lg:h-[50rem] z-0 opacity-60">
          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 border-[1px] border-gray-200 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 w-1 h-1 bg-gray-400 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-gray-400 rounded-full -translate-x-1/2 translate-y-1/2" />
          </motion.div>

          {/* Middle Dashed Ring */}
          <motion.div
            className="absolute inset-24 border-[1px] border-dashed border-gray-300 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner Tech Ring */}
          <motion.div
            className="absolute inset-48 border-[1px] border-gray-200 rounded-full flex items-center justify-center"
            animate={{ rotate: 180 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 w-px h-8 bg-gradient-to-b from-transparent to-cobalt/50" />
            <div className="absolute bottom-0 w-px h-8 bg-gradient-to-t from-transparent to-cobalt/50" />
            <div className="absolute left-0 h-px w-8 bg-gradient-to-r from-transparent to-cobalt/50" />
            <div className="absolute right-0 h-px w-8 bg-gradient-to-l from-transparent to-cobalt/50" />
          </motion.div>

          {/* Core Glow */}
          <motion.div
            animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 m-auto w-96 h-96 bg-gradient-to-tr from-cobalt/10 via-blue-100/10 to-transparent rounded-full blur-3xl"
          />
        </div>

        {/* 4. Floating Interactive Nodes */}
        <div className="absolute inset-0 max-w-[90rem] mx-auto pointer-events-none">
          {/* Node 1: Code */}
          <motion.div
            animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[25%] left-[10%] hidden xl:flex items-center gap-3 p-3 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/60 z-10"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-cobalt"><Code size={16} /></div>
            <div className="flex flex-col gap-1">
              <div className="w-16 h-1.5 bg-gray-200 rounded-full" />
              <div className="w-10 h-1.5 bg-gray-100 rounded-full" />
            </div>
          </motion.div>

          {/* Node 2: CPU/Processing */}
          <motion.div
            animate={{ y: [15, -15, 15], x: [5, -5, 5] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[30%] right-[10%] hidden xl:flex items-center gap-3 p-3 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/60 z-10"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-500"><Cpu size={16} /></div>
            <div className="flex flex-col gap-1">
              <div className="w-12 h-1.5 bg-gray-200 rounded-full" />
              <div className="flex gap-1">
                <div className="w-2 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <div className="w-2 h-1.5 bg-gray-200 rounded-full" />
                <div className="w-2 h-1.5 bg-gray-200 rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Node 3: Global/Network */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[18%] right-[20%] hidden lg:flex items-center gap-2 p-2 px-3 bg-white/60 backdrop-blur-sm rounded-full border border-gray-100 z-0"
          >
            <Globe size={12} className="text-gray-400" />
            <span className="text-[10px] font-mono text-gray-400">NET_V2</span>
          </motion.div>
        </div>

        {/* 5. Vertical Data Streams (Enhanced) */}
        <div className="absolute inset-0 flex justify-between px-8 lg:px-20 opacity-20 pointer-events-none max-w-[100rem] mx-auto">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-px h-full bg-gradient-to-b from-transparent via-gray-200/50 to-transparent relative overflow-hidden hidden sm:block">
              <motion.div
                animate={{ top: ['-20%', '120%'] }}
                transition={{
                  duration: Math.random() * 3 + 3, // Random speed between 3s and 6s
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 5 // Random delay
                }}
                className="absolute top-0 w-full h-32 bg-gradient-to-b from-transparent via-cobalt to-transparent opacity-40"
              />
            </div>
          ))}
        </div>

      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl xl:max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 backdrop-blur-md border border-gray-200/50 text-xs font-medium text-gray-500 mb-6 uppercase tracking-wider shadow-sm ring-1 ring-gray-100"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cobalt opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cobalt"></span>
          </span>
          System Online v3.0
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1] relative"
        >
          We build the future of <br className="hidden md:block" />
          <span className="relative inline-block">
            <span className="relative z-10">digital interaction.</span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute bottom-2 left-0 h-4 bg-cobalt/10 -z-10 -rotate-1"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-10 font-normal leading-relaxed"
        >
          Detecx Systems fuses artistic vision with engineering precision to craft digital experiences that define brands.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-full font-medium overflow-hidden shadow-xl shadow-cobalt/10 hover:shadow-cobalt/20"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="relative z-10">Start a Project</span>
          <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-cobalt transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;