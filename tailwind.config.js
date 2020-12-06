module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: '#C11B17',
        }
      },
      spacing: {
        '72': '18rem',
      },
      fontFamily: {
        serif: ['ui-serif', 'Palatino', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
