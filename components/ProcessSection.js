/**
 * Process section component for Gnanalytica.
 *
 * This section outlines the step-by-step process of how Gnanalytica
 * works with clients to transform their business with AI solutions.
 */
export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current technology stack, identify gaps, and understand your business goals.',
      icon: '🔍',
      color: 'primary'
    },
    {
      number: '02',
      title: 'Strategy & Roadmap',
      description: 'Create a comprehensive AI transformation roadmap tailored to your specific needs and timeline.',
      icon: '🗺️',
      color: 'secondary'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Execute the plan with expert guidance, from automation to advanced AI frameworks.',
      icon: '⚡',
      color: 'accent'
    },
    {
      number: '04',
      title: 'Integration & Support',
      description: 'Ensure seamless integration with your existing systems and provide ongoing support.',
      icon: '🔗',
      color: 'primary'
    }
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
    <section id="process" className="bg-neutral-50 py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
            Our Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            How We{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Transform
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            A proven 4-step process to make your business AI-ready and future-proof.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200 hover:border-primary/30 hover:-translate-y-2"
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl border-2 mb-6 text-2xl font-bold ${getColorClasses(step.color)} group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>

              <h3 className="text-xl font-bold mb-4 text-neutral-900 group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>

              <p className="text-neutral-600 leading-relaxed">
                {step.description}
              </p>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Process flow indicator */}
        <div className="hidden lg:flex justify-center mt-12">
          <div className="flex items-center space-x-4">
            {steps.map((step, idx) => (
              <div key={step.number} className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                {idx < steps.length - 1 && (
                  <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
