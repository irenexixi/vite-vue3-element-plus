/*
 * @Author: qqli
 * @Date: 2022-05-18 17:35:56
 * @Last Modified by: qqli
 * @Last Modified time: 2022-05-19 18:20:21
 * @Desc: new worker demo
 * 问题：无法加载文件
 * 官网解决办法：https://cn.vitejs.dev/guide/features.html#webassembly
 * 插件：https://github.com/nolanlawson/promise-worker
 */
<template>
    <div>new worker</div>
</template>

<script>
export default {
    name: 'Worker',
    mounted() {
        console.log('import.meta.url', import.meta.url)
        const worker = new Worker(new URL('./11-foo.worker.js', import.meta.url), {
            type: 'module'
        })
        console.log('xxx', worker)
        worker.postMessage({ a: 1 })
        worker.onmessage = e => {
            // e 是 worker的事件对象 MessageEvent
            // 和 onclick 这些事件对象一个概念
            // e.data, 假如传入 { b: 1 }
            console.log('线程传到外部 ', e, e.data) // MessageEvent, { b: 1 }
            /* do something */
        }
    }
}
</script>
