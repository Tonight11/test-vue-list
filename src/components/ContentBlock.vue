<template>
    <div class="main">
        <div class="select">
            <MySelect
                :options="filter.country"
                v-model="filter.countrySelect"
                filter="Filter by country"
            />
            <MySelect
                :options="filter.score"
                v-model="filter.scoreSelect"
                filter="Filter by score"
            />
        </div>
        <div class="users">
            <users-block></users-block>
        </div>
    </div>
</template>

<script setup>
import MySelect from '@/UI/MySelect.vue'

import { useFilterStore } from '@/store/filter'
import UsersBlock from './UsersBlock.vue'

const filter = useFilterStore()
</script>

<style>
.main {
    display: flex;
    align-items: center;
    gap: 170px;
}

.select {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.users {
    background-color: rgb(247, 247, 247);
    padding: 15px;
    border-radius: 11px;
    max-width: 500px;
    min-width: 300px;
}
</style>
