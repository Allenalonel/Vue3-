<template>
    <div>
        <ul>
            <li>姓名：{{person.name}}</li>
            <li>年龄：{{person.age}}</li>
        </ul>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改用户信息</button>
    </div>
</template>

<script lang='ts' setup>
    import { reactive } from 'vue';

    let person = reactive({name: 'jack', age: 20});

    const changeName = () => {
        person.name = 'jackson';
    }

    const changeAge = () => {
        person.age++;
    }

    const changePerson = () => {

        // 响应式失效
        //person = {name: 'lucy', age: 18};

        // 响应式同样失效，因为压根就不是同一个对象
        //person = reactive({name: 'lucy', age: 18});

        // 可以采用最笨的办法，一个属性一个属性修改
        //person.name = 'lucy';
        //person.age = 18;

        // 这样不会丢失内存地址，是依次根据对象的属性名，重新给属性值赋值
        Object.assign(person, {name: 'lucy', age: 18});
    }

</script>