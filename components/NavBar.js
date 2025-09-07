import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Services', href: '#features' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#scheduling' },
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center p-6 lg:px-8" aria-label="Global">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <a href="#" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Gnanalytica</span>
            <img className="h-12 w-auto" src="/images/logos/gnanalytica-logo.png" alt="" />
            <span className="ml-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">Gnanalytica</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden ml-auto">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-center">
          <div className="flex items-center space-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-base font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors duration-200">
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button - Right Aligned */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <a
            href="#scheduling"
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
          >
            Schedule a Call
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Gnanalytica</span>
              <img
                className="h-8 w-auto"
                src="/images/logos/gnanalytica-logo.png"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}