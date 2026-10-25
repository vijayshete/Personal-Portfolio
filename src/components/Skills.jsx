import { Code, Layers, Shield, Wrench, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend",
      skills: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Redux"],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Architecture & APIs",
      skills: ["Micro-frontends", "REST APIs", "WebSockets", "Server-Sent Events", "Streaming APIs", "API Integration"],
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Authentication & Testing",
      skills: ["Azure AD", "MSAL", "Role-Based Access", "Jest", "React Testing Library"],
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tools",
      skills: ["Git", "GitHub", "Vite", "Chrome DevTools", "GitHub Copilot", "Cursor"],
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  const certificates = [
    "Java Fullstack (React) Certification - Persistent Systems"
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-secondary-900 dark:via-primary-950/20 dark:to-secondary-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200/10 dark:bg-primary-800/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-300/10 dark:bg-primary-700/10 rounded-full blur-3xl -z-10"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 fade-in-up">
            <h2 className="heading-secondary mb-6">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400">
              Technologies and tools I work with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 hover-lift group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 t-opacity`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`p-3 bg-gradient-to-br ${category.gradient} rounded-xl text-white shadow-lg shadow-primary-500/50 t-transform group-hover:scale-[1.06]`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 t-colors">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-secondary-50 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 rounded-lg text-sm font-medium border border-secondary-200/50 dark:border-secondary-700/50 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-300 dark:hover:border-primary-700 hover:text-primary-600 dark:hover:text-primary-400 t-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-bl-full t-opacity`}></div>
              </div>
            ))}
          </div>

          {/* Certificates Section */}
          <div className="glass-card rounded-2xl p-8 md:p-10 hover-lift group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 t-opacity"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-4 shadow-lg shadow-primary-500/50">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-secondary-900 dark:text-white mb-3">
                  Certifications
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400 text-lg">
                  Professional certifications and achievements
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {certificates.map((certificate, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-5 glass rounded-xl border border-primary-200/50 dark:border-primary-800/50 hover:border-primary-400 dark:hover:border-primary-600 t-colors group/item"
                  >
                    <div className="relative flex-shrink-0">
                      <div className="w-3 h-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full ring-2 ring-primary-400/40"></div>
                    </div>
                    <span className="text-secondary-700 dark:text-secondary-300 font-semibold text-base group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 t-colors">
                      {certificate}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
