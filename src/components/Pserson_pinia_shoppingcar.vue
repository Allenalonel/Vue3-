<template>
    <h2>购物车（{{ shopCarStore.totalItems }}件）</h2>
    <p v-if="shopCarStore.items.length ===0">购物车为空</p>
    <ul>
        <li v-for="item in shopCarStore.items" :key="item.id">
            {{ item.name }}*{{ item.quantity }}-￥{{ item.price*item.quantity }}
            <button @click="shopCarStore.moveFromCar(item.id)">移除</button>
        </li>
    </ul>

    <p v-if="shopCarStore.items.length>0">总价：￥{{ shopCarStore.totalPrice }}</p>
    <button @click="shopCarStore.clearCar">清空购物车</button>
</template>

<script lang='ts' setup>
import { useShopCarsStore } from '../store/Pserson_shopcars';

    const shopCarStore = useShopCarsStore();
</script>

<style scoped>
</style>