import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';
import resumePDF from '../assets/VijaykumarSheteResume.pdf';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'achievements', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setActiveSection(sectionId);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'VijaykumarSheteResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-strong shadow-lg shadow-primary-500/10' 
        : 'glass-card'
    }`}>
      <div className="container-custom px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with animation */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <span className="text-white font-bold text-sm">VS</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>
            </div>
            <span className="text-xl font-bold text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
              Vijay Shete
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {/* Navigation Links */}
            <div className="flex items-center space-x-1 bg-white/50 dark:bg-secondary-800/50 backdrop-blur-md rounded-full p-1 border border-secondary-200/50 dark:border-secondary-700/50">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-primary-600 to-primary-700 shadow-lg shadow-primary-500/50'
                      : 'text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 hover:bg-white/50 dark:hover:bg-secondary-700/50'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 animate-pulse"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-secondary-300 dark:via-secondary-600 to-transparent mx-2"></div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 bg-white/50 dark:bg-secondary-800/50 backdrop-blur-md border border-secondary-200/50 dark:border-secondary-700/50 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-primary-500/20"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Resume Download */}
            <button
              onClick={downloadResume}
              className="btn-primary flex items-center space-x-2 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                <span>Resume</span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-3 rounded-xl text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 bg-white/50 dark:bg-secondary-800/50 backdrop-blur-md border border-secondary-200/50 dark:border-secondary-700/50 transition-all duration-300 hover:scale-110 hover:rotate-90"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu with slide animation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-secondary-200/50 dark:border-secondary-700/50">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 transform ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-primary-600 to-primary-700 shadow-lg shadow-primary-500/50 scale-105'
                      : 'text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 hover:bg-white/50 dark:hover:bg-secondary-700/50'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="text-left px-4 py-3 rounded-xl text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 transition-all duration-300 hover:bg-white/50 dark:hover:bg-secondary-700/50 flex items-center space-x-2"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
              </button>

              {/* Mobile Resume Download */}
              <button
                onClick={downloadResume}
                className="btn-primary flex items-center justify-center space-x-2 mt-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
