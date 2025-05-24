<script setup>
    import AddUserModal from '@/components/modals/admin/users/AddUserModal.vue';
    import DeleteUserModal from '@/components/modals/admin/users/DeleteUserModal.vue';
    import EditUserModal from '@/components/modals/admin/users/EditUserModal.vue';
    import { useUserStore } from '@/stores/user';
    
    const userStore = useUserStore()
    
</script>

<template>
    <section class="p-8 my-8">
        <div class="bg-white dark:bg-slate-700 rounded-lg p-4 shadow-lg">

            <div class="flex justify-end items-center">
                <button
                    @click="userStore.showAddUserModal()"
                    class="bg-indigo-500 text-white font-extralight flex justify-between items-center gap-x-2 px-4 py-2 rounded-lg cursor-pointer hover:opacity-75">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                        </svg> Agregar usuario
                </button>
            </div>

            <div class="flex justify-start items-center gap-x-2 my-10">
                <div>
                    <button
                        class="flex justify-between items-center gap-x-2 uppercase border border-gray-400 dark:border-slate-800 dark:bg-slate-800 text-gray-700 dark:text-white px-3 py-1 rounded-lg hover:opacity-75 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg> Buscar
                    </button>
                </div>
                <div>
                    <button
                        class="flex justify-between items-center gap-x-2 uppercase border border-gray-400 dark:border-slate-800 dark:bg-slate-800 text-gray-700 dark:text-white px-3 py-1 rounded-lg hover:opacity-75 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg> Exportar
                    </button>
                </div>
            </div>

            <div class="overflow-x-auto w-full">
                <table class="min-w-full table-auto">
                    <thead class="text-base">
                        <tr>
                            <th class="px-4 py-2 uppercase text-left font-light text-gray-500 dark:text-slate-400"> Nombre </th>
                            <th class="px-4 py-2 uppercase text-left font-light text-gray-500 dark:text-slate-400"> Correo </th>
                            <th class="px-4 py-2 uppercase text-left font-light text-gray-500 dark:text-slate-400"> Código usuario </th>
                            <th class="px-4 py-2 uppercase text-left font-light text-gray-500 dark:text-slate-400"> Acciones </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-y border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-slate-600">
                            <td class="px-4 py-3">
                                <div class="flex justify-start items-center gap-x-2">
                                    <div>
                                        <img 
                                            src="../../../assets/img/300-27.jpg" 
                                            alt="Imagen usuario"
                                            class="rounded-full hidden md:inline md:w-14 md:h-14 p-6 md:p-1 border-2 border-cyan-500">
                                    </div>
                                    <div>
                                        <p class="font-light text-gray-700 dark:text-slate-300">
                                            Carlos I.
                                                <span class="block"> Ramos Morales</span>
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-4 py-3">
                                <p class="font-light text-gray-700 dark:text-slate-300"> charlyrm14@gmail.com </p>
                            </td>
                            <td class="px-4 py-3">
                                <p class="font-light text-gray-700 dark:text-slate-300"> 20250516235936 </p>
                            </td>
                            <td class="px-4 py-3">
                                <div class="flex justify-start items-center gap-x-4">
                                    <button
                                        @click="userStore.showEditUserModal()"
                                        class="uppercase text-gray-600 dark:text-slate-300 border border-gray-300 dark:border-slate-300 rounded px-4 py-1 cursor-pointer hover:opacity-75 shadow-lg">
                                            Editar
                                    </button>
                                    <button
                                        @click="userStore.showDeletetUserModal()"
                                        class="dark:text-slate-400 hover:text-red-500 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="mt-6 mb-3 flex justify-between items-center gap-x-2">
                <div>
                    <p class="text-gray-600 dark:text-slate-300 text-sm"> Resultados por página 1 - 15 de 4 </p>
                </div>
                <div class="flex items-center gap-3">
                    <button
                        class="text-gray-700 dark:text-slate-200 border border-gray-300 dark:border-none dark:bg-slate-500 p-1 rounded-lg cursor-pointer hover:opacity-75 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                    </button>
                    <button class="text-gray-400 dark:text-slate-500 cursor-pointer hover:opacity-75 shadow-lg"> 1 </button>
                    <button class="text-gray-800 dark:text-slate-200 cursor-pointer hover:opacity-75 shadow-lg"> 2 </button>
                    <button class="text-gray-400 dark:text-slate-500 cursor-pointer hover:opacity-75 shadow-lg"> 3 </button>
                    <button
                        class="text-gray-700 dark:text-slate-200 border border-gray-300 dark:border-none dark:bg-slate-500 p-1 rounded-lg cursor-pointer hover:opacity-75 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                    </button>
                </div>
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