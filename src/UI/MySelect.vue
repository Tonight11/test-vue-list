<template>
    <select :value="modelValue" @change="changeOption">
        <option selected value="">{{ filter }}</option>
        <option v-for="item in options" :key="item" :value="item">
            {{ item }}
        </option>
    </select>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
    modelValue: {
        type: String,
    },
    filter: {
        type: String,
    },
    options: {
        type: Array,
    },
})
const emit = defineEmits(['update:modelValue'])
const changeOption = (event) => {
    // providing a model-value to where we call, it will work everywhere because it is a reusable component
    emit('update:modelValue', event.target.value)
}
</script>

<style lang="scss" scoped>
select {
    background-color: transparent;
    color: rgb(0, 0, 75);
    font-size: 18px;
    padding: 10px 15px;
    border: 2px solid rgb(42, 7, 77);
    border-radius: 11px;
    width: 100%;
}
</style>
