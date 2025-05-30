<script setup>

    import useImage from '@/composables/useImage';
    import { ref } from 'vue';
    import Spinner from '../spinners/Spinner.vue';
    
    const {
        statusFile,
        isUploading,
        pathFile,
        deleteFile,
        statusDeleteFile, 
        uploadFile 
    } = useImage()

    const isDragging = ref(false);
    const previewUrl= ref(false);
    const fileInput = ref(null);

    const emit = defineEmits(['uploaded'])

    const onDragOver = () => {
        isDragging.value = true;
    };

    const onDragLeave = () => {
        isDragging.value = false;
    };

    const onDrop = (event) => {
        isDragging.value = false;
        const files = event.dataTransfer.files;
        handleFile(files[0]);
    };

    const onFileChange = (event) => {
        const file = event.target.files[0];
        handleFile(file);
    };

    const handleFile = async (file) => {

        if (!file || !file.type.startsWith('image/')) return;

        const reader = new FileReader();

        reader.onload = (e) => {
            previewUrl.value = e.target.result;
        };

        reader.readAsDataURL(file);

        await uploadFile(file);

        emit('uploaded', pathFile.value);
    };

    const selectFile = () => {
        fileInput.value.click();
    }

    const removeImage = async () => {
        await deleteFile(pathFile.value)
        if(statusDeleteFile.value) {
            previewUrl.value = false
        }
    }

</script>

<template>
    <div class="my-3">
        <p class="uppercase dark:text-slate-300 font-light"> Imagen </p>
        <div
            @dragover.prevent="onDragOver"
            @dragleave.prevent="onDragLeave"
            @drop.prevent="onDrop"
            :class="{ 'bg-gray-200 dark:bg-slate-600': isDragging }"
            class="w-full border border-dashed border-gray-300 dark:border-slate-500 rounded-lg px-9 py-4 cursor-pointer my-2">
                <p 
                    v-if="!previewUrl"
                    class="text-gray-700 dark:text-slate-300 text-xs text-center"> Arrastra y suelta una imagen aquí, o haz clic para seleccionarla </p>
                <div class="flex justify-center items-center">
                    <input 
                        type="file" 
                        accept="image/*"  
                        @change="onFileChange"
                        ref="fileInput" 
                        hidden />
                </div>
                <div v-if="isUploading">
                    <Spinner/>
                </div>
                <div class="flex justify-center items-center mt-2">
                    <div v-if="previewUrl" 
                        class="preview relative">
                            <img 
                                :src="previewUrl" 
                                alt="Vista previa"
                                class="rounded-lg w-20 hover:opacity-75"/>
                            <button 
                                @click.prevent="removeImage()"
                                class="absolute -top-2 -right-2 bg-red-500 rounded-full text-white cursor-pointer hover:opacity-75">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                            </button>
                    </div>
                </div>
                <div 
                    v-if="statusFile"
                    class="flex items-center justify-center my-1">
                        <p class="text-green-400 dark:text-green-200 text-xs"> Archivo cargado con éxito </p>
                </div>
                <div class="flex justify-center items-center">
                    <button 
                        v-if="!previewUrl"
                        @click.prevent="selectFile" 
                        class="text-white dark:text-slate-300 bg-purple-500 px-4 p-1 rounded-lg mt-4 cursor-pointer hover:opacity-75"> 
                            Seleccionar archivo 
                    </button>
                </div>
                
        </div>
    </div>
</template>