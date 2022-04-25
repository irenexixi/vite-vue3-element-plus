<template>
    <router-view />
</template>

<script>
export default {
    name: 'App',
    components: {
    },
    setup() {
        return {
        }
    },
    methods: {
        selectMenu(index) {
            this.$router.push({ name: index })
        },
        handleOpen() {
        },
        handleClose() {
        }
    }
}
</script>
