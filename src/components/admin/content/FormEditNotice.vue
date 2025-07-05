<script setup>
    import { ref } from 'vue';
    import { typeContentColor, typeContentIcon } from '@/helpers';
    import Dropzone from '@/components/ui/helpers/Dropzone.vue';
    import { useContentStore } from '@/stores/content';

    const props = defineProps({
        notice: {
            type: Object,
            required: true
        },
        slug: {
            type: String,
            required: true
        }
    })

    const emit = defineEmits(['openDeleteModal'])

    const contentStore = useContentStore()

    const showPublishContent = ref(false)
    const showCoverImageContent = ref(false)
    const showDropZone = ref(false)
    const filePath = ref(props.notice.cover_image || null)
    const statusContent = ref(props.notice.active || 0)

    const toggleStatusContent = () => {
        statusContent.value = statusContent.value === 1 ? 0 : 1
    }

    const handleImageUpload = (path) => {
        filePath.value = path;
    };

    const handleSubmit = async(data) => {
        try {
            
            const formData = {
                ...data,
                cover_image: filePath.value,
                active: statusContent.value
            }

            await contentStore.updateNotice(props.slug, formData)

        } catch (error) {
            console.error(error)
        }
    }

</script>

<template>
    <FormKit
        id="editNoticeForm"
        type="form"
        :actions="false"
        incomplete-message="* Revisa los campos marcados con error *"
        message-class="text-red-700 my-5 text-sm font-bold"
        @submit="handleSubmit">

        <div class="flex justify-between items-center mb-6">
            <RouterLink
                :to="{ name: 'admin-content' }"
                class="bg-pink-600 text-white rounded-full p-2 md:p-3 cursor-pointer hover:opacity-75">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
            </RouterLink>
            <button
                type="submit"
                class="bg-indigo-500 px-4 py-2 rounded-lg text-white hover:opacity-75 cursor-pointer">
                    Actualizar aviso
            </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <!-- Columna 1 (2/3 del ancho en md+) -->
            <div class="md:col-span-3 bg-white dark:bg-slate-700 p-4 rounded-lg shadow border border-gray-200 dark:border-none">
                <div>
                    <div class="flex justify-between items-start md:items-center">
                        <h2 
                            class="uppercase text-gray-600 dark:text-slate-400 text-lg md:text-2xl"> 
                                Editar {{ notice?.title ?? 'Desconocido' }} 
                        </h2>
                        <p 
                            class="flex justify-start items-center gap-x-1 mt-1"
                            :class="typeContentColor(notice?.content_type_id)">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke-width="1.5" 
                                stroke="currentColor" 
                                class="size-5">
                                <path 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    :d="typeContentIcon(notice?.content_type_id)" />
                            </svg> Aviso
                        </p>
                    </div>
                    <div>
                        <p class="text-gray-600 dark:text-slate-400 text-xs inline-flex items-center gap-x-2 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                            </svg> Creado: {{ notice?.created_at ?? '-/-' }}
                        </p>
                    </div>
                    <div class="mt-6">
                        <label for="title" class="dark:text-slate-300 "> Título </label>
                        <FormKit 
                            type="text"
                            name="title"
                            input-class="w-full p-4 text-gray-600 dark:text-slate-300 border border-gray-300 dark:border-slate-800 dark:bg-slate-800 mt-3 rounded-lg"
                            message-class="text-red-500 text-sm px-2 font-light"
                            v-model="notice.title"
                            validation="required"
                            :validation-messages="{
                                required: 'Ingresa un título'
                            }"/>
                    </div>
                    <div class="mt-6">
                        <label for="content" class="dark:text-slate-300 "> Contenido </label>
                        <FormKit 
                            type="textarea"
                            name="content"
                            input-class="w-full p-4 text-gray-600 dark:text-slate-300 border border-gray-300 dark:border-slate-800 dark:bg-slate-800 mt-3 rounded-lg"
                            message-class="text-red-500 text-sm px-2 font-light"
                            v-model="notice.content"
                            validation="required"
                            :validation-messages="{
                                length: 'Agrega un contenido',
                            }"/>
                    </div>
                </div>
            </div>

            <!-- Columna 2 (1/3 del ancho en md+) -->
            <div class="md:col-span-1">
                <div class="bg-white dark:bg-slate-700 rounded-lg shadow">
                    <div 
                        class="p-3"
                        :class="showPublishContent ? 'border-b border-gray-200 dark:border-slate-600' : '' ">
                            <div class="flex justify-between items-center">
                                <p class="dark:text-slate-300 text-lg font-light"> Estado del contenido </p>
                                <svg
                                    @click="showPublishContent = !showPublishContent"
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="1.5" 
                                    stroke="currentColor" 
                                    class="size-6 text-gray-600 dark:text-slate-300 cursor-pointer hover:opacity-75">
                                        <path 
                                            stroke-linecap="round" 
                                            stroke-linejoin="round" 
                                            :d="showPublishContent ? 'm4.5 15.75 7.5-7.5 7.5 7.5' : 'm19.5 8.25-7.5 7.5-7.5-7.5' " />
                                </svg>
                            </div>
                    </div>
                    <div
                        v-if="showPublishContent"
                        class="p-3">
                            <div class="mt-3">
                                <div class="flex justify-between items-center">
                                    <div class="dark:text-slate-300">
                                        <p class="uppercase font-light"> 
                                            Visibilidad 
                                                <span 
                                                    class="block text-xs"
                                                    :class="statusContent  === 1 ? 'text-green-500' : 'dark:text-slate-400'"> {{ statusContent  === 1 ? 'Publicado' : 'Borrador' }} </span>
                                        </p>
                                    </div>
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
                                <div class="border-b border-gray-300 dark:border-slate-600 my-3"></div>
                                <div class="flex justify-between items-center">
                                    <div class="dark:text-slate-400">
                                        <p class="uppercase font-light"> Eliminar </p>
                                    </div>
                                    <button
                                        @click.prevent="$emit('openDeleteModal')"
                                        class="rounded-full p-1 bg-gray-200 dark:bg-slate-500 text-red-500 dark:text-red-400 cursor-pointer hover:opacity-75">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="bg-white dark:bg-slate-700 rounded-lg shadow mt-4">
                    <div 
                        class="p-3"
                        :class="showCoverImageContent ? 'border-b border-gray-200 dark:border-slate-600' : '' ">
                            <div class="flex justify-between items-center">
                                <p class="dark:text-slate-300 text-lg font-light"> Portada </p>
                                <svg
                                    @click="showCoverImageContent = !showCoverImageContent"
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="1.5" 
                                    stroke="currentColor" 
                                    class="size-6 text-gray-600 dark:text-slate-300 cursor-pointer hover:opacity-75">
                                        <path 
                                            stroke-linecap="round" 
                                            stroke-linejoin="round" 
                                            :d="showCoverImageContent ? 'm4.5 15.75 7.5-7.5 7.5 7.5' : 'm19.5 8.25-7.5 7.5-7.5-7.5' " />
                                </svg>
                            </div>
                    </div>
                    <div 
                        v-if="showCoverImageContent"
                        class="p-3">
                            <div
                                v-if="!showDropZone" 
                                class="flex justify-center items-center">
                                    <img 
                                        :src="contentStore?.urlAPI + '/' + notice?.cover_image" 
                                        :alt="notice?.title"
                                        class="rounded-lg w-80">
                            </div>
                            <div
                                v-if="showDropZone">
                                <Dropzone
                                    @uploaded="handleImageUpload"/>
                            </div>
                            <div 
                                class="mt-3 flex justify-center md:justify-end items-center">
                                <button
                                    @click.prevent="showDropZone = !showDropZone"
                                    class="bg-gray-200 dark:bg-slate-600 dark:text-slate-300 py-1 px-3 rounded cursor-pointer hover:opacity-75 font-light">
                                        <p  
                                            v-if="!showDropZone"
                                            class="flex items-center gap-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                                                </svg> Cambiar imagen
                                        </p>
                                        <p
                                            v-else>
                                                Mantener imagen actual
                                        </p>
                                </button>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    </FormKit>
</template>
