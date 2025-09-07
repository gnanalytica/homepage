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
    name: 'Business Discovery',
    description: 'We begin by conducting comprehensive interviews with your key stakeholders, mapping your current business processes, and identifying pain points where AI can deliver the most value. Our team analyzes your organizational structure, workflows, and strategic objectives to understand your unique AI transformation needs and opportunities.',
    icon: '🔍',
    number: '01',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Technology Assessment',
    description: 'Our technical experts conduct thorough evaluations of your existing infrastructure, data systems, and technology stack. We interview your IT team and employees to understand current capabilities, identify gaps, and assess readiness for AI integration. This includes data quality analysis, security review, and compatibility assessment.',
    icon: '📊',
    number: '02',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'AI Strategy Plan',
    description: 'Based on our discovery and assessment findings, we create a detailed, customized AI transformation roadmap tailored to your business goals. This includes prioritized initiatives, clear milestones, expected outcomes, resource requirements, timeline, and success metrics. The roadmap aligns with your budget and business priorities.',
    icon: '🗺️',
    number: '03',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Infrastructure Preparation',
    description: 'We modernize your technology foundation by digitizing paper-based processes, upgrading legacy systems, and implementing cloud infrastructure where needed. This includes data migration, security hardening, API development, and creating the technical foundation required for advanced AI workloads and scalable operations.',
    icon: '⚙️',
    number: '04',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Solution Implementation',
    description: 'Using agile methodology, we deploy AI solutions in iterative phases, starting with high-impact, low-risk initiatives. Our implementation includes custom AI model development, system integration, user training, and KPI monitoring. We maintain close alignment with your changing business needs and provide real-time adjustments.',
    icon: '🚀',
    number: '05',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    name: 'Continuous Optimization',
    description: 'We provide ongoing maintenance, monitoring, and enhancement of your AI solutions to ensure optimal performance and scalability. This includes regular model updates, performance tuning, user feedback integration, and expanding AI capabilities as your business grows and evolves.',
    icon: '🔗',
    number: '06',
    color: 'from-pink-500 to-rose-500',
  }
]

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedStep, setSelectedStep] = useState(null);

  const openStepModal = (step) => {
    setSelectedStep(step);
  };

  const closeStepModal = () => {
    setSelectedStep(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
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

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="w-2 h-2 bg-red-500 rounded-full mr-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Our Methodology
          </motion.span>
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8">
            How We Do It
          </h2>
          <p className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
            Our systematic approach ensures successful AI adoption with measurable business impact and sustainable growth.
          </p>
        </motion.div>

        {/* Desktop Roadmap Layout */}
        <div className="hidden lg:block">
          <motion.div
            className="relative"
            variants={containerVariants}
          >
            {/* Roadmap Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-red-200 to-blue-200 transform -translate-y-1/2 z-0"></div>
            <div className="flex justify-between items-start space-x-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.name}
                  variants={itemVariants}
                  className="group relative flex-1 max-w-xs"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.1 }}
                >
                <motion.div
                  className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 text-center cursor-pointer flex flex-col justify-center h-48"
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  onClick={() => openStepModal(step)}
                >
                  {/* Gradient Background on Hover */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Step Number Circle */}
                  <motion.div
                    className={`relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${step.color} mb-4 mx-auto`}
                    whileHover={{
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                  >
                    <span className="text-lg font-bold text-white">{step.number}</span>
                  </motion.div>

                  {/* Content */}
                  <div className="relative flex-1 flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                      {step.name}
                    </h3>
                  </div>

                    {/* Connecting Arrow */}
                    {index < steps.length - 1 && (
                      <motion.div
                        className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-10"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                      >
                        <div className="w-0 h-0 border-l-6 border-l-red-500 border-t-3 border-t-transparent border-b-3 border-b-transparent"></div>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentStep * 100}%)` }}
            >
              {steps.map((step, index) => (
                <div key={step.name} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    className="relative p-8 bg-white rounded-2xl shadow-lg border border-gray-100 cursor-pointer h-64"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => openStepModal(step)}
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} mb-6`}>
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.name}</h3>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center mt-8 space-x-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStep ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Step Detail Modal */}
      <AnimatePresence>
        {selectedStep && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop with Blur */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeStepModal}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Header */}
              <div className="relative p-8 bg-gradient-to-r from-blue-50 to-red-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${selectedStep.color} flex items-center justify-center`}>
                      <span className="text-2xl font-bold text-white">{selectedStep.number}</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{selectedStep.name}</h2>
                      <p className="text-gray-600 mt-1">Step {selectedStep.number} of our process</p>
                    </div>
                  </div>
                  <button
                    onClick={closeStepModal}
                    className="p-2 hover:bg-white/50 rounded-full transition-colors duration-200"
                  >
                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="text-6xl mb-6 text-center">{selectedStep.icon}</div>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  {selectedStep.description}
                </p>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}
