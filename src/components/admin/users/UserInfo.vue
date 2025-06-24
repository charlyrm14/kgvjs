<script setup>
</script>

<template>
    <div class="p-1 md:p-4 mt-4 md:mt-0">
            <div>
                <label for="name" class="text-gray-700 dark:text-slate-300 text-lg font-extralight"> Nombre </label>
                <input 
                        type="text"
                        placeholder="Ejemplo: Juan"
                        name="name"
                        class="p-3 bg-gray-200 dark:bg-slate-800 rounded-lg w-full shadow text-gray-700 dark:text-slate-300 mt-1">
            </div>
            <div class="mt-3">
                <label for="name" class="text-gray-700 dark:text-slate-300 text-lg font-extralight"> Correo electrónico </label>
                <input 
                        type="text"
                        placeholder="Ejemplo: Juan"
                        name="name"
                        class="p-3 bg-gray-200 dark:bg-slate-800 rounded-lg w-full shadow text-gray-700 dark:text-slate-300 mt-1">
            </div>
            <div class="mt-3">
                <label for="name" class="text-gray-700 dark:text-slate-300 text-lg font-extralight"> Fecha nacimiento </label>
                <input 
                        type="text"
                        placeholder="1990-12-01"
                        name="name"
                        class="p-3 bg-gray-200 dark:bg-slate-800 rounded-lg w-full shadow text-gray-700 dark:text-slate-300 mt-1">
            </div>
            <div class="flex justify-between items-center mt-12">
                <button class="px-3 py-2 dark:bg-slate-600 dark:text-slate-400 rounded-lg hover:opacity-75 cursor-pointer">
                    Descartar
                </button>
                <button class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:opacity-75 cursor-pointer">
                    Actualizar información
                </button>
            </div>
    </div>    
</template>