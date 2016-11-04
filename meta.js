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
      default: 'My Superb Vue Project'
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
    sass: {
      type: 'confirm',
      message: 'Use node-sass?',
      default: true
    },
    theme: {
      type: 'list',
      required: true,
      message: 'Select which UI framework to install',
      choices: ['element-ui', 'mint-ui']
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
  completeMessage: 'To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev'
}