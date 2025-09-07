import { motion } from 'framer-motion';

/**
 * About section component for Gnanalytica.
 *
 * This section provides information about the company, team, and mission.
 */
export default function AboutSection() {
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

  const teamMembers = [
    {
      name: "AI Experts",
      role: "Technical Team",
      description: "Experienced professionals with deep expertise in AI, machine learning, and business transformation.",
      icon: "🧠"
    },
    {
      name: "Business Consultants",
      role: "Strategy Team",
      description: "Industry veterans who understand business challenges and can translate AI capabilities into real value.",
      icon: "💼"
    },
    {
      name: "Implementation Specialists",
      role: "Delivery Team",
      description: "Hands-on experts who ensure smooth deployment and integration of AI solutions in your business.",
      icon: "⚙️"
    }
  ];

  return (
    <motion.section
      id="about"
      className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50"
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

        {/* Mission Statement */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl border border-gray-200/60 p-8 sm:p-12 mb-16"
          variants={itemVariants}
          whileHover={{ y: -4, scale: 1.01 }}
        >
          <div className="text-center">
            <div className="text-6xl mb-6">🎯</div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              To democratize AI technology by providing enterprise-grade solutions at small business prices.
              We believe every company, regardless of size, should have access to the transformative power of artificial intelligence.
            </p>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-2xl shadow-lg border border-gray-200/60 p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="text-4xl sm:text-5xl mb-4">{member.icon}</div>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {member.name}
              </h4>
              <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="mt-16 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 sm:p-12 border border-gray-200/60 shadow-lg"
          variants={itemVariants}
        >
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">Our Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🤝", title: "Partnership", desc: "We work with you, not for you" },
                { icon: "💡", title: "Innovation", desc: "Cutting-edge solutions for modern problems" },
                { icon: "🎯", title: "Results", desc: "Measurable impact on your business" },
                { icon: "🔒", title: "Trust", desc: "Transparent, reliable, and secure" }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl mb-3">{value.icon}</div>
                  <h4 className="font-bold mb-2 text-gray-900">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}