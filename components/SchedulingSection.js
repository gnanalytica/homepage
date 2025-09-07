import { motion } from 'framer-motion';

/**
 * Scheduling section component for Gnanalytica.
 *
 * This section provides a direct way for users to schedule
 * a discovery call with the team.
 */
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
    <motion.section
      id="scheduling"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100"
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business with AI?
          </h2>
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto"
          variants={itemVariants}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-red-600 px-8 py-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                Schedule Your Discovery Call
              </h3>
              <p className="text-blue-100">
                Choose a time that works for you - no commitment required
              </p>
            </div>
          </div>

          {/* Calendar Embed */}
          <div className="p-6">
            <iframe
              src="https://calendar.google.com/appointments/schedules/AcZssZ0LCQY0ckHlhcEe3qxfH5tvh4WxMqnF0B32Tf9VLm4So0VOLMtmX6Ls_q31rkzzJc1W-hWB_Zup"
              style={{border: 0, width: "100%", height: "600px"}}
              frameBorder="0"
              scrolling="yes"
              className="rounded-lg"
            />
          </div>

          {/* Footer Info */}
          <div className="bg-gray-50 px-8 py-6">
            <div className="text-center">
              <p className="text-gray-600 text-sm">
                <strong>What to expect:</strong> 30-minute call to discuss your business goals,
                current challenges, and how AI can help. We'll provide actionable insights
                and next steps at no cost.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}