const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const base = require('./webpack.base')

base.output.filename = '[name].[chunkhash:8].js'
base.stats = { children: false }
base.optimization = {
  minimize: true,
  splitChunks: {
    chunks: 'all',
    name: 'common'
  },
  runtimeChunk: {
    name: 'runtime'
  }
}

// Plugins Configuration
base.plugins.push(
  new ProgressBarPlugin(),
  new MiniCssExtractPlugin({
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
  use: [
    process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
    'css-loader',
    'postcss-loader'
  ]
})

module.exports = base
