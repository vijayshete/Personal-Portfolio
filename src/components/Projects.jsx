import { Users, ArrowRight, Workflow, Sparkles, Shield, MessagesSquare, Layers } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Process Intel",
      description: "Product UI for an agentic process-intelligence platform. SOP-to-workflow experiences cover qualification, document extraction, agent configuration, execution, YAML generation, and inline LLM evaluation.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Flow", "Azure MSAL"],
      highlights: ["Annual Award of Excellence", "Theme and motion system", "RBAC and approvals", "Async job polling"],
      icon: <Workflow className="w-6 h-6" />,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "GenAI Studio",
      description: "Enterprise GenAI catalogue and demo platform with Admin, Editor, and Viewer roles, catalogue publishing, Excel bulk import, and location-aware browsing.",
      technologies: ["React", "Tailwind CSS", "Redux Toolkit", "Axios", "Azure AD", "MSAL"],
      highlights: ["ACE Individual Award", "Role-based catalogue", "SharePoint previews", "Drag-and-drop assembly"],
      icon: <Sparkles className="w-6 h-6" />,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Threat Hunting",
      description: "Single-page app that turns a PDF upload into a five-stage security investigation: extraction, AI summarization, threat-intelligence enrichment, SIEM hunting, and PDF reporting.",
      technologies: ["React", "TypeScript", "Vite", "VirusTotal", "Sumo Logic"],
      highlights: ["Five-stage workflow", "IOC review", "Report preview", "In-app SOC chat"],
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "Agent-Recon",
      description: "AI chat interface with streamed responses, thread-based conversations, multi-step agent reasoning, and admin workflows for users and access requests.",
      technologies: ["React", "TypeScript", "Azure AD", "MSAL", "Streaming"],
      highlights: ["Streamed responses", "Agent reasoning view", "Dynamic dashboard", "Light and dark themes"],
      icon: <MessagesSquare className="w-6 h-6" />,
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      title: "PiBox",
      description: "Hackathon and innovation event portal used by 10,000+ participants, with role-based Azure AD authentication and complex enterprise data tables.",
      technologies: ["React.js", "Azure AD", "RBAC", "Enterprise tables"],
      highlights: ["10,000+ participants", "Dynamic filtering", "Multi-column sorting", "Autocomplete search"],
      icon: <Users className="w-6 h-6" />,
      gradient: "from-pink-500 to-pink-600"
    },
    {
      title: "Additional AI Platforms",
      description: "React and TypeScript work across Doc-Intel, Sci-Mitra, GenAIHub, AgentStudio, Security-Copilot, Netsynx, and other agentic proofs of concept.",
      technologies: ["React", "TypeScript", "SSE", "WebSockets", "A2A"],
      highlights: ["Doc-Intel award", "Multi-agent chat", "Source citations", "LLM bounding boxes"],
      icon: <Layers className="w-6 h-6" />,
      gradient: "from-orange-500 to-orange-600"
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
                className="glass-card rounded-2xl overflow-hidden hover-lift group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 t-opacity`}></div>
                
                {/* Project Header with animated gradient */}
                <div className={`relative p-8 bg-gradient-to-br ${project.gradient} text-white overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 t-opacity"></div>
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-white/20 rounded-xl t-transform group-hover:scale-[1.06]">
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
                            <div className="w-2 h-2 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full ring-2 ring-primary-400/40"></div>
                          </div>
                          <span className="group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 t-colors">
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
                          className="px-3 py-1.5 bg-secondary-50 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 rounded-lg text-xs font-semibold border border-secondary-200/50 dark:border-secondary-700/50 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-300 dark:hover:border-primary-700 hover:text-primary-600 dark:hover:text-primary-400 t-colors"
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
              className="btn-primary flex items-center space-x-2 mx-auto group"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5 t-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
