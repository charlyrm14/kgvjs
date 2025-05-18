import AuthAPI from "@/api/AuthAPI"
import { useRouter } from "vue-router"
import { defineStore } from "pinia"
import { ref } from "vue"
import { useChatIAStore } from "./chat"

export const useUserStore = defineStore('user', () => {

    const chat = useChatIAStore()

    const user = ref({})
    const router = useRouter()

    const loadUser = async () => {

        try {
            const data = await AuthAPI.auth()
            user.value = data.data

        } catch (error) {
            console.error('Error cargando usuario:', error)
        }
    }

    const logOut = () => {
        localStorage.removeItem('auth_token')
        user.value = {}
        chat.conversation = [];
        router.push({ name: 'login' })
    }

return {
        user,
        loadUser,
        logOut
    }
})