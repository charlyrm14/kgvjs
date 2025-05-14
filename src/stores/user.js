import AuthAPI from "@/api/AuthAPI"
import { useRouter } from "vue-router"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useUserStore = defineStore('user', () => {

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
        router.push({ name: 'login' })
    }

return {
        user,
        loadUser,
        logOut
    }
})