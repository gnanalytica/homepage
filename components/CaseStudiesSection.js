import { motion } from 'framer-motion';

/**
 * Case Studies section component for Gnanalytica.
 *
 * This section showcases examples of AI solutions and dashboards
 * built for clients, with a coming soon placeholder.
 */
export default function CaseStudiesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      id="case-studies"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.span
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-semibold mb-8 shadow-sm border border-purple-200/50"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(147, 51, 234, 0.3)" }}
          >
            <motion.span
              className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Case Studies & Examples
          </motion.span>
          <h2 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 bg-clip-text text-transparent sm:text-6xl mb-8">
            What We Can Build
          </h2>
          <p className="text-xl leading-8 text-gray-700 max-w-3xl mx-auto font-medium">
            Explore examples of AI solutions and dashboards we can create to transform your business operations and drive growth.
          </p>
        </motion.div>

        {/* Coming Soon Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {/* Case Study 1 */}
          <motion.div
            className="group relative bg-white rounded-3xl shadow-xl border border-gray-200/60 p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">E-commerce Analytics Dashboard</h3>
              <p className="text-gray-600 mb-6">
                Advanced AI-powered analytics platform that can track customer behavior, optimize conversion rates, and reduce customer acquisition costs through intelligent insights.
              </p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Coming Soon
                </span>
                <motion.div
                  className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="text-white text-sm">→</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Case Study 2 */}
          <motion.div
            className="group relative bg-white rounded-3xl shadow-xl border border-gray-200/60 p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Service Automation</h3>
              <p className="text-gray-600 mb-6">
                Intelligent chatbot system that can handle customer inquiries automatically, provide instant responses, and escalate complex issues to human agents when needed.
              </p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Coming Soon
                </span>
                <motion.div
                  className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="text-white text-sm">→</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Case Study 3 */}
          <motion.div
            className="group relative bg-white rounded-3xl shadow-xl border border-gray-200/60 p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Sales Analytics</h3>
              <p className="text-gray-600 mb-6">
                Machine learning model that can predict sales trends, forecast demand, and help optimize inventory and pricing strategies based on historical data and market patterns.
              </p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  Coming Soon
                </span>
                <motion.div
                  className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="text-white text-sm">→</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl border border-gray-300"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="text-2xl mr-4">🚀</div>
            <div className="text-left">
              <p className="text-gray-800 font-semibold">More examples coming soon!</p>
              <p className="text-gray-600 text-sm">We're working on showcasing more AI solutions and dashboards we can build for your business.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
