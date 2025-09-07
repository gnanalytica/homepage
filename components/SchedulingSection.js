import { motion } from 'framer-motion';
import EmbeddedGoogleCalendar from './EmbeddedGoogleCalendar';

export default function SchedulingSection() {

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

  return (
    <>
      <motion.section
        id="scheduling"
        className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            variants={itemVariants}
          >
            <h2 id="scheduling-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              Schedule Your Discovery Call
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Get a complimentary 30-minute AI strategy session with our experts.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-visible max-w-5xl mx-auto"
            variants={itemVariants}
            role="region"
            aria-labelledby="scheduling-heading"
          >
            <div className="p-4 sm:p-6 md:p-8">
              <div className="w-full overflow-x-auto" role="main" aria-label="Appointment booking form">
                <EmbeddedGoogleCalendar />
              </div>

              <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Complimentary</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>No commitment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Google Calendar integration</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}