<script setup>
    import { useUserStore } from '@/stores/user';
    
    const userStore = useUserStore()

</script>

<template>
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-[90%] max-w-md p-6 mx-4">
            
            <!-- Encabezado -->
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-light text-slate-800 dark:text-white flex items-center gap-2"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                    </svg> Eliminar usuario 
                </h2>
                <button
                    @click="userStore.hideDeleteUserModal()"
                    class="text-slate-400 hover:text-red-500 transition cursor-pointer">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            class="h-5 w-5" 
                            fill="none" 
                            viewBox="0 0 24 24"
                            stroke="currentColor" 
                            stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>

            <!-- Contenido -->
            <div class="text-slate-600 dark:text-slate-300 mb-6">
                <p 
                    v-if="userStore.userToDelete !== null"
                    class="text-2xl uppercase mb-3 text-red-400 text-center font-extralight"> 
                        ¿Estas seguro de querer eliminar a 
                            <span class="font-bold"> {{ userStore.userToDelete.name + ' ' + userStore.userToDelete.last_name }} </span> ?
                    </p>
            </div>

            <!-- Acciones -->
            <div class="flex justify-end gap-2">
                <button
                    @click="userStore.hideDeleteUserModal()"
                    class="px-4 py-2 border text-gray-500 dark:text-slate-400 rounded-lg text-sm transition uppercase cursor-pointer hover:opacity-75">
                        Cancelar
                </button>
                <button
                    v-if="userStore.userToDelete !== null"
                    @click="userStore.deleteUser(userStore.userToDelete.id, userStore.userToDelete.name)"
                    class="px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-700 transition uppercase cursor-pointer">
                        Eliminar
                </button>
            </div>
        </div>
    </div>
</template>