<script setup>
    import Dropzone from '@/components/ui/helpers/Dropzone.vue';
    import { useContentStore } from '@/stores/content';
    import { ref } from 'vue';
    
    const emit = defineEmits(['closeContentModal'])

    const closeNewContentModal = () => {
        emit('closeContentModal')
    }

    const isSubmitting = ref(false)
    const statusContent = ref(0)
    const filePath = ref(null)

    const contentStore = useContentStore()

    const handleImageUpload = (path) => {
        filePath.value = path;
    };

    const handleSubmit = async( data ) => {
        isSubmitting.value = true

        const formData = {
            ...data,
            cover_image: filePath.value,
            active: statusContent.value
        };

        try {
            
            const response = await contentStore.createNoticeContent(formData)
            if (response) {
                emit('closeContentModal')
            }

        } catch (error) {
            console.error(error)
            emit('closeContentModal')
        } finally {
            isSubmitting.value = false
        }
    }

    const toggleStatusContent = () => {
        statusContent.value = statusContent.value === 1 ? 0 : 1
    }


</script>

<template>
    <FormKit
        id="addNoticeForm"
        type="form"
        :actions="false"
        incomplete-message="* Revisa los campos marcados con error *"
        message-class="text-red-700 my-5 text-sm font-bold"
        @submit="handleSubmit">

            <div class="mt-6 flex justify-end items-center gap-x-3">
                <p class="dark:text-slate-300 uppercase"> Publicar Aviso </p>
                <button 
                    type="button" 
                    class="relative inline-flex h-6 w-11 items-center rounded-full bg-green-500 transition-colors duration-300 ease-in-out focus:outline-none peer cursor-pointer"
                    :class="statusContent  === 1 ? 'bg-green-500' : 'bg-slate-400'"
                    @click="toggleStatusContent">
                        <span 
                        class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ease-in-out translate-x-1 peer-checked:translate-x-6"
                        :class="statusContent  === 1 ? 'translate-x-6' : 'translate-x-1'"></span>
                </button>
            </div>

            <div>
                <label for="title" class="uppercase dark:text-slate-300 font-light"> Título Aviso </label>
                <FormKit 
                    type="text"
                    name="title"
                    placeholder="Ej: Mañana no hay clases"
                    label-class="uppercase font-light dark:text-slate-500"
                    input-class="border border-gray-300 dark:text-slate-300 dark:border-slate-500 w-full p-3 my-2 rounded-lg"
                    message-class="text-red-500 text-sm px-2 font-light"
                    validation="required"
                    :validation-messages="{
                        required: 'Ingresa un título'
                    }"/>
            </div>

            <Dropzone
                @uploaded="handleImageUpload"/>

            <div class="my-3">
                <label for="message" class="uppercase dark:text-slate-300 font-light"> Contenido </label>
                <FormKit 
                    type="textarea"
                    name="content"
                    placeholder="Ej: Agrega un texto descriptivo para tu aviso"
                    label-class="uppercase font-light dark:text-slate-500"
                    input-class="border border-gray-300 dark:text-slate-300 dark:border-slate-500 w-full p-3 my-2 rounded-lg"
                    message-class="text-red-500 text-sm px-2 font-light"
                    validation="required"
                    :validation-messages="{
                        length: 'Agrega un contenido',
                    }"/>
            </div>

            <div class="flex justify-end gap-2">
                <button
                    @click.prevent="closeNewContentModal"
                    class="px-4 py-2 border text-gray-500 dark:text-slate-400 rounded-lg text-sm transition uppercase cursor-pointer hover:opacity-75">
                        Cancelar
                </button>
                <button 
                    type="submit"
                    :disabled="isSubmitting"
                    class="px-4 py-2  text-white rounded-lg text-sm transition uppercase"
                    :class="!isSubmitting ? 'bg-pink-500 hover:bg-pink-700 cursor-pointer' : 'bg-gray-200 dark:bg-gray-700 cursor-not-allowed'"> 
                        {{ isSubmitting ? 'Procesando...' : 'Guardar aviso' }} 
                </button>
            </div>
        
    </FormKit>
</template>