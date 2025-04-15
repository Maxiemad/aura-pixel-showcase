
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const typewriterRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const text = "Software Developer | Problem Solver";
    const typewriter = typewriterRef.current;
    
    if (!typewriter) return;
    
    let i = 0;
    typewriter.textContent = "";
    
    const typing = setInterval(() => {
      if (i < text.length) {
        typewriter.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
    
    return () => clearInterval(typing);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-royal-light to-white">
      <div className="container mx-auto px-4 pt-20 pb-10">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-8 overflow-hidden rounded-full border-4 border-royal-gold p-1 animate-glow">
            <img 
              src="/lovable-uploads/c17f2d77-96ba-41f3-aa2c-22e1bc2e4f06.png" 
              alt="Akanksha" 
              className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full animate-scale-up"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-royal-purple animate-scale-up">
            <span className="text-royal-pink">Akanksha</span>
          </h1>
          
          <p 
            ref={typewriterRef}
            className="text-xl md:text-2xl text-royal-purple mb-8 font-medium overflow-hidden whitespace-nowrap border-r-4 border-royal-pink animate-cursor-blink"
          ></p>
          
          <div className="social-links flex space-x-6 mb-10">
            <a 
              href="https://www.linkedin.com/in/akanksha-sharma-741283317" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-royal-purple hover:text-royal-pink transform hover:scale-125 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/Maxiemad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-royal-purple hover:text-royal-pink transform hover:scale-125 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://codeforces.com/profile/Akankshaha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-royal-purple hover:text-royal-pink transform hover:scale-125 transition-all duration-300"
              aria-label="CodeForces Profile"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 9c.828 0 1.5.672 1.5 1.5v6c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-6c0-.828.672-1.5 1.5-1.5h3z"/>
              </svg>
            </a>
            <a 
              href="https://leetcode.com/u/MAXIEMAD/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-royal-purple hover:text-royal-pink transform hover:scale-125 transition-all duration-300"
              aria-label="LeetCode Profile"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
            </a>
          </div>
          
          <a 
            href="#about" 
            className="btn animate-scale-up"
          >
            About Me
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-royal-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
