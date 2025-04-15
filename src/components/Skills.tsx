
import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Technical Skills</h2>
        
        <div className="skills-container mt-10">
          <div className="skills-category mb-12">
            <h3 className="text-2xl font-bold text-royal-purple mb-6 text-center relative">
              <span className="before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-2 before:w-20 before:h-1 before:bg-royal-pink">
                Frontend Development
              </span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="skill-item group">
                <div className="icon-container text-5xl text-royal-pink mb-3 group-hover:animate-float">
                  <svg className="w-16 h-16 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.08044 0L4.55271 3.12H18.8574L18.4413 5.63992H4.14353L3.60863 8.75992H17.9153L17.2014 13.3199L10.9034 15.36L5.56768 13.3199L5.91365 11.28H2.79366L2 16.32L10.4292 19.68L20.0184 16.32L21.4252 8.75992L21.8221 6.23992L23 0H5.08044Z" fill="#FF1493"/>
                  </svg>
                </div>
                <p className="text-lg font-medium text-royal-purple text-center">HTML5</p>
              </div>
              
              <div className="skill-item group">
                <div className="icon-container text-5xl text-royal-pink mb-3 group-hover:animate-float">
                  <svg className="w-16 h-16 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.19202 2L3.58081 5.12H18.5791L18.0707 7.63992H3.08044L2.45786 10.7599H17.4622L16.5938 15.3199L10.1001 17.36L4.51062 15.3199L4.85659 13.28H1.7366L0.903015 18.32L9.61631 21.68L19.4593 18.32L20.9159 10.7599L21.3128 8.23992L22.5295 2H4.19202Z" fill="#FF1493"/>
                    <path d="M4.5 2L21 2L19.5 18.5L12 21L4.5 18.5L3 2Z" fill="#FF1493"/>
                  </svg>
                </div>
                <p className="text-lg font-medium text-royal-purple text-center">CSS3</p>
              </div>
              
              <div className="skill-item group">
                <div className="icon-container text-5xl text-royal-pink mb-3 group-hover:animate-float">
                  <svg className="w-16 h-16 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H24V24H0V0ZM22.034 18.276C21.842 17.193 21.208 16.218 19.616 15.258C18.868 14.819 18.011 14.5 17.581 13.931C17.432 13.631 17.386 13.387 17.432 13.116C17.524 12.511 18.175 12.214 18.717 12.374C19.081 12.476 19.413 12.729 19.652 13.116C20.737 12.374 20.737 12.374 21.463 11.919C21.19 11.475 21.059 11.297 20.869 11.119C20.28 10.433 19.482 10.09 18.237 10.136L17.654 10.198C17.071 10.328 16.518 10.625 16.189 11.028C15.078 12.239 15.422 14.517 16.8 15.387C18.16 16.339 20.147 16.59 20.346 17.613C20.532 18.864 19.124 19.281 17.948 19.167C17.025 19.014 16.478 18.613 15.85 17.88C15.01 18.352 15.01 18.352 14.152 18.837C14.38 19.32 14.621 19.536 14.95 19.961C16.74 21.717 21.152 21.654 21.965 19.064C22.004 18.931 22.241 18.127 22.034 18.276ZM13.035 11.012H10.774C10.774 12.979 10.761 14.926 10.761 16.902C10.761 17.98 10.81 19.016 10.626 19.344C10.317 20.023 9.426 19.97 8.975 19.847C8.511 19.672 8.267 19.408 8.02 19.05C7.96 18.954 7.914 18.876 7.9 18.87C7.232 19.222 6.564 19.573 5.896 19.925C6.21 20.568 6.695 21.137 7.291 21.487C8.223 22.021 9.475 22.139 10.774 21.877C11.577 21.686 12.262 21.265 12.684 20.596C13.328 19.757 13.172 18.697 13.172 17.506C13.185 15.35 13.172 13.193 13.172 11.022L13.035 11.012Z" fill="#FF1493"/>
                  </svg>
                </div>
                <p className="text-lg font-medium text-royal-purple text-center">JavaScript & React.JS</p>
              </div>
            </div>
          </div>
          
          <div className="skills-category">
            <h3 className="text-2xl font-bold text-royal-purple mb-6 text-center relative">
              <span className="before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-2 before:w-20 before:h-1 before:bg-royal-pink">
                Programming Languages
              </span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:px-20">
              <div className="skill-item group">
                <div className="icon-container text-5xl text-royal-pink mb-3 group-hover:animate-float">
                  <svg className="w-16 h-16 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.751 11.4186C11.751 11.4186 7.12898 9.79355 8.39575 5.76987C9.41931 2.49916 13.2806 5.11349 13.3272 5.15013C13.3739 5.18678 17.3206 7.57214 15.6339 10.9429C14.2805 13.6965 11.751 11.4186 11.751 11.4186Z" fill="#FF1493"/>
                    <path d="M13.3272 12.9851C13.3272 12.9851 18.6271 11.5584 17.6035 7.31063C16.8132 4.00937 12.5369 5.85614 12.4902 5.8928C12.4436 5.92945 8.11303 7.73095 9.41946 11.4185C10.493 14.3456 13.3272 12.9851 13.3272 12.9851Z" fill="#FF1493"/>
                    <path d="M9.889 16.7452C9.889 16.7452 7.45494 12.5125 3.60366 14.0859C0.519651 15.3527 4.11377 19.038 4.16042 19.0847C4.20708 19.1314 7.03126 22.4427 10.1619 20.5706C12.6455 19.0846 9.889 16.7452 9.889 16.7452Z" fill="#FF1493"/>
                    <path d="M15.4944 15.7949C15.4944 15.7949 17.4132 11.3982 21.4502 12.5125C24.7209 13.4894 21.5435 17.6754 21.5435 17.7221C21.4969 17.7688 19.0161 21.4541 15.6343 20.01C12.9274 18.7898 15.4944 15.7949 15.4944 15.7949Z" fill="#FF1493"/>
                    <path d="M8.91971 18.5779C8.91971 18.5779 6.1165 16.7058 2.86914 18.6246C0.195996 20.1573 2.72888 22.9348 2.77554 22.9815C2.82219 23.0282 4.95021 25.3208 8.17611 23.8348C10.7531 22.6272 8.91971 18.5779 8.91971 18.5779Z" fill="#FF1493"/>
                    <path d="M12.5834 16.511C12.5834 16.511 9.6093 13.536 5.85254 15.8754C2.86903 17.7475 6.46315 21.1521 6.5098 21.1988C6.55647 21.2455 9.9392 24.2137 12.9693 21.9676C15.3554 20.1422 12.5834 16.511 12.5834 16.511Z" fill="#FF1493"/>
                    <path d="M16.5645 16.9319C16.5645 16.9319 19.9472 14.0666 23.7051 16.4527C26.6886 18.3247 22.8373 21.8255 22.7906 21.8722C22.744 21.9189 19.128 25.0429 16.0978 22.7969C13.7118 20.9715 16.5645 16.9319 16.5645 16.9319Z" fill="#FF1493"/>
                  </svg>
                </div>
                <p className="text-lg font-medium text-royal-purple text-center">Python</p>
              </div>
              
              <div className="skill-item group">
                <div className="icon-container text-5xl text-royal-pink mb-3 group-hover:animate-float">
                  <svg className="w-16 h-16 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5921 7.40216C16.5921 7.40216 15.3121 6.16916 12.0001 6.16916C8.68807 6.16916 7.40796 7.40216 7.40796 7.40216V9.69416H12.0001V10.4462H5.40002C5.40002 10.4462 2.92798 10.7861 2.96399 15.5982C2.99999 20.4102 5.30402 20.2022 5.30402 20.2022H7.03199V17.8142C7.03199 17.8142 6.95998 15.4502 9.43202 15.4502H14.4961C14.4961 15.4502 16.871 15.4982 16.871 13.2001V8.00416C16.871 8.00416 17.3161 7.40216 16.5921 7.40216ZM9.42002 8.65016C8.95802 8.65016 8.58002 8.27217 8.58002 7.81016C8.58002 7.34816 8.95802 6.97016 9.42002 6.97016C9.88203 6.97016 10.26 7.34816 10.26 7.81016C10.26 8.27217 9.88203 8.65016 9.42002 8.65016Z" fill="#FF1493"/>
                    <path d="M18.6961 3.79785C18.6961 3.79785 16.8001 3.91185 16.8001 5.30384V7.40215H18.6721V5.47184C18.6721 5.47184 18.7201 3.90384 21.0361 3.90384C23.3521 3.90384 23.04 5.47184 23.04 5.47184V8.95187C23.04 8.95187 22.752 10.4519 20.568 10.4519H18.696V12.2399H20.544C20.544 12.2399 23.58 12.1439 23.58 9.16788C23.58 6.19187 23.58 5.36787 23.58 5.36787C23.58 5.36787 23.928 3.79785 18.6961 3.79785Z" fill="#FF1493"/>
                    <path d="M14.592 16.56C15.0552 16.56 15.432 16.9368 15.432 17.4C15.432 17.8632 15.0552 18.24 14.592 18.24C14.1288 18.24 13.752 17.8632 13.752 17.4C13.752 16.9368 14.1288 16.56 14.592 16.56Z" fill="#FF1493"/>
                  </svg>
                </div>
                <p className="text-lg font-medium text-royal-purple text-center">C</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-5 right-0 w-40 h-40 rounded-full bg-gradient-to-br from-royal-pink to-royal-gold opacity-10"></div>
      <div className="absolute -bottom-5 left-0 w-40 h-40 rounded-full bg-gradient-to-br from-royal-gold to-royal-pink opacity-10"></div>
    </section>
  );
};

export default Skills;
