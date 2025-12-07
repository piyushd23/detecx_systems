import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  isVisible?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isVisible = true }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll spy interactions
  useEffect(() => {
    if (!isVisible || location.pathname !== '/') return;

    // Observe all main sections to determine which one is active
    const sections = ['home', 'about', 'services', 'work', 'process', 'testimonials', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting entry
        const visibleSection = entries.find(entry => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -80% 0px"
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isVisible, location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu if open

    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      setActiveSection(id);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Work', id: 'work' },
    { name: 'Process', id: 'process' }
  ];

  if (!isVisible) return null;

  return (
    <>
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between md:justify-center items-center pointer-events-none">

        {/* Mobile Logo (Visible only on small screens when not in center pill) */}
        <div className="md:hidden pointer-events-auto">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center gap-2 text-gray-900 font-bold tracking-tight text-lg">
            <img src="/logo.png" alt="Detecx Systems Logo" className="w-8 h-8 object-contain" />
            Detecx Systems
          </a>
        </div>

        {/* Desktop / Core Nav Pill */}
        <div className="pointer-events-auto bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-full px-4 md:px-6 md:pl-8 py-2 md:py-3 flex items-center gap-4 md:gap-8 shadow-lg shadow-gray-200/50 transition-all duration-300">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="hidden md:flex items-center gap-2 text-gray-900 font-bold tracking-tight text-lg mr-4"
          >
            <img src="/logo.png" alt="Detecx Systems Logo" className="w-8 h-8 object-contain" />
            Detecx Systems
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = location.pathname === '/' && activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${isActive ? 'text-cobalt' : 'text-gray-500 hover:text-cobalt hover:bg-gray-50'
                    }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-cobalt/5 rounded-full border border-cobalt/10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <button
            onClick={(e) => handleNavClick(e as any, 'contact')}
            className={`hidden md:block text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-300 ${location.pathname === '/' && activeSection === 'contact'
              ? 'bg-cobalt text-white shadow-lg shadow-cobalt/30'
              : 'bg-gray-900 text-white hover:bg-cobalt'
              }`}
          >
            Let's Talk
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-100/50 hover:bg-gray-200/50 text-gray-900 transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl pt-28 px-6 pb-12 flex flex-col md:hidden"
          >
            <div className="flex flex-col gap-6 max-w-sm mx-auto w-full">
              {links.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`text-4xl font-bold tracking-tight ${location.pathname === '/' && activeSection === link.id
                    ? 'text-cobalt'
                    : 'text-gray-900'
                    }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto max-w-sm mx-auto w-full space-y-6">
              <div className="h-px bg-gray-100 w-full" />
              <button
                onClick={(e) => handleNavClick(e as any, 'contact')}
                className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-cobalt transition-colors"
              >
                Start a Project <ArrowUpRight size={18} />
              </button>
              <div className="flex gap-4 justify-center text-sm text-gray-400 font-medium">
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
                <a href="#">Instagram</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;