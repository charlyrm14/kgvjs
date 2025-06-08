import UserClassesAPI from '@/api/UserClassesAPI'
import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

export const useUserClassesStore = defineStore('user-classes', () => {

    const classes = ref([])
    const historyClasses = ref([])

    onMounted(async () => {

        try {

            const [days_classes, history_classes] = await Promise.all([
                UserClassesAPI.getUserClasses(),
                UserClassesAPI.getHistoryClassesByUser()
            ]);

            classes.value = days_classes.data.data
            historyClasses.value = history_classes.data.data    
            
        } catch (error) {
            console.error(error)
        }

    })

    return {
        classes,
        historyClasses
    }
})
