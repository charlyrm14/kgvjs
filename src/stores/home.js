import HomeAPI from '@/api/HomeAPI'
import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'
import { useUserStore } from './user'

export const useHomeStore = defineStore('home', () => {

    const user = useUserStore()

    const info = ref(null)
    const modalBirthdate = ref(false)

    onMounted(async () => {

        try {

            await user.loadUser()
            
            const userId = user.user?.id

            if (!userId) {
                console.warn('No se pudo obtener el ID del usuario.')
                return
            }

            const response = await HomeAPI.getInfo(userId)
            info.value = response.data

            modalBirthdate.value = response.data.is_birthdate
            
        } catch (error) {
            console.error()    
        }

    })

    const closeBirthdateModal = () => {
        modalBirthdate.value = false
    }

    return {
        info,
        modalBirthdate,
        closeBirthdateModal
    }
})