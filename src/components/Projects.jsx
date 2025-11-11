import { ExternalLink, Github, Code, Users, Zap, Smartphone, ArrowRight, Brain } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "PiBox App",
      description: "A scalable frontend application built with React.js, supporting over 250 teams and 2,000+ participants. Implemented micro-frontend architecture for enhanced modularity and scalability.",
      technologies: ["React.js", "Micro-frontend", "Scalable Architecture", "Team Management"],
      highlights: ["250+ teams supported", "2,000+ participants", "Micro-frontend architecture", "Award-winning project"],
      icon: <Users className="w-6 h-6" />,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Doc-Intel",
      description: "Fully functioning frontend and API integration project completed in record time. Earned praise for efficiency and quality in delivery.",
      technologies: ["React.js", "API Integration", "Rapid Development", "Quality Assurance"],
      highlights: ["Record time delivery", "API integration", "Quality focused", "Efficient development"],
      icon: <Code className="w-6 h-6" />,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Gen AI Studio",
      description: "A touch-screen web application with engaging animations designed to deliver an exceptional user experience for AI interactions.",
      technologies: ["React.js", "Touch Interface", "Animations", "AI Integration"],
      highlights: ["Touch-screen optimized", "Engaging animations", "AI-powered", "User experience focused"],
      icon: <Smartphone className="w-6 h-6" />,
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "Netsynx",
      description: "Developed frontend and integrated LLM streaming APIs for an agentic AI network management tool for real-time AI-driven operations.",
      technologies: ["React.js", "LLM Streaming APIs", "AI Integration", "Real-time Operations"],
      highlights: ["AI network management", "LLM streaming", "Real-time operations", "Advanced API integration"],
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Agent Studio",
      description: "Developed frontend and integrated A2A protocol APIs for a low-code platform enabling seamless AI agent communication.",
      technologies: ["React.js", "A2A Protocol APIs", "Low-code Platform", "AI Agents"],
      highlights: ["Low-code platform", "A2A protocol", "AI agent communication", "Seamless integration"],
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-pink-500 to-pink-600"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-white via-secondary-50/50 to-white dark:from-secondary-900 dark:via-secondary-800/50 dark:to-secondary-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/10 dark:bg-primary-800/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary-300/10 dark:bg-primary-700/10 rounded-full blur-3xl -z-10"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 fade-in-up">
            <h2 className="heading-secondary mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400">
              Some of my recent work and achievements
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl overflow-hidden hover-3d group relative transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Project Header with animated gradient */}
                <div className={`relative p-8 bg-gradient-to-br ${project.gradient} text-white overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        {project.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                    <p className="text-white/90 text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 relative z-10">
                  {/* Highlights */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-secondary-800 dark:text-secondary-200 mb-4 uppercase tracking-wide flex items-center gap-2">
                      <div className="w-1 h-4 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full"></div>
                      <span>Key Highlights</span>
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 text-sm text-secondary-600 dark:text-secondary-400 group/item"
                        >
                          <div className="relative flex-shrink-0">
                            <div className="w-2 h-2 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                            <div className="absolute inset-0 bg-primary-400 rounded-full animate-ping opacity-0 group-hover/item:opacity-75"></div>
                          </div>
                          <span className="group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 transition-colors duration-300">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-bold text-secondary-800 dark:text-secondary-200 mb-4 uppercase tracking-wide flex items-center gap-2">
                      <div className="w-1 h-4 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full"></div>
                      <span>Technologies Used</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-white/50 dark:bg-secondary-800/50 backdrop-blur-sm text-secondary-700 dark:text-secondary-300 rounded-lg text-xs font-semibold border border-secondary-200/50 dark:border-secondary-700/50 hover:scale-110 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-300 dark:hover:border-primary-700 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center fade-in-up">
            <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 mb-8">
              Interested in working together? Let's discuss your next project!
            </p>
            <button
              onClick={scrollToContact}
              className="btn-primary flex items-center space-x-2 mx-auto group relative overflow-hidden"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <span className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
