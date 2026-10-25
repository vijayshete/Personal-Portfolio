import { useState, useEffect } from 'react';
import { ArrowDown, Mail, Sparkles } from 'lucide-react';
import DynamicShape from './DynamicShape';
import profilePic from '../assets/ProfilePic.JPG';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Lead Software Engineer';
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
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100/50 dark:from-secondary-900 dark:via-secondary-800 dark:to-primary-950/30 -z-10"></div>
      <div className="hero-glow absolute inset-0 -z-10" aria-hidden="true"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Dynamic Shape with Photo */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <DynamicShape>
                <img
                  src={profilePic}
                  alt="Vijay Shete"
                  className="h-full w-full object-cover object-[center_30%]"
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
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <div className="max-w-2xl mx-auto lg:mx-0">
              {/* Greeting with sparkle icon */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 fade-in-up">
                <Sparkles className="w-5 h-5 text-primary-500" />
                <p className="text-primary-600 dark:text-primary-400 font-semibold text-lg">
                  Hello, I'm
                </p>
              </div>
              
              {/* Name with gradient */}
              <h1 className="heading-primary mb-6 fade-in-up stagger-1">
                <span className="text-gradient block">Vijay</span>
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
                Lead Software Engineer with <span className="font-semibold text-primary-600 dark:text-primary-400">4+ years</span> building scalable <span className="font-semibold text-primary-600 dark:text-primary-400">AI and agentic</span> applications in React and TypeScript.
                I lead end-to-end frontend delivery for enterprise platforms, including real-time workflows, Azure AD authentication, role-based access, and API integrations.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-16 fade-in-up stagger-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary flex items-center space-x-2 group"
                >
                  <Mail className="w-5 h-5 t-transform group-hover:translate-y-0.5" />
                  <span>Get In Touch</span>
                </button>
                
                <button
                  onClick={() => scrollToSection('projects')}
                  className="btn-secondary flex items-center space-x-2 group relative overflow-hidden"
                >
                  <span>View My Work</span>
                  <ArrowDown className="w-5 h-5 t-transform group-hover:translate-y-0.5" />
                </button>
              </div>
              
              {/* Scroll Indicator */}
              <div className="bounce-gentle flex justify-center lg:justify-start fade-in-up stagger-5">
                <button
                  onClick={() => scrollToSection('about')}
                  className="group p-3 rounded-full bg-white/80 dark:bg-secondary-800/90 border border-secondary-200/50 dark:border-secondary-700/50 text-secondary-500 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 t-colors"
                  aria-label="Scroll to about section"
                >
                  <ArrowDown className="w-6 h-6 t-transform group-hover:translate-y-0.5" />
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
