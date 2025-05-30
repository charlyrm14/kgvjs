import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContentStore = defineStore('contents', () => {

    const statusContentModal = ref(false)

    const showContentModal = () => {
        statusContentModal.value = true
    }

    const hideContentModal = () => {
        statusContentModal.value = false
    }

    return {
        statusContentModal,
        showContentModal,
        hideContentModal
    }
})
