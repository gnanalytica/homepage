/**
 * About section component for Gnanalytica.
 *
 * Provides comprehensive information about Gnanalytica's AI consulting mission,
 * values, and approach to AI transformation. Incorporates the AI services
 * and modern design elements that reflect the brand identity.
 */
export default function AboutSection() {
  return (
    <section id="about" className="bg-gradient-to-br from-neutral-50 to-white py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
              About Us
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-8 leading-tight">
              Your Partner in{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Transformation
              </span>
            </h2>

            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p>
                At Gnanalytica, we understand your needs across any domain. We identify technology gaps, provide expert consulting, and deliver implementation services to make your company AI-ready.
              </p>

              <p>
                From automation and infrastructure updates to setting up your digital infrastructure, we help digitize and prepare your company for the AI revolution. Our expertise spans AI solutions, GenAI, MCP protocols, and Agentic AI frameworks.
              </p>

              <p>
                We specialize in AI/ML solutions, DevOps, and creating Agentic AI that enables the world to use your products in AI tools like ChatGPT, Google Gemini, and Anthropic.
              </p>
            </div>

            {/* Key values */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-neutral-200">
                <div className="text-3xl font-bold text-primary mb-2">🤖</div>
                <h3 className="font-semibold text-neutral-900 mb-2">AI Expertise</h3>
                <p className="text-sm text-neutral-600">Deep knowledge across all AI domains</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-neutral-200">
                <div className="text-3xl font-bold text-secondary mb-2">🔍</div>
                <h3 className="font-semibold text-neutral-900 mb-2">Gap Analysis</h3>
                <p className="text-sm text-neutral-600">Identify technology gaps and opportunities</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-neutral-200">
                <div className="text-3xl font-bold text-accent mb-2">⚡</div>
                <h3 className="font-semibold text-neutral-900 mb-2">Implementation</h3>
                <p className="text-sm text-neutral-600">End-to-end AI solution implementation</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-neutral-200">
                <div className="text-3xl font-bold text-primary mb-2">🔗</div>
                <h3 className="font-semibold text-neutral-900 mb-2">Integration</h3>
                <p className="text-sm text-neutral-600">Seamless AI platform integration</p>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Stats section */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-neutral-200">
              <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
                AI Transformation Expertise
              </h3>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold mr-4">
                      🤖
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-neutral-900">100%</div>
                      <div className="text-sm text-neutral-600">AI-First Approach</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-secondary/5 to-accent/5 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-white font-bold mr-4">
                      🔍
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-neutral-900">360°</div>
                      <div className="text-sm text-neutral-600">Technology Assessment</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-accent/5 to-primary/5 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white font-bold mr-4">
                      ⚡
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-neutral-900">24/7</div>
                      <div className="text-sm text-neutral-600">AI Solutions</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold mr-4">
                      🔗
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-neutral-900">∞</div>
                      <div className="text-sm text-neutral-600">Platform Integration</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white text-sm font-bold">ML</div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-secondary rounded-md flex items-center justify-center text-white text-xs font-bold">AI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}