// 全局引用 Element-plus， 打包后体积大
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        legacy({
            targets: ['ie >= 11'],
            additionalLegacyPolyfills: ['regenerator-runtime/runtime']
        })
    ],
    resolve: {
        alias: {
            '/assets': './src/assets',
            '/components': './src/components'
        },
        extensions: ['.scss', '.css', '.js', '.vue', 'json']
    }
})
