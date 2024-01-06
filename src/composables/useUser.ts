import type { UserData } from "@/types/UserData"
import { onMounted, ref } from "vue"
import { useRoute } from 'vue-router';

export default function useUser() {
    const route = useRoute()
    const user = ref<UserData>(<UserData>{})
    const url: string = `https://jsonplaceholder.typicode.com/users/${route.query.id}`

    
    function fetchUser(url: string) {
        fetch(url)
        .then(async response => {
            if(!response.ok) {
                throw new Error
            }
           user.value = await response.json()
        })
    }

    onMounted(() => {
        fetchUser(url)
    })

    return user


}