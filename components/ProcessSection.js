/**
 * Process section component for Gnanalytica.
 *
 * This section outlines the step-by-step process of how Gnanalytica
 * works with clients to transform their business with AI solutions.
 */
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const steps = [
  {
    name: 'Discovery Call',
    description: 'We begin with a comprehensive discovery call to understand your business, challenges, and goals. Our team conducts in-depth interviews with your key stakeholders to map current processes, identify pain points, and understand your unique AI transformation needs and opportunities.',
    number: '01',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Solution Discussion',
    description: 'After understanding your problems, we analyze your specific needs and return with tailored solutions. We present realistic offerings and capabilities that can benefit your business based on our discovery conversation, ensuring alignment with your goals and constraints.',
    number: '02',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Tech & Data Assessment',
    description: 'Our technical experts conduct thorough evaluations of your existing infrastructure, data systems, and technology stack. We assess data quality, security, compatibility, and readiness for AI integration to create a solid foundation for transformation.',
    number: '03',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'AI Roadmap Creation',
    description: 'Together, we create a comprehensive AI roadmap that includes: Digitization and organization of your data, Infrastructure preparation and modernization, Automation of processes that need streamlining, and Solution implementation with dynamic adaptation to changing business needs.',
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
    number: '05',
    color: 'from-indigo-500 to-purple-500',
  }
]

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);

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

        {/* Step Selection Buttons/Tiles */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {steps.map((step, index) => (
              <motion.button
                key={step.name}
                className={`relative bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 rounded-xl shadow-lg border border-gray-200/60 p-4 sm:p-6 hover:shadow-xl transition-all duration-300 cursor-pointer text-left ${
                  index === currentSlide
                    ? 'ring-2 ring-blue-500 shadow-xl bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50/30'
                    : 'hover:scale-105'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCurrentSlide(index)}
              >
                {/* Step Header */}
                <div className="flex flex-col items-center text-center space-y-3">
                  <motion.div
                    className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${step.color} shadow-lg border-2 border-white`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-sm sm:text-lg font-bold text-white">{step.number}</span>
                  </motion.div>
                  <h3 className="text-sm sm:text-base font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight">{step.name}</h3>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content Display Area */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 rounded-2xl shadow-lg border border-gray-200/60 p-6 sm:p-8 lg:p-10"
          >
            {/* Current Step Header */}
            <div className="flex items-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
              <motion.div
                className={`flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-r ${steps[currentSlide].color} shadow-lg border-4 border-white`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{
                  boxShadow: [
                    "0 10px 30px -5px rgba(0, 0, 0, 0.2)",
                    "0 15px 35px -5px rgba(0, 0, 0, 0.25)"
                  ]
                }}
              >
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{steps[currentSlide].number}</span>
              </motion.div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent flex-1">{steps[currentSlide].name}</h3>
            </div>

            {/* Current Step Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 font-medium">{steps[currentSlide].description}</p>

            {/* Current Step Sub-items */}
            {steps[currentSlide].subItems && (
              <div className="space-y-4 sm:space-y-6">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-800 to-indigo-800 bg-clip-text text-transparent">Key Components:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {steps[currentSlide].subItems.map((item, itemIndex) => (
                    <motion.div
                      key={item}
                      className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-lg sm:rounded-xl border border-blue-200/50 shadow-sm hover:shadow-md transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIndex * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm sm:text-base font-medium text-gray-800">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>

      </div>
    </motion.section>
  )
}
