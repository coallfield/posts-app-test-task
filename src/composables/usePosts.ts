import { onMounted } from "vue"
import { ref } from "vue"
import type { PostData } from "@/types/PostData"


export default function usePosts() {
    const posts = ref<PostData[]>([])
    const url: string = 'https://jsonplaceholder.typicode.com/posts/?_limit=10'
    function fetchPosts(url: string) {
        fetch(url)
        .then(async response => {
            if(!response.ok) {
                throw new Error
            }
           posts.value = await response.json()
        })
    }
    
    onMounted(()=> {
        fetchPosts(url)
    })
   
    return posts
}