'use strict'
const pkg = require('../package')

module.exports = {
  port: '{{port}}',
  title: '{{name}}',
  vendor: [
    {{#if_eq theme 'element-ui'}}
    'element-ui',
    {{else}}
    'mint-ui',
    {{/if_eq}}
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
