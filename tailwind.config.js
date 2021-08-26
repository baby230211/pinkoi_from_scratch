const plugin = require('tailwindcss/plugin');
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flexGrow: {
      0: 0,
      DEFAULT: 1,
      2: 2,
      3: 3,
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      inner: 'inset 0 -2px 0 0 rgba(0, 0, 0, 0.1)',
      none: 'none',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.9)',
    },
    minWidth: {
      0: '0',
      '70vw': '70vw',
      '5-xl': '1024px',
      '1/5': '20%',
      '1/2': '50%',
      '3/4': '75%',
      '1/6': '16.66667%',
      full: '100%',
    },

    extend: {
      translate: {
        '-70vw': '-70vw',
      },
      maxWidth: {
        '70vw': '70vw',
        '1/6': '16.66667%',
      },
    },
  },

  variants: {
    display: ['group-hover', 'group2-hover'],
    opacity: ['group-hover', 'group2-hover'],
    extend: {
      animation: ['motion-safe'],
    },
  },

  plugins: [],
};
