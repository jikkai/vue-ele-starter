const webpack = require('webpack')

const base = require('./webpack.base')

// Plugins Configuration
base.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('test')
  })
)

// Rules Configuration
base.module.rules.push({
  test: /\.vue$/,
  use: 'vue-loader'
})

base.module.rules.push({
  test: /\.css$/,
  use: [
    'style-loader',
    { loader: 'css-loader', options: { importLoaders: 1 } },
    'postcss-loader'
  ]
})

delete base.entry

module.exports = base
