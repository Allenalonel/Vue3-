<template>
    <h3>计数器：{{ count }}</h3>
    <h3>放大：{{ bigCount }}</h3>
    <div>
        <!-- 一、使用pinia 先去main.js引入并创建 -->
        <!-- 二、在src目录下创建 store目录在里面存放对应的ts文件，在里面编写仓库内容 -->
        <!-- 有选项式API和组合式API写法两种 -->

        <select v-model.number="n">
            <!-- v-model.number 
            1.v-model影响的是标签的value属性的值 
            2.可以让传递的数值都转换为数字格式，方便计算 -->
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
    </div>
    <div>
        <button @click="add">+</button>
    </div>
    <div>
        <button @click="minus">-</button>
    </div>
</template>

<script lang='ts' setup>
import { storeToRefs } from 'pinia';
// 在这儿切换 组合式和选项式写法的文件
import usePersonStore from '../store/Pserson_2';
    // 三、导入仓库,然后就可以直接使用了
    
    const countStore = usePersonStore();
    // 可选，使用storeToRefs将仓库里面的state()转换为响应式，并顺带解构使用。
        // 尽量不要使用ToRefs，这会将仓库内其他不必要的参数也转换为响应式。
    const {count,n,bigCount} = storeToRefs(countStore);

    function add(){
        // 四、修改数据
        // 4.1 第一种：单个修改
        // countStore.count += countStore.n;
        // 4.2 第二种：批量修改
        countStore.$patch({
            count:countStore.count += countStore.n
        });
        
    };

    function minus(){
        // 4.3 第三种：在ts中设置actions修改
        countStore.minus();
    };

    // 五、订阅仓库
    // 当仓库中的任何一个数据发生变化是，这里面的回调函数执行，有点类似于watch
    countStore.$subscribe((mutate,state)=>{
        // 变更相关的信息
        console.log(mutate);
        // 变更之后的数据
        console.log(state);

    })
</script>

<style scoped>
</style>