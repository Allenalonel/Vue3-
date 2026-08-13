<template>
    <div class="son">
        <h3>Son组件</h3>
        <!-- 在普通标签中使用 -->
        <!-- 一、ref标签主要充当id的作用，.value属性就可以获取到DOM元素，
         且保证重名的标签，也能在多个组件中正常定位 -->
        <p ref="sonP">Son组件的p标签</p>
        <button @click="getSonP">获取sonP标签</button>
    </div>
</template>

<script lang='ts' setup>
import { reactive, ref } from 'vue';
    // 二、声明，确保名称与上面的ref标签一致，都为sonP
    const sonP = ref();
    
    const getSonP = () =>{
        // 三、使用.value属性就可以获取到DOM元素
        // setup组件的生命周期：创建、挂载、更新、卸载
        // 且只有在setup函数渲染结束后，也就是页面完全显示后，才能获取到DOM数据
        console.log(sonP.value)
    }

    // 四、设置暴露的数据
    const username='jack';
    const user = reactive({
        name:'rose',
        age:20
    })
    const SonFunction = () =>{
        console.log('子组件中的函数已被调用')
    }
    // 暴露数据,里面的内容是一个对象{}
    defineExpose({
        username:username,
        user:user,
        SonFunction:SonFunction
    })
</script>

<style scoped>
    .son{
        background-color: rgb(155, 69, 16);
        box-shadow: 0 0 15px;
        border-radius: 15px;
        padding: 15px;
    }
</style>