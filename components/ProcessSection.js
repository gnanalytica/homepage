/**
 * Process section component for Gnanalytica.
 *
 * This section outlines the step-by-step process of how Gnanalytica
 * works with clients to transform their business with AI solutions.
 */
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    name: 'Discovery Call',
    description: 'We begin with a comprehensive discovery call to understand your business, challenges, and goals. Our team conducts in-depth interviews with your key stakeholders to map current processes, identify pain points, and understand your unique AI transformation needs and opportunities.',
    icon: '🔍',
    number: '01',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Solution Discussion',
    description: 'After understanding your problems, we analyze your specific needs and return with tailored solutions. We present realistic offerings and capabilities that can benefit your business based on our discovery conversation, ensuring alignment with your goals and constraints.',
    icon: '💡',
    number: '02',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Tech & Data Assessment',
    description: 'Our technical experts conduct thorough evaluations of your existing infrastructure, data systems, and technology stack. We assess data quality, security, compatibility, and readiness for AI integration to create a solid foundation for transformation.',
    icon: '📊',
    number: '03',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'AI Roadmap Creation',
    description: 'Together, we create a comprehensive AI roadmap that includes: Digitization and organization of your data, Infrastructure preparation and modernization, Automation of processes that need streamlining, and Solution implementation with dynamic adaptation to changing business needs.',
    icon: '🗺️',
    number: '04',
    color: 'from-orange-500 to-red-500',
    subItems: [
      'Digitization/Organization of Data',
      'Infrastructure Preparation & Modernization',
      'Automation of Key Processes',
      'Solution/Features Implementation with Dynamic Adaptation'
    ]
  },
  {
    name: 'Continuous Support & Maintenance',
    description: 'We provide ongoing maintenance, monitoring, and enhancement of your AI solutions to ensure optimal performance and scalability. This includes regular updates, performance tuning, user feedback integration, and expanding capabilities as your business grows.',
    icon: '🔗',
    number: '05',
    color: 'from-indigo-500 to-purple-500',
  }
]

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    },
  };

  return (
    <motion.section
      ref={ref}
      id="process"
      className="relative bg-white py-24 sm:py-32"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-10 w-72 h-72 bg-gradient-to-r from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-r from-pink-200/20 to-blue-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-semibold mb-8 shadow-sm border border-blue-200/50"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
          >
            <motion.span
              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Our Methodology
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6 sm:mb-8">
            How We Do It
          </h2>
          <p className="text-lg sm:text-xl leading-7 sm:leading-8 text-gray-700 max-w-3xl mx-auto font-medium px-4">
            We follow a proven 5-step process that ensures successful AI adoption with measurable business impact and sustainable growth.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <motion.div
          className="relative max-w-4xl mx-auto hidden md:block"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Timeline Line */}
          <motion.div
            className="absolute left-8 lg:left-10 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-pink-500 to-indigo-500 rounded-full shadow-lg"
            variants={lineVariants}
            style={{ height: 'calc(100% - 8rem)' }}
          />
          <motion.div
            className="absolute left-8 lg:left-10 top-0 w-1 bg-gradient-to-b from-blue-400/30 via-purple-400/30 via-pink-400/30 to-indigo-400/30 rounded-full blur-sm"
            variants={lineVariants}
            style={{ height: 'calc(100% - 8rem)', filter: 'blur(4px)' }}
          />

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.name}
                className="relative flex items-start"
                variants={itemVariants}
              >
                {/* Timeline Dot */}
                <motion.div
                  className={`relative z-10 flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-r ${step.color} shadow-xl border-4 border-white flex-shrink-0`}
                  whileHover={{ scale: 1.15, rotate: 8, boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  animate={{
                    boxShadow: [
                      "0 10px 30px -5px rgba(0, 0, 0, 0.2)",
                      "0 15px 35px -5px rgba(0, 0, 0, 0.25)"
                    ]
                  }}
                >
                  <span className="text-xl lg:text-2xl font-extrabold text-white drop-shadow-sm">{step.number}</span>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className="ml-12 lg:ml-16 flex-1 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 rounded-3xl shadow-xl border border-gray-200/60 p-6 lg:p-10 hover:shadow-2xl transition-all duration-500 backdrop-blur-sm"
                  whileHover={{ y: -8, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                >
                  <div className="flex items-start space-x-4 lg:space-x-6">
                    <div className="text-4xl lg:text-5xl drop-shadow-sm flex-shrink-0">{step.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4 lg:mb-6">{step.name}</h3>
                      <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6 lg:mb-8 font-medium">{step.description}</p>

                      {/* Sub-items for AI Roadmap Creation */}
                      {step.subItems && (
                        <div className="space-y-4">
                          <h4 className="text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-800 to-indigo-800 bg-clip-text text-transparent mb-4 lg:mb-6">Key Components:</h4>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {step.subItems.map((item, itemIndex) => (
                              <motion.div
                                key={item}
                                className="flex items-center space-x-3 lg:space-x-4 p-3 lg:p-4 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl border border-blue-200/50 shadow-sm hover:shadow-md transition-all duration-300"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ delay: 1.5 + index * 0.3 + itemIndex * 0.1 }}
                                whileHover={{ scale: 1.02, y: -2 }}
                              >
                                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-sm flex-shrink-0"></div>
                                <span className="text-sm font-medium text-gray-800">{item}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile Timeline */}
        <motion.div
          className="max-w-2xl mx-auto md:hidden"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.name}
                className="relative bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 rounded-2xl shadow-lg border border-gray-200/60 p-6 hover:shadow-xl transition-all duration-500"
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                {/* Mobile Step Header */}
                <div className="flex items-center space-x-4 mb-4">
                  <motion.div
                    className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${step.color} shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-lg font-bold text-white">{step.number}</span>
                  </motion.div>
                  <div className="text-3xl">{step.icon}</div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent flex-1">{step.name}</h3>
                </div>

                {/* Mobile Description */}
                <p className="text-sm text-gray-700 leading-relaxed mb-4">{step.description}</p>

                {/* Mobile Sub-items */}
                {step.subItems && (
                  <div className="space-y-3">
                    <h4 className="text-base font-bold bg-gradient-to-r from-blue-800 to-indigo-800 bg-clip-text text-transparent">Key Components:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {step.subItems.map((item, itemIndex) => (
                        <motion.div
                          key={item}
                          className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-lg border border-blue-200/50"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 1.0 + index * 0.2 + itemIndex * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex-shrink-0"></div>
                          <span className="text-xs font-medium text-gray-800">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
