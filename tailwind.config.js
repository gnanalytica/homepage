/**
 * Tailwind CSS configuration.
 *
 * This file defines the paths to all of the template files in the project
 * so Tailwind can purge unused styles in production. It also extends the
 * default theme with custom colors that match Gnanalytica's brand.
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#4f46e5', // indigo-600
          dark: '#4338ca', // indigo-700
          light: '#6366f1', // indigo-500
        },
        secondary: {
          DEFAULT: '#0ea5e9', // sky-500
          dark: '#0284c7', // sky-600
          light: '#38bdf8', // sky-400
        },
        accent: {
          DEFAULT: '#f97316', // orange-500
          dark: '#ea580c', // orange-600
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};