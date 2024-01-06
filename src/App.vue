<script setup lang="ts">
import { RouterView } from 'vue-router'
import  Navbar  from '@/components/Navbar.vue';
</script>

<template>
  <div class="app">
    <header>
      <Navbar></Navbar>
    </header>
    <main>
        <RouterView></RouterView>
    </main>
  </div>
</template>

<style lang="scss">

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}




</style>
