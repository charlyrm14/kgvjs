<script setup>

</script>

<template>
    <div class="p-1 md:p-4 mt-4 md:mt-0">
        <div>
            <label for="name" class="text-gray-700 dark:text-slate-300 text-lg font-extralight"> 
                Historial asistencias
                    <span class="block text-sm"> Selecciona un mes para generar el reporte </span>
            </label>
        </div>
        <div class="mt-3 overflow-y-auto max-h-[300px]">
            <div class="border-b dark:border-slate-600 mb-3">
                <div class="my-2 flex justify-between items-center">
                    <p class="dark:text-slate-300 text-lg"> Junio 2025 </p>
                    <button class="dark:bg-blue-500 dark:text-slate-300 text-base px-4 rounded-lg cursor-pointer hover:opacity-75">
                        Exportar
                    </button>
                </div>
            </div>
            <div class="border-b dark:border-slate-600 mb-3">
                <div class="my-2 flex justify-between items-center">
                    <p class="dark:text-slate-300 text-lg"> Julio 2025 </p>
                    <button class="dark:bg-blue-500 dark:text-slate-300 text-base px-4 rounded-lg cursor-pointer hover:opacity-75">
                        Exportar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>