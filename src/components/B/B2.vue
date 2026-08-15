<template>
    <h1>B2................</h1>
    
    <h2>route.params传递的参数</h2>
    <h2>username:{{ route.params.username }}</h2>
    <h2>age:{{ route.params.age }}</h2>

    <h2>props传递的参数</h2>
    <h2>username:{{ username }}</h2>
    <h2>age:{{ age }}</h2>
</template>

<script lang='ts' setup>
import { useRoute } from 'vue-router';


    // 导入params的传参
    const route = useRoute();

    // 导入props的传参
    defineProps(["username","age"])
</script>

<style scoped>
</style>