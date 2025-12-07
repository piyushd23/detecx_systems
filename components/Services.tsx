import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, Palette, Code2, BrainCircuit, ArrowUpRight, ArrowLeft, Check, Layers, Zap } from 'lucide-react';
import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'strategy',
    title: 'Product Strategy',
    description: 'We define the roadmap for your digital success, aligning business goals with user needs.',
    icon: Cpu,
    bgImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop', // Meeting/Strategy
    longDescription: 'Great products don’t happen by accident. Our strategy phase is the bedrock of your success. We dive deep into market research, competitive analysis, and user behavior to define a clear, actionable roadmap. We identify the "why" before we build the "what," ensuring every feature aligns with your core business objectives.',
    features: ['Market & Competitor Analysis', 'User Persona Development', 'Product Roadmapping', 'KPI Definition & Tracking', 'Go-to-Market Strategy'],
    technologies: ['Miro', 'FigJam', 'Notion', 'Mixpanel']
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description: 'Crafting intuitive, accessible, and beautiful interfaces that users love to interact with.',
    icon: Palette,
    bgImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop', // Abstract Design/Colors
    longDescription: 'We believe design is not just how it looks, but how it works. Our design team creates pixel-perfect, accessible, and intuitive interfaces that guide users effortlessly through your product. From low-fidelity wireframes to high-fidelity prototypes and comprehensive design systems, we ensure consistency and delight at every touchpoint.',
    features: ['User Research & Testing', 'Wireframing & Prototyping', 'Design Systems', 'Interaction Design', 'Accessibility Compliance (WCAG)'],
    technologies: ['Figma', 'Adobe CC', 'Rive', 'Spline']
  },
  {
    id: 'dev',
    title: 'Full-stack Engineering',
    description: 'Scalable, secure, and high-performance code built on modern architectures.',
    icon: Code2,
    bgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop', // Coding
    longDescription: 'Our engineering philosophy centers on scalability, security, and performance. Whether it’s a complex web application, a mobile app, or a custom enterprise platform, we build robust backends and fluid frontends using modern architectures. We write clean, maintainable code that stands the test of time and scales with your business.',
    features: ['Custom Web App Development', 'API Design & Integration', 'Cloud Infrastructure (AWS/GCP)', 'Database Architecture', 'CI/CD Pipelines'],
    technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'Kubernetes']
  },
  {
    id: 'ai',
    title: 'AI Integration',
    description: 'Leveraging Gemini and next-gen models to make your applications smarter.',
    icon: BrainCircuit,
    bgImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop', // AI/Neural
    longDescription: 'Future-proof your business with intelligent automation. We integrate cutting-edge Large Language Models (LLMs) and machine learning algorithms directly into your applications. From intelligent chatbots and predictive analytics to automated content generation and RAG pipelines, we help you harness the power of AI to solve real problems.',
    features: ['LLM Integration (Gemini, OpenAI)', 'RAG Pipelines', 'Custom AI Agents', 'Predictive Analytics', 'Natural Language Processing'],
    technologies: ['Google Gemini API', 'LangChain', 'Pinecone', 'TensorFlow', 'Python']
  }
];

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Enhancements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 border-b border-gray-200 pb-8 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-cobalt"></div>
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Our Expertise</h2>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Comprehensive Solutions</h2>
            <p className="text-gray-500 mt-2">End-to-end capabilities for the digital age.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <Link key={service.id} to={`/services/${service.id}`} className="block">
              <motion.div
                className="group relative h-80 lg:h-96 rounded-2xl overflow-hidden cursor-pointer bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                initial="rest"
                whileHover="hover"
              >
                {/* Background Image */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                  variants={{
                    rest: { scale: 1, opacity: 0 },
                    hover: { scale: 1.05, opacity: 1 }
                  }}
                />

                {/* Rest State Background (Subtle Gradient) */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 group-hover:opacity-0 transition-opacity duration-300" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]" />

                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <div
                      className={`p-4 rounded-2xl bg-gray-50 text-gray-900 group-hover:bg-cobalt group-hover:text-white transition-colors duration-300 shadow-sm`}
                    >
                      <service.icon size={28} strokeWidth={1.5} />
                    </div>
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white group-hover:bg-white/10 group-hover:border-white/20 group-hover:text-white transition-colors">
                      <ArrowUpRight size={20} className="text-gray-400 group-hover:text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ServiceDetailPage: React.FC<{ service: Service; onBack: () => void }> = ({ service, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen relative"
    >
      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-cobalt transition-colors"
        >
          <ArrowLeft size={18} /> Back to Services
        </button>
        <div className="hidden md:block font-bold text-gray-900">Detecx.</div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[50vh] lg:h-[60vh] w-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={service.bgImage}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/60" />
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="text-center max-w-4xl relative z-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-8 mx-auto"
            >
              <service.icon size={14} />
              Service
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight"
            >
              {service.title}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed"
            >
              {service.description}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Main Column */}
          <div className="lg:col-span-8 space-y-16">
            <div>
              <h3 className="text-sm font-bold text-cobalt uppercase tracking-widest mb-6 flex items-center gap-2">
                <Layers size={16} /> Our Approach
              </h3>
              <p className="text-xl text-gray-800 leading-relaxed font-light">
                {service.longDescription}
              </p>
            </div>

            <div className="h-px bg-gray-100" />

            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Zap size={16} /> Capabilities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((f, i) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100"
                  >
                    <div className="w-5 h-5 rounded-full bg-cobalt/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-cobalt" />
                    </div>
                    <span className="text-gray-700 font-medium">{f}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 bg-gray-900 rounded-3xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cobalt/20 rounded-full blur-3xl" />
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2 relative z-10">
                <Cpu size={16} /> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {service.technologies.map(t => (
                  <span key={t} className="px-3 py-1.5 rounded-lg border border-gray-700 bg-gray-800 text-gray-300 text-sm hover:border-cobalt transition-colors cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 bg-cobalt rounded-3xl text-white text-center">
              <h3 className="font-bold text-xl mb-4">Ready to start?</h3>
              <p className="text-blue-100 mb-8 text-sm">Let's discuss how we can help you achieve your goals with {service.title}.</p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-3 bg-white text-cobalt rounded-xl font-bold hover:bg-blue-50 transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;