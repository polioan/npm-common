'use strict'

const path = require('node:path')

const {
  commonJsExtensions,
  esmExtensionsWhenTypeModule,
  jsExtensions,
} = require('eslint-config-polioan/common/constants')

/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  extends: [
    'polioan/configurations/comments',
    'polioan/configurations/general',
    'polioan/configurations/generalTypes',
    'polioan/configurations/regex',
    'polioan/configurations/spellcheck',
  ],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  settings: {},
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: path.join(__dirname, 'tsconfig.json'),
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [],
  rules: {},
  overrides: [
    {
      files: commonJsExtensions,
      extends: ['polioan/configurations/commonJS'],
    },
    {
      files: esmExtensionsWhenTypeModule,
      extends: ['polioan/configurations/esmModules'],
    },
    {
      files: jsExtensions,
      extends: ['polioan/configurations/javascriptOnly'],
    },
    {
      files: ['.eslintrc.cjs'],
      rules: {
        'spellcheck/spell-checker': ['off'],
      },
    },
    {
      files: ['test/*'],
      rules: {
        'no-console': ['warn'],
      },
    },
  ],
}

module.exports = config
