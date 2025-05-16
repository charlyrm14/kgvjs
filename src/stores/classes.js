import UserClassesAPI from '@/api/UserClassesAPI'
import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

export const useUserClassesStore = defineStore('user-classes', () => {

    const classes = ref([])

    onMounted(async () => {

        const data  = await UserClassesAPI.getUserClasses()
        classes.value = data.data
    })

    return {
        classes
    }
})
