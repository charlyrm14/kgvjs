<script setup>
    import { useUserStore } from '@/stores/user';

    const userStore = useUserStore()
    
</script>

<template>
    <div class="inline-flex overflow-hidden bg-white border border-gray-300 divide-x divide-gray-300 rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
        <button
            @click="userStore.selectedRole = 0"
            class="px-5 py-2 text-xs font-base text-gray-600 transition-colors duration-200 sm:text-sm cursor-pointer"
            :class="userStore.selectedRole == 0 ? 'bg-blue-500 text-white' : '' ">
                Ver todo
        </button>
        <button 
            @click="userStore.selectedRole = 1"
            class="px-5 py-2 text-xs font-base text-gray-600 transition-colors duration-200 sm:text-sm cursor-pointer"
            :class="userStore.selectedRole == 1 ? 'bg-green-500 text-white' : '' ">
                Administradores
        </button>
        <button
            @click="userStore.selectedRole = 2"
            class="px-5 py-2 text-xs font-base text-gray-600 transition-colors duration-200 sm:text-sm cursor-pointer"
            :class="userStore.selectedRole == 2 ? 'bg-indigo-500 text-white' : '' ">
                Profesores
        </button>
        <button 
            @click="userStore.selectedRole = 3"
            class="px-5 py-2 text-xs font-base text-gray-600 transition-colors duration-200 sm:text-sm cursor-pointer"
            :class="userStore.selectedRole == 3 ? 'bg-amber-500 text-white' : '' ">
                Alumnos
        </button>
    </div>
</template>