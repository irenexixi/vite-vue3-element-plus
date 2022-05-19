/*
 * @Author: qqli
 * @Date: 2022-04-08 17:50:48
 * @Last Modified by: qqli
 * @Last Modified time: 2022-04-26 17:46:24
 * @Desc: slot 作用域插槽 https://v3.cn.vuejs.org/guide/component-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD
 */
<template>
    <h5>Slot 作用域插槽--子组件</h5>
    <ul>
        <li
            v-for="item in list"
            :key="item.id">
            <!-- 默认插槽 name='default'-->
            <slot :item="item">
                插槽的默认值
            </slot>
            <!-- 具名插槽 -->
            <slot name="foot">
                我是底部
            </slot>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'SlotSub',
    data() {
        return {
            list: [
                { id: 1, name: 'qqli', age: '18' },
                { id: 2, name: 'dt', age: '19' }
            ]
        }
    }
}
</script>
