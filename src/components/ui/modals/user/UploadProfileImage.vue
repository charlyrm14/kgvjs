<script setup>
    import Dropzone from '@/components/ui/helpers/Dropzone.vue';
    import { reactive, ref } from 'vue';
    import Message from '../../alerts/admin/Message.vue';
    import { typeAlertIcon } from '@/helpers';
    import { useUserStore } from '@/stores/user';
    
    const isSubmitting = ref(false)
    const filePath = ref(null)
    const message = reactive({
        text: '',   
        color: '',
        icon: '',
        status: false,
    })

    const emit = defineEmits(['closeProfileImageModal'])

    const userStore = useUserStore()

    const handleImageUpload = (path) => {
        filePath.value = path;
    };

    const handleSubmit = async() => {

        if (filePath.value === null) {
            filePath.value = null
            handleMessage('Debes agregar una imagen', 'error')
            resetMessage()
            return
        }

        isSubmitting.value = true

        try {

            const data = {
                profile_image: filePath.value
            }

            const response = await userStore.updateProfileImage(data)

            if (response) {
                emit('closeProfileImageModal')
            }
            
        } catch (error) {
            
            console.error(error)
            handleMessage('Hubo un error al guardar la imagen', 'error')
            resetMessage()
            
        } finally {
            filePath.value = null
            isSubmitting.value = false
        }
    }
    
    const closeModal = () => {
        emit('closeProfileImageModal')
    }

    const handleMessage = (title, type = 'success') => {
        message.text = title
        message.color = type === 'success' ? 'green' : 'red'
        message.icon = typeAlertIcon(type)
        message.status = true
    }

    const resetMessage = () => {
        setTimeout(() => {
            message.text = ''
            message.color = ''
            message.icon = ''
            message.status = false
        }, 3000);
    }

</script>

<template>
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <!-- Contenedor del modal -->
        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-[90%] max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-2xl xl:max-w-2xl p-6 mx-4">

            <!-- Encabezado -->
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-light text-gray-700 dark:text-slate-300 flex items-center gap-2"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg> Subir imagen
                </h2>
                <button
                    @click.prevent="closeModal"
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

            <Message
                v-if="message.status"
                :text="message.text"
                :color="message.color"
                :icon="message.icon"/>

            <div class="mb-6">
                <Dropzone
                    @uploaded="handleImageUpload"/>
            </div>

            <!-- Acciones -->
            <div class="flex justify-end gap-2">
                <button
                    @click.prevent="closeModal"
                    class="px-4 py-2 bg-gray-200 dark:bg-slate-600 text-gray-500 dark:text-slate-400 rounded-lg text-sm hover:opacity-75 transition uppercase cursor-pointer">
                        Cancelar
                </button>
                <button 
                    @click.prevent="handleSubmit"
                    type="submit"
                    :disabled="isSubmitting"
                    class="px-4 py-2  text-white rounded-lg text-sm transition uppercase"
                    :class="!isSubmitting ? 'bg-blue-500 hover:bg-blue-700 cursor-pointer' : 'bg-gray-200 dark:bg-gray-700 cursor-not-allowed'"> 
                        {{ isSubmitting ? 'Actualizando...' : 'Guardar cambios' }}
                </button>
            </div>

        </div>
    </div>
</template>
