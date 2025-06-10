<script setup>

</script>

<template>
    <section class="px-8">
            <div class="mt-4 bg-white dark:bg-slate-700 rounded-lg">
                <div class="border-b border-gray-300 dark:border-slate-600 p-4">
                    <h2 class="px-4 text-gray-700 dark:text-slate-300 uppercase"> Información de usuario </h2>
                </div>
                <div class="p-4 mt-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <div>
                            <label 
                                for="name" 
                                class="text-gray-700 dark:text-slate-300 text-lg font-extralight px-4"> Nombre </label>
                        </div>
                        <div>
                            <input 
                                type="text"
                                placeholder="Carlos I."
                                class="p-4 bg-gray-200 dark:bg-slate-800 rounded-lg w-full shadow text-gray-700 dark:text-slate-300">
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-4">
                        <div>
                            <label 
                                for="name" 
                                class="text-gray-700 dark:text-slate-300 text-lg font-extralight px-4"> Correo electrónico </label>
                        </div>
                        <div>
                            <input 
                                type="text"
                                placeholder="charlyrm14@gmail.com"
                                class="p-4 bg-gray-200 dark:bg-slate-800 rounded-lg w-full shadow text-gray-700 dark:text-slate-300">
                        </div>
                    </div>
                </div>
                <div class="border-t border-gray-300 dark:border-slate-600 p-4">
                    <div class="flex justify-end items-center gap-x-3">
                        <button
                            class="px-4 p-2 font-light bg-gray-200 dark:bg-slate-600 text-gray-500 dark:text-slate-400 rounded-lg hover:opacity-75 cursor-pointer">
                                Descartar
                        </button>
                        <button
                            class="px-4 p-2 font-light bg-blue-600 text-white rounded-lg hover:opacity-75 cursor-pointer">
                                Guardar cambios
                        </button>
                    </div>
                </div>
            </div>
    </section>
</template>