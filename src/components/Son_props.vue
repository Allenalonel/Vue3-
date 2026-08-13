<template>
    <div class="son">
        <h3>Son组件</h3>
        <p>姓名：{{ name }}</p>
        <p>年龄：{{ age }}</p>
        <ul>
            <li v-for="person in list" :key="person.id">
                {{ person.id }},{{ person.name }},{{ person.age }}
            </li>
        </ul>
    </div>
</template>

<script lang='ts' setup>
    // 二、接收从父组件传递过来的数据,里面是 数组["","",""]
    // 1.名称必须与父组件的一致
    // defineProps(["name","age","list"]);

    // 2.可以赋给一个新定义的变量
    // const obj = defineProps(["name","age","list"]);
    // console.log(obj.name,obj.age,obj.list);

    // 3.可以限定父组件传入的数据类型和必要性,数组需要先定义类型
    // 定义数组类型
    interface Person{
        id:number|string,
        name:string,
        age:number
    }
    // // defineProps<{在这里面定义类型,?意思是可选传入}>()
    // const obj2 = defineProps<{name?:string,age:number,list:Person[]}>();

    // 4.指定默认值，如果?的属性没有被传入，可以指定默认值,
    // withDefaults(defineProps值，定义默认值)
    // () => [] 返回一个空数组 []（适用于数组类型的 Props 默认值）
    // () => ({}) 返回一个空对象 {}（适用于对象类型的 Props 默认值）
    withDefaults(defineProps<{name:string,age:number,list?:Person[]}>(),{
        list :()=>[
            {id:1,name:"张三",age:15}
        ]
            
    })
</script>

<style scoped>
    .son{
        background-color: rgb(155, 69, 16);
        box-shadow: 0 0 15px;
        border-radius: 15px;
        padding: 15px;
    }
</style>