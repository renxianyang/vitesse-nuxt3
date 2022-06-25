module.exports = {
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['vue'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  rules: {
    '@typescript-eslint/no-inferrable-types': 0,
    'linebreak-style': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'warn',
    'vue/no-multiple-template-root': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multi-word-component-names': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'vue/no-setup-props-destructure': 0,
    'no-async-promise-executor': 0,
  },
}
