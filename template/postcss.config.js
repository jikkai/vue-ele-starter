module.exports = {
  plugins: {
    'postcss-salad': {
      browsers: [
        "> 1%",
        "last 2 versions",
        "not ie <= 8"
      ],
      features: {
        bem: {
          shortcuts: { component: 'c', modifier: 'm', descendent: 'd' },
          separators: { modifier: '--', descendent: '__' }
        },
        autoprefixer: false
      }
    },
    cssnano: {
      reduceIdents: false,
      zindex: false
    }
  }
}
