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
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                    </svg> Enviar mensaje
                </h2>
                <button
                    @click="userStore.hideSendMessageModal()"
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
            <div class="text-slate-600 dark:text-slate-300 my-8">
                <div class="relative">
                    <label for="message" class="uppercase font-extralight"> 
                        Envia un mensaje a <span class="text-green-500"> {{ userStore.userToSendMessage.name }} </span>
                    </label>
                    <p class="text-sm flex items-center gap-x-2 my-1"> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg> 55 7786 4159 
                    </p>
                    <input 
                        type="text"
                        name="message"
                        id="message"
                        class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 absolute top-18 inset-y-2 right-2 text-gray-300 dark:text-slate-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                    </svg> 
                </div>
            </div>

            <!-- Acciones -->
            <div class="flex justify-end gap-2">
                <button
                    @click="userStore.hideSendMessageModal()"
                    class="px-4 py-2 border text-gray-500 dark:text-slate-400 rounded-lg text-sm transition uppercase cursor-pointer hover:opacity-75">
                        Cancelar
                </button>
                <button
                    class="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition uppercase cursor-pointer">
                        Enviar
                </button>
            </div>
        </div>
    </div>
</template>