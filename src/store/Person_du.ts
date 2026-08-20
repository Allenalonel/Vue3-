import axios from "axios";
import { defineStore } from "pinia";
import { reactive } from "vue";

const useDuStore = defineStore("du",()=>{

    // 数据
        // 1.写死的方法
    // let duList = reactive([
    //     {id: '1', content: '过年哪个亲戚问我成绩，我就问他年终奖金。'},
    //     {id: '2', content: '间歇性洗心革面，持续性混吃等死。'},
    //     {id: '3', content: '路遥知马力不足，日久见人心叵测。'}
    // ]);

        // 2.从localStorage中取出数据
        // 第一次打开网页时localStorage是null或undefine
        // JSON.parse()解析duList，断言他是字符串，如果不是就||为[]
    const duList = reactive(JSON.parse(localStorage.getItem("duList") as string) || []);
    

    // 方法
    // 利用axios请求api，并把获得数据+多次解构
    async function getDu(){
        const{data:{data:{text:content}}}=await axios.get("https://api.shadiao.pro/du");
        // 使用unshift()方法在数组头部插入
        duList.unshift({id:"0",content:content});
    }

    // 暴露
    return {duList,getDu};
})
export default useDuStore;