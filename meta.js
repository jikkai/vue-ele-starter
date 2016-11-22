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
      message: 'Project description',
      default: 'My Vue Project'
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
    }
  },
  helpers: {
    isEnabled (list, check, opts) {
      if (list[check]) {
        return opts.fn(this)
      } else {
        return opts.inverse(this)
      }
    }
  },
  filters: {
    '.eslintignore': 'eslint',
    '.eslintrc.js': 'eslint'
  },
  completeMessage: 'To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev'
}