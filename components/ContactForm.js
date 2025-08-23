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

      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            Let's Talk
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Schedule a{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Consultation
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">

          </p>
        </div>

        {/* Calendly Embed */}
        <div className="bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
              Let's Schedule a Time to Talk
            </h3>

            {/* Calendly inline widget */}
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/gnanalytica/30min"
              style={{ minWidth: '320px', height: '700px' }}
            >
              {isLoading && (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-neutral-600">Loading calendar...</p>
                  <p className="text-sm text-neutral-500 mt-2">This may take a few seconds</p>
                </div>
              )}
            </div>

            {/* Alternative contact options */}
            <div className="text-center mt-8 pt-8 border-t border-neutral-200">
              <p className="text-neutral-600 mb-4">
                Prefer to contact us directly?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:sandeep@gnanalytica.com"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
                >
                  Email Us
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a
                  href="tel:+919980856880"
                  className="inline-flex items-center justify-center border-2 border-neutral-300 text-neutral-700 px-6 py-3 rounded-lg hover:border-primary hover:text-primary transition-all duration-300 font-semibold"
                >
                  Call Us
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional contact info */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-neutral-900 mb-2">Email Us</h3>
            <p className="text-neutral-600">sandeep@gnanalytica.com</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-r from-secondary/5 to-accent/5 rounded-xl">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-semibold text-neutral-900 mb-2">Call Us</h3>
            <p className="text-neutral-600">+91 9980856880</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-r from-accent/5 to-primary/5 rounded-xl">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-neutral-900 mb-2">Visit Us</h3>
            <p className="text-neutral-600">Bengaluru, India</p>
          </div>
        </div>
      </div>
    </section>
  );
}
