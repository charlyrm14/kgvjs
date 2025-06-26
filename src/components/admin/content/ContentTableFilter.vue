<script setup>
    import { useContentStore } from '@/stores/content';

    const contentStore = useContentStore()

</script>

<template>
    <div class="inline-flex overflow-hidden bg-white border border-gray-200 divide-x divide-gray-200 rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
        <button
            @click="contentStore.selectedContentType = 0"
            class="px-5 py-2 text-xs font-medium transition-colors duration-200  sm:text-sm cursor-pointer hover:opacity-75"
            :class="contentStore.selectedContentType === 0 ? 'bg-blue-500 text-white' : 'dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'">
                Ver todo
        </button>
        <button
            @click="contentStore.selectedContentType = 1"
            class="px-5 py-2 text-xs font-medium transition-colors duration-200 sm:text-sm cursor-pointer hover:opacity-75"
            :class="contentStore.selectedContentType === 1 ? 'bg-pink-500 text-white' : 'dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100' ">
                Avisos
        </button>
        <button 
            @click="contentStore.selectedContentType = 2"
            class="px-5 py-2 text-xs font-medium transition-colors duration-200 sm:text-sm cursor-pointer hover:opacity-75"
            :class="contentStore.selectedContentType === 2 ? 'bg-cyan-500 text-white' : 'dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'">
                Eventos
        </button>
    </div>
</template>
