<template>
    <h3>姓名：{{ name }}</h3>
    <h3>年龄：{{ age }}</h3>
    <h3>年龄2：{{ age2 }}</h3>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">通过person.age修改年龄</button>
    <button @click="changeAge2">通过toRefs修改年龄</button>
    <button @click="changeAge3">通过toRef修改年龄</button>
</template>

<script lang='ts' setup>
import { reactive, toRef, toRefs } from 'vue';

    let person = reactive({
        name:"jack",
        age:20,
    })

    // 对象结构,此时结构出来的数据，不具备响应式
    // let {name,age} = person

    //无论通过那种方式重新赋值，底层都指向原来的person对象，不是产生新的属性。
    // toRefs()可以使解构出来的一组数据，重新具备响应式
    let{name,age} = toRefs(person);

    // toRef()可以使解构出来的单个数据，重新具备响应式
    let age2 = toRef(person,"age");

    function changeName(){
        name.value = "rose"
    }

    function changeAge(){
        person.age=100;
    }
    function changeAge2(){
        age.value = 200;
    }
    function changeAge3(){
        age2.value=300;
    }

</script>

<style scoped>
</style>