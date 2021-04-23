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
        'sanchez': "url('/dist/img/rick-sanchez-png-8.jpg')",
        'beach': "url('/dist/img/florida-beach.jpg')"
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
