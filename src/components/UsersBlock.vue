<template>
    <div class="user-content">
        <div class="user-content__title">List</div>

        <!-- shows if users even after filtering not empty -->
        <div
            class="user-content__items"
            v-if="filteredUser.filterUsers.value.length"
        >
            <TransitionGroup name="list">
                <!-- adding some transition while filtering and all users -->
                <RequestUsers
                    v-for="user in filteredUser.filterUsers.value"
                    :key="user.subtitle"
                    :item="user"
                />
            </TransitionGroup>
        </div>
        <!-- otherwise we show the simple text -->
        <div v-else>There is no users</div>
    </div>
</template>

<script setup>
import RequestUsers from './request/RequestUsers.vue'
import { useUsersFilter } from '@/use/users'

const filteredUser = useUsersFilter()
</script>

<style lang="scss">
.user-content {
    &__title {
        margin-bottom: 20px;
        font-size: 28px;
        text-transform: uppercase;
    }

    &__items {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
}

.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
