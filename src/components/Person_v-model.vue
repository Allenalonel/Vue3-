<template>
    <h3>用户名</h3>
    <!-- v-model双向绑定数据，template和script任意一个位置变，另一个地方也跟着变 -->
    <input type="text" v-model="username">
    <p>{{ username }}</p>
</template>

<script lang='ts' setup>
import { ref } from 'vue';

    let username = ref("Allen")
</script>

<style scoped>
</style>