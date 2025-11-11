import { useState, useEffect } from 'react';
import { ArrowDown, Mail, Sparkles } from 'lucide-react';
import DynamicShape from './DynamicShape';
import profilePic from '../assets/ProfilePic.JPG';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Frontend Developer (React.js)';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        // Blink cursor
        const cursorInterval = setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding pt-24 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100/50 dark:from-secondary-900 dark:via-secondary-800 dark:to-primary-950/30 gradient-shift -z-10"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/20 dark:bg-primary-800/20 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300/20 dark:bg-primary-700/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-100/30 dark:bg-primary-900/30 rounded-full blur-3xl pulse-gentle"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Dynamic Shape with Photo */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <DynamicShape>
                <img
                  src={profilePic}
                  alt="Vijay Shete"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback content if image doesn't load */}
                <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-3xl font-bold">VS</span>
                    </div>
                    <p className="text-primary-700 dark:text-primary-300 font-medium">Vijay Shete</p>
                  </div>
                </div>
              </DynamicShape>
              
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-80 blur-sm float-animation"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full opacity-60 blur-sm float-animation" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <div className="max-w-2xl mx-auto lg:mx-0">
              {/* Greeting with sparkle icon */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 fade-in-up">
                <Sparkles className="w-5 h-5 text-primary-500 animate-pulse" />
                <p className="text-primary-600 dark:text-primary-400 font-semibold text-lg">
                  Hello, I'm
                </p>
              </div>
              
              {/* Name with gradient */}
              <h1 className="heading-primary mb-6 fade-in-up stagger-1">
                <span className="text-gradient block">Vijaykumar</span>
                <span className="text-gradient block">Shete</span>
              </h1>
              
              {/* Title with typewriter effect */}
              <div className="h-12 md:h-16 mb-8 fade-in-up stagger-2">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-secondary-800 dark:text-secondary-200">
                  {displayedText}
                  <span className={`inline-block w-1 h-8 md:h-12 bg-primary-600 ml-2 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}></span>
                </h2>
              </div>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 mb-12 leading-relaxed fade-in-up stagger-3">
                A frontend developer with over <span className="font-semibold text-primary-600 dark:text-primary-400">3.3 years</span> of <span className="font-semibold text-primary-600 dark:text-primary-400">React.js</span> experience. 
                Skilled in building responsive, scalable interfaces and integrating APIs. Possesses a strong track record 
                of solving problems and delivering results in cross-functional teams.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-16 fade-in-up stagger-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary flex items-center space-x-2 group relative overflow-hidden"
                >
                  <Mail className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Get In Touch</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
                
                <button
                  onClick={() => scrollToSection('projects')}
                  className="btn-secondary flex items-center space-x-2 group relative overflow-hidden"
                >
                  <span>View My Work</span>
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                </button>
              </div>
              
              {/* Scroll Indicator */}
              <div className="bounce-gentle flex justify-center lg:justify-start fade-in-up stagger-5">
                <button
                  onClick={() => scrollToSection('about')}
                  className="group p-3 rounded-full bg-white/50 dark:bg-secondary-800/50 backdrop-blur-md border border-secondary-200/50 dark:border-secondary-700/50 text-secondary-500 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/20"
                  aria-label="Scroll to about section"
                >
                  <ArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
