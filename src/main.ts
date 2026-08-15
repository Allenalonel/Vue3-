//导入vue框架内置的createApp函数
//这是命名导入方式
//from后面的'vue'固定写法。表示从vue框架中导入一个函数
//createApp函数的作用：创建应用。
import { createApp } from "vue";

//导入根组件
import App from "./App.vue"
import router from "./router/index.ts";

//创建应用，并将应用挂载到index.html中的 <div id="app"></div>
// createApp(App).mount("#app")

// 一、创建app
const app = createApp(App);

//二、让app使用路由器
app.use(router);

// 三、挂载app
app.mount('#app');