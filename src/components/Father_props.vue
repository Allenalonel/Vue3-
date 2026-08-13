<template>
    <div class="father">
        <h3>Father组件</h3>
        <!-- 一、通过props可以实现父组件向子组件单向传递数据，可静态/动态 -->
        <!-- props是看不到的，直接写在标签属性中(配合bind绑定)，表示通过多个属性传递数据 -->
        <Son_props name='jack' :age="age" :list="openList"></Son_props>
    </div>
</template>

<script lang='ts' setup>
    import { reactive, ref } from 'vue';
    import Son from './Son.vue';
    import Son_props from './Son_props.vue';

    const age = ref(20);

    const openList = reactive([
        {id:1,name:'jack',age:20},
        {id:2,name:'lucy',age:30},
        {id:3,name:'tom',age:40},
    ])

</script>

<style scoped>
    .father{
        background-color: rgb(57, 155, 42);
        box-shadow: 0 0 15px;
        border-radius: 15px;
        padding: 15px;
    }
</style>