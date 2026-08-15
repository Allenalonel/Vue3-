<template>
    <h1>A=============</h1>
</template>

<script lang='ts' setup>
import { getCurrentInstance, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
// 在当前组件中。获取组件实例（新内容）
    const currentInstance = getCurrentInstance();
// 被另一个路由覆盖时，当前组件会被卸载
    onUnmounted(()=>{
        console.log("A组件被卸载",currentInstance);
    })

    
    // 通过代码的方式，跳转路由
    // 1.导入useRouter()函数
    const router = useRouter();
    // 2.借助生命周期函数，实现挂载完成自动跳转
    onMounted(()=>{
        // 5秒后跳转到B.vue
        setTimeout(()=>{
            // push模式
            router.push("/b");
            // replace模式
            // router.replace("/b");
        },5000)
    })
</script>

<style scoped>
</style>