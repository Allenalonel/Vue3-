<template>
    <!-- 效果：
     打开网页时从咯localStorage获取毒鸡汤列表duList，第一次获取是null或者undefine，且是字符串类型。
      然后点击按钮，axios获取api数据传入毒鸡汤列表duList
      组件订阅监听duList，数据只要发生变化就将数据写入localStorage
      最后在template中利用v-for循环遍历，显示出duList的内容-->
    <button @click="duStore.getDu">点击加入毒鸡汤</button>
    <ul v-for="(du,index) in duStore.duList">
        <li>{{ index }}-{{ du.content }}</li>
    </ul>

</template>

<script lang='ts' setup>
import useDuStore from '../store/Person_du';
    //获取仓库 
    const duStore =  useDuStore();

    // 订阅
    // 目的效果：只要数据发生变化，就将最新的数据存储的localStorage中
    duStore.$subscribe((mutata,state)=>{
        // localStorage只能存储字符串
        // 将state转换成字符串
        const duListStr = JSON.stringify(state.duList);
        // 存入到localStorage中，localStorage.setItem("取的对象",存的对象)
        localStorage.setItem("duList",duListStr);
    })
</script>

<style scoped>
</style>