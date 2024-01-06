<template>
    <div>
        <PageTitle v-if="posts.length > 0">
            Список постов
        </PageTitle>
        <PageTitle v-else>
            Постов пока нет
        </PageTitle>
        <PostList @deletePost="(post) => deletePost(post)" :posts="posts"></PostList>
    </div>
</template>


<script setup lang="ts">
import usePosts from '@/composables/usePosts'
import type { PostData } from '@/types/PostData';
import PostList from '@/components/PostList.vue'
import PageTitle from '@/components/PageTitle.vue';


const posts = usePosts()

function deletePost(post: PostData) {
    posts.value = posts.value.filter(el => el.id !== post.id)
}

</script>

