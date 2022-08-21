const { pink } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')
module.exports = {
  
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        DEFAULT: '-8px -8px 12px 0px',
      },

      colors: {
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        teal: colors.teal,
        lime: colors.lime,
        midnight: '#010724',
        'th-background': 'var(--background)',
        'th-background-primary': 'var(--background-primary)',
        'th-background-secondary': 'var(--background-secondary)',
        'th-background-highlight': 'var(--background-highlight)',
        'th-background-cta': 'var(--background-cta)',
        'th-foreground': 'var(--foreground)',
        'th-primary-dark': 'var(--primary-dark)',
        'th-primary-medium': 'var(--primary-medium)',
        'th-primary-light': 'var(--primary-light)',
        'th-text-dark': 'var(--text-dark)',
        'th-text-medium': 'var(--text-medium)',
        'th-text-light': 'var(--text-light)',
      },
    },
  },
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
    extend: {},
  },
  plugins: [],
}