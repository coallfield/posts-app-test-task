<template>
    <div class="user-info">
        <h2 class="author">Об авторе</h2>
        <div class="author-name info">
            <h4>Имя: </h4>
            <h4 class="data">{{ props.user.name }}</h4>
        </div>
        <div class="author-email info">
            <h4>Почта: </h4>
            <h4 class="data">{{ props.user.email }}</h4>
        </div>
        <div class="author-phone info">
            <h4>Телефон: </h4>
            <h4 class="data">{{ props.user.phone }}</h4>
        </div>
        <div class="author-website info">
            <h4>Вебсайт: </h4>
            <a>{{ props.user.website }}</a>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    user: {type: Object, required: true}
})
</script>

<style lang="scss">
@import '@/assets/UserInfo.scss'
</style>