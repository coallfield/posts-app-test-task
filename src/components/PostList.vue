<template>
    <div class="posts-list">
        <div @contextmenu.prevent="emit('deletePost', post)" @click="$router.push({ path: `/post/${post.id}`, query: {...post}})"
            class="post" v-for="post in props.posts">
            <PostInfo :post='post'></PostInfo>
        </div>
    </div>
</template>

<script setup lang="ts">
import PostInfo from '@/components/PostInfo.vue';
import type { PostData } from '@/types/PostData';
const emit = defineEmits(['deletePost'])
const props = defineProps({
    posts: {type: Array<PostData>, required: true}
})

</script>

<style  lang="scss">
@import '@/assets/PostList.scss'
</style>