<template>
    <div>
        <PageTitle>
            Пост {{ $route.params.id }}
        </PageTitle>
        <PostInfo  :post="$route.query"></PostInfo>
        <UserInfo :user="user"></UserInfo>
    </div>
   

</template>

<script setup lang="ts">
import PostInfo from '@/components/PostInfo.vue';
import PageTitle from '@/components/PageTitle.vue';
import useUser from '@/composables/useUser';
import UserInfo from '@/components/UserInfo.vue';



const user = useUser()
</script>

