import { Code, Users, Zap, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Specialized in React.js with over 3.3 years of experience building scalable web applications",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Strong problem-solving abilities and effective collaboration with cross-functional teams",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Enhanced UI scalability and reduced load times by 30% using modern optimization techniques",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Award Recognition",
      description: "Received Bravo team award for outstanding contributions to PiBox tool development",
      gradient: "from-primary-500 to-primary-600"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-secondary-900 dark:via-primary-950/20 dark:to-secondary-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/10 dark:bg-primary-800/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-300/10 dark:bg-primary-700/10 rounded-full blur-3xl -z-10"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 fade-in-up">
            <h2 className="heading-secondary mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              Software Developer with a passion for creating impactful solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* About Content */}
            <div className="space-y-8 fade-in-up">
              <div className="glass-card rounded-2xl p-8 hover-3d">
                <p className="text-lg md:text-xl text-secondary-700 dark:text-secondary-300 leading-relaxed mb-6">
                  A frontend developer with over <span className="font-bold text-primary-600 dark:text-primary-400">3.3 years</span> of <span className="font-bold text-primary-600 dark:text-primary-400">React.js</span> experience. 
                  Skilled in building responsive, scalable interfaces and integrating APIs. Possesses a strong track record 
                  of solving problems and delivering results in cross-functional teams.
                </p>
                
                <p className="text-lg md:text-xl text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  Passionate about creating pixel-perfect designs, optimizing performance, and delivering exceptional user 
                  experiences through modern web technologies and best practices.
                </p>
              </div>

              {/* Key Stats with animations */}
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card rounded-2xl p-6 text-center hover-3d group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">3.3+</div>
                    <div className="text-sm md:text-base text-secondary-600 dark:text-secondary-400 font-medium">Years Experience</div>
                  </div>
                </div>
                <div className="glass-card rounded-2xl p-6 text-center hover-3d group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">8.87</div>
                    <div className="text-sm md:text-base text-secondary-600 dark:text-secondary-400 font-medium">CGPA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6 fade-in-up stagger-1">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-6 hover-3d group relative overflow-hidden transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-3 bg-gradient-to-br ${highlight.gradient} rounded-xl text-white shadow-lg shadow-primary-500/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        {highlight.icon}
                      </div>
                      <h3 className="font-bold text-lg text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {highlight.title}
                      </h3>
                    </div>
                    <p className="text-secondary-600 dark:text-secondary-400 text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
