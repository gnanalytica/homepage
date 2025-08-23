/**
 * About section component.
 *
 * Provides additional context about the website and its capabilities.
 * This section is intentionally text‑heavy to tell the story of
 * the project in a narrative way.
 */
export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          About This Homepage
        </h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          This homepage is built with modern web technologies including Next.js and Tailwind CSS. It provides a solid foundation for creating beautiful, responsive websites that deliver exceptional user experiences across all devices and platforms.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Whether you're looking to showcase your business, portfolio, or personal brand, this template offers the flexibility and performance you need. The modular component structure makes it easy to customize and extend with your own content and functionality.
        </p>
      </div>
    </section>
  );
}