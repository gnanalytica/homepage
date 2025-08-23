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
      color: 'primary'
    },
    {
      icon: "🤖",
      title: 'AI/ML Solutions',
      description:
        'Custom AI and machine learning solutions tailored to your business needs.',
      color: 'secondary'
    },
    {
      icon: "⚡",
      title: 'Process Automation',
      description:
        'Intelligent automation solutions that streamline operations and increase efficiency.',
      color: 'accent'
    },
    {
      icon: "🏗️",
      title: 'Infrastructure Modernization',
      description:
        'Update and optimize your digital infrastructure to support AI workloads.',
      color: 'primary'
    },
    {
      icon: "🔗",
      title: 'Agentic AI Frameworks',
      description:
        'Build intelligent agents that integrate with ChatGPT, Google Gemini, and Anthropic.',
      color: 'secondary'
    },
    {
      icon: "🚀",
      title: 'GenAI Implementation',
      description:
        'Implement cutting-edge Generative AI solutions including MCP protocols.',
      color: 'accent'
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
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            End-to-End{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Solutions
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            From assessment to implementation, we provide complete AI transformation services.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200 hover:border-primary/30 hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl border-2 mb-6 text-2xl font-bold ${getColorClasses(feature.color)} group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-4 text-neutral-900 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}