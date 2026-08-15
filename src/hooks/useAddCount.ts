import { onMounted, ref } from "vue";

// 默认导出函数
export default function(){
    // 数据
    const count = ref(0);
    // 方法
    const addCount = () =>{
        count.value++;
    }
    // 支持生命周期的钩子
    onMounted(()=>{
        console.log("挂载中")
    });
    // 返回数据
    return{count,addCount};
}