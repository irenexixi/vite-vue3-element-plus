module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 6,
        parser: 'babel-eslint'
    },
    parser: 'vue-eslint-parser',
    env: {
        browser: true
    },
    // 对应依赖 eslint-config-standard、eslint-plugin-vue
    extends: ['standard', 'plugin:vue/vue3-recommended'],
    // lint *.vue file
    plugins: ['vue'],
    rules: {
        'indent': ['error', 4],
        'semi': ['error', 'never'],
        'eqeqeq': 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error': 'off',
        'space-before-function-paren': ['error', 'never'], // 函数声明时括号与函数名间加空格
        // 'no-useless-escape': 'warn' // 禁止不必要的转义
        'vue/html-indent': ['error', 4],
        'vue/html-closing-bracket-newline': 'off',
        'vue/html-closing-bracket-spacing': 'error',
        'vue/html-self-closing': ['error', {html: {void: 'never', normal: 'any', component: 'any'}}],
        'vue/no-v-html': 'off',
        'vue/prop-name-casing': ['error', 'camelCase']
    }
}