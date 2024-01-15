module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:vue/vue3-essential'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'vue/multi-word-component-names': ['off'], // 是否强制组件名称多单词
    camelcase: 'off', // 是否强制使用驼峰拼写法命名规定
    'space-before-function-paren': ['off'], // 是否强制方法圆括号左边空格
    'no-multiple-empty-lines': 'off', // 不允许多个空行
    'new-cap': 'off', // 构造函数名首字母大写
    'eol-last': 'off', // 要求或禁止文件末尾存在空行
    'dot-notation': 'off', // 允许不使用点表示写法
    'vue/no-mutating-props': ['off'] // 关闭Vue不能修改props警告
  }
}
