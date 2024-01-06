<template>
 <div class="post-info">
            <div class="post-title">
                <h4>{{ props.post.title.toUpperCase() }}</h4>
            </div>
            <div class="post-body">
                <p>{{ props.post.body }}</p>
            </div>
        </div>
</template>

<script setup lang="ts">

const props = defineProps({
    post: {type: Object, required: true}
})

</script>

<style lang="scss">
@import '@/assets/PostInfo.scss'
</style>