<script setup>
    import { useUserStore } from '@/stores/user';
    import { ref } from 'vue';
    
    defineProps({
        user: {
            type: Object,
            required: false
        }
    })

    const emit = defineEmits(['closeDeleteUserModal'])

    const userStore = useUserStore()

    const isSubmitting = ref(false)

    const deleteUser = async(user) => {
        isSubmitting.value = true
        try {
            await userStore.deleteUser(user)
        } catch (error) {
            console.error(error)
        } finally{
            isSubmitting.value= false
        }
    }

    const closeDeleteUserModal = () => {
        emit('closeDeleteUserModal')
    }

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
                    @click.prevent="closeDeleteUserModal"
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

            <div
                v-if="userStore?.messageError?.status"
                class="my-3 bg-red-200 rounded-lg p-2">
                    <div class="flex justify-start items-center gap-x-3">
                        <div class="bg-red-500 p-2 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                            </svg>
                        </div>
                        <p class="dark:text-red-600 text-sm md:text-base">
                            {{ userStore?.messageError?.text  ?? '' }}
                        </p>
                    </div>
            </div>

            <!-- Contenido -->
            <div class="text-slate-600 dark:text-slate-300 mb-6">
                <p 
                    class="text-xl uppercase mb-3 text-red-400 text-center font-light"> 
                        ¿Estas seguro de querer eliminar a 
                            <span class="font-bold"> {{ user?.first_name }} </span> ?
                    </p>
            </div>

            <!-- Acciones -->
            <div class="flex justify-end gap-2">
                <button
                    @click.prevent="closeDeleteUserModal"
                    class="px-4 py-2 border text-gray-500 dark:text-slate-400 rounded-lg text-sm transition uppercase cursor-pointer hover:opacity-75">
                        Cancelar
                </button>
                <button
                    @click.prevent="deleteUser(user)"
                    class="px-4 py-2  rounded-lg text-sm  transition uppercase cursor-pointer"
                    :class="isSubmitting ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-slate-300' : 'bg-red-500 hover:bg-red-700 text-white'">
                        {{ isSubmitting ? 'Procesando...' : 'Eliminar' }}
                </button>
            </div>
        </div>
    </div>
</template>