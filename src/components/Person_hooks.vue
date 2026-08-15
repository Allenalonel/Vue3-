<template>
    <!-- hooks可以实现组合式API的项目，一个功能就可以封装一个ts文件
     只能在setput中使用 -->
    <!-- 三、解构拿取的数据就可以直接使用了 -->
    <p>计数：{{ count }}</p>
    <button @click="addCount">点击计数</button>
    <br>
    <img v-for="getImg in imgs" :src="getImg" alt="图片获取失败">
    <br>
    <button @click="addImgs">点击添加图片</button>
</template>

<script lang='ts' setup>
    // 一、导入hook
    import useAddCount from '../hooks/useAddCount';
    import useAddImg from '../hooks/useAddImg';

    // 二、解构拿取导入的hook的数据
    const {count,addCount} = useAddCount();
    const {imgs,addImgs} = useAddImg();
</script>

<style scoped>
    img{
        width: 200px;
    }
</style>