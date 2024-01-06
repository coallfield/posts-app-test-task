import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PostsListView from '@/views/PostsListView.vue'
import PostView from '@/views/PostView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/posts',
      component: PostsListView
    },
    {
      path: '/post/:id',
      component: PostView,
      props: true

    }
  ]
})

export default router
