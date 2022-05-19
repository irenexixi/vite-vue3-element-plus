/*
 * @Author: qqli
 * @Date: 2022-04-08 17:50:48
 * @Last Modified by: qqli
 * @Last Modified time: 2022-04-24 18:38:07
 * @Desc: https://v3.cn.vuejs.org/guide/component-custom-events.html#v-model-%E5%8F%82%E6%95%B0
 */
<template>
    <input
        :value="firstName"
        @input="$emit('update:firstName', $event.target.value)">
    <input
        :value="lastName"
        @input="$emit('update:lastName', $event.target.value)">
</template>

<script>
export default {
    name: 'MultipleVModelChild',
    props: {
        firstName: {
            type: String,
            default: ''
        },
        lastName: {
            type: String,
            default: ''
        }
    },
    emits: ['update:firstName', 'update:lastName']
}
</script>
