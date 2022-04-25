/*
 * @Author: qqli
 * @Date: 2022-04-08 17:50:48
 * @Last Modified by: qqli
 * @Last Modified time: 2022-04-08 18:00:13
 * @Desc: setup child demo
 */
<template>
    <h5>我是子组件{{ props.msg }}</h5>
    <el-button
        type="text"
        @click="handleClick">
        点我
    </el-button>
</template>

<script setup>
import { useAttrs, defineExpose, defineEmits } from 'vue'

const attrs = useAttrs()
console.log('attrs', attrs)

const msg = 'Hello world'
defineExpose({
    msg
})

const emit = defineEmits(['child-click']) // eslint-disable-line
const handleClick = ($event) => {
    console.log('handleClick', $event)
    emit('child-click', 'child-click')
}
</script>
