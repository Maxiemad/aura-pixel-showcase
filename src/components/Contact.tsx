
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-royal-light to-white relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Get in Touch</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
          <div className="contact-card w-full md:w-1/2 max-w-md p-8 bg-white rounded-lg shadow-xl border-2 border-royal-gold hover:border-royal-pink transition-all duration-300 animate-border-glow">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-royal-purple mb-4">Contact Information</h3>
              <p className="text-royal-purple opacity-80">Feel free to reach out for collaboration or questions</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-royal-pink bg-opacity-10 rounded-full mr-4">
                  <svg className="w-6 h-6 text-royal-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-royal-purple opacity-70">Email</p>
                  <a 
                    href="mailto:akanksha.k@adypu.edu.in"
                    className="text-royal-purple font-medium hover:text-royal-pink transition-colors"
                  >
                    akanksha.k@adypu.edu.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-royal-pink bg-opacity-10 rounded-full mr-4">
                  <svg className="w-6 h-6 text-royal-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-royal-purple opacity-70">Phone</p>
                  <a 
                    href="tel:+918271342331"
                    className="text-royal-purple font-medium hover:text-royal-pink transition-colors"
                  >
                    +91 8271342331
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-royal-pink bg-opacity-10 rounded-full mr-4">
                  <svg className="w-6 h-6 text-royal-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-royal-purple opacity-70">Location</p>
                  <p className="text-royal-purple font-medium">Bodhgaya, Bihar, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-center text-royal-purple font-medium mb-4">Connect With Me</h4>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.linkedin.com/in/akanksha-sharma-741283317" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-royal-pink bg-opacity-10 text-royal-pink hover:bg-royal-pink hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/Maxiemad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-royal-pink bg-opacity-10 text-royal-pink hover:bg-royal-pink hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://codeforces.com/profile/Akankshaha" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-royal-pink bg-opacity-10 text-royal-pink hover:bg-royal-pink hover:text-white transition-colors"
                  aria-label="CodeForces"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 9c.828 0 1.5.672 1.5 1.5v6c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-6c0-.828.672-1.5 1.5-1.5h3z"/>
                  </svg>
                </a>
                <a 
                  href="https://leetcode.com/u/MAXIEMAD/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-royal-pink bg-opacity-10 text-royal-pink hover:bg-royal-pink hover:text-white transition-colors"
                  aria-label="LeetCode"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-royal-gold opacity-10 animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-20 h-20 rounded-full bg-royal-pink opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Contact;
