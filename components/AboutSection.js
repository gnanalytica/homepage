/**
 * About section component.
 *
 * Provides additional context on what gnanalytica does and how its
 * automation and AI capabilities can benefit businesses across various
 * domains. This section is intentionally text‑heavy to tell the story of
 * the company in a narrative way.
 */
export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          About gnanalytica
        </h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          At gnanalytica we specialize in building automations and AI agents tailored to your business processes. Our solutions help you streamline repetitive tasks, integrate disparate systems and make data‑driven decisions. We work across industries to deliver customized automation and AI solutions that drive efficiency and unlock new insights.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Whether you’re looking to build a customer support agent, automate marketing workflows or analyze large datasets, our team has the expertise to design and implement the right solution. Let us handle the complexity of AI so you can focus on what matters most — growing your business.
        </p>
      </div>
    </section>
  );
}