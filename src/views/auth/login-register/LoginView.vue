<script setup>
    
    import { onMounted, ref } from 'vue';
    import { useRouter } from 'vue-router';
    import AuthApi from '@/api/AuthAPI';

    const activeForm = ref(true)
    const router = useRouter()

    const handleLoginSubmit = async (dataLoginForm) => {
        const { data }  = await AuthApi.login(dataLoginForm)
        localStorage.setItem('auth_token', data.access_token)
        router.push({ name: 'home' })
    }

    const handleRegisterSubmit = ( dataRegisterForm ) => {
        console.log(dataRegisterForm)
    }

</script>

<template>
    <div class="min-h-screen flex flex-col md:flex-row dark:text-white">
        
        <div class="hidden md:flex md:w-1/2 items-center justify-center bg-gray-800 p-10">
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

                <div class="flex justify-center items-center gap-5">
                    <button
                        @click="activeForm = true"
                        class="text-2xl text-center font-extralight uppercase cursor-pointer"
                        :class="[activeForm ? 'border-b-3 border-blue-600' : '' ]"> 
                            Iniciar sesión 
                    </button>
                    <button
                        @click="activeForm = false"
                        class="text-2xl text-center font-extralight uppercase cursor-pointer"
                        :class="[!activeForm ? 'border-b-3 border-blue-600' : '' ]"> 
                            Registrarse 
                    </button>
                </div>

                <div v-if="activeForm">

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

                    <p class="flex justify-start text-sm text-gray-400 dark_text-slate-700 underline cursor-pointer mt-5">
                        ¿Olvidaste tu contraseña?
                    </p>

                </div>

                <div v-else>

                    <FormKit
                        id="registerForm"
                        type="form"
                        :actions="false"
                        incomplete-message="* Revisa los campos marcados con error *"
                        message-class="text-red-700 my-5 text-sm font-bold"
                        @submit="handleRegisterSubmit">

                            <div>
                                <FormKit 
                                    type="text"
                                    name="name"
                                    placeholder="Nombres"
                                    label-class="uppercase"
                                    input-class="border border-gray-300 dark:border-slate-700 w-full p-4 my-3 rounded-lg"
                                    message-class="text-red-500 dark:text-red-700 text-sm px-1"
                                    validation="required"
                                    :validation-messages="{
                                        required: 'Ingresa tu nombre'
                                    }"/>
                            </div>

                            <div>
                                <FormKit 
                                    type="text"
                                    name="last_name"
                                    placeholder="Apellido paterno"
                                    label-class="uppercase"
                                    input-class="border border-gray-300 dark:border-slate-700 w-full p-4 my-3 rounded-lg"
                                    message-class="text-red-500 dark:text-red-700 text-sm px-1"
                                    validation="required"
                                    :validation-messages="{
                                        required: 'Ingresa tu apellido paterno'
                                    }"/>
                            </div>

                            <div>
                                <FormKit 
                                    type="text"
                                    name="mothers_name"
                                    placeholder="Apellido materno"
                                    label-class="uppercase"
                                    input-class="border border-gray-300 dark:border-slate-700 w-full p-4 my-3 rounded-lg"
                                    message-class="text-red-500 dark:text-red-700 text-sm px-1"
                                    validation="required"
                                    :validation-messages="{
                                        required: 'Ingresa tu apellido paterno'
                                    }"/>
                            </div>

                            <div>
                                <FormKit 
                                    type="email"
                                    name="email"
                                    placeholder="Ej: correo@correo.com"
                                    label-class="uppercase"
                                    input-class="border border-gray-300 dark:border-slate-700 w-full p-4 my-3 rounded-lg"
                                    message-class="text-red-700 text-sm mt-1"
                                    validation="required|email"
                                    :validation-messages="{
                                        required: 'Ingresa tu correo electrónico',
                                        email: 'Ingresa un correo valido'
                                    }"/>
                            </div>

                            <div>
                                <FormKit 
                                    type="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    label-class="uppercase"
                                    input-class="border border-gray-300 dark:border-slate-700 w-full p-4 my-3 rounded-lg"
                                    message-class="text-red-700 text-sm mt-1"
                                    validation="required"
                                    :validation-messages="{
                                        required: 'Ingresa una contraseña'
                                    }"/>
                            </div>

                            <FormKit
                                    type="submit"
                                    label-class="uppercase font-bold"
                                    input-class="w-full mt-5 bg-black p-4 bg-blue-600 text-white uppercase cursor-pointer rounded-lg hover:opacity-75"
                                    label="Registrarse"/>

                    </FormKit>

                </div>

            </div>
        </div>
    </div>
</template>