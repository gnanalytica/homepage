/**
 * Hero section component for Gnanalytica.
 *
 * This section introduces Gnanalytica with compelling messaging that reflects
 * the AI consulting and implementation services. Features a modern, clean design
 * with better visual hierarchy and messaging.
 */
import { motion } from 'framer-motion';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
  };

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3b82f6] to-[#ef4444] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-4xl py-16 sm:py-20 lg:py-24">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl lg:text-8xl">
            Make Your Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">AI-Ready</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-6 text-lg leading-7 text-blue-600 max-w-4xl mx-auto font-normal italic">
            We identify technology gaps and deliver tailored enterprise-grade AI solutions that transform your business.
          </motion.p>

          {/* Description Tile */}
          <motion.div
            variants={itemVariants}
            className="mt-6 max-w-4xl mx-auto"
          >
            <div className="relative p-6 bg-gradient-to-br from-blue-50 via-white to-red-50 rounded-2xl border border-blue-200 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-red-600/5 rounded-2xl"></div>
              <div className="relative text-center">
                <p className="text-base leading-6 text-gray-500 font-normal">
                  From intelligent automation and predictive analytics to advanced Agentic AI frameworks, we deliver comprehensive AI solutions that scale with your business. Our boutique approach ensures dedicated support, customized implementation strategies, and the personal attention that big firms cannot provide, all at a fraction of traditional consulting costs.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              onClick={() => {
                const modal = document.querySelector('[data-scheduling-modal]');
                if (modal) modal.click();
              }}
              className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Schedule a Call</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.button>
            <motion.a
              href="#features"
              className="group flex items-center text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              Explore Solutions
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Benefit Cards */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🎯</div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Free Assessment</h4>
            <p className="text-gray-600 text-sm">
              No-cost evaluation of your current setup and AI opportunities
            </p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">📋</div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Custom Roadmap</h4>
            <p className="text-gray-600 text-sm">
              Personalized AI transformation strategy tailored to your business
            </p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🚀</div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Actionable Insights</h4>
            <p className="text-gray-600 text-sm">
              Clear next steps and recommendations to get started immediately
            </p>
          </div>
        </motion.div>
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ef4444] to-[#3b82f6] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}