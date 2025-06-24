<script setup>

</script>

<template>
    <div class="p-1 md:p-4 mt-4 md:mt-0">
        <div>
            <label for="name" class="text-gray-700 dark:text-slate-300 text-lg font-extralight"> 
                Categoría
                    <span class="block text-sm"> Selecciona una categoría de nivel </span>
            </label>
        </div>
        <div class="flex gap-x-2 md:gap-x-4 mt-3 overflow-x-auto md:overflow-x-visible">
                <div class="min-w-25 p-4 bg-purple-200 flex justify-center items-center rounded-lg uppercase cursor-pointer hover:opacity-75">
                    <p class="text-center"> L <span class="block text-xs"> Foca </span> </p>
                </div>
                <div class="min-w-25 p-3 bg-purple-200 flex justify-center items-center rounded-lg uppercase cursor-pointer hover:opacity-75">
                    <p class="text-center"> M <span class="block text-xs"> Tortuga </span> </p>
                </div>
                <div class="min-w-25 p-3 bg-purple-200 flex justify-center items-center rounded-lg uppercase cursor-pointer hover:opacity-75">
                    <p class="text-center"> M <span class="block text-xs"> Mantarraya </span> </p>
                </div>
                <div class="min-w-25 p-3 bg-purple-200 flex justify-center items-center rounded-lg uppercase cursor-pointer hover:opacity-75">
                    <p class="text-center"> J <span class="block text-xs"> Pez Vela </span> </p>
                </div>
                <div class="min-w-25 p-3 bg-purple-200 flex justify-center items-center rounded-lg uppercase cursor-pointer hover:opacity-75">
                    <p class="text-center"> V <span class="block text-xs"> Tiburón </span> </p>
                </div>
        </div>
        <div class="flex justify-between items-center mt-12">
            <button class="px-3 py-2 dark:bg-slate-600 dark:text-slate-400 rounded-lg hover:opacity-75 cursor-pointer">
                Descartar
            </button>
            <button class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:opacity-75 cursor-pointer">
                Asignar categoría
            </button>
        </div>
    </div>
</template>