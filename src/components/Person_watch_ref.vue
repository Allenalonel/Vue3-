<template>
    <div>计数器：{{ count }}</div>
    <button @click="addCount">点击增加计数</button>

    <div>
        <p>姓名：{{ user.name }}</p>
        <p>年龄：{{ user.age }}</p>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeUser">修改用户</button>
    </div>
</template>

<script lang='ts' setup>
import { ref, watch } from 'vue';

   

    // 一、可以监视基本数据类型
    let count = ref(0);
    let addCount = ()=>{
        count.value++;
    }
    // watch(被监视的数据，回调函数，配置项)
    // 回调函数中，主要使用第一个参数较多，用于获取最新的值
    watch(count,(newVal,oldVal,cleanUpCallBack)=>{
        console.log("=======================");
        console.log(newVal);
        console.log(oldVal);
        console.log(cleanUpCallBack);
    })

    // 二、可以监视对象，但默认不能监视对象中的属性变化，只能监视对象整体变化
    let user = ref({
        name: 'jack',
        age:30
    });
    let changeName=()=>{
        user.value.name+="*";
    }
    let changeAge=()=>{
        user.value.age++;
    }
    let changeUser=()=>{
        user.value = {
            name:"张三",
            age:50
        }
    }
    // 想监视到user对象内的name和age属性的变化，需要开启配置项的深度监视
    watch(user,(newVal,oldVal)=>{
        console.log("=======================");
        console.log(newVal);
        console.log(oldVal);
    },{deep:true,immediate:true})
    // deep:true开启深度监视，会影响性能，尽量不要开启
    // immediate:true开启立即监视，组件挂载时就监视一次

    // 三、满足条件后停止监视
    // watch()函数有一个返回值，它是一个函数，这个函数无参数、无返回值，用来停止监视
    let stopWatch = watch(user,(newVal,oldVal)=>{
        console.log("=======================");
        console.log(newVal);
        console.log(oldVal);
        // 满足条件，停止监视
        if(user.value.age>=40){
            stopWatch();
        }
    },{deep:true,immediate:true})
</script>

<style scoped>
</style>