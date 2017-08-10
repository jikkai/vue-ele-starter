// Karma configuration
// Generated on Fri Aug 11 2017 00:15:18 GMT+0800 (CST)
var webpackConfig = require('../../build/webpack.test')

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['mocha', 'expect'],
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    files: ['./index.js'],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity
  })
}
