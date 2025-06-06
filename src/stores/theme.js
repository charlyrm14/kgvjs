import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useThemeStore = defineStore('theme', () => {

    const theme = ref(localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

    const toggleTheme = () => {
        theme.value = theme.value === 'dark' ? 'light' : 'dark'
        localStorage.setItem('theme', theme.value)
        applyTheme()
    }

    const applyTheme = () => {
        const root = document.documentElement

        if (theme.value === 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }

    applyTheme()

    return {
        theme,
        toggleTheme,
        applyTheme
    }

})