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
      choices: [
        {
          name: 'Element UI (https://github.com/ElemeFE/element)',
          value: 'element-ui',
          short: 'ElementUI'
        },
        {
          name: 'Mint UI (https://github.com/ElemeFE/mint-ui)',
          value: 'mint-ui',
          short: 'MintUI'
        },
        {
          name: 'none',
          value: 'none',
          short: 'none'
        }
      ]
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
      message: 'Trying to use happypack with babel-loader?'
    },
    unit: {
      type: 'confirm',
      message: 'Setup unit tests with Karma + Mocha?'
    }
  },
  filters: {
    '.eslintignore': 'eslint',
    '.eslintrc.js': 'eslint',
    'test/unit/**/*': 'unit',
    'config/webpack.test.js': 'unit'
  },
  completeMessage: 'To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm start'
}
