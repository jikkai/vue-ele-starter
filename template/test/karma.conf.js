// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

const path = require('path')
const webpack = require('webpack')
const base = require('../build/webpack.base')

const config = require('../build/config')

base.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('test')
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    options: {
      babel: config.babel,
      postcss: config.postcss,
      vue: {
        loaders: {
          css: 'style-loader!css-loader!postcss-loader'
        },
        postcss: config.postcss
      }
    }
  })
)

base.module.rules.push({
  test: /\.css$/,
  loader: 'style-loader!css-loader!postcss-loader'
})

// no need for app entry during tests
delete base.entry

// make sure isparta loader is applied before eslint
base.module.rules.unshift({
  enforce: 'pre',
  test: /\.js$/,
  loader: 'isparta-loader',
  include: path.resolve('../src')
})

// only apply babel for test files when using isparta
base.module.rules.some((loader, i) => {
  if (loader.loader === 'babel') {
    loader.include = path.resolve('../test')
    return true
  }
})

module.exports = (config) => {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['spec', 'coverage'],
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    webpack: base,
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
}