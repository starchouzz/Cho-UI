/*
 * @Description: 
 * @Autor: starzhou
 * @Date: 2023-03-19 20:59:54
 * @LastEditTime: 2023-03-19 21:02:02
 */
module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'plugin:vue/vue3-essential',
      'standard'
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      parser: '@typescript-eslint/parser',
      sourceType: 'module'
    },
    plugins: [
      'vue',
      '@typescript-eslint'
    ],
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }