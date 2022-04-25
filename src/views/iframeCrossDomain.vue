/*
 * @Author: qqli
 * @Date: 2021-12-17 10:19:25
 * @Last Modified by: qqli
 * @Last Modified time: 2022-03-23 17:10:22
 * @Desc: 跨域iframe
 */
<template>
    <div>iframeCrossDomain</div>
    <el-button
        style="margin-top: 20px; margin-bottom: 20px;"
        type="primary"
        @click="triggerClick">
        通知子框架退出
    </el-button>
    <iframe
        id="iframeCrossDomain"
        name="iframeCrossDomain"
        src="http://10.181.82.92:3001/#/iframeCrossDomainSub">
    </iframe>
</template>

<script>
export default {
    name: 'IframeCrossDomain',
    data() {
        return {
        }
    },
    mounted() {
        const _this = this
        ;(function() {
            var iframecont = document.getElementById('iframeCrossDomain').contentWindow
            var sdk = {
                talkToChild(action) {
                    console.log('talkToChild action', action)
                    iframecont.postMessage({ action: 'logout', info: 'zhangsan' }, '*')
                },
                getUname: function() {
                    iframecont.postMessage({ action: 'getUname', info: 'zhangsan' }, '*')
                },
                sayHi: (info) => {
                    _this.$alert(info.msg)
                },
                openWindow(info) {
                    window.open(info.url)
                }
            }

            // 监听接收
            window.addEventListener('message', function(e) {
                var data = e.data
                var info = e.data.info
                console.log('parent data.action', data.action)
                if (true) {
                    switch (data.action) {
                    case 'sayHi' :
                        sdk.sayHi(info)
                        break
                    case 'getUname' :
                        sdk.getUname()
                        break
                    case 'openWindow' :
                        sdk.openWindow(info)
                        break
                    default :
                    }
                }
            })
            window.SDK = sdk
            console.log('parent', window.SDK)
        })()
    },
    methods: {
        triggerClick() {
            window.SDK.talkToChild('logout')
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
