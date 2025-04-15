
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Particles from '../components/Particles';
import { initializeCursor } from '../utils/cursorEffects';

const Index = () => {
  useEffect(() => {
    // Initialize AOS-like animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('animate-scale-up');
          element.classList.remove('opacity-0');
        }
      });
    };

    // Initialize custom cursor
    const cleanupCursor = initializeCursor();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once to initialize
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
      if (cleanupCursor) cleanupCursor();
    };
  }, []);

  return (
    <div className="relative">
      <Particles />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
