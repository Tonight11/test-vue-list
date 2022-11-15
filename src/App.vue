<template>
    <div class="wrapper">
        <!-- main block -->
        <main class="main">
            <content-block></content-block>
        </main>

        <!-- footer -->
        <the-footer></the-footer>
    </div>
</template>

<script setup>
import ContentBlock from './components/ContentBlock.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<style lang="scss">
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.main {
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
}
</style>
