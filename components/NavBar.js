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
    <header className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-4 group">
              {/* Enhanced Logo */}
              <div className="flex items-center">
                <img
                  src="/images/logos/gnanalytica-logo.png"
                  alt="Gnanalytica Logo"
                  className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to text logo if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Enhanced Fallback text logo */}
                <div className="hidden items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300 shadow-lg">
                    <span className="text-white font-bold text-lg">G</span>
                  </div>
                </div>
              </div>

              {/* Enhanced Company name */}
              <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hidden sm:block group-hover:from-secondary group-hover:to-primary transition-all duration-500">
                Gnanalytica
              </span>
            </a>
          </div>

          {/* Enhanced Navigation */}
          <nav className="hidden md:flex space-x-10">
            <a
              href="#features"
              className="text-neutral-600 hover:text-primary font-semibold transition-all duration-300 relative group text-lg"
            >
              Services
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300 rounded-full"></span>
            </a>
            <a
              href="#process"
              className="text-neutral-600 hover:text-primary font-semibold transition-all duration-300 relative group text-lg"
            >
              Process
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300 rounded-full"></span>
            </a>
          </nav>

          {/* Enhanced CTA Button */}
          <div className="ml-4 flex items-center">
            <a
              href="#contact"
              className="group inline-block bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg relative overflow-hidden"
            >
              <span className="relative z-10">Schedule a Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}