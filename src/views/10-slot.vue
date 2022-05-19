/*
 * @Author: qqli
 * @Date: 2022-04-08 17:50:48
 * @Last Modified by: qqli
 * @Last Modified time: 2022-05-19 18:20:40
 * @Desc: slot 作用域插槽 https://v3.cn.vuejs.org/guide/component-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD
 */
<template>
    <h5>Slot 作用域插槽--父组件</h5>

    <todo-list>
        <template #default="slotProps">
            <i class="fa fa-check">{{ myName }} 我是模板的数据，插槽可以访问与模板其余部分相同的示例（即相同的作用域）</i>
            <span class="green"> -- {{ slotProps.item.name }} 我是插槽内容访问子组件的数据 </span>
        </template>
    </todo-list>
    <!-- 显示插槽的默认值（备用内容） -->
    <todo-list>
    </todo-list>
</template>

<script>
import TodoList from './10-slotSub.vue'
export default {
    name: 'Slot',
    components: {
        TodoList
    },
    data() {
        return {
            myName: 'panda',
            list: [
                { id: 1, name: 'qqli', age: '18' },
                { id: 2, name: 'dt', age: '19' }
            ]
        }
    }
}
</script>
