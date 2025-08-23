/**
 * Hero section component.
 *
 * This section introduces the homepage with a bold heading, descriptive
 * subheading and a call‑to‑action button. An abstract illustration on the
 * right provides visual interest and reinforces the theme of modern web design.
 * The layout adapts for smaller screens by stacking the text
 * and image vertically.
 */
export default function HeroSection() {
  return (
    <section className="bg-gray-50" id="hero">
      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to Our{' '}
            <span className="text-primary">Homepage</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            A modern, responsive website built with cutting-edge technologies
            to provide an exceptional user experience across all devices.
          </p>
          <a
            href="#features"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md shadow hover:bg-primary-dark transition"
          >
            Explore Features
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/hero.png"
            alt="Abstract representation of modern web design"
            className="w-80 h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}