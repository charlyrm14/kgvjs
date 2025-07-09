<script setup>
    import { useUserStore } from '@/stores/user';
    import { reset } from '@formkit/vue';
    import { ref } from 'vue';

    const userStore = useUserStore()
    const showSecurityInfo = ref(false)
    const isSubmitting = ref(false)
    

    const props = defineProps({
        user: {
            type: Object,
            required: false
        }
    })

    const handleSubmit = async(data) => {
        isSubmitting.value = true
        try {
            const { password_confirm, ...rest } = data;

            const formData = {
                ...rest,
                password_confirmation: password_confirm,
                email: props.user.email
            }

            await userStore.changeUserPassword(formData)

        } catch (error) {
            console.error(error)
        } finally {
            isSubmitting.value = false
        }
    }

    const clearChanges = () => {
        reset('updatePasswordForm')
    }

</script>

<template>
    <div class="mt-10 bg-white dark:bg-slate-700 rounded-lg p-4 shadow">
        <div class="flex justify-between items-center">
            <h2 class="text-gray-700 dark:text-slate-300 text-xl"> Seguridad </h2>
            <button 
                @click="showSecurityInfo = !showSecurityInfo"
                class="rounded-full p-1 bg-gray-100 dark:bg-slate-500 text-gray-600 dark:text-slate-300 hover:opacity-75 cursor-pointer">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        class="size-6">
                            <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                :d="showSecurityInfo ? 'm4.5 15.75 7.5-7.5 7.5 7.5' : 'm19.5 8.25-7.5 7.5-7.5-7.5' " />
                    </svg>
            </button>
        </div>
        <div 
            v-if="showSecurityInfo"
            class="mt-4 border-t border-gray-300 dark:border-slate-600">

                <div class="flex items-start gap-4 p-4 border border-yellow-500 bg-gray-200 dark:bg-slate-800 rounded-lg">
                    <div class="text-yellow-500 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                        </svg>
                    </div>
                    <div>
                        <p class="text-gray-700 dark:text-white font-semibold"> Atención </p>
                        <p class="text-base text-gray-600 dark:text-gray-400">
                            Si cambias tu contraseña, por seguridad se cerrára tu sesión actual y tendrás que iniciar sesión nuevamente con tu nueva contraseña.
                        </p>
                    </div>
                </div>

                <FormKit
                    id="updatePasswordForm"
                    type="form"
                    :actions="false"
                    incomplete-message="* Revisa los campos marcados con error *"
                    message-class="text-red-700 my-5 text-sm font-bold"
                    @submit="handleSubmit">

                        <div class="mt-5">
                            <label for="password" class="dark:text-slate-300 text-lg font-light"> Nueva contraseña </label>
                            <FormKit 
                                type="password"
                                name="password"
                                placeholder="Contraseña"
                                label-class="uppercase"
                                message-class="text-red-500 text-sm px-2 py-1 font-light"
                                input-class="w-full p-4 dark:bg-slate-800 dark:text-slate-200 border border-gray-300 dark:border-slate-800 mt-2 rounded-lg"
                                validation="required|length:8"
                                :validation-messages="{
                                    required: 'Ingresa tu contraseña'
                                }"/>
                        </div>

                        <div class="mt-5">
                            <label for="password_confirm" class="dark:text-slate-300"> Repetir contraeña </label>
                            <FormKit 
                                type="password"
                                name="password_confirm"
                                placeholder="Repetir contraseña"
                                label-class="uppercase"
                                message-class="text-red-500 text-sm px-2 py-1 font-light"
                                input-class="w-full p-4 dark:bg-slate-800 dark:text-slate-200 border border-gray-300 dark:border-slate-800 mt-2 rounded-lg"
                                validation="required|confirm"
                                :validation-messages="{
                                    required: 'Repite tu contraseña',
                                    confirm: 'Las contraseñas no coinciden'
                                }"/>
                        </div>


                        <div class="flex justify-between md:justify-end items-center gap-x-4 mt-8 md:mt-6">
                            <button
                                @click.prevent="clearChanges"
                                class="bg-gray-200 dark:bg-slate-600 text-gray-500 dark:text-slate-400 px-4 py-2 rounded-lg cursor-pointer hover:opacity-75">
                                    Cancelar
                            </button>
                            <button 
                                type="submit"
                                :disabled="isSubmitting"
                                class="px-4 py-2  text-white rounded-lg text-sm transition uppercase"
                                :class="!isSubmitting ? 'bg-blue-500 hover:bg-blue-700 cursor-pointer' : 'bg-gray-200 dark:bg-gray-700 cursor-not-allowed'"> 
                                    {{ isSubmitting ? 'Procesando...' : 'Cambiar contraseña' }} 
                            </button>
                        </div>

                </FormKit>
        </div>
    </div>
</template>