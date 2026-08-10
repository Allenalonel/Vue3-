<!-- 子组件 完成后在根组件中导入、注册，然后才能使用-->
 <template>
    <div class="person">
        <h3>姓名：{{ user.username }}</h3>
        <h3>年龄：{{ user.age }}</h3>
        <h3>城市：{{ user.address.city }}</h3>
        <h3>街道：{{ user.address.street }}</h3>
        <button @click="changeName">点击修改姓名</button>
        <button @click="changeAge">点击修改年龄</button>
        <button @click="changeCity">点击修改城市</button>
        <button @click="changeStreet">点击修改街道</button>
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
    // 导入reactive函数
    //ref用在原始类型， reactive用在对象上
    import { reactive } from 'vue';
    // 使用reactive()包裹对象，成为响应式
    let user = reactive({
        username: "张三",
        age: 20,
        address:{
            // reactive()是支持深层次响应式的，嵌套的数据也支持
            city:"天津",
            street:"北辰"
        }
    })
    function changeName(){
        // 底层原理：先找到user对应的Proxy，访问Proxy中的username属性。
        // 修改属性的值，然后将template页面重新渲染
        //reactive()本质是基于Proxy的
        //和ref不同，不需要value
        user.username = "李四";
    }
    function changeAge(){
        user.age++;
    }
    function changeCity(){
        user.address.city = "北京"
    }
    function changeStreet(){
        user.address.street = "海淀"
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