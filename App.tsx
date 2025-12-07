import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate, useParams, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage';
import { AboutDetailPage } from './components/About';
import { ServiceDetailPage, services } from './components/Services';
import { ProjectDetailPage, projects } from './components/Work';
import LegalPage from './components/Legal';

// Wrapper for Service Detail to handle ID param
const ServiceWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.id === id);

  if (!service) return <Navigate to="/" />;

  return (
    <ServiceDetailPage
      service={service}
      onBack={() => navigate('/#services')}
    />
  );
};

// Wrapper for Project Detail to handle ID param
const ProjectWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // id is number in data but string in URL
  const project = projects.find(p => p.id === Number(id));

  if (!project) return <Navigate to="/" />;

  return (
    <ProjectDetailPage
      project={project}
      onBack={() => navigate('/#work')}
    />
  );
};

// Wrapper for About Detail
const AboutWrapper = () => {
  const navigate = useNavigate();
  return <AboutDetailPage onBack={() => navigate('/#about')} />;
};

// Wrapper for Legal Pages
const LegalWrapper = ({ type }: { type: 'privacy' | 'terms' }) => {
  const navigate = useNavigate();
  return <LegalPage type={type} onBack={() => navigate('/')} />;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  // Scroll to top on route change if not a hash link
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutWrapper />} />
        <Route path="/services/:id" element={<ServiceWrapper />} />
        <Route path="/work/:id" element={<ProjectWrapper />} />
        <Route path="/privacy" element={<LegalWrapper type="privacy" />} />
        <Route path="/terms" element={<LegalWrapper type="terms" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <main className="bg-white min-h-screen text-gray-900 selection:bg-cobalt selection:text-white">
        <AnimatedRoutes />
      </main>
    </BrowserRouter>
  );
};

export default App;