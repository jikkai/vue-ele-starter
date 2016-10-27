'use strict'
const path = require('path')
const config = require('./config')

const _ = module.exports = {}

_.cssLoader = config.cssModules ?
  'style-loader!css-loader?-autoprefixer&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader' :
  'style-loader!css-loader?-autoprefixer!postcss-loader'

_.outputPath = path.join(__dirname, '../dist')

_.outputIndexPath = path.join(__dirname, '../dist/index.html')
