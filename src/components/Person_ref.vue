<!-- 子组件 完成后在根组件中导入、注册，然后才能使用-->
 <template>
    <div class="person">
        <!-- 插值语法：VUE提供的专属语法，格式：{{ setup函数对外暴露属性名 }} -->
        <h3>姓名：{{username}}</h3>
        <h3>年龄：{{ age }}</h3>
        <!-- 点击按钮触click事件，点击后执行一个函数,用函数去显示联系方式 -->
        <button @click="changeName">点击修改姓名</button>
        <button @click="changeAge">点击修改年龄</button>
    </div>
 </template>

<!-- 使用语法糖时，如果需要子组件命名，要单独写一个script -->
 <script lang="ts">
    export default{
        name:"PersonVue"
    }
</script>

<!-- 一般在script中定义数据，并且暴露数据给template -->
 <script lang="ts" setup>
    // 导入vue框架自带的ref函数，让数据具有响应式效果，格式ref(数据)，数据一般为原始类型
    //ref()是基于refImpl对象，调用里面的setter方法
    import { ref } from 'vue';

    //准备数据（以下代码可以指定类型，也可以不指定，因为TS类型自动判断类型）
    let username =ref("李四");
    let age =ref(0); 
    //暴露数据,必须是一个对象
    //暴露定义函数
    function changeName(){
        //ref()函数包裹的原始类型的数据，在script脚本中使用的时候要使用.value属性，无论读写
        username.value = "张三";
    }
    function changeAge(){
        age.value++;
    }
</script>

 <style scoped>
    .person{
        background-color: rgb(171, 111, 33);
        box-shadow: 0 0 15px;
        border-radius: 15px;
        padding: 15px;
    }
</style>