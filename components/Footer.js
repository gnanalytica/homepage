import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

/**
 * Footer component for Gnanalytica.
 *
 * Contains comprehensive contact information, social links, and company details.
 * Features modern design elements and clear calls-to-action for visitors
 * to get in touch or learn more about Gnanalytica's services.
 */
export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <motion.div
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <motion.div className="sm:col-span-2 lg:col-span-2" variants={itemVariants}>
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <img
                className="h-8 sm:h-10 w-auto"
                src="/images/logos/gnanalytica-logo-white.png"
                alt="Gnanalytica"
              />
              <span className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">
                Gnanalytica
              </span>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 max-w-md">
              Making your business AI-ready with enterprise-grade solutions at a fraction of traditional costs.
              We provide the personal attention and dedication that big firms simply can't.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  const schedulingSection = document.getElementById('scheduling');
                  if (schedulingSection) {
                    schedulingSection.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
                className="btn-touch inline-flex items-center bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Schedule a Discovery Call
              </button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="#features" className="text-gray-300 text-sm sm:text-base hover:text-blue-400 transition-colors duration-200">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-300 text-sm sm:text-base hover:text-blue-400 transition-colors duration-200">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#scheduling" className="text-gray-300 text-sm sm:text-base hover:text-blue-400 transition-colors duration-200">
                  Schedule a Call
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Get in Touch</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <EnvelopeIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm">Email</p>
                  <a
                    href="mailto:contact@gnanalytica.com"
                    className="text-white text-sm sm:text-base hover:text-blue-400 transition-colors duration-200 break-all"
                  >
                    contact@gnanalytica.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm">Phone</p>
                  <a
                    href="tel:+919980856880"
                    className="text-white text-sm sm:text-base hover:text-blue-400 transition-colors duration-200"
                  >
                    +91 9980856880
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm">Location</p>
                  <p className="text-white text-sm sm:text-base">India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          variants={itemVariants}
        >
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Gnanalytica. All rights reserved.
          </p>
          <div className="text-center sm:text-right">
            <p className="text-gray-400 text-xs sm:text-sm">
              Transforming businesses with AI • Made with passion in India
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}