import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modals', () => {

    const birthDateModal = ref(true)

    const closeBirthdateModal = () => {
        birthDateModal.value = false
    }

    return {
        birthDateModal,
        closeBirthdateModal
    }
})
