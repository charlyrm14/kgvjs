<script setup>
    import PasswordAPI from '@/api/PasswordAPI';
    import { onMounted, reactive, ref } from 'vue';
    import { useRoute } from 'vue-router';
    import { reset } from '@formkit/core'

    const route = useRoute()
    const { query: { token } } = route

    const alert = reactive({
        status: false,
        text: '',
        color: ''
    })

    const formStatus = ref(false)

    onMounted( async() => {
        try {
            const response = await PasswordAPI.verifyToken(token)

            if(response.status === 200) {
                formStatus.value = true
            }

            if (response.status === 400) {
                handleAlert('bad_request', 'Token invalido')
            }

            if (response.status === 401) {
                handleAlert('bad_request', 'Token expirado, genera un token nuevo')
            }

            resetAlert()

        } catch (error) {
            console.error(error)
        }
    })

    const handleChangePasswordSubmit = async(data) => {

        try {

            const { password_confirm, ...rest } = data;

            const formData = {
                ...rest,
                password_confirmation: password_confirm
            }

            const response = await PasswordAPI.changePassword(formData)

            if (response.status === 200) {
                handleAlert('success', response.data.message)
            }

            if (response.status === 404) {
                handleAlert('bad_request', response.data.message)
            }

            if (response.status === 422) {
                if (response?.data?.errors?.email[0]) {
                    handleAlert('bad_request', response?.data?.errors?.email[0])
                }
            }

            resetAlert()
            reset('sendInstructionsForm')

        } catch (error) {
            console.error(error)
        }
    }
    
    const handleAlert = (type = 'bad_request', text) => {
        alert.status = true
        alert.text = text
        alert.color = type === 'bad_request' ? 'bg-amber-100 text-amber-600' : 'bg-green-100 text-green-600'
    }

    const resetAlert = () => {
        setTimeout(() => {
            alert.status = false
            alert.text = ''
        }, 3000);
    }

</script>

<template>
    <section>
        <div class="m-auto">
            <h1 class="text-4xl text-gray-800 dark:text-white text-center mt-20"> 
                Cambiar contraseña 
                    <span class="block text-base my-2 text-gray-600 dark:text-slate-400"> 
                        Completa el siguiente formulario para cambiar tu contraseña. 
                    </span>
            </h1>
        </div>
        <div class="m-auto">
            <div class="max-w-110 md:max-w-120 m-auto">
                <div 
                    v-if="alert.status"
                    class="rounded-lg px-4 py-3 mt-20"
                    :class="alert.color">
                        <p class="text-center text-sm"> {{ alert.text }} </p>
                </div>
                <div
                    v-if="formStatus">
                        <FormKit
                            id="sendInstructionsForm"
                            type="form"
                            :actions="false"
                            incomplete-message="* Revisa los campos marcados con error *"
                            message-class="text-red-700 my-5 text-sm font-bold"
                            @submit="handleChangePasswordSubmit">
                        
                                <div class="mt-5">
                                    <label for="email" class="dark:text-slate-300"> Correo electrónico </label>
                                    <FormKit 
                                        type="text"
                                        name="email"
                                        placeholder="Ej: correo@correo.com"
                                        label-class="uppercase"
                                        input-class="border border-gray-300 dark:border-slate-700 w-full p-4 my-3 rounded-lg dark:text-slate-500"
                                        message-class="text-red-500 dark:text-red-700 text-sm px-1"
                                        validation="required|email"
                                        :validation-messages="{
                                            required: 'Ingresa tu correo electrónico',
                                            email: 'Ingresa un correo electrónico valido'
                                        }"/>
                                </div>

                                <div class="mt-5">
                                    <label for="password" class="dark:text-slate-300"> Nueva contraseña </label>
                                    <FormKit 
                                        type="password"
                                        name="password"
                                        placeholder="Contraseña"
                                        label-class="uppercase"
                                        input-class="border border-gray-300 dark:border-slate-700 w-full p-4 my-3 rounded-lg dark:text-slate-500"
                                        message-class="text-red-500 dark:text-red-700 text-sm px-1"
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
                                        input-class="border border-gray-300 dark:border-slate-700 w-full p-4 my-3 rounded-lg dark:text-slate-500"
                                        message-class="text-red-500 dark:text-red-700 text-sm px-1"
                                        validation="required|confirm"
                                        :validation-messages="{
                                            required: 'Repite tu contraseña',
                                            confirm: 'Las contraseñas no coinciden'
                                        }"/>
                                </div>

                                <FormKit
                                    type="submit"
                                    label-class="uppercase font-bold"
                                    input-class="w-full mt-5 bg-black p-4 bg-purple-600 text-white uppercase cursor-pointer rounded-lg hover:opacity-75"
                                    label="Cambiar contraseña"/>
                        
                        </FormKit>
                </div>
                <div class="flex justify-end items-center mt-4">
                    <RouterLink
                        :to="{ name: 'login' }"
                        class="text-purple-500 hover:underline">
                            Iniciar sesión
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>