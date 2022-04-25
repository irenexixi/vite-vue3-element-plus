/*
 * @Author: qqli
 * @Date: 2021-12-17 10:19:25
 * @Last Modified by: qqli
 * @Last Modified time: 2022-03-24 14:40:56
 * @Desc: Animate https://animate.style/
 */
<template>
    <div>Animate</div>
    <div
        ref="btnWrap"
        class="animate__animated">
        <el-button
            style="margin-top: 20px; margin-bottom: 20px;"
            type="primary"
            @click="click">
            点 我, 哈哈
        </el-button>
    </div>
    <div class="video-wrap">
        <h1 class="animate__animated animate__infinite animate__shakeX">
            An animated element
        </h1>
    </div>
</template>

<script>
import 'animate.css'
export default {
    name: 'Animate',
    data() {
        return {
        }
    },
    mounted() {
    },
    methods: {
        click(event) {
            console.log('event', event)
            this.$refs.btnWrap.classList.add('animate__wobble')
            setTimeout(() => {
                this.$refs.btnWrap.classList.remove('animate__wobble')
            }, 1100)
        }
    }
}
</script>
