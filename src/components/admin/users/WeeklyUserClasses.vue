<script setup>

</script>

<template>
    <section class="px-8 mt-5">
            <div class="bg-white dark:bg-slate-700 rounded-lg">
                <div class="border-b border-gray-300 dark:border-slate-600 p-4">
                    <h2 class="px-4 text-gray-700 dark:text-slate-300 uppercase"> Clases semanales </h2>
                </div>
                <div class="p-4 mt-2">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-4">
                        <div>
                            <label 
                                for="entry_time" 
                                class="text-gray-700 dark:text-slate-300 text-lg font-extralight px-4"> Hora de entrada </label>
                        </div>
                        <div>
                            <input
                                type="time"
                                name="entry_time"
                                value="09:00"
                                class="p-4 bg-gray-200 dark:bg-slate-800 rounded-lg w-full shadow text-gray-700 dark:text-slate-300">
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-4">
                        <div>
                            <label 
                                for="departure_time" 
                                class="text-gray-700 dark:text-slate-300 text-lg font-extralight px-4"> Hora de salida </label>
                        </div>
                        <div>
                            <input
                                type="time"
                                name="departure_time"
                                value="10:00"
                                class="p-4 bg-gray-200 dark:bg-slate-800 rounded-lg w-full shadow text-gray-700 dark:text-slate-300">
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-4">
                        <div>
                            <label 
                                for="name" 
                                class="text-gray-700 dark:text-slate-300 text-lg font-extralight px-4"> 
                                Días de clases
                            </label>
                        </div>
                        <div class="flex flex-wrap justify-center bg-gray-200 dark:bg-slate-800 p-2 rounded-lg gap-1">
                            <div class="px-2 py-1 lg:px-3 lg:py-1 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-slate-300 rounded hover:opacity-75 cursor-pointer">LUNES</div>
                            <div class="px-2 py-1 lg:px-3 lg:py-1 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-slate-300 rounded hover:opacity-75 cursor-pointer">MARTES</div>
                            <div class="px-2 py-1 lg:px-3 lg:py-1 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-slate-300 rounded hover:opacity-75 cursor-pointer">MIÉRCOLES</div>
                            <div class="px-2 py-1 lg:px-3 lg:py-1 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-slate-300 rounded hover:opacity-75 cursor-pointer">JUEVES</div>
                            <div class="px-2 py-1 lg:px-3 lg:py-1 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-slate-300 rounded hover:opacity-75 cursor-pointer">VIERNES</div>
                            <div class="px-2 py-1 lg:px-3 lg:py-1 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-slate-300 rounded hover:opacity-75 cursor-pointer">SÁBADO</div>
                            <div class="px-2 py-1 lg:px-3 lg:py-1 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-slate-300 rounded hover:opacity-75 cursor-pointer">DOMINGO</div>
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