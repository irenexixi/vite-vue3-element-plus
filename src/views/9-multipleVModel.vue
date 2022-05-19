/*
 * @Author: qqli
 * @Date: 2022-04-08 17:50:48
 * @Last Modified by: qqli
 * @Last Modified time: 2022-05-19 18:20:29
 * @Desc: https://v3.cn.vuejs.org/guide/component-custom-events.html#v-model-%E5%8F%82%E6%95%B0
 */
<template>
    <h5>First Name: {{ firstName }}</h5>
    <h5>Last Name: {{ lastName }}</h5>
    <user-name
        v-model:firstName="firstName"
        v-model:lastName="lastName">
    </user-name>
</template>

<script>
import UserName from './9-multipleVModelChild.vue'
export default {
    name: 'MultipleVModel',
    components: {
        UserName
    },
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe'
        }
    }
}
</script>
