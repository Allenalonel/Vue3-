<template>
    <h1>B1................</h1>

    <h2>query传递的参数</h2>
    <h2>username:{{ route.query.username }}</h2>
    <h2>age:{{ route.query.age }}</h2>

    <h2>props传递的参数</h2>
    <h2>username:{{ username }}</h2>
    <h2>age:{{ age }}</h2>
</template>

<script lang='ts' setup>
import { useRoute } from 'vue-router';

    // 接收query方式的传参
    const route = useRoute();

    // 接收props方式的传参
    defineProps(["username","age"])
</script>

<style scoped>
</style>