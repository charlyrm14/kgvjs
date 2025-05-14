<script setup>
    import { useUserStore } from '@/stores/user';

    const user = useUserStore()
</script>

<template>
    <header class="bg-white dark:bg-slate-700 p-2 shadow z-20">
        <div class="flex justify-between items-center px-2">
            <div>
                <p class="text-lg uppercase dark:text-slate-100">King Dreams</p>
            </div>
            <div class="flex items-center justify-between gap-3">
                <button
                    @click="user.logOut "
                    class="uppercase font-light inline-flex items-center gap-1 text-red-500 dark:text-red-600 cursor-pointer hover:opacity-75">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                        </svg> Cerrar sesión
                </button>
            </div>
        </div>
    </header>
</template>