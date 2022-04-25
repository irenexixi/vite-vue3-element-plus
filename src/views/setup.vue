/*
 * @Author: qqli
 * @Date: 2022-04-08 17:50:48
 * @Last Modified by: qqli
 * @Last Modified time: 2022-04-08 18:41:45
 * @Desc: setup demo https://juejin.cn/post/6944190150406570020
 */
<template>
    <h2>我是<code>setup()</code>，我可以</h2>
    <ol>
        <li>自动注册组件</li>
        <li>属性和方法无需返回</li>
    </ol>
    <h2>我是父组件</h2>
    <h4 @click="ageInc">
        {{ name }} is {{ age }}
    </h4>
    <Child
        msg="hello"
        @child-click="childCtx">
    </Child>
</template>

<script setup>
import { ref } from 'vue'
// 自动注册子组件，直接省略了子组件注册的过程
import Child from './SetupChild'

// 属性和方法无需返回
const name = ref('CoCoy1')
const age = ref(18)
const ageInc = () => {
    age.value++
}

const childCtx = (ctx) => {
    console.log('ctx', ctx)
}
</script>
