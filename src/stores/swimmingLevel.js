import SwimmingLevelsAPI from "@/api/SwimmingLevelsAPI"
import { typeAlertIcon } from "@/helpers"
import { defineStore } from "pinia"
import { reactive, ref } from "vue"

export const useSwimmingLevelStore = defineStore('swimmingLevel', () => {

    const urlAPI = import.meta.env.VITE_API_URL

    const swimmingLevels = ref(null)
    const userSwimmingProgress = ref(null)

    const alert = reactive({
        title: '',   
        subtitle: '',
        color: '',
        icon: '',
        status: false,
    })

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
            console.error(error)
        }
    }

    const updateSwimmingLevelInfo = async(levelId, data) => {
        try {

            const response = await SwimmingLevelsAPI.updateSwimmingLevelInfo(levelId, data)

            if (response.status === 200) {
                handleAlert(
                    'Éxito',
                    response.data.message,
                    'success'
                )
                resetAlert()
                return true
            }
            
        } catch (error) {
            console.error(error)
            console.error(error)
            handleAlert(
                'Operacion fallida',
                'Hubo un error al actualizar la información',
                'error'
            )
            resetAlert()
        }
    }

    const handleAlert = (title, subtitle, type = 'success') => {
        alert.title = title,   
        alert.subtitle = subtitle,
        alert.color = type === 'success' ? 'green' : 'red',
        alert.icon = typeAlertIcon(type),
        alert.status = true
    }

    const resetAlert = () => {
        setTimeout(() => {
            alert.title = '',   
            alert.subtitle = '',
            alert.color = '',
            alert.icon = '',
            alert.status = false 
        }, 4000);
    }

    return {
        urlAPI,
        userSwimmingProgress,
        fetchUserSwimmingProgress,
        swimmingLevels,
        fetchSwimmingLevels,
        updateSwimmingLevelInfo,
        alert
    }
})
