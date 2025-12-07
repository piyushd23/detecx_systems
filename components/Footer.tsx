import React from 'react';
import { ArrowUp, Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { services } from './Services';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback if element not found (e.g. dynamic content not ready)
        window.location.hash = id;
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Section: Brand & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">

          {/* Brand Column (2 cols wide) */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-2">
              <img src="/logo.png" alt="Detecx Systems Logo" className="w-10 h-10 object-contain" />
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Detecx Systems.</h2>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Architecting the digital future with precision, empathy, and relentless innovation.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-cobalt hover:border-cobalt transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-cobalt hover:border-cobalt transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-cobalt hover:border-cobalt transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-cobalt hover:border-cobalt transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* SITEMAP */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Explore</h3>
            <ul className="space-y-4">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About', id: 'about' },
                { label: 'Work', id: 'work' },
                { label: 'Process', id: 'process' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => link.id === 'home' ? scrollToTop() : handleScroll(link.id)}
                    className="text-gray-600 hover:text-cobalt transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-gray-600 hover:text-cobalt transition-colors text-sm font-medium text-left block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ACTION */}
          <div className="lg:col-span-1 flex flex-col justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Legal</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/privacy" className="text-gray-600 hover:text-cobalt text-sm text-left block">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-600 hover:text-cobalt text-sm text-left block">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-auto group flex items-center gap-2 text-xs font-bold text-gray-900 uppercase tracking-widest hover:text-cobalt transition-colors"
            >
              Back to Top
              <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-cobalt group-hover:border-cobalt group-hover:text-white transition-all">
                <ArrowUp size={14} />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Detecx Systems Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-xs text-gray-500 font-medium">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;