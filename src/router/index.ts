import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import A from "../components/A.vue";
import B1 from "../components/B/B1.vue";
import B2 from "../components/B/B2.vue";
// 一、创建路由器，并编写路由规则
const router  = createRouter({
    // 二、指定路由模式：1.history模式  2.hash模式
    // 1.这个是history模式,缺点是需要后端做重定向，不然刷新会处404错误，主要面向客户
    history:createWebHistory(),
    // 2.这个是hash模式，缺点是地址栏会出一个#，但不需要后端配合，主要用于企业系统，SEO优化方面较差
    // history:createWebHashHistory(),
    routes:[
        // 设置路由重定向，解决控制台报“/”无法找到位置的错误
        {
            path:"/",
            redirect:"/a"
        },
        {
            // name属性，可一给路由起名字，在to时可以使用
            name:'a',
            path:"/a",
            // 1.直接写组件名称，
            component: A
        },
        {
            name :'b',
            path:"/b",
            // 2.懒加载，在项目构建的时候不去构建B组件，在用户第一次发送请求的时候，在进行构建，适用于中大型项目
            component: ()=>import("../components/B.vue"),
            // 3.子路由，在那个页面做子路由，就在谁下面加
            children:[
                {
                    name:'b1',
                    // !!!子路由的路径不能以/开头
                    path:'b1',
                    component:B1,
                    // 3.2 props配合query路径参数
                    // 设置props(自定义){}
                    // 设置后等同于写了原来的 <B1 username="",age=""></B2>
                    props(route){
                        return route.query;
                    }
                },
                {
                    name:'b2',
                    // path:'b2',
                    // params方式向子路由组件传参的路径写法,?表示可传可不传
                    path:'b2/:username?/:age?',
                    component:B2,
                    // 3.2 props配合params路径参数
                    // 设置props:true
                    // 开启后等同于写了原来的 <B2 username="",age=""></B2>
                    // 然后可以直接去子组件通过defineProp([])的方式接收使用了
                    props:true

                    // 3.3 props固定传参，基本不用
                    // props:{
                    //     username:"rose",
                    //     age:"20"
                    // }
                }
            ]
        }

    ]
});
// 三、导出（默认导出）,然后去更改main.js
export default router;