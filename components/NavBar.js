/**
 * Navigation bar component.
 *
 * The NavBar is sticky at the top of the viewport and provides links
 * to major sections of the page. It also features a prominent call‑to‑action
 * button inviting visitors to get started. On smaller screens the navigation
 * links are hidden to reduce clutter; this can be enhanced later with a
 * mobile menu.
 */
export default function NavBar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-semibold text-primary">
              Homepage
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary">
              Features
            </a>
            <a href="#about" className="text-gray-600 hover:text-primary">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary">
              Contact
            </a>
          </nav>
          <div className="ml-4 flex items-center">
            <a
              href="#contact"
              className="inline-block bg-primary text-white px-4 py-2 rounded-md shadow hover:bg-primary-dark transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}