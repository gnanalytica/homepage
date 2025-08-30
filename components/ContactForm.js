import { useEffect, useState } from 'react';
import Script from 'next/script';

/**
 * Contact Form component for Gnanalytica.
 *
 * This component embeds a Calendly booking widget with custom styling
 * to match the website's design. Replace the Calendly URL with your
 * actual Calendly event type URL.
 */
export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if Calendly is loaded and initialize widget
    const checkCalendly = () => {
      if (window.Calendly) {
        setIsLoading(false);
        return true;
      }
      return false;
    };

    // Check immediately
    if (checkCalendly()) return;

    // Check periodically until Calendly loads
    const interval = setInterval(() => {
      if (checkCalendly()) {
        clearInterval(interval);
      }
    }, 100);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="bg-white py-24 relative overflow-hidden">
      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log('Calendly script loaded');
        }}
      />

      {/* Enhanced Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6 border border-primary/20 shadow-lg animate-fade-in-up">
            <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
            Let's Talk
            <span className="ml-3 w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Schedule a{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse-glow">
              Consultation
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Let's discuss your needs and figure out how AI can transform your business.
          </p>
        </div>

        {/* Enhanced Calendly Embed */}
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="p-8">
            <h3 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Let's Schedule a Time to Talk
            </h3>

            {/* Calendly inline widget */}
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/gnanalytica/30min"
              style={{ minWidth: '320px', height: '700px' }}
            >
              {isLoading && (
                <div className="text-center py-16">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary mx-auto mb-6"></div>
                  <p className="text-xl text-neutral-600 mb-2">Loading calendar...</p>
                  <p className="text-sm text-neutral-500">This may take a few seconds</p>
                </div>
              )}
            </div>

            {/* Enhanced Alternative contact options */}
            <div className="text-center mt-10 pt-10 border-t border-neutral-200">
              <p className="text-lg text-neutral-700 mb-6 font-medium">
                Prefer to contact us directly?
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="mailto:sandeep@gnanalytica.com"
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg"
                >
                  <svg className="w-6 h-6 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </a>
                <a
                  href="tel:+919980856880"
                  className="group inline-flex items-center justify-center border-2 border-neutral-300 text-neutral-700 px-8 py-4 rounded-xl hover:border-primary hover:text-primary transition-all duration-300 font-semibold text-lg bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <svg className="w-6 h-6 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Additional contact info */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="group text-center p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">Email Us</h3>
            <p className="text-neutral-600 text-lg">sandeep@gnanalytica.com</p>
          </div>

          <div className="group text-center p-8 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-3xl border border-secondary/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: '0.9s'}}>
            <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">Call Us</h3>
            <p className="text-neutral-600 text-lg">+91 9980856880</p>
          </div>

          <div className="group text-center p-8 bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl border border-accent/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: '1s'}}>
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">Visit Us</h3>
            <p className="text-neutral-600 text-lg">Bengaluru, India</p>
          </div>
        </div>
      </div>
    </section>
  );
}
