<template>
    <h2>商品列表</h2>
    <ul>
        <li v-for="product in shopCarStore.products" :key="shopCarStore.$id">
            {{ product.name }}-￥{{ product.price }}
            <button @click="shopCarStore.addToCar(product.id)">加入购物车</button>
        </li>
    </ul>
</template>

<script lang='ts' setup>
import { useShopCarsStore } from '../store/Pserson_shopcars';

    const shopCarStore = useShopCarsStore();
</script>

<style scoped>
</style>