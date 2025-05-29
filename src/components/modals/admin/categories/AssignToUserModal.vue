<script setup>
    import SwimmingCategoriesAPI from '@/api/SwimmingCategoriesAPI';
import UserAPI from '@/api/UserAPI';
import { useSwimmingCategoriesStore } from '@/stores/swimming-categories';
    import { reactive, ref } from 'vue';

    const swimmingStore = useSwimmingCategoriesStore() 

    const email = ref('')
    const errorMessage = reactive({
        status: false,
        message: '',
        textColor: ''
    })
    const userFound = reactive({
        id: 0,
        name: '',
        email: ''
    })

    const selectedCategory = ref(0)

    const handleSubmit = async () => {

        if (email.value == '') {
            errorMessage.status = true
            errorMessage.message = 'Ingresa un correo electrónico'
            errorMessage.textColor = 'text-red-400'

            resetValues()
            return
        }

        resetValues()

        try {

            const response = await UserAPI.getUserByEmail(email.value)
            
            if(response.status === 200) {
                swimmingStore.userEmailFound = true
                userFound.id = response.data.data.id
                userFound.name = response.data.data.name
                userFound.email = response.data.data.email
            } 
            
            if(response.status === 404) {
                console.log(response)
                errorMessage.status = true
                errorMessage.message = response.data.message
                errorMessage.textColor = 'text-red-400'
                swimmingStore.userEmailFound = false
            }
            
        } catch (error) {
            
        }

    }

    const assignCategoryToUser = async () => {
        try {

            const data = { swimming_category_id: selectedCategory.value, user_id: userFound.id }
            
            const response = await SwimmingCategoriesAPI.assignCategoryToUser(data)

            if (response.status === 201) {
                selectedCategory.value = 0
                errorMessage.status = true
                errorMessage.message = 'Categoría asignada con éxito'
                errorMessage.textColor = 'text-green-400'

                resetValues()
            }

            if (response.status === 400) {
                selectedCategory.value = 0
                errorMessage.status = true
                errorMessage.message = response.data.message
                errorMessage.textColor = 'text-red-400'

                resetValues()
            }

        } catch (error) {
            console.error(error)
        }
    }

    function resetValues() {
        setTimeout(() => {
            errorMessage.status = false
            errorMessage.message = ''
            errorMessage.textColor = ''
        }, 3000);
    }

</script>

<template>
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-[90%] max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-2xl xl:max-w-2xl p-6 mx-4">
            
            <!-- Encabezado -->
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-light text-slate-800 dark:text-white flex items-center gap-2"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                    </svg> Asignar categoría a usuario
                </h2>
                <button
                    @click="swimmingStore.hideAssignCategoryModal"
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

            <!-- Contenido -->
            <div class="my-10">
                <div>
                    <form @submit.prevent="handleSubmit">
                        <div class="flex w-full rounded-lg overflow-hidden border border-gray-300 dark:border-slate-600">
                            <input
                                type="email"
                                placeholder="Ej: correo@correo.com"
                                class="w-5/6 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-slate-300"
                                v-model="email"
                                required/>
                            <button
                                type="submit"
                                class="w-1/6 bg-indigo-400 text-white px-4 py-2 hover:opacity-75 transition flex justify-center cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                            </button>
                        </div>
                    </form>
                </div>

                <div
                    v-if="errorMessage.status"
                    class="p-2 my-3">
                        <p
                            :class="errorMessage.textColor"
                            class="text-lg uppercase text-center"> 
                            {{ errorMessage.message }} 
                        </p>
                </div>

                <div
                    v-if="swimmingStore.userEmailFound"
                    class="my-10">
                    <div class="flex items-center justify-between">
                        <div class="flex items-start gap-x-2 w-3/5">
                            <img 
                                src="../../../../assets/img/300-27.jpg" 
                                alt="imagen perfil 1"
                                class="w-14 rounded-lg">
                            <p class="text-lg text-gray-700 dark:text-slate-300 hover:text-pink-500">
                                {{ userFound.name }}
                                    <span class="block text-sm text-gray-600 dark:text-slate-400"> {{ userFound.email }} </span>
                            </p>
                        </div>
                        <div class="w-2/5">
                            <select 
                                name="swimming_category_id" 
                                id="swimming_category_id"
                                v-model="selectedCategory"
                                class="border border-gray-300 dark:border-slate-500 text-gray-700 dark:text-slate-300 px-4 py-2 rounded-lg uppercase w-full">
                                    <option value="0"> -- Selecciona -- </option>
                                    <option
                                        v-for="category in swimmingStore.categories" 
                                        :key="category.id"
                                        :value="category.id"> {{ category.title }} </option>
                            </select>
                        </div>
                    </div>
                    <div class="border-b-1 border-dashed dark:border-slate-500 my-2"></div>
                </div>

            </div>

            <!-- Acciones -->
            <div class="flex justify-end gap-2">
                <button
                    @click="swimmingStore.hideAssignCategoryModal()"
                    class="px-4 py-2 border text-gray-500 dark:text-slate-400 rounded-lg text-sm transition uppercase cursor-pointer hover:opacity-75">
                        Cancelar
                </button>
                <button
                    :disabled="selectedCategory == 0"
                    :class="selectedCategory == 0 ? 'opacity-50 cursor-not-allowed' : ''"
                    @click="assignCategoryToUser"
                    class="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:opacity-75 transition uppercase cursor-pointer">
                        Asignar
                </button>
            </div>
        </div>
    </div>
</template>