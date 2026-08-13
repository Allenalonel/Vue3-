<!-- 根组件，再Vue当中，每一个组件对应一个文件，文件的扩展名是xxx.vue -->
<!-- 一个合法的vue组件由三部分组成：模板、脚本、样式 -->

<!-- 编写目标：HTML -->
<template>
    <!-- 编写HTML代码，展示到页面上 -->
     <div class="hello">
        <h1>Hello Vue3!</h1>
        <!-- 第三步：使用子组件 -->
        <Person></Person>
        <!-- <Father></Father> -->
     </div>
</template>

<!-- 编写脚本，基于TS的，因此这里编写基于TS的脚本程序 -->
 <!-- lang="ts"表示这里的脚本用的TS语法 -->
<script lang="ts" setup>
    //第一步：导入子组件
    import Person from './components/Person.vue';
    // import Father from './components/Father.vue';

    // 默认导出这个组件,使用语法糖后不需要export default
    // export default{ 
    //     //F12调试插件工具中的组件名称
    //     name:"MyAppRoot",
    //     //第二部：注册子组件
    // components:{Person}
    // }
</script>

<!-- 在这里编写样式 -->
 <!-- scoped作用：讲一下的CSS样式作为局部样式。最好不要作为全局样式，容易冲突 -->
<style scoped>
    .hello{
        background-color: rgb(16, 155, 155);
        box-shadow: 0 0 15px;
        border-radius: 15px;
        padding: 15px;
    }
</style>
