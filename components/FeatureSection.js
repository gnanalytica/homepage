import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, ChartBarIcon, UserGroupIcon, CogIcon, RocketLaunchIcon, ChevronLeftIcon, ChevronRightIcon, CurrencyDollarIcon, ShieldCheckIcon, HeartIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const businessOutcomes = [
  {
    name: 'Revenue Growth',
    icon: CurrencyDollarIcon,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50'
  },
  {
    name: 'Operational Efficiency',
    icon: CogIcon,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50'
  },
  {
    name: 'Risk & Compliance',
    icon: ShieldCheckIcon,
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'from-purple-50 to-indigo-50'
  },
  {
    name: 'Customer Experience',
    icon: HeartIcon,
    color: 'from-pink-500 to-rose-500',
    bgColor: 'from-pink-50 to-rose-50'
  },
]

const services = [
  {
    name: 'AI Sales & Marketing',
    description: 'Turn your sales team into super-performers. Our AI identifies your hottest leads, predicts which customers are ready to buy, and suggests the perfect offer at the right time. No more guessing games - just smart, data-driven sales.',
    category: 'Revenue Growth',
    icon: UserGroupIcon,
    color: 'from-orange-500 to-red-500',
    impact: 'Increase conversion rates by 25-40%'
  },
  {
    name: 'Advanced Analytics',
    description: 'Make every business decision count with powerful insights. Track your sales pipeline, optimize pricing strategies, and understand exactly which marketing efforts bring in the most revenue. Turn your data into dollars.',
    category: 'Revenue Growth',
    icon: ChartBarIcon,
    color: 'from-green-500 to-emerald-500',
    impact: 'Optimize pricing and boost revenue by 15-30%'
  },
  {
    name: 'Intelligent Automation',
    description: 'Eliminate repetitive tasks that drain your team\'s time. Our AI handles routine paperwork, processes invoices, manages customer data entry, and automates back-office workflows so your people can focus on growing the business.',
    category: 'Operational Efficiency',
    icon: CogIcon,
    color: 'from-blue-500 to-cyan-500',
    impact: 'Reduce manual work by 60-80%'
  },
  {
    name: 'Infrastructure Modernization',
    description: 'Move your business to the cloud and slash IT costs. We help you migrate to modern cloud systems, set up efficient data platforms, and optimize your technology spending. Get enterprise-level infrastructure at small business prices.',
    category: 'Operational Efficiency',
    icon: CloudArrowUpIcon,
    color: 'from-indigo-500 to-purple-500',
    impact: 'Cut infrastructure costs by 30-50%'
  },
  {
    name: 'Internal AI Tools',
    description: 'Give your team AI-powered assistants that work 24/7. Create smart chatbots that answer employee questions, build knowledge search systems that find information instantly, and develop AI copilots that help with daily tasks.',
    category: 'Operational Efficiency',
    icon: LockClosedIcon,
    color: 'from-teal-500 to-blue-500',
    impact: 'Boost employee productivity by 40-60%'
  },
  {
    name: 'Data Governance',
    description: 'Protect your business with bulletproof data security. We set up proper data management systems, create audit trails for compliance, and ensure your customer information is always safe and properly handled.',
    category: 'Risk & Compliance',
    icon: FingerPrintIcon,
    color: 'from-purple-500 to-indigo-500',
    impact: 'Ensure 100% compliance and data security'
  },
  {
    name: 'Model Risk Management',
    description: 'Keep your AI systems honest and reliable. We monitor your AI models for bias, track their performance, and ensure they make fair, accurate decisions. Protect your business from AI-related risks and maintain customer trust.',
    category: 'Risk & Compliance',
    icon: ShieldCheckIcon,
    color: 'from-violet-500 to-purple-500',
    impact: 'Minimize AI risks and ensure trustworthy systems'
  },
  {
    name: 'AI Chatbots',
    description: 'Never miss a customer inquiry again. Our AI chatbots provide instant, helpful responses 24/7, handle common questions automatically, and seamlessly transfer complex issues to your human team. Happy customers, less stress.',
    category: 'Customer Experience',
    icon: ArrowPathIcon,
    color: 'from-pink-500 to-rose-500',
    impact: 'Improve response time by 90% and customer satisfaction'
  },
  {
    name: 'Customer Personalization',
    description: 'Make every customer feel special with personalized experiences. Our AI learns what each customer likes, recommends products they\'ll love, and creates tailored content that keeps them engaged and coming back for more.',
    category: 'Customer Experience',
    icon: HeartIcon,
    color: 'from-rose-500 to-pink-500',
    impact: 'Increase customer engagement by 50-70%'
  },
]

export default function FeatureSection() {
  const [selectedCategory, setSelectedCategory] = useState('Revenue Growth');
  const [hoveredService, setHoveredService] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const carouselRef = useRef(null);

  const filteredServices = services.filter(service => service.category === selectedCategory);

  const categories = businessOutcomes.map(outcome => outcome.name);

  // Touch gesture handling
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const diffX = startX - currentX;
    const threshold = 50; // Minimum swipe distance

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0 && currentSlide < filteredServices.length - 1) {
        // Swipe left - next slide
        setCurrentSlide(currentSlide + 1);
      } else if (diffX < 0 && currentSlide > 0) {
        // Swipe right - previous slide
        setCurrentSlide(currentSlide - 1);
      }
    }
  };

  // Mouse drag handling for desktop
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setCurrentX(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const diffX = startX - currentX;
    const threshold = 50;

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0 && currentSlide < filteredServices.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (diffX < 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    }
  };

  // Reset slide when category changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [selectedCategory]);

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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center mb-16 sm:mb-20"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 sm:mb-8">
            What We Offer
          </h2>
          <p className="text-lg sm:text-xl leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto px-4">
            Transform your business with AI solutions that deliver measurable results and real value.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`btn-touch rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-gray-900 hover:shadow-md border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Services Grid - Desktop */}
        <motion.div
          key={selectedCategory}
          className="hidden lg:grid lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredServices.length > 0 ? filteredServices.map((service, index) => (
            <motion.div
              key={service.name}
              variants={itemVariants}
              className="group relative w-full"
              onHoverStart={() => setHoveredService(service.name)}
              onHoverEnd={() => setHoveredService(null)}
            >
              <motion.div
                className="relative p-4 sm:p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 h-80 sm:h-80 flex flex-col overflow-hidden w-full"
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={hoveredService === service.name ? {
                    scale: 1.1,
                    opacity: 0.15
                  } : {
                    scale: 1,
                    opacity: 0.05
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />

                {/* Floating Icon */}
                <motion.div
                  className={`relative inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${service.color} mb-3 sm:mb-4`}
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  animate={hoveredService === service.name ? {
                    y: [0, -5, 0]
                  } : {}}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </motion.div>

                {/* Service Name */}
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1">
                  {service.description}
                </p>

                {/* Impact Badge */}
                <motion.div
                  className="mt-auto"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <div className="inline-flex items-center px-3 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-xs font-semibold">
                    <motion.span
                      className="w-2 h-2 bg-green-500 rounded-full mr-2"
                      animate={hoveredService === service.name ? {
                        scale: 1.5,
                        opacity: 1
                      } : {
                        scale: 1,
                        opacity: 0.7
                      }}
                      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    />
                    {service.impact}
                  </div>
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                    {service.category}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )) : (
            <div className="w-full text-center py-12">
              <p className="text-gray-500 text-lg">No services found for this category.</p>
            </div>
          )}
        </motion.div>

        {/* Mobile Carousel */}
        <div className="lg:hidden max-w-7xl mx-auto">
          <div
            ref={carouselRef}
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <motion.div
              className="flex"
              animate={{
                x: -currentSlide * 100 + '%'
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              {filteredServices.map((service, index) => (
                <div key={service.name} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    className="group relative w-full"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="relative p-4 sm:p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 h-80 sm:h-80 flex flex-col overflow-hidden w-full"
                      whileHover={{
                        y: -12,
                        scale: 1.03,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                    >
                      {/* Animated Background */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                        animate={hoveredService === service.name ? {
                          scale: 1.1,
                          opacity: 0.15
                        } : {
                          scale: 1,
                          opacity: 0.05
                        }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      />

                      {/* Floating Icon */}
                      <motion.div
                        className={`relative inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${service.color} mb-3 sm:mb-4`}
                        whileHover={{
                          scale: 1.2,
                          rotate: 10,
                          transition: { type: "spring", stiffness: 400, damping: 10 }
                        }}
                        animate={hoveredService === service.name ? {
                          y: [0, -5, 0]
                        } : {}}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                      </motion.div>

                      {/* Service Name */}
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {service.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1">
                        {service.description}
                      </p>

                      {/* Impact Badge */}
                      <motion.div
                        className="mt-auto"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <div className="inline-flex items-center px-3 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-xs font-semibold">
                          <motion.span
                            className="w-2 h-2 bg-green-500 rounded-full mr-2"
                            animate={hoveredService === service.name ? {
                              scale: 1.5,
                              opacity: 1
                            } : {
                              scale: 1,
                              opacity: 0.7
                            }}
                            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                          />
                          {service.impact}
                        </div>
                      </motion.div>

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                          {service.category}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Navigation */}
          {filteredServices.length > 1 && (
            <div className="flex items-center justify-center mt-6 space-x-4">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                disabled={currentSlide === 0}
                className="btn-touch rounded-full bg-white shadow-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {filteredServices.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-blue-600 scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => setCurrentSlide(Math.min(filteredServices.length - 1, currentSlide + 1))}
                disabled={currentSlide === filteredServices.length - 1}
                className="btn-touch rounded-full bg-white shadow-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRightIcon className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          )}

          {/* Swipe Instruction */}
          <p className="text-center text-xs text-gray-500 mt-4">
            Swipe left or right to explore more services
          </p>
        </div>

      </div>
    </motion.section>
  )
}