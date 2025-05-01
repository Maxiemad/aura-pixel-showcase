
import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-royal-light relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {/* Project 1 */}
          <div className="project-card hover:shadow-[0_0_15px_rgba(255,20,147,0.5)]">
            <div className="project-header mb-4">
              <h3 className="text-2xl font-bold text-royal-pink mb-2">Mathrix</h3>
              <div className="tech-stack flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs rounded-full bg-royal-pink bg-opacity-10 text-royal-pink">HTML</span>
                <span className="px-2 py-1 text-xs rounded-full bg-royal-pink bg-opacity-10 text-royal-pink">CSS</span>
                <span className="px-2 py-1 text-xs rounded-full bg-royal-pink bg-opacity-10 text-royal-pink">JavaScript</span>
              </div>
            </div>
            
            <p className="text-royal-purple mb-6">
              Developed an interactive math game using React.js, providing personalized difficulty levels 
              through data-driven problem generation.
            </p>
            
            <div className="project-links flex flex-wrap gap-4 mt-auto">
              <a 
                href="https://mathrix-56ba-git-main-akankshas-projects-55127cf0.vercel.app" 
                className="btn text-sm px-4 py-2" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a 
                href="https://github.com/Maxiemad/Mathrix.git" 
                className="btn text-sm px-4 py-2" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
          <div className="project-card hover:shadow-[0_0_15px_rgba(255,20,147,0.5)]">
            <div className="project-header mb-4">
              <h3 className="text-2xl font-bold text-royal-pink mb-2">Ghar</h3>
              <div className="tech-stack flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs rounded-full bg-royal-pink bg-opacity-10 text-royal-pink">React</span>
                <span className="px-2 py-1 text-xs rounded-full bg-royal-pink bg-opacity-10 text-royal-pink">CSS</span>
                <span className="px-2 py-1 text-xs rounded-full bg-royal-pink bg-opacity-10 text-royal-pink">JS</span>
                <span className="px-2 py-1 text-xs rounded-full bg-royal-pink bg-opacity-10 text-royal-pink">TypeScript</span>
                <span className="px-2 py-1 text-xs rounded-full bg-royal-pink bg-opacity-10 text-royal-pink">HTML</span>
              </div>
            </div>
            
            <p className="text-royal-purple mb-6">
            GHAR is an innovative AI-powered platform that allows users to design custom interior and exterior spaces, analyze land for safety and sustainability, and visualize their dream home in real-time 3D — all with intelligent AI assistance.
            </p>
            
            <div className="project-links flex flex-wrap gap-4 mt-auto">
              <a 
                href="https://ghhaar.netlify.app/" 
                className="btn text-sm px-4 py-2" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a 
                href="https://github.com/Maxiemad/Ghar.git" 
                className="btn text-sm px-4 py-2" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>

          <div className="project-card hover:shadow-[0_0_15px_rgba(255,20,147,0.5)]">
            <div className="project-header mb-4">
              <h3 className="text-2xl font-bold text-royal-pink mb-2">Crypto Tracker</h3>
              <div className="tech-stack flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs rounded-full bg-royal-pink bg-opacity-10 text-royal-pink">React</span>
                <span className="px-2 py-1 text-xs rounded-full bg-royal-pink bg-opacity-10 text-royal-pink">CSS</span>
                <span className="px-2 py-1 text-xs rounded-full bg-royal-pink bg-opacity-10 text-royal-pink">JS</span>
                <span className="px-2 py-1 text-xs rounded-full bg-royal-pink bg-opacity-10 text-royal-pink">TypeScript</span>
                <span className="px-2 py-1 text-xs rounded-full bg-royal-pink bg-opacity-10 text-royal-pink">HTML</span>
              </div>
            </div>
            
            <p className="text-royal-purple mb-6">
            A responsive real-time cryptocurrency price tracker built with React, Redux Toolkit, and Tailwind CSS, simulating live WebSocket updates and managing global state efficiently.
            </p>
            
            <div className="project-links flex flex-wrap gap-4 mt-auto">
              <a 
                href="https://relaxed-sunshine-1a2a53.netlify.app/" 
                className="btn text-sm px-4 py-2" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a 
                href="https://github.com/Maxiemad/Crypto-Tracker.git" 
                className="btn text-sm px-4 py-2" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
          {/* Project 2 */}
          <div className="project-card hover:shadow-[0_0_15px_rgba(255,20,147,0.5)]">
            <div className="project-header mb-4">
              <h3 className="text-2xl font-bold text-royal-pink mb-2">Doodle Game</h3>
              <div className="tech-stack flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs rounded-full bg-royal-pink bg-opacity-10 text-royal-pink">React</span>
                <span className="px-2 py-1 text-xs rounded-full bg-royal-pink bg-opacity-10 text-royal-pink">CSS</span>
                <span className="px-2 py-1 text-xs rounded-full bg-royal-pink bg-opacity-10 text-royal-pink">JS</span>
              </div>
            </div>
            
            <p className="text-royal-purple mb-6">
              Developed an interactive Doodle Jump game using React.js, implementing smooth physics-based motion and
              collision detection to enhance gameplay realism.
            </p>
            
            <div className="project-links flex flex-wrap gap-4 mt-auto">
              <a 
                href="https://doodle-game-git-main-akankshas-projects-55127cf0.vercel.app" 
                className="btn text-sm px-4 py-2" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a 
                href="https://github.com/Maxiemad/Doodle-game" 
                className="btn text-sm px-4 py-2" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
          
          {/* Project 3 */}
          <div className="project-card hover:shadow-[0_0_15px_rgba(255,20,147,0.5)]">
            <div className="project-header mb-4">
              <h3 className="text-2xl font-bold text-royal-pink mb-2">Essence</h3>
              <div className="tech-stack flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs rounded-full bg-royal-pink bg-opacity-10 text-royal-pink">HTML</span>
                <span className="px-2 py-1 text-xs rounded-full bg-royal-pink bg-opacity-10 text-royal-pink">CSS</span>
                <span className="px-2 py-1 text-xs rounded-full bg-royal-pink bg-opacity-10 text-royal-pink">JavaScript</span>
              </div>
            </div>
            
            <p className="text-royal-purple mb-6">
              Designed and developed a dynamic wedding destination planning website using HTML, CSS, and JavaScript 
              to assist users in selecting venues.
            </p>
            
            <div className="project-links flex flex-wrap gap-4 mt-auto">
              <a 
                href="https://cheerful-jalebi-c14db7.netlify.app/" 
                className="btn text-sm px-4 py-2" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a 
                href="https://github.com/Maxiemad/ESSENCE" 
                className="btn text-sm px-4 py-2" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
            
          </div>
       
        </div>
      </div>
      {/* Project 2 */}
      





      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-royal-pink opacity-10"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-royal-gold opacity-10"></div>
    </section>
  );
};

export default Projects;
