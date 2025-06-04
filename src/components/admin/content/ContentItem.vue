<script setup>
    import { onMounted, onUnmounted, ref } from 'vue';
    import { formattedDate } from '@/helpers/index.js'
    import { useContentStore } from '@/stores/contents';
    
    const targetRef = ref(null)
    const menuOptions = ref(false)
    
    const contentStore = useContentStore()

    const colorCategory = {
        1: 'bg-pink-500',
        2: 'bg-cyan-500'
    }

    defineProps({
        content: {
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
    <div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center">
            <div class="flex items-center gap-x-3">
                <div>
                    <img 
                        :src="contentStore.url_api + '/' + content?.cover_image" 
                        alt=""
                        class="w-15 h-15 rounded">
                </div>
                <div>
                    <p class="uppercase text-gray-600 dark:text-slate-200">
                        {{ content?.title }}
                        <span 
                            class="block text-sm text-white w-20 text-center rounded mt-1"
                            :class="colorCategory[content?.content_category_id]">
                                {{ content?.content_category?.title }}
                        </span>
                    </p>
                </div>
            </div>
            <div class="flex justify-start md:justify-center lg:justify-center my-3 md:my-0 lg:my-0">
                <span 
                    class="block text-sm w-auto text-center rounded mt-1 px-2"
                    :class="content?.active == 1 ? 'bg-green-500 text-white' : 'bg-gray-400 text-white dark:bg-slate-400 dark:text-white' ">
                        {{ content?.active == 1 ? 'Publicado' : 'No publicado' }}
                </span>
            </div>
            <div class="relative flex justify-start md:justify-center lg:justify-center my-3 md:my-0 lg:my-0" ref="targetRef">
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
                            @click="contentStore.showDeleteContentModal(content)"
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
        <div class="border-b border-dashed border-gray-300 dark:border-slate-400 my-3"></div>
    </div>
</template>