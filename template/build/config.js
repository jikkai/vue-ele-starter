'use strict'

module.exports = {
  port: '{{port}}',
  title: '{{name}}',
  vendor: [
    'vue',
    'vue-router'
  ],
  postcss: [
    require('postcss-salad')({
      features: {
        bem: {
          shortcuts: { component: 'c', modifier: 'm', descendent: 'd' },
          separators: { modifier: '--', descendent: '__' }
        }
      }
    })
  ],
  cssModules: false
}
