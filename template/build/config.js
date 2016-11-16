'use strict'
const pkg = require('../package')

module.exports = {
  port: '{{port}}',
  title: '{{name}}',
  vendor: Object.keys(pkg.dependencies),
  babel: {
    babelrc: false,
    plugins: [['component', [
      {{#isEnabled theme 'element-ui'}}
      { libraryName: 'element-ui', styleLibraryName: 'theme-default' }
      {{else}}
      { libraryName: 'mint-ui', style: true }
      {{/isEnabled}}
    ]]],
    presets: [
      ['es2015', { modules: false }],
      'stage-1'
    ]
  },
  postcss: [
    require('postcss-cssnext')({
      browsers: ['last 2 versions', 'ie > 8']
    })
  ],
  cssModules: false
}
