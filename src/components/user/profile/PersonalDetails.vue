<script setup>
    import { useUserStore } from '@/stores/user';
    import { reset } from '@formkit/vue';
    import { ref } from 'vue';

    const showPersonalInfo = ref(false)
    const userStore = useUserStore()

    defineProps({
        user: {
            type: Object,
            required: false
        }
    })

    const handleSubmit = async(data) => {
        try {
            await userStore.updateUser(data)
        } catch (error) {
            console.error(error)
        }
    }

    const clearChanges = () => {
        reset('updatePersonalDetailsForm')
    }

</script>

<template>
    <div class="mt-10 bg-white dark:bg-slate-700 rounded-lg p-4 shadow">
        <div class="flex justify-between items-center">
            <h2 class="text-gray-700 dark:text-slate-300 text-xl"> Información personal </h2>
            <button 
                @click="showPersonalInfo = !showPersonalInfo"
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
                                :d="showPersonalInfo ? 'm4.5 15.75 7.5-7.5 7.5 7.5' : 'm19.5 8.25-7.5 7.5-7.5-7.5' " />
                    </svg>
            </button>
        </div>
        <div 
            v-if="showPersonalInfo"
            class="mt-4 border-t border-gray-300 dark:border-slate-600">

                <FormKit
                        id="updatePersonalDetailsForm"
                        type="form"
                        :actions="false"
                        incomplete-message="* Revisa los campos marcados con error *"
                        message-class="text-red-700 my-5 text-sm font-bold"
                        @submit="handleSubmit">

                        <div class="mt-3">
                            <div>
                                <label for="first_name" class="dark:text-slate-300 text-lg font-light"> Nombre </label>
                                <FormKit 
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    placeholder="Juan"
                                    message-class="text-red-500 text-sm px-2 py-1 font-light"
                                    input-class="w-full p-4 dark:bg-slate-800 dark:text-slate-200 border border-gray-300 dark:border-slate-800 mt-2 rounded-lg"
                                    v-model="user.first_name"
                                    validation="required"
                                    :validation-messages="{
                                        required: 'Ingresa un nombre'
                                    }"/>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                            <div class="mt-3">
                                <label for="last_name" class="dark:text-slate-300 text-lg font-light"> Apellido paterno </label>
                                <FormKit 
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    placeholder="Perez"
                                    message-class="text-red-500 text-sm px-2 py-1 font-light"
                                    input-class="w-full p-4 dark:bg-slate-800 dark:text-slate-200 border border-gray-300 dark:border-slate-800 mt-2 rounded-lg"
                                    v-model="user.last_name"
                                    validation="required"
                                    :validation-messages="{
                                        required: 'Ingresa un apellido paterno'
                                    }"/>
                            </div>
                            <div class="mt-3">
                                <label for="mother_last_name" class="dark:text-slate-300 text-lg font-light"> Apellido materno </label>
                                <FormKit 
                                    type="text"
                                    name="mother_last_name"
                                    id="mother_last_name"
                                    placeholder="Perez"
                                    message-class="text-red-500 text-sm px-2 py-1 font-light"
                                    input-class="w-full p-4 dark:bg-slate-800 dark:text-slate-200 border border-gray-300 dark:border-slate-800 mt-2 rounded-lg"
                                    v-model="user.mother_last_name"
                                    validation="required"
                                    :validation-messages="{
                                        required: 'Ingresa un apellido materno'
                                    }"/>
                            </div>
                        </div>

                        <div class="mt-3">
                            <div>
                                <label for="email" class="dark:text-slate-300 text-lg font-light"> Correo electrónico </label>
                                <FormKit 
                                    type="text"
                                    name="email"
                                    placeholder="correo@correo.com"
                                    input-class="w-full p-4 dark:bg-slate-800 dark:text-slate-200 border border-gray-300 dark:border-slate-800 mt-2 rounded-lg"
                                    message-class="text-red-500 text-sm px-2 py-1 font-light"
                                    v-model="user.email"
                                    validation="required"
                                    :validation-messages="{
                                        required: 'Ingresa tu correo electrónico'
                                    }"/>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                            <div class="mt-3">
                                <label for="phone_number" class="dark:text-slate-300 text-lg font-light"> Número telefónico </label>
                                <FormKit 
                                    type="tel"
                                    name="phone_number"
                                    placeholder="5500000000"
                                    input-class="w-full p-4 dark:bg-slate-800 dark:text-slate-200 border border-gray-300 dark:border-slate-800 mt-2 rounded-lg"
                                    message-class="text-red-500 text-sm px-2 py-1 font-light"
                                    v-model="user.phone_number"
                                    validation="required|matches:/^[0-9]{10}$/"
                                    :validation-messages="{
                                        required: 'Ingresa un número de telefóno',
                                        matches: 'Debe contener exactamente 10 dígitos numéricos.'
                                    }"/>
                            </div>
                            <div class="mt-3">
                                <label for="birth_date" class="dark:text-slate-300 text-lg font-light"> Fecha de nacimiento </label>
                                <FormKit
                                    type="date"
                                    name="birth_date"
                                    input-class="w-full p-4 dark:bg-slate-800 dark:text-slate-200 border border-gray-300 dark:border-slate-800 mt-2 rounded-lg"
                                    message-class="text-red-500 text-sm px-2 py-1 font-light"
                                    v-model="user.birth_date"
                                    validation="required|date_after:1950-01-01"
                                    :validation-messages="{
                                        required: 'Ingresa la fecha de nacimiento'
                                    }"/>
                            </div>
                        </div>

                        <div class="flex justify-between md:justify-end items-center gap-x-4 mt-8 md:mt-6">
                            <button
                                @click.prevent="clearChanges"
                                class="bg-gray-200 dark:bg-slate-600 text-gray-500 dark:text-slate-400 px-4 py-2 rounded-lg cursor-pointer hover:opacity-75">
                                    Cancelar
                            </button>
                            <button
                                type="submit"
                                class="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:opacity-75">
                                    Guardar
                            </button>
                        </div>

                </FormKit>
        </div>
    </div>
</template>