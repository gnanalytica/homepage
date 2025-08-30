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
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/3 to-red-500/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-red-400 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28">
        <div className="text-center max-w-4xl mx-auto">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/15 to-red-500/15 text-blue-600 rounded-full text-sm font-semibold mb-8 border border-blue-200/50 shadow-lg backdrop-blur-sm animate-fade-in-up">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
            AI-Powered Digital Transformation
            <span className="ml-3 w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></span>
          </div>

          {/* Enhanced Main Heading */}
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-slate-900 mb-8 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Make Your Business{' '}
            <span className="bg-gradient-to-r from-blue-600 via-red-500 to-blue-600 bg-clip-text text-transparent animate-pulse-glow">
              AI-Ready
            </span>
          </h1>

          {/* Enhanced Subheading */}
          <p className="text-xl lg:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            We identify technology gaps and implement AI solutions that transform your business. From automation to Agentic AI frameworks.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-2xl shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-500 font-semibold text-lg relative overflow-hidden"
            >
              <span className="relative z-10">Let's Talk</span>
              <svg className="ml-3 w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </a>
            <a
              href="#features"
              className="group inline-flex items-center justify-center border-2 border-slate-300 text-slate-700 px-10 py-5 rounded-2xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-semibold text-lg bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>Learn More</span>
              <svg className="ml-3 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </a>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-t-blue-500">
              <div className="text-5xl font-bold text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
              <div className="text-xl font-bold text-slate-900 mb-2">AI Solutions</div>
              <div className="text-slate-600">Custom AI/ML Implementation</div>
            </div>
            <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-t-red-500">
              <div className="text-5xl font-bold text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <div className="text-xl font-bold text-slate-900 mb-2">Automation</div>
              <div className="text-slate-600">Process & Infrastructure</div>
            </div>
            <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-t-blue-500">
              <div className="text-5xl font-bold text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">🔗</div>
              <div className="text-xl font-bold text-slate-900 mb-2">Integration</div>
              <div className="text-slate-600">ChatGPT, Gemini, Anthropic</div>
            </div>
          </div>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="mt-20 text-center animate-fade-in-up" style={{animationDelay: '1s'}}>
          <p className="text-sm text-slate-500 mb-8 font-medium">Trusted by companies across industries</p>
          <div className="flex justify-center items-center space-x-12 opacity-70">
            <div className="text-2xl font-bold text-slate-400 hover:text-primary transition-colors duration-300 cursor-pointer">🏢 Enterprise</div>
            <div className="text-2xl font-bold text-slate-400 hover:text-primary transition-colors duration-300 cursor-pointer">🚀 Startups</div>
            <div className="text-2xl font-bold text-slate-400 hover:text-primary transition-colors duration-300 cursor-pointer">🏥 Healthcare</div>
            <div className="text-2xl font-bold text-slate-400 hover:text-primary transition-colors duration-300 cursor-pointer">🏦 Finance</div>
          </div>
        </div>
      </div>
    </section>
  );
}