import { defineStore } from "pinia";
import { computed, ref } from "vue";

// 更常用的：组合式API写法  defineStore("仓库名",()=>{})
const usePersonStore =  defineStore("count",()=>{
    // 数据
    const count =ref(1);
    const n = ref(1);
    // actions
    function add(){
        count.value += n.value;
    }
    function minus(){
        count.value -= n.value;
    }
    // getters(计算属性)
    const bigCount = computed(()=>{
        return count.value*10;
    })

    // 暴露出去
    return {count,n,add,minus,bigCount};
})

// 导出
export default usePersonStore;