import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Services', href: '#features', icon: '🔧' },
  { name: 'Process', href: '#process', icon: '📋' },
  { name: 'Case Studies', href: '#case-studies', icon: '📊' },
  { name: 'About', href: '#about', icon: '👥' },
]

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 sm:p-4 md:p-6 lg:px-8" aria-label="Global">
        {/* Logo Section */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="#" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Gnanalytica</span>
            <motion.img
              className="h-7 w-auto sm:h-8 md:h-10 lg:h-12"
              src="/images/logos/gnanalytica-logo.png"
              alt=""
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <span className="ml-2 sm:ml-3 lg:ml-4 text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">Gnanalytica</span>
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="btn-touch inline-flex items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation - Centered with Tiles */}
        <motion.div
          className="hidden lg:flex lg:flex-1 lg:justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center space-x-2">
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="group relative px-4 py-2 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-blue-300/50 hover:bg-blue-50/50 transition-all duration-300 shadow-sm hover:shadow-md"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-sm group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </span>
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                    {item.name}
                  </span>
                </div>
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA Button - Right Aligned */}
        <motion.div
          className="hidden lg:flex lg:flex-shrink-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
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
            className="btn-touch group relative bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center space-x-2">
              <span className="text-sm">🚀</span>
              <span>Schedule a Discovery Call</span>
            </div>
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-xl" />
          </motion.button>
        </motion.div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-2xl">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              <span className="sr-only">Gnanalytica</span>
              <img
                className="h-8 w-auto"
                src="/images/logos/gnanalytica-logo.png"
                alt=""
              />
              <span className="ml-2 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">Gnanalytica</span>
            </a>
            <button
              type="button"
              className="btn-touch rounded-md text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-3 py-6">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="btn-touch group flex items-center space-x-4 -mx-3 rounded-xl text-lg font-semibold leading-7 text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 active:bg-gray-100 transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                      {item.icon}
                    </span>
                    <span className="group-hover:text-blue-600 transition-colors duration-200">
                      {item.name}
                    </span>
                  </motion.a>
                ))}
              </div>
              <div className="py-6">
                <motion.button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const schedulingSection = document.getElementById('scheduling');
                    if (schedulingSection) {
                      schedulingSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                  className="btn-touch flex items-center justify-center space-x-3 -mx-3 rounded-xl text-lg font-semibold bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>🚀</span>
                  <span>Schedule a Discovery Call</span>
                </motion.button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </motion.header>
  )
}