// 按需引入 element-plus， vite config重配置
import { createApp } from 'vue'
import router from './router/index'
// import ElementsPlus from 'element-plus' // 完整引入
// import 'element-plus/dist/index.css' // 完整引入
import * as icons from '@element-plus/icons-vue' // 直接使用svg图标，需要全局注册
import 'normalize.css'
import './assets/css/main.scss'
import App from './App.vue'
import Vconsole from 'vconsole' // h5 调试工具

const vConsole = new Vconsole()
console.log('vConsole', vConsole)
console.log('import.meta.env.VITE_APP_TITLE', import.meta.env.VITE_APP_TITLE)

const app = createApp(App)
Object.keys(icons).forEach(key => {
    if (key === 'Menu') {
        app.component('IconMenu', icons[key]) // 使用别名
    } else {
        app.component(key, icons[key])
    }
})

app.use(router)

app.mount('#app')
