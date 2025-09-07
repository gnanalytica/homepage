import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

/**
 * About section component for Gnanalytica.
 *
 * This section provides information about the company, team, and mission.
 */
export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState(0);

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

  const aboutTabs = [
    {
      id: 'mission',
      title: 'Mission',
      content: {
        title: 'Our Mission',
        description: 'To democratize AI technology by providing enterprise-grade solutions at small business prices. We believe every company, regardless of size, should have access to the transformative power of artificial intelligence.',
        details: [
          'Making AI accessible to businesses of all sizes',
          'Providing enterprise-grade solutions at affordable prices',
          'Empowering companies to compete in the digital age',
          'Bridging the gap between AI potential and business reality'
        ]
      }
    },
    {
      id: 'vision',
      title: 'Vision',
      content: {
        title: 'Our Vision',
        description: 'To be the leading catalyst for AI transformation, creating a world where every business can harness the power of artificial intelligence to drive innovation, efficiency, and growth.',
        details: [
          'Leading the AI transformation revolution',
          'Creating a world where AI is accessible to all',
          'Empowering businesses to innovate and grow',
          'Building the future of intelligent business operations'
        ]
      }
    },
    {
      id: 'values',
      title: 'Values',
      content: {
        title: 'Our Values',
        description: 'Our core values guide everything we do, from how we work with clients to how we develop solutions. These principles ensure we deliver exceptional results while maintaining the highest standards.',
        details: [
          { title: 'Partnership', desc: 'We work with you, not for you' },
          { title: 'Innovation', desc: 'Cutting-edge solutions for modern problems' },
          { title: 'Results', desc: 'Measurable impact on your business' },
          { title: 'Trust', desc: 'Transparent, reliable, and secure' }
        ]
      }
    },
    {
      id: 'team',
      title: 'Team',
      content: {
        title: 'Our Team',
        description: 'We are a diverse team of passionate professionals with deep expertise in AI, business strategy, and technology implementation. Our collective experience spans across industries and technologies.',
        details: [
          {
            name: "AI Experts",
            role: "Technical Team",
            description: "Experienced professionals with deep expertise in AI, machine learning, and business transformation."
          },
          {
            name: "Business Consultants",
            role: "Strategy Team",
            description: "Industry veterans who understand business challenges and can translate AI capabilities into real value."
          },
          {
            name: "Implementation Specialists",
            role: "Delivery Team",
            description: "Hands-on experts who ensure smooth deployment and integration of AI solutions in your business."
          }
        ]
      }
    }
  ];

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.span
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 rounded-full text-sm font-semibold mb-8 shadow-sm border border-green-200/50"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.3)" }}
          >
            <motion.span
              className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-3"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            About Gnanalytica
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-gray-900 via-green-900 to-blue-900 bg-clip-text text-transparent mb-6 sm:mb-8">
            Who We Are
          </h2>
          <p className="text-lg sm:text-xl leading-7 sm:leading-8 text-gray-700 max-w-3xl mx-auto font-medium px-4">
            We're a team of passionate AI experts and business consultants dedicated to making artificial intelligence accessible and valuable for businesses of all sizes.
          </p>
        </motion.div>

        {/* Tab Selection Buttons/Tiles */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {aboutTabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                className={`relative bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 rounded-xl shadow-lg border border-gray-200/60 p-4 sm:p-6 hover:shadow-xl transition-all duration-300 cursor-pointer text-left ${
                  index === activeTab
                    ? 'ring-2 ring-blue-500 shadow-xl bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50/30'
                    : 'hover:scale-105'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(index)}
              >
                {/* Tab Header */}
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-sm sm:text-base font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight">{tab.title}</h3>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content Display Area */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 rounded-2xl shadow-lg border border-gray-200/60 p-6 sm:p-8 lg:p-10"
          >
            {/* Current Tab Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">
                {aboutTabs[activeTab].content.title}
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium">
                {aboutTabs[activeTab].content.description}
              </p>
            </div>

            {/* Current Tab Content */}
            {aboutTabs[activeTab].id === 'values' ? (
              // Values Grid Layout
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {aboutTabs[activeTab].content.details.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-200/50 hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    <h4 className="font-bold mb-2 text-gray-900">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.desc}</p>
                  </motion.div>
                ))}
              </div>
            ) : aboutTabs[activeTab].id === 'team' ? (
              // Team Grid Layout
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {aboutTabs[activeTab].content.details.map((member, index) => (
                  <motion.div
                    key={member.name}
                    className="bg-white rounded-xl shadow-lg border border-gray-200/60 p-6 text-center hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                    <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                  </motion.div>
                ))}
              </div>
            ) : (
              // Mission/Vision List Layout
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutTabs[activeTab].content.details.map((detail, index) => (
                  <motion.div
                    key={detail}
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-lg border border-blue-200/50 shadow-sm hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base font-medium text-gray-800">{detail}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}