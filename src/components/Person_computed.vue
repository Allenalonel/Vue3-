<template>
    <div>姓：<input type="text" v-model="firstName"></div>
    <div>名：<input type="text" v-model="lastName"></div>
    <!-- 一、这是不使用计算属性computed的方法，且通常不建议将复杂的运算写在template中 -->
    <div>全名（普通写法在template中直接计算）：{{firstName.slice(0,1).toUpperCase()+firstName.substring(1)}}-{{ lastName }}</div>
    <div>全名（普通写法在scrip中写函数后调用）：{{ getFullName() }}</div>
    <!-- 使用计算属性的写法，优点不会因为调用就多次触发，初次计算后记入缓存，节省算力 -->
    <div>全名（只读的计算属性写法）：{{ readComFullName }}</div>
    <div>全名（可读写的计算属性写法）：{{ allComFullname }}</div>
    <button @click="changFullName()">修改计算属性</button>
</template>

<script lang='ts' setup>
import { computed, ref } from 'vue';

    let firstName = ref("zhang")
    let lastName = ref("san")

    // 二、普通写法在scrip中写函数后调用
    function getFullName(){
        return firstName.value.slice(0,1).toUpperCase()+firstName.value.substring(1)+"-"+lastName.value
    }

    // 三、只读的计算属性，里面是一个函数。
    // computedFullName就是计算属性名
    let readComFullName = computed(function(){
        // 这个函数在第一次肯定会执行；而后在函数中的其他属性发生变化时会再次执行
        // return返回的就是计算属性的属性值
        return firstName.value.slice(0,1).toUpperCase()+firstName.value.substring(1)+"-"+lastName.value;
    })

    // 四、可读写的计算属性,里面是一个对象
    let allComFullname = computed({
        get(){
            return firstName.value.slice(0,1).toUpperCase()+firstName.value.substring(1)+"-"+lastName.value;
        },
            // get执行时机：当读取属性值时
        set(val){
            // set执行时机：当修改属性值时,val会自动接收传过来的数据
            // 利用数组，解构"李-四"
            let [a,b] = val.split("-");
            firstName.value = a;
            lastName.value = b;
        }
    })
    function changFullName(){
        allComFullname.value = "李-四"
    }
</script>

<style scoped>
</style>