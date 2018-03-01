module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    node: true
  },
  {{#if_eq eslintConfig 'standard'}}
  extends: 'standard',
  {{/if_eq}}
  plugins: [
    'html'
  ],
  {{#vcc}}
  "parser": "babel-eslint",
  {{/vcc}}
  'rules': {
    {{#if_eq eslintConfig 'standard'}}
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    {{/if_eq}}
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': 1
  }
}