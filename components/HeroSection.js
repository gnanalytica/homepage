/**
 * Hero section component for Gnanalytica.
 *
 * This section introduces Gnanalytica with compelling messaging that reflects
 * the AI consulting and implementation services. Features a modern, clean design
 * with better visual hierarchy and messaging.
 */
import { motion } from 'framer-motion';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
  };

  const floatingVariants = {
    animate: {
      y: [-15, 15, -15],
      rotate: [0, 8, -8, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className="relative isolate px-4 pt-14 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <motion.div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3b82f6] to-[#ef4444] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            rotate: [30, 40, 30],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl py-12 sm:py-16 md:py-20 lg:py-24">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={textRevealVariants}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            initial="hidden"
            animate="visible"
          >
            <motion.span
              initial={{ opacity: 0, y: 80, scale: 0.7 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              Make Your Business{' '}
            </motion.span>
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
              initial={{ opacity: 0, y: 80, scale: 0.6, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              transition={{
                duration: 1.4,
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{
                scale: 1.08,
                rotateY: 5,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            >
              AI-Ready
            </motion.span>
          </motion.h1>

          {/* Gnanalytica Name Explanation */}
          <motion.div
            className="mt-4 mb-6"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <motion.span
              className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 rounded-full text-xs sm:text-sm font-semibold border border-purple-200/50"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px -5px rgba(147, 51, 234, 0.3)" }}
            >
              <span className="text-purple-600 font-bold">Gnana</span>
              <span className="text-xs text-purple-500 ml-1 hidden sm:inline">(Sanskrit: wisdom)</span>
              <span className="text-purple-400 mx-1 sm:mx-2">+</span>
              <span className="text-indigo-600 font-bold">Analytics</span>
              <span className="text-purple-400 mx-1 sm:mx-2">=</span>
              <span className="text-purple-700 font-bold hidden sm:inline">Wisdom-Driven AI</span>
            </motion.span>
          </motion.div>

          <motion.p
            className="mt-6 text-sm sm:text-base md:text-lg leading-5 sm:leading-6 md:leading-7 text-blue-600 max-w-4xl mx-auto font-normal italic px-4"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{
              scale: 1.05,
              color: "#1d4ed8",
              transition: { duration: 0.3 }
            }}
          >
            AI transformation made simple, affordable, and personal for businesses of every size.
          </motion.p>

          {/* Description Tile */}
          <motion.div
            variants={itemVariants}
            className="mt-8 max-w-5xl mx-auto"
            whileHover={{
              scale: 1.03,
              y: -5,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
          >
            <motion.div
              className="relative p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-50 via-white to-blue-50 rounded-2xl border border-gray-200/60 shadow-lg mx-2 sm:mx-4"
              initial={{ opacity: 0, y: 50, scale: 0.8, rotateX: 15 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{
                boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.3)",
                borderColor: "rgba(59, 130, 246, 0.3)",
                transition: { duration: 0.4 }
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 rounded-2xl"
                animate={{
                  opacity: [0.05, 0.2, 0.05],
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600/3 to-pink-600/3 rounded-2xl"
                animate={{
                  opacity: [0, 0.1, 0],
                  scale: [0.8, 1.1, 0.8],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              <div className="relative text-center">
                {/* Decorative Ribbon */}
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-gray-300"></div>
                    <div className="w-2 h-2 bg-gray-300 rotate-45"></div>
                    <div className="w-2 h-2 bg-gray-300 rotate-45"></div>
                    <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-gray-300"></div>
                  </div>
                </motion.div>

                <motion.p
                  className="text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-7 md:leading-8 text-gray-500 font-normal italic w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 1.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  Whether you're a startup, mid-size company, or established business in any industry, we make AI accessible and affordable. No massive IT teams required, no enterprise-level budgets needed. We work directly with you to transform your operations, delight your customers, and future-proof your business with personalized AI solutions that actually work.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 1.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <motion.button
              onClick={() => {
                const schedulingSection = document.getElementById('scheduling');
                if (schedulingSection) {
                  schedulingSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              className="btn-touch group relative w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              whileHover={{
                scale: 1.08,
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              whileTap={{ scale: 0.92 }}
              initial={{ opacity: 0, scale: 0.6, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 1.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 rounded-lg"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-lg"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
              <span className="relative z-10">Schedule a Discovery Call</span>
            </motion.button>
            <motion.a
              href="#features"
              className="btn-touch group flex items-center justify-center w-full sm:w-auto font-medium text-gray-900 hover:text-blue-600 transition-colors duration-300 relative"
              whileHover={{ x: 8, scale: 1.08 }}
              initial={{ opacity: 0, x: -30, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 1,
                delay: 2.0,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <motion.span
                className="absolute inset-0 bg-blue-100 rounded-lg opacity-0 group-hover:opacity-50"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Explore Solutions</span>
              <motion.span
                className="ml-2 relative z-10"
                animate={{
                  x: [0, 8, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.4,
                  rotate: 15,
                  color: "#3b82f6",
                  transition: { duration: 0.3 }
                }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Benefit Cards */}
        <motion.div
          className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2.2,
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {/* Infinite Scroll Background Elements */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="absolute top-0 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-30" />
            <div className="absolute top-8 right-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-40" />
            <div className="absolute top-16 left-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-25" />
          </motion.div>
          {[
            { icon: "🎯", title: "Free Assessment", description: "No-cost evaluation of your current setup and AI opportunities" },
            { icon: "📋", title: "Custom Roadmap", description: "Personalized AI transformation strategy tailored to your business" },
            { icon: "🚀", title: "Actionable Insights", description: "Clear next steps and recommendations to get started immediately" }
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="text-center p-3 sm:p-4 md:p-6 group cursor-pointer relative bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white/80"
              initial={{ opacity: 0, y: 50, scale: 0.7, rotateX: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
                y: [0, -8, 0]
              }}
              transition={{
                delay: 2.4 + index * 0.15,
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
                y: {
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.8
                }
              }}
              whileHover={{
                y: -12,
                scale: 1.08,
                rotateY: 5,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl opacity-0 group-hover:opacity-100"
                initial={{ scale: 0.8, rotate: -5 }}
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-xl"
                animate={{
                  opacity: [0, 0.15, 0],
                  scale: [1, 1.08, 1],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.7
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-600/3 to-pink-600/3 rounded-xl"
                animate={{
                  opacity: [0, 0.08, 0],
                  scale: [0.9, 1.1, 0.9],
                  rotate: [0, -1, 0],
                }}
                transition={{
                  duration: 6 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.9
                }}
              />
              <motion.div
                className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4 relative z-10"
                animate={{
                  rotate: [0, 20, -20, 0],
                  scale: [1, 1.2, 1],
                  y: [0, -8, 0],
                  x: [0, 3, -3, 0]
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.5,
                  rotate: 25,
                  y: -10,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
              >
                {benefit.icon}
              </motion.div>
              <motion.h4
                className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 sm:mb-2 relative z-10"
                whileHover={{
                  color: "#3b82f6",
                  scale: 1.05
                }}
                transition={{ duration: 0.3 }}
              >
                {benefit.title}
              </motion.h4>
              <motion.p
                className="text-gray-600 text-xs sm:text-sm relative z-10 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 2.6 + index * 0.15,
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                {benefit.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <motion.div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ef4444] to-[#3b82f6] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -10, 0],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -15, 0],
            y: [0, 10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </div>
  )
}