'use strict'

module.exports = {
  port: '{{port}}',
  title: '{{name}}',
  vendor: [
    'vue',
    'vue-router'
  ],
  postcss: [
    require('postcss-cssnext')({
      browsers: ['last 2 versions', 'ie > 8']
    })
  ],
  cssModules: false
}
