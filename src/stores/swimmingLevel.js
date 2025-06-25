import SwimmingLevelsAPI from "@/api/SwimmingLevelsAPI"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useSwimmingLevelStore = defineStore('swimmingLevel', () => {

    const urlAPI = import.meta.env.VITE_API_URL

    const swimmingLevels = ref(null)
    const userSwimmingProgress = ref(null)

    const fetchSwimmingLevels = async () => {
        try {
            const response = await SwimmingLevelsAPI.getSwimmingLevels()
            
            if (response.status === 200) {
                swimmingLevels.value = response.data.data
            }

            if (response.status === 404) {
                swimmingLevels.value = null
            }
        } catch (error) {
            console.error(error)
        }
    }

    const fetchUserSwimmingProgress = async () => {
        try {
            const response = await SwimmingLevelsAPI.getLevelsPerUser()
            
            if (response.status === 200) {
                userSwimmingProgress.value = response.data.data
            }

            if (response.status === 404) {
                userSwimmingProgress.value = null
            }

        } catch (error) {
            console.error()
        }
    }

    return {
        urlAPI,
        userSwimmingProgress,
        fetchUserSwimmingProgress,
        swimmingLevels,
        fetchSwimmingLevels
    }
})
