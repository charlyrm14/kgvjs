<script setup>
    import NewContent from '@/components/modals/admin/content/NewContent.vue';
    import { useContentStore } from '@/stores/contents';
    import { ref } from 'vue';
    
    const contentStore = useContentStore()

    const menuOptions = ref(false)



</script>

<template>
    <section class="p-8 my-8">
        <div class="my-4">
            <div class="flex justify-end items-center">
                <div>
                    <button
                        @click="contentStore.showContentModal()"
                        class="bg-indigo-500 text-white px-4 py-2 cursor-pointer hover:opacity-75 rounded flex items-center gap-2 font-extralight">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg> Nuevo contenido
                    </button>
                </div>
            </div>
        </div>

        <div class="mt-10 rounded-lg">
            <div class="flex justify-between items-center">
                <div class="flex justify-start items-center gap-x-2">
                    <div 
                        class="bg-blue-400 rounded-full p-1 flex items-center justify-between gap-x-2 px-3">
                            <button
                                class="uppercase py-1 px-4 rounded-full font-extralight cursor-pointer bg-blue-600 text-white flex items-center gap-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                    </svg> Todo
                            </button>
                            <button
                                class="uppercase py-1 px-4 rounded-full font-extralight cursor-pointer dark:text-slate-300 flex items-center gap-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                                    </svg> Avisos
                            </button>
                            <button
                                class="uppercase py-1 px-4 rounded-full font-extralight cursor-pointer dark:text-slate-300 flex items-center gap-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg> Eventos
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-10">
            <div class="bg-white dark:bg-slate-700 shadow rounded-lg p-4 flex justify-between items-center">
                <div class="flex items-start gap-x-2">
                    <div>
                        <img 
                            src="../../../assets/img/img-53.jpg" 
                            alt=""
                            class="w-15 h-15 rounded">
                    </div>
                    <div>
                        <p class="uppercase text-gray-600 dark:text-slate-200">
                            Mañana no hay clases
                            <span class="block text-sm bg-pink-500 text-white w-20 text-center rounded mt-1">
                                Aviso
                            </span>
                        </p>
                    </div>
                </div>
                <div class="relative">
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
                        class="absolute top-14 -right-1 w-50 border border-gray-300 dark:border-slate-500 bg-white dark:bg-slate-700 rounded-lg p-1.5">
                            <div
                                class="flex items-center justify-start gap-x-3 hover:bg-gray-200 dark:hover:bg-slate-500 p-1 rounded-lg cursor-pointer">
                                    <div>
                                        <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition-colors duration-300 ease-in-out focus:outline-none peer">
                                            <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ease-in-out translate-x-1 peer-checked:translate-x-6"></span>
                                        </button>
                                    </div>
                                    <div>
                                        <p class="dark:text-slate-200"> 
                                            Visible
                                                <span class="block text-xs text-slate-400"> Mostrar contenido </span> 
                                        </p>
                                    </div>
                            </div>
                            <div class="my-2 border-t border-gray-300 dark:border-slate-600"></div>
                            <div
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

    </section>

    <NewContent
        v-if="contentStore.statusContentModal"/>
</template>