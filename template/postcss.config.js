module.exports = {
  plugins: {
    'postcss-salad': {
      features: {
        bem: {
          shortcuts: { component: 'c', modifier: 'm', descendent: 'd' },
          separators: { modifier: '--', descendent: '__' }
        }
      }
    }
  }
}
