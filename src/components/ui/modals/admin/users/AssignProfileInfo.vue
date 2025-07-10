<script setup>
    
    import Message from '@/components/ui/alerts/admin/Message.vue';
    import { useUserStore } from '@/stores/user';
    import { ref } from 'vue';

    const isSubmitting = ref(false)
    const userStore = useUserStore()

    const props = defineProps({
        user: {
            type: Object,
            required: true
        }
    })

    const emit = defineEmits(['closeAssignProfileInfoModal'])

    const handleSubmit = async(data) => {

        isSubmitting.value = true

        try {
            const formData = {
                ...data,
                user_id: props.user.id,
                visible_to: 'public'
            }

            const result = await userStore.assignUserProfileInfo(formData)

            if (result) {
                emit('closeAssignProfileInfoModal')
            }
        
        } catch (error) {
            console.error(error)
        } finally {
            isSubmitting.value = false
        }
    }

    const closeProfileInfoModal = () => {
        emit('closeAssignProfileInfoModal')
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
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                    </svg> Asignar información de perfil de usuario
                </h2>
                <button
                    @click.prevent="closeProfileInfoModal"
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

            <div
                v-if="userStore?.messageError?.status"
                class="my-3 bg-red-200 rounded-lg p-2">
                    <div class="flex justify-start items-center gap-x-3">
                        <div class="bg-red-500 p-2 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                            </svg>
                        </div>
                        <p class="dark:text-red-600 text-sm md:text-base">
                            {{ userStore?.messageError?.text  ?? '' }}
                        </p>
                    </div>
            </div>

            <!-- Contenido -->
            <FormKit
                id="addProfileInfoForm"
                type="form"
                :actions="false"
                incomplete-message="* Revisa los campos marcados con error *"
                message-class="text-red-700 my-5 text-sm font-bold"
                @submit="handleSubmit">

                <div class="my-6">
                    <div class="mt-3">
                        <label for="type" class="uppercase dark:text-slate-300 font-light"> Tipo información </label>
                        <FormKit
                            type="select"
                            name="type"
                            input-class="border border-gray-300 dark:text-slate-300 dark:border-slate-500 w-full p-3 my-2 rounded-lg"
                            message-class="text-red-500 text-sm px-2 font-light"
                            :options="{
                                hobbies: 'Hobbies',
                                achievements: 'Logros',
                                biography: 'Biografía'
                            }"/>
                    </div>

                    <div class="mt-3">
                        <label for="content" class="uppercase dark:text-slate-300 font-light"> contenido </label>
                        <FormKit
                            type="text"
                            name="content"
                            placeholder="Ej: Texto para la biografia, hobbies o logros"
                            input-class="border border-gray-300 dark:text-slate-300 dark:border-slate-500 w-full p-3 my-2 rounded-lg"
                            message-class="text-red-500 text-sm px-2 font-light"
                            validation="required"
                            :validation-messages="{
                                required: 'Ingresa el contenido'
                            }"/>
                    </div>

                </div>

                <!-- Acciones -->
                <div class="flex justify-end gap-2">
                    <button
                        @click.prevent="closeProfileInfoModal"
                        class="px-4 py-2 bg-gray-200 dark:bg-slate-600 text-gray-500 dark:text-slate-400 rounded-lg text-sm hover:opacity-75 transition uppercase cursor-pointer">
                            Cancelar
                    </button>
                    <button 
                        type="submit"
                        :disabled="isSubmitting"
                        class="px-4 py-2  text-white rounded-lg text-sm transition uppercase"
                        :class="!isSubmitting ? 'bg-blue-500 hover:bg-blue-700 cursor-pointer' : 'bg-gray-200 dark:bg-gray-700 cursor-not-allowed'"> 
                            {{ isSubmitting ? 'Actualizando...' : 'Guardar cambios' }}
                    </button>
                </div>

            </FormKit>

        </div>
    </div>
</template>
