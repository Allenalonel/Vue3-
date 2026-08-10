<!-- 子组件 完成后在根组件中导入、注册，然后才能使用-->
 <template>
    <div class="person">
        <!-- 插值语法：VUE提供的专属语法，格式：{{ setup函数对外暴露属性名 }} -->
        <h3>姓名：{{username}}</h3>
        <!-- 点击按钮触click事件，点击后执行一个函数,用函数去显示联系方式 -->
        <button @click="showPhone">显示联系方式</button>
    </div>
 </template>

<!-- 一般在script中定义数据，并且暴露数据给template -->
 <script lang="ts">
    export default{
        name:"PersonVue",
        //最核心的setup函数
        //要求所有的代码都写在里面，子组件初始化的时候自动调用，只初始化一次，自动调用
        //在setup函数中完成组件状态的管理、生命周期的管理、数据的暴露
        setup(){
            //准备数据（以下代码可以指定类型，也可以不指定，因为TS类型自动判断类型）
            let username: string = "李四";
            let phone = "15588975011";
            //暴露数据,必须是一个对象

            //定义函数
            function showPhone(){
                alert(phone);
            }

            // 第一种方式：返回对象
            return{
                //暴露数据
                username,

                //暴露函数
                showPhone
            };

            // 第二种方式：返回渲染函数，整个template会被清空覆盖，一般不用
            // return function(){
            //     return "渲染函数";
            // }

        }
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