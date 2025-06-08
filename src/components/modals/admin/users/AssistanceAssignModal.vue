<script setup>
    import UserAPI from '@/api/UserAPI';
    import { useUserStore } from '@/stores/user';
    import { reactive, ref } from 'vue';

    const userStore = useUserStore()

    const email = ref('')
    const userFound = ref(false)
    const errorMessage = reactive({
        status: false,
        message: '',
        textColor: ''
    })
    const userEmailFound = reactive({
        id: 0,     
        name: '',
        email: ''
    })

    const isUserSelected = ref(false)

    const handleSubmit = async () => {
        
        if (email.value == '') {
            errorMessage.status = true
            errorMessage.message = 'Ingresa un correo electrónico'
            errorMessage.textColor = 'text-red-400'

            return
        }

        try {
            const response = await UserAPI.getUserByEmail(email.value)
            
            if(response.status === 200) {
                userFound.value = true
                Object.assign(userEmailFound, response.data.data)
            }

            if(response.status === 404) {
                userFound.value = false
                errorMessage.status = true
                errorMessage.message = 'Usuario no encontrado'
                errorMessage.textColor = 'text-red-400'
                resetValues()
            }

        } catch (error) {
            console.log(error)
        }
    }

    const userSelected = () => {
        isUserSelected.value = !isUserSelected.value
    }

    const assignUserAssistance = () => {
        const data = { user_id: userEmailFound.id }
        userStore.userAssistance(data)
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                    </svg>  Asignar assitencia 
                </h2>
                <button
                    @click.prevent="userStore.hideAssistanceAssignModal()"
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
                    v-if="userStore.userMessageAssistanceAssign.status"
                    class="p-2 my-3">
                        <p
                            class="text-lg uppercase text-center"
                            :class="userStore.userMessageAssistanceAssign.textColor"> 
                            {{ userStore.userMessageAssistanceAssign.text }} 
                        </p>
                </div>

                <div
                    v-if="userFound"
                    class="my-10">
                        <div 
                            class="flex items-center justify-between">
                                <div class="flex items-start gap-x-2 w-3/5">
                                        <img 
                                            src="../../../../assets/img/300-27.jpg" 
                                            alt="imagen perfil 1"
                                            class="w-14 rounded-lg">
                                        <p class="text-lg text-gray-700 dark:text-slate-300 hover:text-pink-500">
                                            {{ userEmailFound?.name ?? 'Not name found' }} 
                                                <span class="block text-sm text-gray-600 dark:text-slate-400"> {{ userEmailFound?.email ?? 'Not email found' }} </span>
                                        </p>
                                    </div>
                                    <div class="w-2/5 flex justify-end">
                                        <button
                                            @click.prevent="userSelected()"
                                            class="bg-pink-500 px-4 py-1 rounded-lg text-white hover:opacity-75 cursor-pointer"
                                            :class="isUserSelected ? 'opacity-50 cursor-not-allowed' : ''"
                                            :disabled="isUserSelected">
                                                Seleccionar
                                        </button>
                                    </div>
                                </div>
                        <div class="border-b-1 border-dashed dark:border-slate-500 my-2"></div>
                </div>

            </div>

            <!-- Acciones -->
            <div class="flex justify-end gap-2 mt-6">
                <button
                    @click.prevent="userStore.hideAssistanceAssignModal()"
                    class="px-4 py-2 border text-gray-500 dark:text-slate-400 rounded-lg text-sm transition uppercase cursor-pointer hover:opacity-75 shadow">
                        Cancelar
                </button>

                <button
                    :disabled="!isUserSelected"
                    :class="!isUserSelected ? 'opacity-50 cursor-not-allowed' : ''"
                    @click.prevent="assignUserAssistance()"
                    class="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition uppercase cursor-pointer">
                        Tomar asistencia
                </button>
            </div>

        </div>
    </div>
</template>
