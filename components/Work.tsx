import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, Github, ArrowLeft, Check, ArrowRight } from 'lucide-react';
import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Wireless Fingerprint Payment",
    category: "Fintech • Retail IoT",
    description: "A secure, device-free payment ecosystem allowing users to authenticate retail transactions using only their fingerprint.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop", // Abstract Tech Security
    tags: ["Flutter", "Node.js", "Firebase", "Biometric SDK", "Cloud API"],
    stats: ["Device-Free", "1-Step Checkout", "Secure Cloud"],
    longDescription: "We developed a secure, wireless, fingerprint-based payment system designed to revolutionize the retail checkout experience. Unlike traditional mobile wallets that require a phone or QR code scanning, this system authenticates transactions using just the user's fingerprint. The architecture features a dedicated mobile app for wallet management, a robust cloud backend for secure hash matching, and specialized retail hardware, shifting authentication from the user's device to the store environment for frictionless payments.",
    features: [
      "Biometric-Only Authentication at POS",
      "Device-Free Payment Experience",
      "Cloud-Based Fingerprint Matching",
      "Real-time Wallet Balance Sync",
      "Retailer-Side Hardware Integration"
    ]
  },
  {
    id: 2,
    title: "AI Interview Simulation",
    category: "EdTech • HR AI",
    description: "An AI-driven platform enabling automated recruiter interviews and realistic candidate practice sessions with real-time feedback.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop", // Abstract AI/Neural
    tags: ["AI/NLP", "WebRTC", "Speech-to-Text", "React", "Node.js"],
    stats: ["<2s Latency", "Real-time AI", "99.9% Uptime"],
    longDescription: "The AI Interview Assistant is a dual-purpose platform designed to streamline hiring for recruiters and build confidence for candidates. It conducts live, interactive interviews using an AI agent that adapts questions based on responses. For recruiters, it automates evaluation with detailed performance reports on sentiment and communication skills. For candidates, it provides a safe, realistic environment to practice mock interviews, complete with actionable feedback on their performance.",
    features: [
      "Adaptive AI Interview Engine",
      "Real-time Speech-to-Text & Sentiment Analysis",
      "Automated Candidate Performance Reports",
      "Mock Interview Practice Mode",
      "Seamless ATS Integration"
    ]
  }
];

const Work: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="work" className="py-24 bg-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-gray-50 to-transparent rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 border-b border-gray-100 pb-8 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-cobalt"></div>
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Selected Work</h2>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Featured Projects</h2>
            <p className="text-gray-500 mt-2">Digital products that define industries.</p>
          </div>

          <button className="hidden md:flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-cobalt transition-colors group">
            View All Case Studies <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project) => (
            <Link key={project.id} to={`/work/${project.id}`} className="block group cursor-pointer">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image Container */}
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 bg-gray-100">
                  <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-colors z-10" />
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: hoveredProject === project.id ? 1.05 : 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />

                  {/* Overlay Links */}
                  <div className="absolute top-6 right-6 z-20 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-cobalt hover:text-white transition-colors">
                      <Github size={18} />
                    </div>
                    <div className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-cobalt hover:text-white transition-colors">
                      <ExternalLink size={18} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-cobalt font-medium text-sm tracking-wide mb-2 block">{project.category}</span>
                      <h3 className="text-3xl font-bold text-gray-900 group-hover:text-cobalt transition-colors">{project.title}</h3>
                    </div>
                    <motion.div
                      animate={{ x: hoveredProject === project.id ? 5 : 0 }}
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-cobalt group-hover:text-cobalt transition-colors"
                    >
                      <ArrowUpRight size={20} />
                    </motion.div>
                  </div>

                  <p className="text-gray-500 text-lg leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags & Stats */}
                  <div className="pt-4 flex flex-wrap gap-y-4 justify-between items-center border-t border-gray-100 mt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.stats.map((stat, i) => (
                        <span key={i} className="text-xs font-bold text-gray-900">
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 md:hidden">
          <button className="w-full py-4 border border-gray-200 rounded-xl font-bold text-gray-900 hover:bg-gray-50 transition-colors">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export const ProjectDetailPage: React.FC<{ project: Project; onBack: () => void }> = ({ project, onBack }) => {
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
          <ArrowLeft size={18} /> Back to Projects
        </button>
        <div className="font-bold text-gray-900 hidden md:block">{project.title}</div>
        <a href="#" className="flex items-center gap-2 text-xs font-bold bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-cobalt transition-colors">
          Visit Live <ExternalLink size={14} />
        </a>
      </div>

      {/* Hero Image */}
      <div className="h-[60vh] w-full relative">
        <div className="absolute inset-0 bg-gray-900/30 z-10" />
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 p-8 md:p-16 z-20 w-full bg-gradient-to-t from-black/80 to-transparent">
          <div className="max-w-7xl mx-auto">
            <span className="text-cobalt-light font-bold tracking-wider uppercase text-sm mb-4 block">{project.category}</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{project.title}</h1>
            <div className="flex flex-wrap gap-4">
              {project.stats.map((stat, i) => (
                <div key={i} className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white font-bold">
                  {stat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">The Challenge & Solution</h3>
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                {project.longDescription}
              </p>
            </div>

            <div className="h-px bg-gray-100 w-full" />

            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-5 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-6 h-6 rounded-full bg-cobalt/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="text-cobalt" />
                    </div>
                    <span className="text-gray-900 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mockup / Extra Image Placeholder */}
            <div className="w-full h-96 bg-gray-100 rounded-2xl overflow-hidden mt-8">
              <img src={`https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop`} className="w-full h-full object-cover grayscale opacity-80" alt="Process details" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            <div className="p-8 bg-gray-900 rounded-2xl text-white shadow-xl">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Key Stats</h3>
              <div className="space-y-6">
                {project.stats.map((stat, i) => (
                  <div key={i} className="pb-4 border-b border-gray-800 last:border-0 last:pb-0">
                    <div className="text-3xl font-bold text-white mb-1">{stat.split(' ')[0]}</div>
                    <div className="text-sm text-gray-400">{stat.split(' ').slice(1).join(' ')}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:border-cobalt hover:text-cobalt transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl">
              <h4 className="font-bold text-gray-900 mb-2">Need something similar?</h4>
              <p className="text-sm text-gray-500 mb-4">Let's discuss how we can build this for you.</p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-cobalt font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
              >
                Start a Project <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;