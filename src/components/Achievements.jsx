import { useState, useEffect } from 'react';
import { Award, GraduationCap, X } from 'lucide-react';

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

  // Separate main awards and other awards
  const mainAward = awards.find(award => award.title === 'Annual Award 2025') || awards[0];
  const otherAwards = awards.filter(award => award.title !== 'Annual Award 2025');

  // Separate main certificate and other certificates
  const mainCert = certificates.find(cert => cert.title === 'Java Fullstack Certificate 2025') || certificates[0];
  const otherCerts = certificates.filter(cert => cert.title !== 'Java Fullstack Certificate 2025');

  return (
    <>
      <section
        id="achievements"
        className="py-14 md:py-16 lg:py-20 px-3 sm:px-4 lg:px-6 bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-secondary-900 dark:via-primary-950/20 dark:to-secondary-900 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/10 dark:bg-primary-800/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-300/10 dark:bg-primary-700/10 rounded-full blur-3xl -z-10"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 fade-in-up">
              <h2 className="heading-secondary mb-6">
                <span className="text-gradient">Achievements</span>
              </h2>
              <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400">
                Awards and certifications earned throughout my career
              </p>
            </div>

            {/* Awards Bento Grid */}
            <div className="mb-12 fade-in-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl text-white shadow-lg shadow-primary-500/50">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 dark:text-white">
                  Awards & Recognition
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Main Award - Large Card */}
                <div
                  className="md:col-span-2 md:row-span-2 group cursor-pointer"
                  onClick={() => openImagePreview(mainAward)}
                >
                  <div className="glass-card rounded-2xl overflow-hidden hover-3d transition-all duration-300 h-full">
                    <div className="relative h-full min-h-[320px] md:min-h-[360px] overflow-hidden bg-secondary-100 dark:bg-secondary-800">
                      <img
                        src={mainAward.image}
                        alt={mainAward.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 px-4 py-4 md:px-5">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-5 h-5 text-primary-400" />
                          <span className="text-xs font-semibold text-primary-400 uppercase tracking-wider">Featured Award</span>
                        </div>
                        <p className="text-white font-bold text-lg md:text-2xl">{mainAward.title}</p>
                        <p className="text-white/90 text-sm md:text-base">{mainAward.year}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other Awards - Smaller Cards */}
                {otherAwards.map((award, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer"
                    onClick={() => openImagePreview(award)}
                  >
                    <div className="glass-card rounded-2xl overflow-hidden hover-3d transition-all duration-300 h-full">
                      <div className="relative aspect-[4/3] overflow-hidden bg-secondary-100 dark:bg-secondary-800">
                        <img
                          src={award.image}
                          alt={award.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-white font-semibold text-sm">{award.title}</p>
                          <p className="text-white/80 text-xs">{award.year}</p>
                        </div>
                      </div>
                      <div className="px-3 py-2 space-y-0.5">
                        <p className="font-semibold text-secondary-900 dark:text-white leading-tight">{award.title}</p>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400 leading-tight">{award.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Bento Grid */}
            <div className="fade-in-up stagger-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl text-white shadow-lg shadow-primary-500/50">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 dark:text-white">
                  Certifications
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Main Certificate - Large Card */}
                <div
                  className="md:col-span-2 md:row-span-2 group cursor-pointer"
                  onClick={() => openImagePreview(mainCert)}
                >
                  <div className="glass-card rounded-2xl overflow-hidden hover-3d transition-all duration-300 h-full">
                    <div className="relative h-full min-h-[320px] md:min-h-[360px] overflow-hidden bg-secondary-100 dark:bg-secondary-800">
                      <img
                        src={mainCert.image}
                        alt={mainCert.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 px-4 py-4 md:px-5">
                        <div className="flex items-center gap-2 mb-2">
                          <GraduationCap className="w-5 h-5 text-primary-400" />
                          <span className="text-xs font-semibold text-primary-400 uppercase tracking-wider">Featured Certificate</span>
                        </div>
                        <p className="text-white font-bold text-lg md:text-2xl">{mainCert.title}</p>
                        <p className="text-white/90 text-sm md:text-base">{mainCert.year}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other Certificates - Smaller Cards */}
                {otherCerts.map((cert, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer"
                    onClick={() => openImagePreview(cert)}
                  >
                    <div className="glass-card rounded-2xl overflow-hidden hover-3d transition-all duration-300 h-full">
                      <div className="relative aspect-[4/3] overflow-hidden bg-secondary-100 dark:bg-secondary-800">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-white font-semibold text-sm">{cert.title}</p>
                          <p className="text-white/80 text-xs">{cert.year}</p>
                        </div>
                      </div>
                      <div className="px-3 py-2 space-y-0.5">
                        <p className="font-semibold text-secondary-900 dark:text-white leading-tight">{cert.title}</p>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400 leading-tight">{cert.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
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

