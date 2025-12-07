import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Work from './Work';
import Process, { MobileProcess } from './Process';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

const LandingPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Check for hash in URL and scroll to it
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            // If navigating to home without hash, scroll top
            window.scrollTo(0, 0);
        }
    }, [location]);

    const handleNavigate = (path: string) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    // Note: handleNavigate is kept if About still needs it 
    // About currently takes onKnowMore={() => handleNavigate('/about')} which is still correct (navigating to detail page)

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Navbar isVisible={true} />
            <div id="home" className="scroll-mt-32"><Hero /></div>
            <div id="about" className="scroll-mt-32">
                <About onKnowMore={() => handleNavigate('/about')} />
            </div>
            <div id="services" className="scroll-mt-32">
                <Services />
            </div>
            <div id="work" className="scroll-mt-32">
                <Work />
            </div>
            <div id="process" className="scroll-mt-32">
                <Process />
                <MobileProcess />
            </div>
            <div id="testimonials" className="scroll-mt-32"><Testimonials /></div>
            <div id="contact" className="scroll-mt-32"><Contact /></div>
            <Footer />
        </motion.div>
    );
};

export default LandingPage;
