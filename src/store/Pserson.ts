import { defineStore } from "pinia";

// 一、定义仓库
// usePersonStore是一个函数，在组件中引用就可以获取里面的值
// 选项式API写法  defineStore("仓库名",{对象})
const usePersonStore =  defineStore("count",{
    // 1.数据 使用state(){}
    state() {
        // 这个方法自带响应式
        return{
            count:1,
            n:1
        }
    },
    // 2.方法（actions）
    actions:{
        minus(){
            // 这里用this,代指 组件中导入仓库的名countStore
            this.count -= this.n
        }
    },
    // 3.计算属性
    getters:{
        // 设置的bigCount就是一个计算属性的属性名
        bigCount():number{
            return this.count*10;
        }
    }
})
// 二、导出仓库,仓库是单例的，这样才能完成多组件之间的全局共享数据
export default usePersonStore;