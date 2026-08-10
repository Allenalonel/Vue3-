<template>
    <h1>v-bind指令</h1>
    <!-- 关于VUE中的指令：
        1.所有的指令都编写在template中，在script中不支持指令
        2.格式v-xxx
        3.v-on:click 其中v-on的指令作用是，将setup函数暴露的回调函数绑定到某个事件上
    重点关注：v-bind 指令，简写直接“:” 
        1.绑定数组： <div :class="[activeClass, errorClass]">
        2.绑定对象： <div :class="{ 'active': isActive, 'text-danger': hasError }">-->
    <img :src="imgObj.src" :alt="imgObj.alt">
    <button v-on:click="changeImg">点我更改图片</button>
    <div :class="{divclass1:divClass1Enable,divclass2:divClass2Enable}">盒子</div>
    <button v-on:click="changeDivClass">点我更改div为样式2</button>
    <input type="text" :value="inputValue">
    
</template>

<script lang='ts' setup>
import { reactive, ref } from 'vue';

    let imgObj = reactive({
        src:"https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
        alt:"阿波罗"
    })
    function changeImg(){
        imgObj.src = "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
        imgObj.alt = "HTML5"
    }

    let divClass1Enable = ref(true);
    let divClass2Enable = ref(false);
    function changeDivClass(){
        divClass1Enable.value = false;
        divClass2Enable.value = true;
    }
    
    let inputValue = "请输入文本!!!"
</script>

<style scoped>
    img{
        width: 200px;
    }
    .divclass1{
        width: 200px;
        background-color: aqua;
    }
    .divclass2{
        width: 200px;
        background-color: brown;
    }
</style>