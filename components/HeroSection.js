/**
 * Hero section component for Gnanalytica.
 *
 * This section introduces Gnanalytica with compelling messaging that reflects
 * the AI consulting and implementation services. Features a modern, clean design
 * with better visual hierarchy and messaging.
 */
export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden" id="hero">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/3 to-red-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-red-500/10 text-blue-600 rounded-full text-sm font-medium mb-8 border border-blue-200/50">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            AI-Powered Solutions
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-slate-900 mb-8 leading-tight">
            Make Your Business{' '}
            <span className="bg-gradient-to-r from-blue-600 via-red-500 to-blue-600 bg-clip-text text-transparent">
              AI-Ready
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            We identify technology gaps and implement AI solutions that transform your business. From automation to Agentic AI frameworks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg"
            >
              Let's Talk
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-semibold text-lg bg-white/50 backdrop-blur-sm"
            >
              Learn More
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">🤖</div>
              <div className="text-lg font-semibold text-slate-900 mb-1">AI Solutions</div>
              <div className="text-sm text-slate-600">Custom AI/ML Implementation</div>
            </div>
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-lg">
              <div className="text-4xl font-bold text-red-500 mb-2">⚡</div>
              <div className="text-lg font-semibold text-slate-900 mb-1">Automation</div>
              <div className="text-sm text-slate-600">Process & Infrastructure</div>
            </div>
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">🔗</div>
              <div className="text-lg font-semibold text-slate-900 mb-1">Integration</div>
              <div className="text-sm text-slate-600">ChatGPT, Gemini, Anthropic</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-sm text-slate-500 mb-6">Trusted by companies across industries</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-slate-400">🏢 Enterprise</div>
            <div className="text-2xl font-bold text-slate-400">🚀 Startups</div>
            <div className="text-2xl font-bold text-slate-400">🏥 Healthcare</div>
            <div className="text-2xl font-bold text-slate-400">🏦 Finance</div>
          </div>
        </div>
      </div>
    </section>
  );
}