<script setup>
    import PasswordAPI from '@/api/PasswordAPI';
    import { reactive } from 'vue';

    const alert = reactive({
        status: false,
        text: '',
        color: ''
    })

    const handleSendInstructionsSubmit = async(data) => {
        try {

            const response = await PasswordAPI.sendToken(data)

            if (response.status === 201) {
                handleAlert('success', response?.data?.message)
            }

            if (response.status === 422) {
                if (response?.data?.errors?.email[0]) {
                    handleAlert('error', response?.data?.errors?.email[0])
                }
            }

            resetAlert()

        } catch (error) {
            console.error(error)
        }
    }

    const handleAlert = (type = 'success', text) => {
        alert.status = true
        alert.text = text
        alert.color = type === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
    }

    const resetAlert = () => {
        setTimeout(() => {
            alert.status = false
            alert.text = ''
            alert.color = ''
        }, 3000);
    }

</script>

<template>
    <section>
            <div class="m-auto">
                <h1 class="text-4xl text-gray-800 dark:text-white text-center mt-20"> 
                    Recuperar contraseña 
                        <span class="block text-base my-2 text-gray-600 dark:text-slate-400"> 
                            Ingresa tu correo electrónico para recibir las instrucciones. 
                        </span>
                </h1>
            </div>
            <div class="max-w-110 md:max-w-120 m-auto">
                <div
                    v-if="alert.status"
                    class="mt-5 rounded-lg px-4 py-3"
                    :class="alert.color">
                        <p 
                            class="font-light"
                            :class="alert.color"> {{ alert.text }} </p>
                </div>
                <FormKit
                        id="sendInstructionsForm"
                        type="form"
                        :actions="false"
                        incomplete-message="* Revisa los campos marcados con error *"
                        message-class="text-red-700 my-5 text-sm font-bold"
                        @submit="handleSendInstructionsSubmit">

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

                        <FormKit
                                type="submit"
                                label-class="uppercase font-bold"
                                input-class="w-full mt-5 bg-black p-4 bg-purple-600 text-white uppercase cursor-pointer rounded-lg hover:opacity-75"
                                label="Recuperar contraseña"/>

                </FormKit>
                <div class="flex justify-end items-center mt-4">
                    <RouterLink
                        :to="{ name: 'login' }"
                        class="text-purple-500 hover:underline">
                            Iniciar sesión
                    </RouterLink>
                </div>
            </div>
    </section>
</template>