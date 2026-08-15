<template>
    <h3>Father组件</h3>
    <div class="father"></div>
    <!-- 在组件标签中使用，实现单向的，子向父暴露数据，且可以更改数据 -->
     <!-- 一、在标签中起名 -->
    <Son_ref ref="mySon"></Son_ref>
    <button @click="getSon">获取Son标签暴露的数据</button>
</template>

<script lang='ts' setup>
    import { ref } from 'vue';
    import Son from './Son.vue';
    import Son_ref from './Son_ref.vue';
    // 二、确保标签名一致，并引用
    const mySon = ref();

    const getSon = () =>{
        // 三、获取了Son组件的对象，且可以调用，更改其中暴露的数据
        console.log(mySon.value);
        console.log(mySon.value.username);
        console.log(mySon.value.user);
        // 函数要带括号
        mySon.value.SonFunction();
    }
</script>

<style scoped>
    .father{
        background-color: rgb(57, 155, 42);
        box-shadow: 0 0 15px;
        border-radius: 15px;
        padding: 15px;
    }
</style>