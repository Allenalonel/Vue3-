<template>
    <!-- 路由就是借助设置路由器，定义/a请求时，请求A.vue组件，同时卸载上一个组件 -->
    <!-- 一、超链接，用来发送请求，用户点击超链接，就走某个路由 -->
     <!-- 代码的方式跳转路由，看A.vue和B.vue -->
     <!-- 1.直接写路径 -->
        <!-- ********replace属性，如果添加replace属性，
         代表在浏览器前进返回中，这个路径会代替掉上一个路径，则用户不能返回到上一个路径
         这里表示用户跳转到点击跳转到a路径后，无法回到首页了 -->
    <RouterLink replace to="/a">A 路由跳转第一种写法，直接写路径</RouterLink>
    <br>
    <!-- 2.通过path属性 -->
    <RouterLink replace :to="{path:'/a'}">A 路由跳转第二种写法，path属性</RouterLink>
    <br>
    <!-- 3.通过name属性 -->
    <RouterLink :to="{name:'b'}">B 路由跳转第三种写法，通过name属性</RouterLink>
    <!-- 二、指定路由的出口，不是必须写在这里，也可以写在别的vue文件中 -->
    <RouterView></RouterView>
    <!-- 三、在src目录下创建router目录，在里面创建index.ts -->
</template>

<script lang='ts' setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
</style>