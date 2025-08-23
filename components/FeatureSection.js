/**
 * Feature section component.
 *
 * Presents the key features and capabilities in a simple,
 * easy‑to‑scan format. Each feature is numbered for visual differentiation
 * and future extensibility. The section automatically anchors itself via
 * the id attribute for in‑page navigation.
 */
export default function FeatureSection() {
  const features = [
    {
      title: 'Modern Design',
      description:
        'Clean, responsive design that looks great on all devices and provides an intuitive user experience.',
    },
    {
      title: 'Fast Performance',
      description:
        'Built with Next.js for optimal performance, ensuring fast loading times and smooth interactions.',
    },
    {
      title: 'Customizable',
      description:
        'Easy to customize and extend with your own content, branding, and functionality requirements.',
    },
  ];
  return (
    <section id="features" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Features
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feat, idx) => (
            <div key={feat.title} className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mr-4">
                {idx + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feat.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}