
<template>
    <div class="head">
        <div class="logo-wrap">
            <img
                alt="Vue logo"
                src="/assets/img/logo.png">
        </div>
        <div class="user-wrap">
            user
        </div>
    </div>
    <div class="main">
        <left-nav></left-nav>
        <div class="content">
            <router-view />
        </div>
    </div>
</template>

<script>
import LeftNav from '../components/LeftNav.vue'

export default {
    name: 'Main',
    components: {
        LeftNav
    },
    setup() {
        return {
        }
    },
    methods: {
    }
}
</script>
