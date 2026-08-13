<template>
    <div class="son">
        <h3>Son组件</h3>
        <p>{{ count }}</p>
        <button @click="addCount">点击计数</button>
    </div>
</template>

<script lang='ts' setup>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';

    // 生命周期的钩子函数有7个
    // 1.创建（组件创建时最先调用setup函数，只在组件创建阶段执行一次）
    // 其余的6个钩子函数都在创建时完成了绑定，但只有在其事件发生后，才执行里面的()=>{}函数。
    console.log('创建');

    // 2.挂载前
    onBeforeMount(()=>{
        console.log('挂载前');
    })
    // 3.挂载完成
    onMounted(()=>{
        console.log('挂载完成');
    })
    // 4.更新前
    onBeforeUpdate(()=>{
        console.log('更新前');
    })
    // 5.更新完成
    onUpdated(()=>{
        console.log('更新完成');
    })
    // 6.更新前
    onBeforeUnmount(()=>{
        console.log('卸载前');
    })
    // 7。卸载完成
    onUnmounted(()=>{
        console.log('挂载完成');
    })

    // 准备响应式数据
    const count = ref(0);
    const addCount = ()=>{
        count.value++;
    }
</script>

<style scoped>
    .son{
        background-color: rgb(155, 69, 16);
        box-shadow: 0 0 15px;
        border-radius: 15px;
        padding: 15px;
    }
</style>