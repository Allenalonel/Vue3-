<template>
    <!-- 一、v-if v-else-if v-else用法 -->
    <div v-if="isLogin">欢迎回来！</div>
    <div v-else>请先登录X</div>

    <div v-if="score>90">优秀</div>
    <div v-else-if="score>=60">及格</div>
    <div v-else>不及格</div>


    <!--二、v-memo 缓存模板片段，仅在依赖项变化时重新渲染（优化性能） -->
    <button @click="data++">其他组件更新 {{ data }}</button>
  
     <!-- 没有 v-memo：每次点击按钮都会重新计算 -->
     <!-- <div>
        无缓存：{{ expensiveCalculation() }}
     </div> -->
  
  <!-- 有 v-memo：点击按钮不会重新计算（因为依赖没变） -->
    <div v-memo="[dependency1, dependency2]">
     有缓存：{{ expensiveCalculation() }}
    </div>
</template>

<script lang='ts' setup>
    import { ref } from 'vue';

    let isLogin = ref(false);
    let score = ref(85);

    // 依赖项
    const dependency1 = ref(1);
    const dependency2 = ref(2);
  
    // 其他组件的数据
    const data = ref(0);
  
    const expensiveCalculation = () => {
        console.log("计算中...");
         return dependency1.value + dependency2.value;
        };
</script>

<style scoped>
</style>