<template>
    <!-- individual component for a single user -->
    <div class="user-content__item">
        <div class="user-content__img">
            <img :src="item.avatar" :alt="item.title" @click="showMini" />
            <MyMiniModal :visible="visible" :text="item.address" />
        </div>

        <div class="user-content__info">
            <div class="user-content__name" v-html="item.title"></div>
            <div class="user-content__text">
                <span v-html="item.subtitle"></span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import MyMiniModal from '@/UI/MyMiniModal.vue'

defineProps(['item'])

const visible = ref(false)

// if we clicked an avatar, the mini-modal will appear. to close we need to click avatar again
const showMini = () => {
    visible.value === true ? (visible.value = false) : (visible.value = true)
}
</script>

<style lang="scss">
.user-content {
    &__item {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    &__img {
        position: relative;

        img {
            width: 75px;
            height: 75px;
            border-radius: 50%;
            cursor: pointer;
        }
    }

    &__info {
    }

    &__name {
        font-size: 18px;
    }

    &__text {
        font-size: 14px;
        color: rgb(100, 100, 100);
    }
}

.text--primary {
    color: black !important;
}

.grey--text {
    color: #bdbdbd !important;
}
</style>
