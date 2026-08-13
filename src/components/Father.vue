<template>
    <div class="father">
        <h3>Father组件</h3>
        <Son v-if="flag"></Son>
    </div>
</template>

<script lang='ts' setup>
    import { ref } from 'vue';
import Son from './Son.vue';
    const flag = ref(true)

</script>

<style scoped>
    .father{
        background-color: rgb(57, 155, 42);
        box-shadow: 0 0 15px;
        border-radius: 15px;
        padding: 15px;
    }
</style>