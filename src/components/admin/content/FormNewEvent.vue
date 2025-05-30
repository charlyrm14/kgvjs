<script setup>
    import Dropzone from '@/components/ui/Dropzone.vue';
    import { useContentStore } from '@/stores/contents';
    import { ref } from 'vue';

    const contentStore = useContentStore()

    const filePath = ref(null)

    const handleImageUpload = (path) => {
        filePath.value = path;
    };

    const handleSubmit = ( data ) => {
        console.log('Enviando data de evento...')
    }

</script>

<template>
    <FormKit
        id="addEventForm"
        type="form"
        :actions="false"
        incomplete-message="* Revisa los campos marcados con error *"
        message-class="text-red-700 my-5 text-sm font-bold"
        @submit="handleSubmit">

            <div class="mt-6 flex justify-end items-center gap-x-3">
                <p class="dark:text-slate-300 uppercase"> Publicar Evento </p>
                <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full bg-green-500 transition-colors duration-300 ease-in-out focus:outline-none peer">
                    <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ease-in-out translate-x-1 peer-checked:translate-x-6"></span>
                </button>
            </div>

            <div>
                <label for="title" class="uppercase dark:text-slate-300 font-light"> Título Evento </label>
                <FormKit 
                    type="text"
                    name="title"
                    placeholder="Ej: Maratón Atlantis"
                    label-class="uppercase font-light dark:text-slate-500"
                    input-class="border border-gray-300 dark:text-slate-300 dark:border-slate-500 w-full p-3 my-2 rounded-lg"
                    message-class="text-red-500 text-sm px-2 font-light"
                    validation="required"
                    :validation-messages="{
                        required: 'Ingresa un título'
                    }"/>
            </div>

            <div class="my-3">
                <label for="location" class="uppercase dark:text-slate-300 font-light"> Ubicación </label>
                <FormKit 
                    type="text"
                    name="location"
                    placeholder="Ej: Av. Felipe Sanchez Solís"
                    label-class="uppercase font-light dark:text-slate-500"
                    input-class="border border-gray-300 dark:text-slate-300 dark:border-slate-500 w-full p-3 my-2 rounded-lg"
                    message-class="text-red-500 text-sm px-2 font-light"
                    validation="required"
                    :validation-messages="{
                        required: 'Ingresa un título'
                    }"/>
            </div>

            <div class="my-3 grid grid-cols-1 md:gird-cols-2 lg:grid-cols-2 gap-x-4">
                <div>
                    <label for="start_date" class="uppercase dark:text-slate-300 font-light"> Fecha Inicio </label>
                    <FormKit
                        type="date"
                        name="start_date"
                        input-class="border border-gray-300 dark:text-slate-300 dark:border-slate-500 w-full p-3 my-2 rounded-lg"
                        message-class="text-red-500 text-sm px-2 font-light"
                        validation="required|date_after:1950-01-01"
                        :validation-messages="{
                            required: 'Ingre la fecha de inicio'
                        }"/>
                </div>
                <div>
                    <label for="end_date" class="uppercase dark:text-slate-300 font-light"> Fecha fin </label>
                    <FormKit
                        type="date"
                        name="end_date"
                        input-class="border border-gray-300 dark:text-slate-300 dark:border-slate-500 w-full p-3 my-2 rounded-lg"
                        message-class="text-red-500 text-sm px-2 font-light"
                        validation="required|date_after:1950-01-01"
                        :validation-messages="{
                            required: 'Ingre la fecha de fin'
                        }"/>
                </div>
            </div>

            <Dropzone
                @uploaded="handleImageUpload"/>

            <div class="my-3">
                <label for="content" class="uppercase dark:text-slate-300 font-light"> Contenido </label>
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
                    @click.prevent="contentStore.hideContentModal()"
                    class="px-4 py-2 border text-gray-500 dark:text-slate-400 rounded-lg text-sm transition uppercase cursor-pointer hover:opacity-75">
                        Cancelar
                </button>
                <FormKit
                    type="submit"
                    label-class="text-white text-sm"
                    input-class="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:opacity-75 transition uppercase cursor-pointer"
                    label="Guardar evento"/>
            </div>
        
    </FormKit>
</template>