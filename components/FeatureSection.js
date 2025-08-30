/**
 * Feature section component for Gnanalytica.
 *
 * Presents the key AI services and capabilities of Gnanalytica's consulting
 * and implementation platform. Each feature reflects the AI transformation
 * and technology services offered by the company.
 */
export default function FeatureSection() {
  const features = [
    {
      icon: "🔍",
      title: 'Technology Gap Analysis',
      description:
        'Comprehensive assessment of your current technology stack to identify AI integration opportunities.',
      color: 'primary',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: "🤖",
      title: 'AI/ML Solutions',
      description:
        'Custom AI and machine learning solutions tailored to your business needs.',
      color: 'secondary',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: "⚡",
      title: 'Process Automation',
      description:
        'Intelligent automation solutions that streamline operations and increase efficiency.',
      color: 'accent',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: "🏗️",
      title: 'Infrastructure Modernization',
      description:
        'Update and optimize your digital infrastructure to support AI workloads.',
      color: 'primary',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: "🔗",
      title: 'Agentic AI Frameworks',
      description:
        'Build intelligent agents that integrate with ChatGPT, Google Gemini, and Anthropic.',
      color: 'secondary',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: "🚀",
      title: 'GenAI Implementation',
      description:
        'Implement cutting-edge Generative AI solutions including MCP protocols.',
      color: 'accent',
      gradient: 'from-yellow-500 to-orange-500'
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: 'bg-primary/10 text-primary border-primary/20',
      secondary: 'bg-secondary/10 text-secondary border-secondary/20',
      accent: 'bg-accent/10 text-accent border-accent/20'
    };
    return colors[color] || colors.primary;
  };

  return (
    <section id="features" className="bg-white py-24 relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6 border border-primary/20 shadow-lg animate-fade-in-up">
            <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
            Our Services
            <span className="ml-3 w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            End-to-End{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse-glow">
              AI Solutions
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            From assessment to implementation, we provide complete AI transformation services.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-200 hover:border-primary/30 hover:-translate-y-3 animate-fade-in-up overflow-hidden"
              style={{animationDelay: `${0.6 + idx * 0.1}s`}}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-xl"></div>
              </div>

              {/* Enhanced Icon */}
              <div className={`relative z-10 inline-flex items-center justify-center w-20 h-20 rounded-3xl border-2 mb-8 text-3xl font-bold ${getColorClasses(feature.color)} group-hover:scale-110 transition-all duration-500 group-hover:shadow-lg`}>
                <span className="group-hover:animate-bounce">{feature.icon}</span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-neutral-900 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-neutral-600 leading-relaxed text-lg">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-6 flex items-center text-primary font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span>Learn More</span>
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-bl-3xl`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-20 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
          <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20 shadow-xl">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how AI can revolutionize your operations and give you a competitive edge.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg group"
            >
              Book a Call
              <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}