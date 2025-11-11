import { useState } from 'react';
import { Mail, Phone, Linkedin, Send, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState(null);

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "vijayshete178@gmail.com",
      link: "mailto:vijayshete178@gmail.com",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 7558544763",
      link: "tel:+917558544763",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "www.linkedin.com/in/vijaykumarshete",
      link: "https://www.linkedin.com/in/vijaykumarshete",
      gradient: "from-primary-500 to-primary-600"
    }
  ];

  const handleContactClick = (link) => {
    window.open(link, '_blank');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-secondary-900 dark:via-primary-950/20 dark:to-secondary-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/10 dark:bg-primary-800/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-300/10 dark:bg-primary-700/10 rounded-full blur-3xl -z-10"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 fade-in-up">
            <h2 className="heading-secondary mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400">
              Let's discuss your next project or opportunity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 fade-in-up">
              <div className="glass-card rounded-2xl p-8 hover-3d">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-6 h-6 text-primary-500" />
                  <h3 className="text-3xl font-bold text-secondary-900 dark:text-white">
                    Contact Information
                  </h3>
                </div>
                <p className="text-lg text-secondary-600 dark:text-secondary-400 mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and development. Feel free to 
                  reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-xl p-5 hover-3d group cursor-pointer transition-all duration-300"
                    onClick={() => handleContactClick(info.link)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>
                    <div className="flex items-center space-x-4 relative z-10">
                      <div className={`p-3 bg-gradient-to-br ${info.gradient} rounded-xl text-white shadow-lg shadow-primary-500/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-secondary-500 dark:text-secondary-400 mb-1">
                          {info.label}
                        </p>
                        <p className="text-secondary-900 dark:text-white font-semibold text-base group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="glass-card rounded-xl p-6 text-center hover-3d group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-3xl font-bold text-gradient mb-2">3.3+</div>
                    <div className="text-sm text-secondary-600 dark:text-secondary-400 font-medium">Years Experience</div>
                  </div>
                </div>
                <div className="glass-card rounded-xl p-6 text-center hover-3d group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-3xl font-bold text-gradient mb-2">4+</div>
                    <div className="text-sm text-secondary-600 dark:text-secondary-400 font-medium">Major Projects</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card rounded-2xl p-8 md:p-10 hover-3d fade-in-up stagger-1">
              <div className="flex items-center gap-3 mb-8">
                <Send className="w-6 h-6 text-primary-500" />
                <h3 className="text-3xl font-bold text-secondary-900 dark:text-white">
                  Send a Message
                </h3>
              </div>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                  <label 
                    htmlFor="name" 
                    className={`absolute left-4 transition-all duration-300 ${
                      focusedField === 'name' || formData.name
                        ? 'top-2 text-xs text-primary-600 dark:text-primary-400'
                        : 'top-4 text-sm text-secondary-500 dark:text-secondary-400'
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 pt-6 pb-2 border-2 border-secondary-200 dark:border-secondary-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white/50 dark:bg-secondary-800/50 backdrop-blur-sm text-secondary-900 dark:text-white placeholder-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div className="relative">
                  <label 
                    htmlFor="email" 
                    className={`absolute left-4 transition-all duration-300 ${
                      focusedField === 'email' || formData.email
                        ? 'top-2 text-xs text-primary-600 dark:text-primary-400'
                        : 'top-4 text-sm text-secondary-500 dark:text-secondary-400'
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 pt-6 pb-2 border-2 border-secondary-200 dark:border-secondary-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white/50 dark:bg-secondary-800/50 backdrop-blur-sm text-secondary-900 dark:text-white placeholder-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="relative">
                  <label 
                    htmlFor="subject" 
                    className={`absolute left-4 transition-all duration-300 ${
                      focusedField === 'subject' || formData.subject
                        ? 'top-2 text-xs text-primary-600 dark:text-primary-400'
                        : 'top-4 text-sm text-secondary-500 dark:text-secondary-400'
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 pt-6 pb-2 border-2 border-secondary-200 dark:border-secondary-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white/50 dark:bg-secondary-800/50 backdrop-blur-sm text-secondary-900 dark:text-white placeholder-transparent transition-all duration-300"
                    placeholder="Project discussion"
                  />
                </div>

                <div className="relative">
                  <label 
                    htmlFor="message" 
                    className={`absolute left-4 transition-all duration-300 ${
                      focusedField === 'message' || formData.message
                        ? 'top-2 text-xs text-primary-600 dark:text-primary-400'
                        : 'top-4 text-sm text-secondary-500 dark:text-secondary-400'
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 pt-6 pb-2 border-2 border-secondary-200 dark:border-secondary-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white/50 dark:bg-secondary-800/50 backdrop-blur-sm text-secondary-900 dark:text-white placeholder-transparent resize-none transition-all duration-300"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2 group relative overflow-hidden"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Send Message</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
