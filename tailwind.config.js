/**
 * Tailwind CSS configuration.
 *
 * This file defines the paths to all of the template files in the project
 * so Tailwind can purge unused styles in production. It also extends the
 * default theme with a few custom colors that match gnanalytica's brand.
 */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6C63FF',
          dark: '#574fcf',
        },
        secondary: {
          DEFAULT: '#00bfa6',
          dark: '#009782',
        },
      },
    },
  },
  plugins: [],
};