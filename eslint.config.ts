import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: true,
  vue: true,
  typescript: true,
}, {
  rules: {
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
  },
})
