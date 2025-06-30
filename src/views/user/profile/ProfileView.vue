<script setup>
    import { ref } from 'vue';

    const showPersonalInfo = ref(false)

</script>

<template>
    <section class="px-6 md:px-12 lg:px-16 py-8 md:py-10">
        <div class="py-4">
            <div class="flex justify-center relative">
                <img 
                    src="../../../assets/img/user-profile.png" 
                    alt="Perfil"
                    class="w-50 md:w-70">
                <div class="absolute -bottom-2 bg-pink-300 rounded-full p-3 cursor-pointer hover:opacity-90">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                    </svg>
                </div>                
            </div>
            <div class="mt-8 md:mt-12">
                <h2 class="text-gray-700 dark:text-slate-300 text-2xl text-center"> Carlos I. </h2>
                <p class="text-center text-gray-500 dark:text-slate-400"> charlyrm14@gmail.com </p>
            </div>
            <div class="mt-10 bg-white dark:bg-slate-700 rounded-lg p-4 shadow">
                <div class="flex justify-between items-center">
                    <h2 class="text-gray-700 dark:text-slate-300 text-xl"> Información Personal </h2>
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
                        <div class="mt-3">
                            <div>
                                <label for="name" class="dark:text-slate-300 text-lg font-light"> Nombre </label>
                                <input 
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Carlos I."
                                    class="w-full p-4 dark:bg-slate-800 dark:text-slate-200 border border-gray-300 dark:border-slate-800 mt-2 rounded-lg">
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                            <div class="mt-3">
                                <label for="name" class="dark:text-slate-300 text-lg font-light"> Apellido paterno </label>
                                <input 
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Ramos"
                                    class="w-full p-4 dark:bg-slate-800 dark:text-slate-200 border border-gray-300 dark:border-slate-800 mt-2 rounded-lg">
                            </div>
                            <div class="mt-3">
                                <label for="name" class="dark:text-slate-300 text-lg font-light"> Apellido materno </label>
                                <input 
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Morales"
                                    class="w-full p-4 dark:bg-slate-800 dark:text-slate-200 border border-gray-300 dark:border-slate-800 mt-2 rounded-lg">
                            </div>
                        </div>
                        <div class="mt-3">
                            <div>
                                <label for="email" class="dark:text-slate-300 text-lg font-light"> Correo electrónico </label>
                                <input 
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="charlyrm14@gmail.com"
                                    class="w-full p-4 dark:bg-slate-800 dark:text-slate-200 border border-gray-300 dark:border-slate-800 mt-2 rounded-lg">
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                            <div class="mt-3">
                                <label for="phone_number" class="dark:text-slate-300 text-lg font-light"> Número telefónico </label>
                                <input 
                                    type="tel"
                                    name="phone_number"
                                    id="phone_number"
                                    placeholder="55 7786 4159"
                                    class="w-full p-4 dark:bg-slate-800 dark:text-slate-200 border border-gray-300 dark:border-slate-800 mt-2 rounded-lg">
                            </div>
                            <div class="mt-3">
                                <label for="birth_date" class="dark:text-slate-300 text-lg font-light"> Fecha de nacimiento </label>
                                <input 
                                    type="date"
                                    name="birth_date"
                                    id="birth_date"
                                    placeholder="1990-12-01"
                                    class="w-full p-4 dark:bg-slate-800 dark:text-slate-200 border border-gray-300 dark:border-slate-800 mt-2 rounded-lg">
                            </div>
                        </div>
                        <div class="flex justify-between md:justify-end items-center gap-x-4 mt-8 md:mt-6">
                            <button
                                class="bg-gray-200 dark:bg-slate-600 text-gray-500 dark:text-slate-400 px-4 py-2 rounded-lg cursor-pointer hover:opacity-75">
                                    Cancelar
                            </button>
                            <button
                                class="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:opacity-75">
                                    Guardar
                            </button>
                        </div>
                </div>
            </div>
        </div>
    </section>
</template>