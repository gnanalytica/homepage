import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, ChartBarIcon, UserGroupIcon, CogIcon, RocketLaunchIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion';
import { useState } from 'react';

const features = [
  {
    name: 'Intelligent Automation',
    description:
      'Reduce manual effort and improve employee productivity, saving time and cutting costs with AI-powered automation.',
    icon: CogIcon,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Infrastructure Modernization',
    description:
      'Digitize and modernize your infrastructure to support advanced AI workloads and scalable operations.',
    icon: CloudArrowUpIcon,
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Advanced Data Analytics',
    description:
      'Predictive analytics, smart dashboards, and comparative insights for smarter business decisions and strategy.',
    icon: ChartBarIcon,
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'AI Sales & Marketing',
    description:
      'Grow sales with AI lead generation, marketing insights, and automated outreach strategies.',
    icon: UserGroupIcon,
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Customer Engagement',
    description:
      '24/7 AI chatbots, customer insights, emotion analysis, and client dashboards for better engagement.',
    icon: ArrowPathIcon,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    name: 'Internal AI Tools',
    description:
      'Custom-trained AI chatbots with RAG technology for document retrieval, report generation, and anomaly detection.',
    icon: LockClosedIcon,
    color: 'from-pink-500 to-rose-500',
  },
]

export default function FeatureSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(features.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
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
      id="features"
      className="relative bg-gradient-to-br from-gray-50 to-white py-24 sm:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-10 w-64 h-64 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="w-2 h-2 bg-blue-500 rounded-full mr-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Our Services
          </motion.span>
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8">
            What We Offer
          </h2>
          <p className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
            Transform your business with enterprise-grade AI solutions designed to drive growth, efficiency, and competitive advantage.
          </p>
        </motion.div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:block">
          <motion.div
            className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                variants={itemVariants}
                className="group relative"
              >
                <motion.div
                  className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 h-80 flex flex-col"
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Gradient Background on Hover */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <motion.div
                    className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative flex-1 flex flex-col justify-start">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {features.map((feature, index) => (
                <div key={feature.name} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    className="relative p-8 bg-white rounded-2xl shadow-lg border border-gray-100 h-80 flex flex-col"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Icon */}
                    <motion.div
                      className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative flex-1 flex flex-col justify-start">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {feature.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  )
}