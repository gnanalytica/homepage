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
      color: 'primary',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      number: '02',
      title: 'Strategy & Roadmap',
      description: 'Create a comprehensive AI transformation roadmap tailored to your specific needs and timeline.',
      icon: '🗺️',
      color: 'secondary',
      gradient: 'from-red-500 to-red-600'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Execute the plan with expert guidance, from automation to advanced AI frameworks.',
      icon: '⚡',
      color: 'accent',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      number: '04',
      title: 'Integration & Support',
      description: 'Ensure seamless integration with your existing systems and provide ongoing support.',
      icon: '🔗',
      color: 'primary',
      gradient: 'from-blue-500 to-blue-600'
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
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-6 border border-secondary/20 shadow-lg animate-fade-in-up">
            <span className="w-2 h-2 bg-secondary rounded-full mr-3 animate-pulse"></span>
            Our Process
            <span className="ml-3 w-2 h-2 bg-secondary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            How We{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse-glow">
              Transform
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            A proven 4-step process to make your business AI-ready and future-proof.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-200 hover:border-primary/30 hover:-translate-y-3 animate-fade-in-up overflow-hidden"
              style={{animationDelay: `${0.6 + idx * 0.1}s`}}
            >
              {/* Enhanced Step number */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>

              {/* Enhanced Icon */}
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl border-2 mb-8 text-3xl font-bold ${getColorClasses(step.color)} group-hover:scale-110 transition-all duration-500 group-hover:shadow-lg`}>
                <span className="group-hover:animate-bounce">{step.icon}</span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-neutral-900 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-neutral-600 leading-relaxed text-lg">
                  {step.description}
                </p>

                {/* Progress indicator */}
                <div className="mt-6 flex items-center text-primary font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span>Step {step.number}</span>
                  <div className="ml-3 w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>
              </div>

              {/* Enhanced hover effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-bl-3xl`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced Process flow indicator */}
        <div className="hidden lg:flex justify-center mt-16 animate-fade-in-up" style={{animationDelay: '1s'}}>
          <div className="flex items-center space-x-6">
            {steps.map((step, idx) => (
              <div key={step.number} className="flex items-center">
                <div className="w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg animate-pulse" style={{animationDelay: `${idx * 0.5}s`}}></div>
                {idx < steps.length - 1 && (
                  <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-3 rounded-full shadow-lg"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-20 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
          <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20 shadow-xl">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Ready to Start Your AI Journey?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Our proven process ensures successful AI transformation. Let's begin with a comprehensive assessment.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg group"
            >
              Start Assessment
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
