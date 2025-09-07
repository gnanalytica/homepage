import { motion } from 'framer-motion';

/**
 * About section component for Gnanalytica.
 *
 * Provides comprehensive information about Gnanalytica's AI consulting mission,
 * values, and approach to AI transformation. Incorporates the AI services
 * and modern design elements that reflect the brand identity.
 */
export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="bg-white py-24 sm:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl lg:mx-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Who are we?
          </motion.h2>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We help SMEs become AI-ready organizations by embedding AI into their daily operations.
            We bring AI Agents, predictive analytics, and real-time automation into business workflows —
            without the need for a big in-house IT team, and at a fraction of enterprise costs.
            We make you and your data AI ready.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}