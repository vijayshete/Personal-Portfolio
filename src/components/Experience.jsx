import { Calendar, MapPin, Building, Sparkles } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Persistent Systems",
      position: "Lead Software Engineer",
      location: "Pune, India",
      duration: "Jan 2026 – Present",
      achievements: [
        "Led frontend architecture and end-to-end UI delivery for Process Intel, an agentic-AI process intelligence platform recognized with the Annual Award of Excellence.",
        "Built key frontend capabilities for GenAI Studio, an enterprise GenAI catalogue and demo platform, and received the ACE Individual Award for that contribution.",
        "Lead frontend delivery for AI and LLM enterprise applications using React, TypeScript, Vite, Tailwind CSS, Azure AD, and MSAL, from discovery and UX through integration, testing, and release.",
        "Design reusable interfaces for real-time and asynchronous AI workflows, including streamed responses, job polling, agent and workflow visualization, role-based access, and enterprise administration."
      ],
    },
    {
      company: "Persistent Systems",
      position: "Senior Software Engineer",
      location: "Pune, India",
      duration: "Jul 2024 – Jan 2026",
      achievements: [
        "Contributed to Doc-Intel, an intelligent document-processing platform with LLM-powered bounding-box detection. The project received the Annual Award of Excellence.",
        "Led UI modernization for key platforms, cutting average page load by about 40% and reducing user-reported UI and UX issues by about 80% after release.",
        "Mentored junior developers on UI and UX standards and React patterns, which accelerated team productivity."
      ],
    },
    {
      company: "Persistent Systems",
      position: "Software Engineer",
      location: "Pune, India",
      duration: "Jun 2022 – Jul 2024",
      achievements: [
        "Completed .NET full-stack engineering training, covering APIs, databases, and application development.",
        "Built low-code and no-code applications on enterprise platforms and completed the related platform certifications before moving into frontend engineering.",
        "Built responsive React.js frontends for internal platforms with Redux, Material UI, and Tailwind CSS, integrating REST APIs, WebSockets, and streaming APIs with CTO Unit teams."
      ],
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-white via-secondary-50/50 to-white dark:from-secondary-900 dark:via-secondary-800/50 dark:to-secondary-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary-200/10 dark:bg-primary-800/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary-300/10 dark:bg-primary-700/10 rounded-full blur-3xl -z-10"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 fade-in-up">
            <h2 className="heading-secondary mb-6">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400">
              My professional journey and achievements
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative fade-in-up">
                {/* Animated Timeline Line */}
                <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-primary-600 to-transparent rounded-full"></div>
                
                <div className="relative pl-20 md:pl-24">
                  {/* Animated Timeline Dot */}
                  <div className="absolute left-4 md:left-8 top-0 w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full border-4 border-white dark:border-secondary-900 shadow-md">
                    <div className="absolute -inset-1 rounded-full ring-2 ring-primary-400/50"></div>
                  </div>
                  
                  {/* Experience Card with 3D hover */}
                  <div className="glass-card rounded-2xl p-8 md:p-10 hover-lift group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 t-opacity"></div>
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-8">
                        <div className="mb-4 sm:mb-0">
                          <div className="flex items-center gap-2 mb-3">
                            <Sparkles className="w-5 h-5 text-primary-500" />
                            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 t-colors">
                              {exp.position}
                            </h3>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-secondary-600 dark:text-secondary-400">
                            <div className="flex items-center space-x-2 glass rounded-lg px-3 py-1.5">
                              <Building className="w-4 h-4 text-primary-500" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center space-x-2 glass rounded-lg px-3 py-1.5">
                              <MapPin className="w-4 h-4 text-primary-500" />
                              <span className="font-medium">{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-semibold glass rounded-lg px-4 py-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-secondary-800 dark:text-secondary-200 mb-6 flex items-center gap-2">
                          <div className="w-1 h-6 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full"></div>
                          <span>Key Achievements</span>
                        </h4>
                        <ul className="space-y-4">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-4 group/item">
                              <div className="relative mt-2 flex-shrink-0">
                                <div className="w-3 h-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full ring-2 ring-primary-400/40"></div>
                              </div>
                              <span className="text-secondary-700 dark:text-secondary-300 leading-relaxed text-base md:text-lg group-hover/item:text-secondary-900 dark:group-hover/item:text-white t-colors">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
