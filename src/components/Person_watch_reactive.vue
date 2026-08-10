<template>
    <div>
        <p>姓名：{{ user.name }}</p>
        <p>年龄：{{ user.age }}</p>
        <p>城市：{{ user.address.city }}</p>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeCity">修改城市</button>
        <button @click="changeUser">修改用户</button>
    </div>
</template>

<script lang='ts' setup>
import { reactive, watch } from 'vue';
    let user = reactive({
        name:'jack',
        age:20,
        address:{
            city:'北京'
        }
    })
    let changeName = ()=>{
        user.name +="*";
    }
    let changeAge = ()=>{
        user.age++;
    }
    let changeCity = ()=>{
        user.address.city +='*';
    }
    let changeUser = ()=>{
        // 不能这样写，会丢失响应式
        // user = {}
        Object.assign(user,{name:'张三',age:40})
    }

    // 一、watch监视reactive
    // 1.默认是开启深度监视的
    // 2.如果只需要监视最外层的属性，例如name,age，可以使用deep:false关闭深度监视
    watch(user,(newVal,oldVal)=>{
        console.log("=================")
        console.log("新值",newVal);
        console.log("旧值",oldVal);
    },{deep:false})

    // 二、watch只想监视reactive中的某个内层属性的变化的写法
    // watch可以监视的数据包括四种：
    //      1.一个getter函数，返回的是一个内存地址，用来监视地址的变化，不自动开启deep:true
    //      2.reactive,无法检测自身的内存地址，监视的是对象内的属性变化，自动开启deep:true
    //      3.ref,不自动开启deep:true
    //      4.以上三种数据组成的数组

    // ！！！！！！总结：都用getter函数的方法，例如()=>user.address
    // 1.需要检测对象本身及内属性变化，例如address和city都需要检测，getter这个对象，并开启deep:true
    // 2.只需要检测对象本身变化，getter这个对象，不开启deep:true
    // 3.只需要检测对象内某个属性的变化，getter这个属性，不开启deep:true
    watch(()=>user.address.city,(newVal,oldVal)=>{
        console.log("=================")
        console.log("新值",newVal);
        console.log("旧值",oldVal);
    })
</script>

<style scoped>
</style>