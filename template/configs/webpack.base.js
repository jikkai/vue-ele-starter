const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = require('./config')

module.exports = {
  entry: {
    client: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: './'
  },
  resolve: {
    extensions: ['.js', '.vue', '.css', '.json'],
    alias: {
      '~': path.join(__dirname, '../src'),
      '~components': path.join(__dirname, '../src/components')
    }
  },
  performance: {},
  module: {
    rules: [
      {{#if eslint}}
      {
        enforce: 'pre',
        test: /.vue$/,
        use: 'eslint-loader',
        exclude: /node_modules/
      },
      {{/if}}
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [/node_modules/]
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: 'file-loader?limit=8192'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: config.title,
      template: path.resolve(__dirname, './index.html'),
      favicon: path.resolve(__dirname, '../public/favicon.png'),
      filename: './index.html'
    })
  ]
}
