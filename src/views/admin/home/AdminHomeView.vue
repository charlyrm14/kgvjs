<script setup>
    import AddUserModal from '@/components/modals/admin/users/AddUserModal.vue';
    import DeleteUserModal from '@/components/modals/admin/users/DeleteUserModal.vue';
    import EditUserModal from '@/components/modals/admin/users/EditUserModal.vue';
    import { useUserStore } from '@/stores/user';
    
    const userStore = useUserStore()
    
</script>

<template>
    <section class="p-8 my-8">

        <div class="my-4">
            <div class="flex justify-between items-center">
                <div class="flex justify-start items-center shadow-lg">
                    <button
                        class="px-4 py-2 bg-white dark:bg-slate-900 text-gray-700 dark:text-slate-300 uppercase rounded-tl-lg rounded-bl-lg font-light hover:bg-gray-200 dark:hover:bg-slate-600 cursor-pointer border-r border-gray-300 dark:border-slate-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                    </button>
                    <button
                        class="px-4 py-2 bg-white dark:bg-slate-900 text-gray-700 dark:text-slate-300 uppercase rounded-tr-lg rounded-br-lg font-light hover:bg-gray-200 dark:hover:bg-slate-600 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                    </button>
                </div>
                <div>
                    <button
                        @click="userStore.showAddUserModal()"
                        class="bg-indigo-500 text-white font-extralight flex justify-between items-center gap-x-2 px-4 py-2 rounded-lg cursor-pointer hover:opacity-75">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg> Agregar usuario
                    </button>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
            <div class="bg-white dark:bg-slate-700 rounded-lg p-4 shadow-lg border border-gray-200 dark:border-slate-600">
                <div class="flex justify-between items-start">
                    <div class="flex items-start gap-x-2">
                        <img 
                            src="../../../assets/img/300-27.jpg" 
                            alt="Imagen usuario"
                            class="rounded-lg hidden md:inline md:w-18 md:h-18 p-1 border-2 border-cyan-500">
                        <p class="text-xl text-gray-700 dark:text-slate-300 font-light"> 
                            Carlos I. 
                                <span class="block text-sm"> Ramos Morales </span>
                        </p>
                    </div>
                    <div>
                        <button
                            @click="userStore.showDeletetUserModal()"
                            class="bg-red-500 text-white p-1 rounded-full hover:opacity-75 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="flex justify-between items-center mt-5">
                    <span class="text-sm text-gray-600 dark:text-slate-400 font-light"> charlyrm14@gmail.com </span>
                    <p class="text-sm text-gray-700 dark:text-slate-300 font-extralight flex items-center gap-x-2"> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                        </svg> 1990-12-01
                    </p>
                </div>
                <div class="my-3 border border-gray-300 dark:border-slate-600"></div>
                <div class="mt-4 flex justify-between items-center">
                    <button
                        class="bg-gray-200 dark:bg-slate-500 p-1 rounded-lg text-center hover:opacity-75 cursor-pointer border border-gray-200 dark:border-slate-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 text-green-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                            </svg>
                    </button>
                    <button
                        @click="userStore.showEditUserModal()"
                        class="bg-cyan-500 px-3 py-1 rounded-lg text-white font-extralight flex justify-between items-center gap-x-2 uppercase text-lg hover:opacity-75 cursor-pointer">
                            Editar
                    </button>
                </div>
            </div>
            <div class="bg-white dark:bg-slate-700 rounded-lg p-4 shadow-lg border border-gray-200 dark:border-slate-600">
                <div class="flex justify-between items-start">
                    <div class="flex items-start gap-x-2">
                        <img 
                            src="../../../assets/img/300-27.jpg" 
                            alt="Imagen usuario"
                            class="rounded-lg hidden md:inline md:w-18 md:h-18 p-1 border-2 border-cyan-500">
                        <p class="text-xl text-gray-700 dark:text-slate-300 font-light"> 
                            Carlos I. 
                                <span class="block text-sm"> Ramos Morales </span>
                        </p>
                    </div>
                    <div>
                        <button
                            @click="userStore.showDeletetUserModal()"
                            class="bg-red-500 text-white p-1 rounded-full hover:opacity-75 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="flex justify-between items-center mt-5">
                    <span class="text-sm text-gray-600 dark:text-slate-400 font-light"> charlyrm14@gmail.com </span>
                    <p class="text-sm text-gray-700 dark:text-slate-300 font-extralight flex items-center gap-x-2"> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                        </svg> 1990-12-01
                    </p>
                </div>
                <div class="my-3 border border-gray-300 dark:border-slate-600"></div>
                <div class="mt-4 flex justify-between items-center">
                    <button
                        class="bg-gray-200 dark:bg-slate-500 p-1 rounded-lg text-center hover:opacity-75 cursor-pointer border border-gray-200 dark:border-slate-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 text-green-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                            </svg>
                    </button>
                    <button
                        @click="userStore.showEditUserModal()"
                        class="bg-cyan-500 px-3 py-1 rounded-lg text-white font-extralight flex justify-between items-center gap-x-2 uppercase text-lg hover:opacity-75 cursor-pointer">
                            Editar
                    </button>
                </div>
            </div>
            <div class="bg-white dark:bg-slate-700 rounded-lg p-4 shadow-lg border border-gray-200 dark:border-slate-600">
                <div class="flex justify-between items-start">
                    <div class="flex items-start gap-x-2">
                        <img 
                            src="../../../assets/img/300-27.jpg" 
                            alt="Imagen usuario"
                            class="rounded-lg hidden md:inline md:w-18 md:h-18 p-1 border-2 border-cyan-500">
                        <p class="text-xl text-gray-700 dark:text-slate-300 font-light"> 
                            Carlos I. 
                                <span class="block text-sm"> Ramos Morales </span>
                        </p>
                    </div>
                    <div>
                        <button
                            @click="userStore.showDeletetUserModal()"
                            class="bg-red-500 text-white p-1 rounded-full hover:opacity-75 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="flex justify-between items-center mt-5">
                    <span class="text-sm text-gray-600 dark:text-slate-400 font-light"> charlyrm14@gmail.com </span>
                    <p class="text-sm text-gray-700 dark:text-slate-300 font-extralight flex items-center gap-x-2"> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                        </svg> 1990-12-01
                    </p>
                </div>
                <div class="my-3 border border-gray-300 dark:border-slate-600"></div>
                <div class="mt-4 flex justify-between items-center">
                    <button
                        class="bg-gray-200 dark:bg-slate-500 p-1 rounded-lg text-center hover:opacity-75 cursor-pointer border border-gray-200 dark:border-slate-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 text-green-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                            </svg>
                    </button>
                    <button
                        @click="userStore.showEditUserModal()"
                        class="bg-cyan-500 px-3 py-1 rounded-lg text-white font-extralight flex justify-between items-center gap-x-2 uppercase text-lg hover:opacity-75 cursor-pointer">
                            Editar
                    </button>
                </div>
            </div>
            <div class="bg-white dark:bg-slate-700 rounded-lg p-4 shadow-lg border border-gray-200 dark:border-slate-600">
                <div class="flex justify-between items-start">
                    <div class="flex items-start gap-x-2">
                        <img 
                            src="../../../assets/img/300-27.jpg" 
                            alt="Imagen usuario"
                            class="rounded-lg hidden md:inline md:w-18 md:h-18 p-1 border-2 border-cyan-500">
                        <p class="text-xl text-gray-700 dark:text-slate-300 font-light"> 
                            Carlos I. 
                                <span class="block text-sm"> Ramos Morales </span>
                        </p>
                    </div>
                    <div>
                        <button
                            @click="userStore.showDeletetUserModal()"
                            class="bg-red-500 text-white p-1 rounded-full hover:opacity-75 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="flex justify-between items-center mt-5">
                    <span class="text-sm text-gray-600 dark:text-slate-400 font-light"> charlyrm14@gmail.com </span>
                    <p class="text-sm text-gray-700 dark:text-slate-300 font-extralight flex items-center gap-x-2"> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                        </svg> 1990-12-01
                    </p>
                </div>
                <div class="my-3 border border-gray-300 dark:border-slate-600"></div>
                <div class="mt-4 flex justify-between items-center">
                    <button
                        class="bg-gray-200 dark:bg-slate-500 p-1 rounded-lg text-center hover:opacity-75 cursor-pointer border border-gray-200 dark:border-slate-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 text-green-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                            </svg>
                    </button>
                    <button
                        @click="userStore.showEditUserModal()"
                        class="bg-cyan-500 px-3 py-1 rounded-lg text-white font-extralight flex justify-between items-center gap-x-2 uppercase text-lg hover:opacity-75 cursor-pointer">
                            Editar
                    </button>
                </div>
            </div>
        </div>

        <div class="mt-15">
            <div class="flex justify-center items-center">
                <button class="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg uppercase font-extralight cursor-pointer hover:opacity-75">
                    Mostrar más
                </button>
            </div>
        </div>
    </section>

    <AddUserModal
        v-if="userStore.statusAddUserModal"/>

    <EditUserModal
        v-if="userStore.statusEditUserModal"/>

    <DeleteUserModal
        v-if="userStore.statusDeleteUserModal"/>
</template>