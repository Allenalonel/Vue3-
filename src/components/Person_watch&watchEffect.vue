<template>
    <p>语文成绩：{{ chineseScores }}</p>
    <p>数学成绩：{{ mathScores }}</p>
    <button @click="changeCScores">修改语文成绩</button>
    <button @click="changeMScores">修改数学成绩</button>
</template>

<script lang='ts' setup>
import { ref, watch, watchEffect } from 'vue';

   let chineseScores = ref(0);
   let mathScores = ref(0);

   let changeCScores = ()=>{
    if(chineseScores.value<100){
        chineseScores.value+=10;
    }
   }
   let changeMScores = ()=>{
    if(mathScores.value<100){
        mathScores.value+=10;
    }
   }

// 一、watch的写法
   watch([chineseScores,mathScores],(val)=>{
    let [cScores,mScores] = val;
    if(cScores>=90&&mScores>=90){
        console.log('成绩：优秀');
    }else if(cScores>=80&&mScores>=80){
        console.log('成绩：良好');
    }else if(cScores>=60&&mScores>=60){
        console.log('成绩：及格');
    }else{
        console.log('成绩：不及格');
    }
   },{immediate:true})

//  二、watchEffect写法，不常用
//      模糊监视，范围更大，只要在监视中出现的变量发生了改变，就会触发
   watchEffect(()=>{
    if(chineseScores.value>=90&&mathScores.value>=90){
        console.log('成绩：优秀');
    }else if(chineseScores.value>=80&&mathScores.value>=80){
        console.log('成绩：良好');
    }else if(chineseScores.value>=60&&mathScores.value>=60){
        console.log('成绩：及格');
    }else{
        console.log('成绩：不及格');
    }
   })
</script>

<style scoped>
</style>