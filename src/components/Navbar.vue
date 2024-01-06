<template>
    <div  class="nav-container">
        <nav>
            <div v-if="$route.path !== '/'" class="nav-page">
                <RouterLink  class="link" to="/">Главная</RouterLink>
                <p> / </p>
            </div>

            <RouterLink  class="link" to="/posts">Список постов</RouterLink>

            <div class="nav-page" v-if="$route.path === `/post/${$route.params.id}`">
                <p> / </p>
                <RouterLink  class="link disabled" to="" >Пост №{{ $route.params.id }}</RouterLink>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>


<style lang="scss">
@import '@/assets/Navbar.scss'
</style>