module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
    port: {
      type: 'string',
      required: false,
      message: 'Listening port',
      default: '4000'
    },
    routerMode: {
      type: 'list',
      required: true,
      message: 'Select router mode',
      choices: ['history', 'hash']
    },
    theme: {
      type: 'list',
      required: true,
      message: 'Select which UI framework to install',
      choices: ['element-ui', 'mint-ui']
    },
    eslint: {
      type: 'confirm',
      require: true,
      message: 'Use linting with ESLint?',
      default: true
    },
    eslintConfig: {
      when: 'eslint',
      type: 'list',
      message: 'Which eslint config would you like to use?',
      choices: [
        {
          name: 'Standard (https://github.com/feross/standard)',
          value: 'standard',
          short: 'Standard'
        },
        {
          name: 'none (configure it yourself)',
          value: 'none',
          short: 'none'
        }
      ]
    },
    happypack: {
      type: 'confirm',
      message: '[⚠️Experimental]Trying to use happypack with babel-loader?'
    },
    unit: {
      type: 'confirm',
      message: 'Setup unit tests with Karma + Mocha?'
    },
    shell: {
      type: 'confirm',
      require: true,
      message: 'Need publish script?',
      default: true
    }
  },
  filters: {
    '.eslintignore': 'eslint',
    '.eslintrc.js': 'eslint',
    'test/unit/**/*': 'unit',
    'build/webpack.test.conf.js': 'unit',
    'publish.sh': 'shell'
  },
  completeMessage: 'To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev'
}