'use strict'
const exec = require('child_process').execSync
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const base = require('./webpack.base')
const pkg = require('../package')
const _ = require('./utils')
const config = require('./config')


exec('rm -rf dist/')
base.devtool = 'source-map'

base.entry.vendor = config.vendor
base.output.filename = '[name].[chunkhash:8].js'
base.plugins.push(
  new ProgressBarPlugin(),
  new ExtractTextPlugin('styles.[contenthash:8].css'),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false
    },
    output: {
      comments: false
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.[chunkhash:8].js'
  })
)

base.module.loaders.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract({
    loader: _.cssLoader,
    fallbackLoader: 'style-loader'
  })
})

base.vue.loaders.css = ExtractTextPlugin.extract({
  loader: 'css-loader?-autoprefixer',
  fallbackLoader: 'vue-style-loader'
})

module.exports = base
