import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, ChartBarIcon, UserGroupIcon, CogIcon, RocketLaunchIcon, ChevronLeftIcon, ChevronRightIcon, CurrencyDollarIcon, ShieldCheckIcon, HeartIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion';
import { useState } from 'react';

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

  const filteredServices = services.filter(service => service.category === selectedCategory);

  const categories = businessOutcomes.map(outcome => outcome.name);

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
            Transform your business with AI solutions that deliver measurable results and real value.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
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

        {/* Services Grid */}
        <motion.div
          key={selectedCategory}
          className="flex flex-wrap justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredServices.length > 0 ? filteredServices.map((service, index) => (
            <motion.div
              key={service.name}
              variants={itemVariants}
              className="group relative w-full sm:w-80 lg:w-96"
              onHoverStart={() => setHoveredService(service.name)}
              onHoverEnd={() => setHoveredService(null)}
            >
              <motion.div
                className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 h-80 flex flex-col overflow-hidden w-full"
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
                  className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} mb-4`}
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
                  <service.icon className="h-7 w-7 text-white" />
                </motion.div>

                {/* Service Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
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

        {/* Mobile Services Grid */}
        <div className="lg:hidden">
          {/* Mobile Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Mobile Services Grid */}
          <div key={selectedCategory} className="grid grid-cols-1 gap-6">
            {filteredServices.length > 0 ? filteredServices.map((service, index) => (
              <motion.div
                key={service.name}
                className="relative p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Icon and Category */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${service.color}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <service.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                    {service.category}
                  </span>
                </div>

                {/* Service Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Impact Badge */}
                <div className="inline-flex items-center px-3 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-xs font-semibold">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                  {service.impact}
                </div>
              </motion.div>
            )) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No services found for this category.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </motion.section>
  )
}