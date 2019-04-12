module.exports = {
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error'
  }
}
