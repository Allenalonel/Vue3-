<template>
    <ul>
        <li v-for="(goods,index) in shoppingCar" :key="goods.id">
            {{ goods.id }},{{ goods.name }},{{ goods.count }}
            <button @click="deleteGoods(index)">删除</button>
        </li>
    </ul>
    <button @click="changeCount">更改死三个商品数量修改为300</button>
</template>

<script lang='ts' setup>
import { reactive } from 'vue';

    let shoppingCar = reactive([
        {id:1,name:"苹果",count:100},
        {id:2,name:"橘子",count:50},
        {id:3,name:"香蕉",count:20},
        {id:4,name:"榴莲",count:5},
    ]);

    function deleteGoods(index:number){
        //reactive可以实现数字功能的响应式，常用功能如下

        // splice()：在指定位置删除/替换/添加元素（功能最强大）
        // push()：在数组末尾添加一个或多个元素
        // pop()：删除并返回数组的最后一个元素
        // shift()：删除并返回数组的第一个元素
        // unshift()：在数组开头添加一个或多个元素
        // sort()：对数组元素进行排序（默认按字符串Unicode排序）
        // reverse()：将数组元素顺序反转
        shoppingCar.splice(index,1);
    }
    function changeCount(){
        shoppingCar[2].count = 300;
    }
</script>

<style scoped>
</style>