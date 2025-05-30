<script setup>
    import { useUserStore } from '@/stores/user';
import { ref } from 'vue';

    const user = useUserStore()
    const dropdownMenu = ref(false)

</script>

<template>
    <header class="bg-white dark:bg-slate-700 p-2 shadow z-20">
        <div class="flex justify-between items-center px-2">
            <div>
                <p class="text-lg uppercase dark:text-slate-100">King Dreams</p>
            </div>
            <div class="flex items-center justify-between gap-3">
                <div class="relative">
                    <div class="relative">
                        <img
                            @click="dropdownMenu = !dropdownMenu"
                            src="../../../assets/img/300-27.jpg" 
                            alt="Profile image"
                            class="rounded-full w-13 h-13 p-1 border-2 border-cyan-500 cursor-pointer">
                        <div
                            @click="dropdownMenu = !dropdownMenu"
                            class="absolute -bottom-1 right-2 bg-gray-500 dark:bg-slate-500 rounded-full w-6 h-6 cursor-pointer hover:opacity-75">
                                <svg
                                    v-if="!dropdownMenu"
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="1.5" 
                                    stroke="currentColor" 
                                    class="size-6 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                                <svg
                                    v-else
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="1.5" 
                                    stroke="currentColor" 
                                    class="size-6 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>
                        </div>
                    </div>
                    <div
                        v-if="dropdownMenu"
                        class="absolute -bottom-68 -left-75 w-85 bg-white dark:bg-slate-600 rounded-lg shadow-2xl border border-gray-300 dark:border-slate-500">
                            <div class="flex justify-start items-center gap-x-2 px-4 py-3">
                                <img 
                                    src="../../../assets/img/300-27.jpg" 
                                    alt="Profile image"
                                    class="rounded-full w-13 h-13 p-1 border-2 dark:border-white">
                                <p class="text-gray-800 dark:text-slate-300">
                                    Carlos I.
                                    <span class="block font-light text-sm dark:text-slate-400"> admin </span>
                                </p>
                            </div>
                            <div class="border-b border-gray-300 dark:border-slate-500"></div>
                            <div class="mt-3">
                                <div 
                                    class=" hover:bg-gray-200 dark:hover:bg-slate-500 px-4 py-2 cursor-pointer"> 
                                        <RouterLink
                                            :to="{ name: 'admin-home' }"
                                            class="flex justify-start items-center gap-x-2 uppercase text-gray-800 dark:text-slate-200 font-extralight">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                            </svg> Administrar
                                        </RouterLink>
                                </div>
                                <div class=" hover:bg-gray-200 dark:hover:bg-slate-500 px-4 py-2 cursor-pointer"> 
                                    <p class="flex justify-start items-center gap-x-2 uppercase text-gray-800 dark:text-slate-200 font-extralight">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg> Perfil
                                    </p>
                                </div>
                                <div class=" hover:bg-gray-200 dark:hover:bg-slate-500 px-4 py-2 cursor-pointer"> 
                                    <p class="flex justify-start items-center gap-x-2 uppercase text-gray-800 dark:text-slate-200 font-extralight">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg> Configuración
                                    </p>
                                </div>
                                <div class=" hover:bg-gray-200 dark:hover:bg-slate-500 px-4 py-2 cursor-pointer">
                                    <button
                                        @click="user.logOut "
                                        class="uppercase font-light inline-flex items-center gap-1 text-red-500 cursor-pointer hover:opacity-75">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                                            </svg> Cerrar sesión
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>