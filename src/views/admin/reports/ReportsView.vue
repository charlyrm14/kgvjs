<script setup>
    import { ref } from 'vue';

    const showOptions = ref(false)

</script>

<template>
    <section class="px-6 md:px-12 lg:px-16 py-8 md:py-10">
        <div class="grid grid-cols-2 md:grid-cols-4 py-4 gap-y-4 gap-x-2 md:gap-x-4 md:gap-y-0">
            <div class="bg-white dark:bg-slate-700 rounded-lg py-4 px-4 md:px-5 shadow-md">
                <div class="flex justify-between items-center">
                    <div>
                        <h2 class="dark:text-slate-300 inline-flex justify-between items-center gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                            </svg> Usuarios
                        </h2>
                    </div>
                    <div class="relative">
                        <button
                            @click="showOptions = !showOptions"
                            class="dark:text-slate-400 cursor-pointer hover:text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                        </button>
                        <div 
                            v-if="showOptions"
                            class="absolute top-8 -right-1 rounded-md bg-white dark:bg-slate-500 w-50 shadow border border-gray-200 dark:border-none">
                                <div class="hover:opacity-75 cursor-pointer px-4 py-1.5">
                                    <p class="text-gray-600 dark:text-slate-300 inline-flex justify-between items-center gap-x-3"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg> Descargar reporte 
                                    </p>
                                </div>
                                <div class="border-b border-gray-200 dark:border-slate-400"></div>
                                <div class="hover:opacity-75 cursor-pointer px-4 py-1.5">
                                    <p class="text-gray-600 dark:text-slate-300 inline-flex justify-between items-center gap-x-3"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg> Enviar reporte 
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="bg-blue-100 rounded-lg py-4 mt-3">
                    <div class="mt-2">
                        <h2 class="text-center text-6xl"> 4 </h2>
                        <div class="mt-2 flex justify-center items-center">
                            <p class="flex justify-between items-center gap-x-1 md:gap-x-2 text-xs md:text-sm font-light">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 md:size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                                </svg> <span class="text-blue-400 font-bold"> 4.2%  </span> VS Prev. 7 Days
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white dark:bg-slate-700 rounded-lg py-4 px-4 md:px-5 shadow-md">
                <div class="flex justify-between items-center">
                    <div>
                        <h2 class="dark:text-slate-300 inline-flex justify-between items-center gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg> Asistencias
                        </h2>
                    </div>
                    <div>
                        <button
                            class="dark:text-slate-400 cursor-pointer hover:text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                        </button>
                    </div>
                </div>
                <div class="bg-pink-100 rounded-lg py-4 mt-3">
                    <div class="mt-2">
                        <h2 class="text-center text-6xl"> 4 </h2>
                        <div class="mt-2 flex justify-center items-center">
                            <p class="flex justify-between items-center gap-x-1 md:gap-x-2 text-xs md:text-sm font-light">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 md:size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                                </svg> <span class="text-pink-400 font-bold"> 4.2%  </span> VS Prev. 7 Days
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white dark:bg-slate-700 rounded-lg py-4 px-4 md:px-5 shadow-md">
                <div class="flex justify-between items-center">
                    <div>
                        <h2 class="dark:text-slate-300 inline-flex justify-between items-center gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                            </svg> Pagos
                        </h2>
                    </div>
                    <div>
                        <button
                            class="dark:text-slate-400 cursor-pointer hover:text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                        </button>
                    </div>
                </div>
                <div class="bg-amber-100 rounded-lg py-4 mt-3">
                    <div class="mt-2">
                        <h2 class="text-center text-6xl"> 4 </h2>
                        <div class="mt-2 flex justify-center items-center">
                            <p class="flex justify-between items-center gap-x-1 md:gap-x-2 text-xs md:text-sm font-light">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 md:size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                                </svg> <span class="text-amber-400 font-bold"> 4.2%  </span> VS Prev. 7 Days
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white dark:bg-slate-700 rounded-lg py-4 px-4 md:px-5 shadow-md">
                <div class="flex justify-between items-center">
                    <div>
                        <h2 class="dark:text-slate-300 inline-flex justify-between items-center gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg> Ingresos
                        </h2>
                    </div>
                    <div>
                        <button
                            class="dark:text-slate-400 cursor-pointer hover:text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                        </button>
                    </div>
                </div>
                <div class="bg-green-100 rounded-lg py-4 mt-3">
                    <div class="mt-2">
                        <h2 class="text-center text-6xl"> 4 </h2>
                        <div class="mt-2 flex justify-center items-center">
                            <p class="flex justify-between items-center gap-x-1 md:gap-x-2 text-xs md:text-sm font-light">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 md:size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                                </svg> <span class="text-green-400 font-bold"> 4.2%  </span> VS Prev. 7 Days
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>