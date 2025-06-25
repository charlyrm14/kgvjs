<script setup>
    import Dropzone from '@/components/ui/helpers/Dropzone.vue';
    //import { useSwimmingCategoriesStore } from '@/stores/swimming-categories';
    import { ref } from 'vue';
    
    //const swimmingStore = useSwimmingCategoriesStore()

    const message = ref('')
    const filePath = ref(null)

    const handleSubmit = (data) => {

        const formData = {
            ...data,
            image: filePath.value
        };

        // Enviando data para crear nueva categoría
        console.log(formData)
    }
    
    const handleImageUpload = (path) => {
        filePath.value = path;
    };

</script>

<template>
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-[90%] max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-2xl xl:max-w-2xl p-6 mx-4">
            
            <!-- Encabezado -->
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-light text-slate-800 dark:text-white flex items-center gap-2"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
                    </svg> Nueva categoría 
                </h2>
                <button
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

            <FormKit
                id="addUserForm"
                type="form"
                :actions="false"
                incomplete-message="* Revisa los campos marcados con error *"
                message-class="text-red-700 my-5 text-sm font-bold"
                @submit="handleSubmit">

                    <div>
                        <label for="title" class="uppercase dark:text-slate-300 font-light"> Nombre </label>
                        <FormKit 
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Ej: Delfín"
                            label-class="uppercase font-light dark:text-slate-500"
                            input-class="border border-gray-300 dark:text-slate-300 dark:border-slate-500 w-full p-3 my-2 rounded-lg"
                            message-class="text-red-500 text-sm px-2 font-light"
                            validation="required"
                            :validation-messages="{
                                required: 'Ingresa el nombre de la categoría'
                            }"/>
                    </div>

                    <div class="my-3">
                        <label for="image" class="uppercase dark:text-slate-300 font-light"> Clasificación </label>
                        <FormKit
                            type="select"
                            name="classification"
                            :options="[
                                { label: 'Selecciona', attrs: { disabled: true } },
                                { label: 'Niños', value: 1 },
                                { label: 'Adultos', value: 2 },
                            ]"
                            input-class="border border-gray-300 dark:border-slate-500 text-gray-700 dark:text-slate-300 p-3 my-2 rounded-lg uppercase w-full"
                            validation="required"
                            :validation-messages="{
                                required: 'Selecciona una categoría',
                            }"
                            message-class="text-red-500 text-sm px-2 font-light"/>
                    </div>

                    <Dropzone
                        @uploaded="handleImageUpload"/>

                    <div class="my-3">
                        <label for="message" class="uppercase dark:text-slate-300 font-light"> Mensaje de felicitación </label>
                        <FormKit 
                            type="textarea"
                            name="message"
                            id="message"
                            placeholder="Ej: Felicidades por alcanzar esta categoría"
                            label-class="uppercase font-light dark:text-slate-500"
                            input-class="border border-gray-300 dark:text-slate-300 dark:border-slate-500 w-full p-3 my-2 rounded-lg"
                            message-class="text-red-500 text-sm px-2 font-light"
                            help-class="text-green-500 text-sm"
                            :help="`${message ? message.length : 0} / 120`"
                            v-model="message"
                            validation="required|length:0,120"
                            :validation-messages="{
                                length: 'El mensaje no puede contener más de 120 caracteres.',
                            }"/>
                    </div>

                <!-- Acciones -->
                <div class="flex justify-end gap-2">
                    <button
                        class="px-4 py-2 border text-gray-500 dark:text-slate-400 rounded-lg text-sm transition uppercase cursor-pointer hover:opacity-75">
                            Cancelar
                    </button>
                    <FormKit
                            type="submit"
                            label-class="text-white text-sm"
                            input-class="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:opacity-75 transition uppercase cursor-pointer"
                            label="Agregar"/>
                </div>

            </FormKit>
            
        </div>
    </div>
</template>

