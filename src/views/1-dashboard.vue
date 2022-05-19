
<template>
    <div>Dashboard</div>
    <el-row class="mb-4">
        <el-button plain>
            Plain
        </el-button>
        <el-button
            type="primary"
            plain>
            Primary
        </el-button>
        <el-button
            type="success"
            plain>
            Success
        </el-button>
        <el-button
            type="info"
            plain>
            Info
        </el-button>
        <el-button
            type="warning"
            plain>
            Warning
        </el-button>
        <el-button
            type="danger"
            plain>
            危险
        </el-button>
    </el-row>
    <router-link to="/about">
        Go to About
    </router-link>
</template>

<script setup>
</script>
