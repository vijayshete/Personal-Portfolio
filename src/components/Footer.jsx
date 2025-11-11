import { Heart, ArrowUp, Sparkles } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-secondary-900 via-secondary-950 to-secondary-900 text-white py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-800/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-700/10 rounded-full blur-3xl -z-10"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="mb-12 text-center fade-in-up">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/50">
                  <span className="text-white font-bold text-sm">VS</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl opacity-0 hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>
              </div>
              <span className="text-2xl font-bold text-gradient-purple">Vijay Shete</span>
            </div>
            
            <p className="text-secondary-300 max-w-2xl mx-auto leading-relaxed text-lg">
              Software Developer passionate about creating impactful solutions and delivering 
              exceptional user experiences. Always eager to take on new challenges and 
              contribute to innovative projects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up stagger-1">
            {footerLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-6 py-2 glass rounded-xl text-secondary-300 hover:text-white hover:bg-primary-600/20 border border-secondary-700/50 hover:border-primary-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-secondary-800/50 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-secondary-400 text-sm">
                © 2024 Vijay Shete. All rights reserved.
              </p>
              
              <div className="flex items-center space-x-6">
                <p className="text-secondary-400 text-sm flex items-center space-x-2">
                  <span>Made with</span>
                  <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                  <span>using React & Tailwind</span>
                </p>
                
                <button
                  onClick={scrollToTop}
                  className="p-3 bg-gradient-to-br from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/50 group"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
