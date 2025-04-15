
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="about-text p-6 bg-gradient-to-br from-royal-light to-white rounded-lg shadow-xl border-2 border-royal-gold">
            <p className="text-lg leading-relaxed text-royal-purple mb-6">
              I am a passionate software developer with a strong foundation in frontend development and problem-solving. 
              Currently pursuing my education in Computer Science, I focus on creating efficient and user-friendly web 
              applications while continuously expanding my technical expertise.
            </p>
            <p className="text-lg leading-relaxed text-royal-purple">
              My journey in technology is driven by curiosity and a desire to build solutions that make a difference. 
              I enjoy tackling complex problems and turning ideas into functional, beautiful applications.
            </p>
          </div>
          
          <div className="education p-6 bg-gradient-to-br from-royal-light to-white rounded-lg shadow-xl border-2 border-royal-gold">
            <h3 className="text-2xl font-bold text-royal-purple mb-6 relative">
              <span className="before:content-[''] before:absolute before:left-0 before:-bottom-2 before:w-16 before:h-1 before:bg-royal-pink">
                Education
              </span>
            </h3>
            
            <div className="education-item mb-6 pb-6 border-b border-royal-pink border-opacity-20">
              <h4 className="text-xl font-bold text-royal-pink mb-1">Intermediate (Class XII) - Science Stream</h4>
              <p className="text-lg text-royal-purple font-medium mb-1">Gyan Bharti Residential Complex, Bodhgaya</p>
              <p className="text-md text-royal-purple opacity-75 mb-2">2022 - 2024</p>
              <ul className="list-disc ml-5 text-royal-purple">
                <li>Active member of the College Programming Club</li>
                <li>Participated in various coding competitions</li>
              </ul>
            </div>
            
            <div className="education-item">
              <h4 className="text-xl font-bold text-royal-pink mb-1">Matriculation (Class X)</h4>
              <p className="text-lg text-royal-purple font-medium mb-1">Gyan Bharti Residential Complex, Bodhgaya</p>
              <p className="text-md text-royal-purple opacity-75">2011 - 2022</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-royal-pink opacity-10"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-royal-gold opacity-10"></div>
    </section>
  );
};

export default About;
