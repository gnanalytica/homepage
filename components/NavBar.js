/**
 * Navigation bar component for Gnanalytica.
 *
 * The NavBar is sticky at the top of the viewport and provides links
 * to major sections of the page. It features the Gnanalytica branding
 * and a prominent call‑to‑action button. The design incorporates
 * the brand colors and modern styling.
 */
export default function NavBar() {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-3 group">
              {/* Logo - replace with your actual logo image */}
              <div className="flex items-center">
                <img
                  src="/images/logos/gnanalytica-logo.png"
                  alt="Gnanalytica Logo"
                  className="h-8 w-auto"
                  onError={(e) => {
                    // Fallback to text logo if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback text logo */}
                <div className="hidden items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                    <span className="text-white font-bold text-sm">G</span>
                  </div>
                </div>
              </div>

              {/* Company name */}
              <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hidden sm:block">
                Gnanalytica
              </span>
            </a>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-neutral-600 hover:text-primary font-medium transition-colors duration-200 relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#process"
              className="text-neutral-600 hover:text-primary font-medium transition-colors duration-200 relative group"
            >
              Process
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          <div className="ml-4 flex items-center">
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}