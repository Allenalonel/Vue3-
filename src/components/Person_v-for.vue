<template>
    <!-- 一、v-for遍历数组 ,主要用这个
        用法：v-for="(数组名,索引下标)-->
    <ul>
        <li v-for="(person,index) in personList" :key="person.id">
            {{ person.id}},{{ person.name }},{{ person.age }},index={{ index }}
        </li>
    </ul>

    <!-- 二、v-for遍历对象
        用法：v-for="(属性值，属性名，索引)" -->
    <ul>
        <li v-for="(a,b,c) in psersonInfo" :key="b">
            {{ a }},{{ b }},{{ c }}
        </li>
    </ul>

    <!--三、v-for遍历范围值
        用法：v-for="(属性值，属性名，索引)" -->
    <ul>
        <li v-for="num in count" :key="num">
            {{ num }}
        </li>
    </ul>
</template>

<script lang='ts' setup>
    // 一、v-for遍历数组
    let personList = [
        {id:1,name:"jack",age:18},
        {id:2,name:"tom",age:20},
        {id:3,name:"lucy",age:25},
        {id:4,name:"jerry",age:26},
    ]

    // 二、v-for遍历对象
    let psersonInfo = {
        name:"jack",
        age:20,
        email:"jack@123.com",
        tel:"15588975011"
    }

    // 二、v-for遍历范围值
    let count = 10;
</script>

<style scoped>
</style>