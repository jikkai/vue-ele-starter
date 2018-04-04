const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const base = require('./webpack.base')

base.output.filename = '[name].[chunkhash:8].js'
base.stats = { children: false }
base.optimization = {
  runtimeChunk: true
}

// Plugins Configuration
base.plugins.push(
  new ProgressBarPlugin(),
  new ExtractTextPlugin({
    allChunks: true,
    filename: 'styles.[chunkhash:8].css'
  })
)

// Rules Configuration
base.module.rules.push({
  test: /\.vue$/,
  loader: 'vue-loader',
  options: {
    extractCSS: true,
    preserveWhitespace: false
  }
})

base.module.rules.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract({
    use: [{ loader: 'css-loader?minimize=true' }, 'postcss-loader'],
    fallback: 'style-loader'
  })
})

module.exports = base
