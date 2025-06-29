<script setup>
    
    import { reactive } from 'vue';
    import { useRouter } from 'vue-router';
    import AuthApi from '@/api/AuthAPI';
    import { reset } from '@formkit/core'

    const router = useRouter()

    const alert = reactive({
        status: false,
        text: '',
        color: ''
    })

    const handleLoginSubmit = async (dataLoginForm) => {
        try {
            const response   = await AuthApi.login(dataLoginForm)
            
            if(response.status === 200) {
                localStorage.setItem('auth_token', response.data.data.access_token)
                router.push({ name: 'home' })
            }

            if (response.status === 400) {
                handleAlert('error', response.data.error)
                reset('loginForm')
            }

            resetAlert()

        } catch (error) {
            console.error(error)
        }
    }

    const handleAlert = (type = 'success', text) => {
        alert.status = true
        alert.text = text
        alert.color = type === 'success' ? 'text-green-500' : 'text-red-600'
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
    <div class="min-h-screen flex flex-col md:flex-row bg dark:text-white">
        
        <div class="hidden md:flex md:w-1/2 items-center justify-center bg-gray-100 dark:bg-gray-800 p-10">
            <div class="text-center">
                <img 
                    src="../../../assets/img/agency-dark.png" 
                    alt="Login img" 
                    class="mx-auto mb-6">
                <h2 class="text-2xl font-bold mb-4 uppercase">
                    King Dreams 
                        <span class="block font-light"> Escuela de natación </span>
                </h2>
                <p class="text-sm text-gray-400">
                    Promovemos el  <span class="text-blue-500"> aprendizaje </span> de la natación
                    como seguro de vida.
                </p>
            </div>
        </div>

        <div class="flex w-full md:w-1/2 items-center justify-center p-6 h-screen">
            <div class="w-full max-w-md space-y-6">

                <div class="md:hidden">
                    <img 
                        src="../../../assets/img/agency-dark.png" 
                        alt="Login img" 
                        class="mx-auto mb-6">
                </div>

                <div class="flex justify-center items-center gap-5">
                    <p class="text-2xl text-center font-extralight uppercase cursor-pointer"> 
                        Iniciar sesión 
                            <span class="block md:hidden text-sm text-blue-500 font-bold"> King Dreams </span>
                    </p>
                </div>

                <div class="flex justify-center items-center">
                    <p :class="alert.color" class="uppercase text-center"> {{  alert.text }} </p>
                </div>

                <div>

                    <FormKit
                        id="loginForm"
                        type="form"
                        :actions="false"
                        incomplete-message="* Revisa los campos marcados con error *"
                        message-class="text-red-700 my-5 text-sm font-bold"
                        @submit="handleLoginSubmit">
                    
                        <div>
                            <FormKit 
                                type="text"
                                name="email"
                                placeholder="Correo electrónico o código de usuario"
                                label-class="uppercase"
                                input-class="border border-gray-300 dark:border-slate-700 w-full p-4 my-3 rounded-lg"
                                message-class="text-red-500 dark:text-red-700 text-sm px-1"
                                validation="required"
                                :validation-messages="{
                                    required: 'Ingresa tu correo electrónico o código de usuario'
                                }"/>
                        </div>

                        <div>
                            <FormKit 
                                type="password"
                                name="password"
                                placeholder="Contraseña"
                                label-class="uppercase"
                                input-class="border border-gray-300 dark:border-slate-700 w-full p-4 my-3 rounded-lg"
                                message-class="text-red-500 dark:text-red-700 text-sm px-1"
                                validation="required"
                                :validation-messages="{
                                    required: 'Ingresa una contraseña'
                                }"/>
                        </div>

                        <FormKit
                                type="submit"
                                label-class="uppercase font-bold"
                                input-class="w-full mt-5 bg-black p-4 bg-blue-600 text-white uppercase cursor-pointer rounded-lg hover:opacity-75"
                                label="Iniciar sesión"/>

                    </FormKit>

                    <RouterLink 
                        :to="{ name: 'password-email' }"
                        class="flex justify-start text-sm text-blue-500 dark_text-slate-700 underline cursor-pointer mt-5">
                            ¿Olvidaste tu contraseña?
                    </RouterLink>

                </div>

            </div>
        </div>
    </div>
</template>