<script setup>

</script>

<template>
    <div class="p-1 md:p-4 mt-4 md:mt-0">
        <div>
            <label for="name" class="text-gray-700 dark:text-slate-300 text-lg font-extralight"> Hora de entrada </label>
            <input 
                    type="time"
                    placeholder="09:00"
                    name="name"
                    class="p-3 bg-gray-200 dark:bg-slate-800 rounded-lg w-full shadow text-gray-700 dark:text-slate-300 mt-1">
        </div>
        <div class="mt-3">
            <label for="name" class="text-gray-700 dark:text-slate-300 text-lg font-extralight"> Hora de salida </label>
            <input 
                    type="time"
                    placeholder="09:00"
                    name="name"
                    class="p-3 bg-gray-200 dark:bg-slate-800 rounded-lg w-full shadow text-gray-700 dark:text-slate-300 mt-1">
        </div>
        <div class="mt-3">
            <label for="name" class="text-gray-700 dark:text-slate-300 text-lg font-extralight"> 
                Días de clases 
                    <span class="block text-sm"> Selecciona los días de asistencia del usuario </span>
            </label>
            <div class="flex gap-x-2 md:gap-x-4 mt-3 overflow-x-auto md:overflow-x-visible">
                <div class="min-w-20 p-4 bg-green-200 flex justify-center items-center rounded-lg uppercase cursor-pointer hover:opacity-75">
                    <p class="text-center"> L <span class="block text-xs"> Lunes </span> </p>
                </div>
                <div class="min-w-20 p-3 bg-green-200 flex justify-center items-center rounded-lg uppercase cursor-pointer hover:opacity-75">
                    <p class="text-center"> M <span class="block text-xs"> Martes </span> </p>
                </div>
                <div class="min-w-20 p-3 bg-green-200 flex justify-center items-center rounded-lg uppercase cursor-pointer hover:opacity-75">
                    <p class="text-center"> M <span class="block text-xs"> Miércoles </span> </p>
                </div>
                <div class="min-w-20 p-3 bg-green-200 flex justify-center items-center rounded-lg uppercase cursor-pointer hover:opacity-75">
                    <p class="text-center"> J <span class="block text-xs"> Jueves </span> </p>
                </div>
                <div class="min-w-20 p-3 bg-green-200 flex justify-center items-center rounded-lg uppercase cursor-pointer hover:opacity-75">
                    <p class="text-center"> V <span class="block text-xs"> Viernes </span> </p>
                </div>
                <div class="min-w-20 p-3 bg-green-200 flex justify-center items-center rounded-lg uppercase cursor-pointer hover:opacity-75">
                    <p class="text-center"> S <span class="block text-xs"> Sábado </span> </p>
                </div>
                <div class="min-w-20 p-3 bg-green-200 flex justify-center items-center rounded-lg uppercase cursor-pointer hover:opacity-75">
                    <p class="text-center"> D <span class="block text-xs"> Domingo </span> </p>
                </div>
            </div>
        </div>
        <div class="flex justify-between items-center mt-12">
            <button class="px-3 py-2 dark:bg-slate-600 dark:text-slate-400 rounded-lg hover:opacity-75 cursor-pointer">
                Descartar
            </button>
            <button class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:opacity-75 cursor-pointer">
                Asignar clases
            </button>
        </div>
    </div> 
</template>