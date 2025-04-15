
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-royal text-white py-10 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 font-cinzel">Akanksha Sharma</h3>
            <p className="text-white text-opacity-80">Software Developer | Problem Solver</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-white text-opacity-90">
            <a href="#home" className="hover:text-white hover:underline transition-colors">Home</a>
            <a href="#about" className="hover:text-white hover:underline transition-colors">About</a>
            <a href="#projects" className="hover:text-white hover:underline transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white hover:underline transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white hover:underline transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white border-opacity-20 text-center">
          <p>&copy; {new Date().getFullYear()} Akanksha Sharma. All rights reserved.</p>
          <p className="text-sm mt-2 text-white text-opacity-70">
            Built with <span className="text-royal-gold">❤</span> using React & Tailwind CSS
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg className="relative block w-full h-12 md:h-16" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white opacity-10"></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
