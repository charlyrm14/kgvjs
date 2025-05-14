import SwimmingCategoriesAPI from '@/api/SwimmingCategoriesAPI'
import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

export const useSwimmingCategoriesStore = defineStore('swimming-categories', () => {

    const url_api = import.meta.env.VITE_API_URL
    const categories = ref([])
    
    onMounted( async () => {

        const data = await SwimmingCategoriesAPI.getSwimmingCategories()
        categories.value = data.data

    })

    return {
        url_api,
        categories
    }
})
