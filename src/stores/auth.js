import AuthAPI from "@/api/AuthAPI"
import { defineStore } from "pinia"
import { ref } from "vue"
import { useRouter } from "vue-router"

export const useAuthStore = defineStore('auth', () => {

    const router = useRouter()

    const user = ref(null)

    /**
     * The function `loadUser` asynchronously loads user data from an authentication API and assigns it
     * to a variable `user.value`, handling errors if they occur.
     */
    const loadUser = async () => {

        try {
            const response = await AuthAPI.auth()

            if (response.status === 200) {
                user.value = response.data.data
            }

        } catch (error) {
            console.error('Error cargando usuario:', error)
        }
    }

    /**
     * The `logOut` function clears the authentication token, resets the user value and chat
     * conversation, and navigates to the login page.
     */
    const logOut = async() => {
        try {
            
            const response = await AuthAPI.logout()

            if (response.status === 200) {
                router.push({ name: 'login' })
                localStorage.removeItem('auth_token')
                user.value = null
                chat.conversation = [];
            }
            
        } catch (error) {
            
        }
    }

    return {
        user,
        loadUser,
        logOut
    }
})
