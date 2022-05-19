<template>
    <aside>
        <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff"
            @select="selectMenu"
            @open="handleOpen"
            @close="handleClose">
            <el-sub-menu index="1">
                <template #title>
                    <el-icon><location /></el-icon>
                    <span>Navigator One</span>
                </template>
                <el-menu-item-group title="Group One">
                    <el-menu-item index="1-1">
                        item one
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        item one
                    </el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">
                        item three
                    </el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                    <template #title>
                        item four
                    </template>
                    <el-menu-item index="1-4-1">
                        item one
                    </el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="dashboard">
                <el-icon><icon-menu /></el-icon>
                <!-- <el-icon><menu /></el-icon> -->
                <span>Dashboard</span>
            </el-menu-item>

            <el-menu-item
                index="3"
                disabled>
                <el-icon><document /></el-icon>
                <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="about">
                <el-icon><setting /></el-icon>
                <span>About</span>
            </el-menu-item>
            <el-menu-item index="imageDownload">
                <el-icon><bottom-left /></el-icon>
                <span>ImageDownload</span>
            </el-menu-item>
            <el-menu-item index="iframeSameDomain">
                <el-icon><alarm-clock /></el-icon>
                <span>IframeSameDomain</span>
            </el-menu-item>
            <el-menu-item index="iframeCrossDomain">
                <el-icon><lightning /></el-icon>
                <span>IframeCrossDomain</span>
            </el-menu-item>
            <el-menu-item index="jszip">
                <el-icon><magnet /></el-icon>
                <span>JsZip</span>
            </el-menu-item>
            <el-menu-item index="animate">
                <el-icon><box /></el-icon>
                <span>Animate</span>
            </el-menu-item>
            <el-menu-item index="setup">
                <el-icon><box /></el-icon>
                <span>Setup</span>
            </el-menu-item>
            <el-menu-item index="multipleVModel">
                <el-icon><box /></el-icon>
                <span>MultipleVModel</span>
            </el-menu-item>
            <el-menu-item index="slot">
                <el-icon><box /></el-icon>
                <span>Slot</span>
            </el-menu-item>
            <el-menu-item index="worker">
                <el-icon><box /></el-icon>
                <span>Worker</span>
            </el-menu-item>
        </el-menu>
    </aside>
</template>

<script>

export default {
    name: 'LeftNav',
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
