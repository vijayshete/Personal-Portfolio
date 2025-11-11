import { useState, useEffect, useRef } from 'react';
import { Award, GraduationCap, ChevronLeft, ChevronRight, X } from 'lucide-react';

// Import award images
import annualAward2025 from '../assets/Annual Award 2025.jpeg';
import highFive2025 from '../assets/High Five Team Award 2025.jpeg';
import bravo2024 from '../assets/Brao Team Award 2024.jpeg';
import highFive2023 from '../assets/High Five Team Award 2023.jpeg';

// Import certificate images
import javaFullstack2025 from '../assets/Java Fullstack Certificate 2025.jpeg';
import semicolon2024 from '../assets/Semicoluns Participation Certificate 2024.jpeg';
import outsystems2023 from '../assets/Outsystems Certificate 2023.jpeg';
import reactFrontend2023 from '../assets/React Frontend Certificate 2023.jpeg';
import genAI2023 from '../assets/Gen AI Foundation certificate 2023.jpeg';
import hackerrank2022 from '../assets/Hackerrank Problem Solving Certificate 2022.jpeg';
import python2021 from '../assets/Python Object Oriented Certificate 2021.png';

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [awardScroll, setAwardScroll] = useState(0);
  const [certScroll, setCertScroll] = useState(0);
  const awardCarouselRef = useRef(null);
  const certCarouselRef = useRef(null);

  // Awards - sorted by year descending
  const awards = [
    {
      image: annualAward2025,
      title: 'Annual Award 2025',
      year: 2025
    },
    {
      image: highFive2025,
      title: 'High Five Team Award 2025',
      year: 2025
    },
    {
      image: bravo2024,
      title: 'Bravo Team Award 2024',
      year: 2024
    },
    {
      image: highFive2023,
      title: 'High Five Team Award 2023',
      year: 2023
    }
  ];

  // Certificates - sorted by year descending
  const certificates = [
    {
      image: javaFullstack2025,
      title: 'Java Fullstack Certificate 2025',
      year: 2025
    },
    {
      image: semicolon2024,
      title: 'Semicolon Participation Certificate 2024',
      year: 2024
    },
    {
      image: outsystems2023,
      title: 'OutSystems Certificate 2023',
      year: 2023
    },
    {
      image: reactFrontend2023,
      title: 'React Frontend Certificate 2023',
      year: 2023
    },
    {
      image: genAI2023,
      title: 'Gen AI Foundation Certificate 2023',
      year: 2023
    },
    {
      image: hackerrank2022,
      title: 'HackerRank Problem Solving Certificate 2022',
      year: 2022
    },
    {
      image: python2021,
      title: 'Python Object Oriented Certificate 2021',
      year: 2021
    }
  ];

  const openImagePreview = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeImagePreview = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const scrollCarousel = (direction, type) => {
    const scrollAmount = 400;
    const currentScroll = type === 'award' ? awardScroll : certScroll;
    const items = type === 'award' ? awards : certificates;
    const itemWidth = 320; // w-80 = 320px
    const gap = 24; // gap-6 = 24px
    const containerWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const visibleItems = Math.floor(containerWidth / (itemWidth + gap));
    const maxScroll = Math.max(0, (items.length - visibleItems) * (itemWidth + gap));
    
    const newScroll = direction === 'left'
      ? Math.max(0, currentScroll - scrollAmount)
      : Math.min(maxScroll, currentScroll + scrollAmount);
    
    if (type === 'award') {
      setAwardScroll(newScroll);
    } else {
      setCertScroll(newScroll);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        closeImagePreview();
      }
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedImage]);

  // Calculate max scroll for buttons
  const getMaxScroll = (type) => {
    const items = type === 'award' ? awards : certificates;
    const itemWidth = 320;
    const gap = 24;
    const containerWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const visibleItems = Math.max(1, Math.floor((containerWidth - 200) / (itemWidth + gap)));
    return Math.max(0, (items.length - visibleItems) * (itemWidth + gap));
  };

  const awardMaxScroll = getMaxScroll('award');
  const certMaxScroll = getMaxScroll('cert');

  return (
    <>
      <section id="achievements" className="section-padding bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-secondary-900 dark:via-primary-950/20 dark:to-secondary-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/10 dark:bg-primary-800/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-300/10 dark:bg-primary-700/10 rounded-full blur-3xl -z-10"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20 fade-in-up">
              <h2 className="heading-secondary mb-6">
                <span className="text-gradient">Achievements</span>
              </h2>
              <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400">
                Awards and certifications earned throughout my career
              </p>
            </div>

            {/* Awards Carousel */}
            <div className="mb-16 fade-in-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl text-white shadow-lg shadow-primary-500/50">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 dark:text-white">
                  Awards & Recognition
                </h3>
              </div>

              <div className="relative">
                {/* Scroll Buttons */}
                <button
                  onClick={() => scrollCarousel('left', 'award')}
                  disabled={awardScroll === 0}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 dark:bg-secondary-800/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white dark:hover:bg-secondary-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 border border-secondary-200/50 dark:border-secondary-700/50"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </button>

                <button
                  onClick={() => scrollCarousel('right', 'award')}
                  disabled={awardScroll >= awardMaxScroll}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 dark:bg-secondary-800/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white dark:hover:bg-secondary-700 transition-all duration-300 hover:scale-110 border border-secondary-200/50 dark:border-secondary-700/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </button>

                {/* Carousel Container */}
                <div className="overflow-hidden">
                  <div
                    ref={awardCarouselRef}
                    className="flex gap-6 transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${awardScroll}px)` }}
                  >
                    {awards.map((award, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 w-80 group cursor-pointer"
                        onClick={() => openImagePreview(award)}
                      >
                        <div className="glass-card rounded-2xl overflow-hidden hover-3d transition-all duration-300">
                          <div className="relative aspect-[3/4] overflow-hidden bg-secondary-100 dark:bg-secondary-800">
                            <img
                              src={award.image}
                              alt={award.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                              <p className="text-white font-semibold text-sm">{award.title}</p>
                              <p className="text-white/80 text-xs">{award.year}</p>
                            </div>
                          </div>
                          <div className="p-4">
                            <p className="font-semibold text-secondary-900 dark:text-white mb-1">{award.title}</p>
                            <p className="text-sm text-secondary-600 dark:text-secondary-400">{award.year}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certificates Carousel */}
            <div className="fade-in-up stagger-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl text-white shadow-lg shadow-primary-500/50">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 dark:text-white">
                  Certifications
                </h3>
              </div>

              <div className="relative">
                {/* Scroll Buttons */}
                <button
                  onClick={() => scrollCarousel('left', 'cert')}
                  disabled={certScroll === 0}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 dark:bg-secondary-800/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white dark:hover:bg-secondary-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 border border-secondary-200/50 dark:border-secondary-700/50"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </button>

                <button
                  onClick={() => scrollCarousel('right', 'cert')}
                  disabled={certScroll >= certMaxScroll}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 dark:bg-secondary-800/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white dark:hover:bg-secondary-700 transition-all duration-300 hover:scale-110 border border-secondary-200/50 dark:border-secondary-700/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </button>

                {/* Carousel Container */}
                <div className="overflow-hidden">
                  <div
                    ref={certCarouselRef}
                    className="flex gap-6 transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${certScroll}px)` }}
                  >
                    {certificates.map((cert, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 w-80 group cursor-pointer"
                        onClick={() => openImagePreview(cert)}
                      >
                        <div className="glass-card rounded-2xl overflow-hidden hover-3d transition-all duration-300">
                          <div className="relative aspect-[3/4] overflow-hidden bg-secondary-100 dark:bg-secondary-800">
                            <img
                              src={cert.image}
                              alt={cert.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                              <p className="text-white font-semibold text-sm">{cert.title}</p>
                              <p className="text-white/80 text-xs">{cert.year}</p>
                            </div>
                          </div>
                          <div className="p-4">
                            <p className="font-semibold text-secondary-900 dark:text-white mb-1">{cert.title}</p>
                            <p className="text-sm text-secondary-600 dark:text-secondary-400">{cert.year}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={closeImagePreview}
        >
          <button
            onClick={closeImagePreview}
            className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-300 hover:scale-110 z-10"
            aria-label="Close preview"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-lg px-6 py-3 text-white text-center">
              <p className="font-semibold">{selectedImage.title}</p>
              <p className="text-sm text-white/80">{selectedImage.year}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Achievements;

