import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';
import resumePDF from '../assets/VijaykumarSheteResume.pdf';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'achievements', 'skills', 'projects', 'contact'];
    let frame = 0;

    const update = () => {
      frame = 0;
      const nextScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));

      const scrollPosition = window.scrollY + 100;
      let nextSection = sections[0];
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          nextSection = sections[i];
          break;
        }
      }
      setActiveSection((prev) => (prev === nextSection ? prev : nextSection));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
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
    <header className={`fixed top-0 left-0 right-0 z-50 t-colors ${
      scrolled 
        ? 'glass-strong shadow-md' 
        : 'glass-card shadow-none'
    }`}>
      <div className="container-custom px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with animation */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-xl flex items-center justify-center shadow-md t-transform group-hover:scale-[1.06]">
              <span className="text-white font-bold text-sm">VS</span>
            </div>
            <span className="text-xl font-bold text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 t-colors">
              Vijay Shete
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {/* Navigation Links */}
            <div className="flex items-center space-x-1 bg-secondary-100/80 dark:bg-secondary-800/80 rounded-full p-1 border border-secondary-200/50 dark:border-secondary-700/50">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full font-medium t-colors ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-primary-600 to-primary-700'
                      : 'text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 hover:bg-white/70 dark:hover:bg-secondary-700/70'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-secondary-300 dark:via-secondary-600 to-transparent mx-2"></div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 bg-secondary-100/80 dark:bg-secondary-800/80 border border-secondary-200/50 dark:border-secondary-700/50 t-ui hover:scale-[1.06]"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Resume Download */}
            <button
              onClick={downloadResume}
              className="btn-primary flex items-center space-x-2 group"
            >
              <Download className="w-4 h-4 t-transform group-hover:translate-y-0.5" />
              <span>Resume</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-3 rounded-xl text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 bg-secondary-100/80 dark:bg-secondary-800/80 border border-secondary-200/50 dark:border-secondary-700/50 t-ui hover:scale-[1.06]"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu with slide animation */}
        <div
          inert={isMobileMenuOpen ? undefined : true}
          className={`lg:hidden grid transition-[grid-template-rows,opacity] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMobileMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
        }`}>
          <div className="min-h-0 overflow-hidden">
          <div className="py-4 border-t border-secondary-200/50 dark:border-secondary-700/50">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-3 rounded-xl font-medium t-colors ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-primary-600 to-primary-700'
                      : 'text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 hover:bg-white/70 dark:hover:bg-secondary-700/70'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="text-left px-4 py-3 rounded-xl text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 t-colors hover:bg-white/70 dark:hover:bg-secondary-700/70 flex items-center space-x-2"
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
      </div>
    </header>
  );
};

export default Header;
