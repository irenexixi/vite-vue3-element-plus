/*
 * @Author: qqli
 * @Date: 2022-03-22 09:41:51
 * @Last Modified by: qqli
 * @Last Modified time: 2022-03-23 17:59:41
 * @Desc: 同域下的子iframe
 */
<template>
    <div>我是同域下的子iframe</div>
    <el-button
        style="margin-top: 20px;"
        type="primary"
        @click="triggerClick">
        点击调用父框架方法
    </el-button>
</template>

<script>
export default {
    name: 'IframeSameDomainSub',
    data() {
        return {
        }
    },
    mounted() {
        window.asubIframeFn = (msg) => {
            this.$alert(msg)
        }

        window.parent.talkToParent('Hi, I am sub iframe! I am mounted!')
    },
    methods: {
        triggerClick() {
            window.parent.sayHi('Hi, I am sub iframe!')
        }
        // subIframeFn() {
        //     alert('父框架调用了子框架')
        // }
    }
}
</script>
