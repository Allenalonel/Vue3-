<template>
    <h1>B==================</h1>
    <!-- 一、跳转子路由 -->
    <!-- 1.子路径第一种写法 -->
    <RouterLink to="/b/b1">B1 子路径第一种写法</RouterLink>
    <br>
    <!-- 2.子路径第二种写法 -->
    <RouterLink :to="{path:'/b/b2'}">B2 子路径第二种写法</RouterLink>
    <br>
    <!-- 3.子路径第三种写法 -->
    <RouterLink :to="{name:'b2'}">B2 子路径第三种写法</RouterLink>
    <br>
    <br>

    <!-- 二、路由中，父子组件传参 -->
     <!-- query不需要去index.ts更改路径写法，params需要更改 -->
    <!-- query和params在子组件用useRoute()接收参数 -->
    <!-- props在子组件用defineProps([])接收参数 -->
    <!-- 1.通过query方式向子组件传参，到子组件通过useRoute().query函数获取路由对象接收使用 -->
            <!-- 1.1 第一种写法：拼接字符串 -->
    <RouterLink :to="`/b/b1?username=${username}&age=${age}`">B1 query传参的拼接字符串写法</RouterLink>
    <br>
            <!-- 1.2 第二种写法：对象形式传参，但是对象query属性名不能随便写，必须写query这个单词 -->
    <RouterLink :to="{path:'/b/b1',query:{username,age}}">B1 query传参的对象形式写法</RouterLink>
    <br>
    
    <!-- 2.通过params传参，要先去index.ts更改路由配置，不能传数组-->
            <!-- 2.1 第一种写法：restful拼接写法 -->
    <RouterLink :to="`/b/b2/${username}/${age}`">B2 params传参的restful格式写法</RouterLink>
    <br>
            <!-- 2.2 第二种写法：只支持name标签中写，restful拼接写法-->
    <RouterLink :to="{name:'b2',params:{username,age}}">B2 params传参的对象形式写法</RouterLink>
    <br>
    <!-- 3.通过props传参，要去index.ts更改路由配置，不需要在父组件写代码-->
        <!-- 3.1 props配合query路径参数 -->
        <!-- 3.2 props配合params路径参数 -->
        <!-- 3.3 props固定传参，基本不用 -->

    <!-- 通过按钮跳转路由 -->
     <button @click="goB2(username,age)">点击跳转到B2</button>
    <!-- !!!多个 平级 出口的时候，需要指定name属性,且二级路由组件一般另起文件夹 -->
    <!-- <RouterView name=""></RouterView> -->
    <RouterView></RouterView>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

    const username = ref('jack');
    const age = ref(25);

    const router = useRouter();
    // 设置按钮跳转路由
    function goB2(username:string,age:number){
        // 跳转的同时还可以传参,传参方法都可以参考上述的几种
        // router.push(`/b/b1?username=${username}&age=${age}`);
        router.push({name:'b2',params:{username,age}});
    }
</script>

<style scoped>
</style>