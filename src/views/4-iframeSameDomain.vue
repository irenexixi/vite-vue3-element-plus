/*
 * @Author: qqli
 * @Date: 2021-12-17 10:19:25
 * @Last Modified by: qqli
 * @Last Modified time: 2022-05-19 18:20:48
 * @Desc: 同域iframe https://www.cnblogs.com/sunshq/p/7976966.html
 * https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage
 */
<template>
    <div>iframeSameDomain</div>
    <el-button
        style="margin-top: 20px; margin-bottom: 20px;"
        type="primary"
        @click="triggerClick">
        点击调用子框架方法
    </el-button>
    <iframe
        id="iframeSameDomain"
        name="iframeSameDomain"
        src="http://192.168.141.81:3000/#/4-iframeSameDomainSub">
    </iframe>
</template>

<script>
export default {
    name: 'IframeSameDomain',
    data() {
        return {
        }
    },
    mounted() {
        // 子组件调用父组件方法
        window.sayHi = msg => {
            this.$alert('你好，' + msg)
        }
        window.talkToParent = (msg) => {
            this.$alert(msg)
        }
        // 父 iframe 立即调用子 iframe 方法，需要延迟调用
        // this.callSubMethod()
    },
    methods: {
        callSubMethod() {
            const ifr = window.frames.iframeSameDomain
            ifr.onload = (e) => {
                if (ifr.window.document.readyState === 'complete') {
                    setTimeout(() => {
                        ifr.window.asubIframeFn('父框架立即调用子框架 ')
                    }, 500)
                }
            }
        },
        triggerClick() {
            const ifr = window.frames.iframeSameDomain
            ifr.asubIframeFn('父框架点击按钮调用子框架方法 ')
        }
    }
}
</script>

<style lang="scss" scoped>
iframe {
    width: 100%;
    height: calc(100% - 60px);
    padding: 20px 0;
    border: 1px dashed #ddd;
}
</style>
