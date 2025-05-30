<script setup>
    import { useUserStore } from '@/stores/user';
    import { onMounted, onUnmounted, ref } from 'vue';
    
    const menuOptions = ref(false)
    const targetRef = ref(null)

    const userStore = useUserStore()

    defineProps({
        user: {
            type: Object,
            required: true
        }
    })

    onMounted(() => {
        document.addEventListener('click', handleClickOutside)
    })

    onUnmounted(() => {
        document.removeEventListener('click', handleClickOutside)
    })

    const handleClickOutside = (event) => {
        if (targetRef.value && !targetRef.value.contains(event.target)) {
            menuOptions.value = false // Cambia el estado si se hace clic fuera del div
        }
    }

</script>

<template>
    <div class="bg-white dark:bg-slate-700 rounded-lg p-4 shadow-lg border border-gray-200 dark:border-slate-600">
        <div class="flex justify-between items-center">
            <div class="flex items-center gap-x-2">
                <img 
                    src="../../../assets/img/300-27.jpg" 
                    alt="Imagen usuario"
                    class="rounded-lg hidden md:inline md:w-10 md:h-10 lg:w-14 lg:h-14 p-0.5 border-2 border-cyan-500">
                <p class="md:text-xs lg:text-sm text-gray-700 dark:text-slate-300 font-light"> 
                    {{ user?.name }} 
                        <span class="block text-sm"> {{ user?.last_name }} {{ user?.mothers_name }} </span>
                </p>
            </div>
            <div class="relative" ref="targetRef">
                <button
                    @click="menuOptions = !menuOptions"
                    class="flex justify-center items-center gap-x-1 px-4 py-2 border border-gray-300 dark:border-slate-500 text-gray-700 dark:text-slate-300 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-400 font-extralight shadow">
                        Administrar 
                            <svg 
                                v-if="!menuOptions"
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke-width="1.5" 
                                stroke="currentColor" 
                                class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                            <svg
                                v-else
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke-width="1.5" 
                                stroke="currentColor" 
                                class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>
                </button>
                <div
                    v-if="menuOptions"
                    :class="menuOptions ? 'z-50' : '' "
                    class="absolute top-14 -right-1 w-45 border border-gray-300 dark:border-slate-500 bg-white dark:bg-slate-700 rounded-lg p-1.5">
                        <div
                            @click="userStore.showEditUserModal()"
                            class="flex items-center justify-start gap-x-3 hover:bg-gray-200 dark:hover:bg-slate-500 p-1 rounded-lg cursor-pointer">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-slate-400">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="dark:text-slate-200"> 
                                        Editar
                                            <span class="block text-xs text-slate-400"> Editar usuario </span> 
                                    </p>
                                </div>
                        </div>
                        <div class="my-2 border-t border-gray-300 dark:border-slate-600"></div>
                        <div 
                            v-if="user?.phone_number !== null"
                            @click="userStore.showSendMessageModal(user)"
                            class="flex items-center justify-start gap-x-3 hover:bg-gray-200 dark:hover:bg-slate-500 p-1 rounded-lg cursor-pointer">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-slate-400">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="dark:text-slate-200"> 
                                        Mensaje
                                            <span class="block text-xs text-slate-400"> Enviar mensaje </span> 
                                    </p>
                                </div>
                        </div>
                        <div class="my-2 border-t border-gray-300 dark:border-slate-600"></div>
                        <div
                            @click="userStore.showDeletetUserModal(user)"
                            class="flex items-center justify-start gap-x-3 hover:bg-gray-200 dark:hover:bg-slate-500 hover:text-red-500 p-1 rounded-lg cursor-pointer">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-slate-400">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="dark:text-slate-200"> 
                                        Eliminar
                                            <span class="block text-xs text-slate-400"> Eliminar usuario </span> 
                                    </p>
                                </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>