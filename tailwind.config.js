module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // container: {
    //   center: true,
    //   padding: '2rem',
    // },
    extend: {
      backgroundImage: theme => ({
        'beach': "url('/dist/img/florida-beach.jpg')"
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/custom-forms')
  ],
}
