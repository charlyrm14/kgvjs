<script setup>
    import { useContentStore } from '@/stores/content'
    import { ref } from 'vue'

    const isSubmitting = ref(false)
    const contentStore = useContentStore()

    defineProps({
        content: {
            type: Object,
            required: true
        }
    })

    const emit = defineEmits(['closeDeleteModal'])

    const closeDeleteModal = () => {
        emit('closeDeleteModal')
    }

    const deleteContent = async(content) => {
        isSubmitting.value = true
        try {
            await contentStore.deleteContent(content)
        } catch (error) {
            
        } finally {
            isSubmitting.value = false
        }
    }

</script>

<template>
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-[90%] max-w-md p-6 mx-4">
            
            <!-- Encabezado -->
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-light text-slate-800 dark:text-white flex items-center gap-2"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg> Eliminar contenido 
                </h2>
                <button
                    @click.prevent="closeDeleteModal"
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
                    class="text-2xl uppercase mb-3 text-red-400 text-center font-extralight"> 
                        ¿Estas seguro de querer eliminar el contenido 
                            <span class="font-bold"> {{ content?.title }} </span> ?
                    </p>
            </div>

            <!-- Acciones -->
            <div class="flex justify-end gap-2">
                <button
                    @click.prevent="closeDeleteModal"
                    class="px-4 py-2 border text-gray-500 dark:text-slate-400 rounded-lg text-sm transition uppercase cursor-pointer hover:opacity-75">
                        Cancelar
                </button>
                <button
                    @click.prevent="deleteContent(content)"
                    class="px-4 py-2  rounded-lg text-sm  transition uppercase cursor-pointer"
                    :class="isSubmitting ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-slate-300' : 'bg-red-500 hover:bg-red-700 text-white'">
                        {{ isSubmitting ? 'Procesando...' : 'Eliminar'}}
                </button>
            </div>
        </div>
    </div>
</template>