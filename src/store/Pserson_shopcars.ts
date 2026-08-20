import { defineStore } from "pinia";
import type { NumericLiteral } from "typescript";
// 定义商品类型
interface Product{
    id:number,
    name:string,
    price:number
}

// 定义购物车类型
interface CarItem extends Product {
    quantity:number
}

// 创建仓库的同时导出
export const useShopCarsStore = defineStore("shopcars",{
    // 数据
    // state()的第二种写法
    state:()=>({
        items: [] as CarItem[],
        products:[
            {id:1,name:'笔记本电脑',price:7999},
            {id:2,name:'智能手机',price:3999},
            {id:3,name:'无线耳机',price:599}
        ] as Product[]
    }),

    // 方法
    actions:{
        // 添加商品到购物车
        addToCar(productId:number){
            const product = this.products.find(p =>p.id === productId);
            if(!product) return;

            const existingItem = this.items.find(item => item.id ===productId);
            if(existingItem){
                existingItem.quantity++
            }else{
                this.items.push({...product,quantity:1})
            }
        },
        // 从购物车删除商品
        moveFromCar(productId:number){
            const itemIndex = this.items.findIndex(item =>item.id === productId);
            if(itemIndex>-1){
                const item = this.items[itemIndex]
                if(item.quantity>1){
                    item.quantity--;
                }else{
                    this.items.splice(itemIndex,1);
                }
            }
        },
        // 清空购物车
        clearCar(){
            this.items = [];
        }
    },
    getters:{
        
        // 计算总价
        totalPrice:(state) =>{
            return state.items.reduce((total,item)=>total+item.price*item.quantity,0)
        },
        // 计算总数量
        totalItems:(state) =>{
            return state.items.reduce((total,item) =>total+item.quantity,0)
        }
    }
})