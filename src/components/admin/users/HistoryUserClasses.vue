<script setup>

</script>

<template>
    <section class="px-8 my-5">
        <div class="bg-white dark:bg-slate-700 rounded-lg">
            <div class="border-b border-gray-300 dark:border-slate-600 p-4">
                <h2 class="px-4 text-gray-700 dark:text-slate-300 uppercase"> Historial asistencias </h2>
            </div>
            <div class="p-4 mt-2">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-4">
                    <div>
                        <label 
                            for="entry_time" 
                            class="text-gray-700 dark:text-slate-300 text-lg font-extralight px-4"> Selecciona el mes </label>
                    </div>
                    <div>
                        <select
                            type="date"
                            name="month"
                            class="p-4 bg-gray-200 dark:bg-slate-800 rounded-lg w-full shadow text-gray-700 dark:text-slate-300">
                                <option value="enero">ENERO</option>
                                <option value="febrero">FEBRERO</option>
                                <option value="marzo">MARZO</option>
                                <option value="abril">ABRIL</option>
                                <option value="mayo">MAYO</option>
                                <option value="junio">JUNIO</option>
                                <option value="julio">JULIO</option>
                                <option value="agosto">AGOSTO</option>
                                <option value="septiembre">SEPTIEMBRE</option>
                                <option value="octubre">OCTUBRE</option>
                                <option value="noviembre">NOVIEMBRE</option>
                                <option value="diciembre">DICIEMBRE</option>
                        </select>
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
                            Generar reporte
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>