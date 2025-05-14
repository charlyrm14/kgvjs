import AuthAPI from "@/api/AuthAPI"
import { defineStore } from "pinia"
import { onMounted, ref } from "vue"

export const useUserStore = defineStore('user', () => {

    const user = ref({})

    const loadUser = async () => {

        try {
            const data = await AuthAPI.auth()
            user.value = data.data

        } catch (error) {
            console.error('Error cargando usuario:', error)
        }
    }

return {
        user,
        loadUser
    }
})