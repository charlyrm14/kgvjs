<script setup>
    import { useUserStore } from '@/stores/user';
    import { currentDate } from '@/helpers';
    import { ref } from 'vue';
    
    const today = ref(currentDate())
    const userStore = useUserStore()

    const handleSubmit = (data) => {
        userStore.createUser(data)
    } 

</script>

<template>
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-[90%] max-w-md p-6 mx-4">
            
            <!-- Encabezado -->
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-light text-slate-800 dark:text-white flex items-center gap-2"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                    </svg> Nuevo usuario 
                </h2>
                <button
                    @click.prevent="userStore.hideAddUserModal()"
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

            <div v-if="userStore.errorMessage.status">
                <p class="text-red-500 my-3"> {{ userStore.errorMessage.text }} </p>
            </div>

            <!-- Contenido -->
            <FormKit
                id="addUserForm"
                type="form"
                :actions="false"
                incomplete-message="* Revisa los campos marcados con error *"
                message-class="text-red-700 my-5 text-sm font-bold"
                @submit="handleSubmit">

                    <div>
                        <label for="name" class="uppercase dark:text-slate-300 font-light"> Nombre(s)</label>
                        <FormKit 
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Ej: Juan"
                            label-class="uppercase font-light dark:text-slate-500"
                            input-class="border border-gray-300 dark:text-slate-300 dark:border-slate-500 w-full p-3 my-2 rounded-lg"
                            message-class="text-red-500 text-sm px-2 font-light"
                            validation="required"
                            :validation-messages="{
                                required: 'Ingresa el o los nombres del usuario'
                            }"/>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 mt-3">
                        <div>
                            <label for="last_name" class="uppercase dark:text-slate-300 font-light"> Apellido paterno </label>
                            <FormKit 
                                type="text"
                                name="last_name"
                                id="last_name"
                                placeholder="Ej: Ramirez"
                                label-class="uppercase font-light dark:text-slate-500"
                                input-class="border border-gray-300 dark:text-slate-300 dark:border-slate-500 w-full p-3 my-2 rounded-lg"
                                message-class="text-red-500 text-sm px-2 font-light"
                                validation="required"
                                :validation-messages="{
                                    required: 'Ingresa un apellido paterno'
                                }"/>
                        </div>
                        <div>
                            <label for="mothers_name" class="uppercase dark:text-slate-300 font-light"> Apellido materno </label>
                            <FormKit 
                                type="text"
                                name="mothers_name"
                                id="mothers_name"
                                placeholder="Ej: Ramirez"
                                label-class="uppercase font-light dark:text-slate-500"
                                input-class="border border-gray-300 dark:text-slate-300 dark:border-slate-500 w-full p-3 my-2 rounded-lg"
                                message-class="text-red-500 text-sm px-2 font-light"
                                validation="required"
                                :validation-messages="{
                                    required: 'Ingresa un apellido paterno'
                                }"/>
                        </div>
                    </div>

                    <div class="mt-3">
                        <label for="birth_date" class="uppercase dark:text-slate-300 font-light"> Fecha de nacimiento </label>
                        <FormKit
                            type="date"
                            name="birth_date"
                            :value="today"
                            input-class="border border-gray-300 dark:text-slate-300 dark:border-slate-500 w-full p-3 my-2 rounded-lg"
                            message-class="text-red-500 text-sm px-2 font-light"
                            validation="required|date_after:1950-01-01"
                            :validation-messages="{
                                required: 'Ingre la fecha de nacimiento'
                            }"/>
                    </div>

                    <div class="mt-3">
                        <label for="email" class="uppercase dark:text-slate-300 font-light"> Correo electrónico </label>
                        <FormKit 
                            type="text"
                            name="email"
                            placeholder="Correo electrónico"
                            input-class="border border-gray-300 dark:text-slate-300 dark:border-slate-500 w-full p-3 my-2 rounded-lg"
                            message-class="text-red-500 text-sm px-2 font-light"
                            validation="required"
                            :validation-messages="{
                                required: 'Ingresa tu correo electrónico o código de usuario'
                            }"/>
                    </div>

                    <div class="mt-3">
                        <label for="role_id" class="uppercase dark:text-slate-300 font-light"> Perfil </label>
                        <FormKit
                            type="select"
                            name="role_id"
                            input-class="border border-gray-300 dark:text-slate-300 dark:border-slate-500 w-full p-3 my-2 rounded-lg"
                            message-class="text-red-500 text-sm px-2 font-light"
                            :options="{
                                3: 'Estudiante',
                                2: 'Profesor',
                                1: 'Administrador'
                            }"/>
                    </div>

                    <!-- Acciones -->
                    <div class="flex justify-end gap-2 mt-6">
                        <button
                            @click.prevent="userStore.hideAddUserModal()"
                            class="px-4 py-2 border text-gray-500 dark:text-slate-400 rounded-lg text-sm transition uppercase cursor-pointer hover:opacity-75 shadow">
                                Cancelar
                        </button>

                        <FormKit
                            type="submit"
                            label-class="text-white text-sm"
                            input-class="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition uppercase cursor-pointer"
                            label="Agregar"/>
                    </div>

            </FormKit>

        </div>
    </div>
</template>