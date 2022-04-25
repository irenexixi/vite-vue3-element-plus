import axios from 'axios'
// import { Message } from 'element-plus'
import utils from './misc'

const instance = axios.create({
    baseURL: '',
    timeout: 0 // 默认值是 `0` (永不超时)
    // headers: { 'X-Custom-Header': 'foobar' }
})

console.log('axios', axios)
// 请求拦截
instance.interceptors.request.use(config => {
    console.log('config', config)
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    if (config.data.type === 'video') {
        config.headers['Content-Type'] = 'video/mp4; charset=UTF-8'
    }
    if (config.data.type === 'image') {
        config.headers['Content-Type'] = 'image/png; charset=UTF-8'
    }
    config.responseType = 'blob'
    if (config.header && config.header.sessionId) {
        config.headers.sessionId = config.header.sessionId
    }
    return config
}, error => {
    // Message.info(error.response)
    return Promise.reject(error)
})

// 响应拦截
instance.interceptors.response.use(function(response) {
    // 登录超时
    if (response.data.code === 401) {
        if (window.location.href.indexOf('login') !== -1) return
        let href = ''
        if (utils.getSearchParam('sessionId')) {
            const currentHref = utils.urlDelParam(window.location.href, 'sessionId')
            href = `${location.origin}/#/login?next=${encodeURIComponent(currentHref)}`
        } else {
            href = `${location.origin}/#/login?next=${encodeURIComponent(window.location.href)}`
        }

        window.location.href = href
    } else {
        return response
    }

    return response
}, function(error) {
    return Promise.reject(error)
})

utils.axios = instance

export default utils
