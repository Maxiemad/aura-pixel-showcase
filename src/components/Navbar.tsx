
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-md py-2' : 'py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="logo text-2xl font-bold font-cinzel animate-float">
          <span className="text-royal-pink">A</span>
          <span className="text-royal-purple">S</span>
        </div>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button 
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 rounded text-royal-purple"
            aria-label="Toggle Menu"
          >
            <svg 
              className={`w-6 h-6 fill-current transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path 
                  fillRule="evenodd" 
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path 
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:items-center md:space-x-8">
          <li><a className="nav-link" onClick={() => scrollTo('home')}>Home</a></li>
          <li><a className="nav-link" onClick={() => scrollTo('about')}>About</a></li>
          <li><a className="nav-link" onClick={() => scrollTo('projects')}>Projects</a></li>
          <li><a className="nav-link" onClick={() => scrollTo('skills')}>Skills</a></li>
          <li><a className="nav-link" onClick={() => scrollTo('contact')}>Contact</a></li>
        </ul>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 md:hidden ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={toggleMenu}
        >
          <div 
            className={`absolute right-0 top-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-4">
              <button onClick={toggleMenu} className="text-royal-purple" aria-label="Close Menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col p-4 space-y-4">
              <li><a className="block py-2 text-royal-purple hover:text-royal-pink" onClick={() => scrollTo('home')}>Home</a></li>
              <li><a className="block py-2 text-royal-purple hover:text-royal-pink" onClick={() => scrollTo('about')}>About</a></li>
              <li><a className="block py-2 text-royal-purple hover:text-royal-pink" onClick={() => scrollTo('projects')}>Projects</a></li>
              <li><a className="block py-2 text-royal-purple hover:text-royal-pink" onClick={() => scrollTo('skills')}>Skills</a></li>
              <li><a className="block py-2 text-royal-purple hover:text-royal-pink" onClick={() => scrollTo('contact')}>Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
