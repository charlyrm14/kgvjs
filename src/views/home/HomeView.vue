<script setup>
    import BirthdateModal from '@/components/modals/BirthdateModal.vue';
    import { useModalStore } from '@/stores/modals';
    
    const modals = useModalStore()

</script>

<template>
    <section class="px-4 sm:px-6 py-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-3 lg:gap-4 mt-8">

            <!-- Card principal -->
            <div class="md:col-span-2 md:row-span-2 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-700 rounded-lg p-4">
                <p class="text-center uppercase text-2xl font-light text-pink-400 dark:text-amber-500">Felicidades, Equipo King Dreams</p>
                <p class="text-center uppercase text-md text-cyan-500">Circuito Acuático</p>
                <div class="flex justify-center items-center mt-5">
                    <img 
                        src="../../assets/img/poseidon.png" 
                        alt="Equipo king dreams" 
                        class="w-48 sm:w-56 md:w-64 lg:w-72">
                </div>
                <div class="flex justify-center items-center gap-2 mt-4">
                    <div class="bg-gray-500 dark:bg-white w-2 h-2 rounded-full hover:opacity-75"></div>
                    <div class="bg-gray-500 dark:bg-white w-2 h-2 rounded-full hover:opacity-75"></div>
                    <div class="bg-gray-500 dark:bg-white w-2 h-2 rounded-full hover:opacity-75"></div>
                    <div class="bg-gray-500 dark:bg-white w-2 h-2 rounded-full hover:opacity-75"></div>
                    <div class="bg-gray-500 dark:bg-white w-2 h-2 rounded-full hover:opacity-75"></div>
                </div>
            </div>

            <!-- Tarjeta 1 -->
            <div class="bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-700 rounded-lg p-4 shadow-lg flex flex-col justify-between min-h-[260px]">
                <div>
                    <h4 class="dark:text-slate-400 uppercase font-light text-base flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                        </svg>  Alumnos destacados
                    </h4>
                    <p class="dark:text-white text-lg mt-2 uppercase">Alumnos destacados de la semana</p>
                    <div class="flex items-center border dark:border-slate-500 mt-4 rounded-lg px-2 py-3 gap-2">
                        <div class="dark:bg-slate-500 p-2 rounded-lg dark:text-slate-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                        <p class="uppercase dark:text-slate-300 truncate">Valentina Exeemany Hérnandez</p>
                    </div>
                </div>
                <div class="flex justify-center items-center gap-2 mt-4">
                    <div class="bg-gray-500 dark:bg-white w-2 h-2 rounded-full hover:opacity-75"></div>
                    <div class="bg-gray-500 dark:bg-white w-2 h-2 rounded-full hover:opacity-75"></div>
                    <div class="bg-gray-500 dark:bg-white w-2 h-2 rounded-full hover:opacity-75"></div>
                    <div class="bg-gray-500 dark:bg-white w-2 h-2 rounded-full hover:opacity-75"></div>
                    <div class="bg-gray-500 dark:bg-white w-2 h-2 rounded-full hover:opacity-75"></div>
                </div>
            </div>

            <!-- Tarjeta 2 -->
            <div class="bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-700 rounded-lg p-4 flex flex-col justify-between min-h-[260px]">
                <div>
                    <h4 class="dark:text-slate-400 uppercase font-light text-base flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                        </svg> Cumpleaños Hoy
                    </h4>
                    <p class="dark:text-white text-lg mt-2 uppercase"> Felicidades hoy en su cumpleaños </p>
                    <div class="flex items-center border dark:border-slate-500 mt-4 rounded-lg px-2 py-3 gap-2">
                        <div class="dark:bg-slate-500 p-2 rounded-lg dark:text-slate-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                        <p class="uppercase dark:text-slate-300">Valany Eliet Hérnandez Ramos</p>
                    </div>
                </div>
                <div class="flex justify-center items-center gap-2 mt-4">
                    <div class="bg-gray-500 dark:bg-white w-2 h-2 rounded-full hover:opacity-75"></div>
                    <div class="bg-gray-500 dark:bg-white w-2 h-2 rounded-full hover:opacity-75"></div>
                    <div class="bg-gray-500 dark:bg-white w-2 h-2 rounded-full hover:opacity-75"></div>
                    <div class="bg-gray-500 dark:bg-white w-2 h-2 rounded-full hover:opacity-75"></div>
                    <div class="bg-gray-500 dark:bg-white w-2 h-2 rounded-full hover:opacity-75"></div>
                </div>
            </div>

            <!-- Tarjeta 3 -->
            <div class="bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-700 rounded-lg p-4 flex flex-col justify-between min-h-[260px]">
                <div>
                    <h4 class="dark:text-slate-400 uppercase font-light text-base flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                        </svg>  Aviso Importante
                    </h4>
                    <p class="dark:text-white text-lg mt-2 uppercase">El día de mañana no habrá clases</p>
                    <p class="mt-4 text-lg dark:text-slate-300 font-light">Por motivos de fuerza mayor se informa que el día de mañana no habrá clases.</p>
                </div>
            </div>

            <!-- Tarjeta 4 -->
            <div class="bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-700 rounded-lg p-4 flex flex-col justify-between min-h-[260px]">
                <div>
                    <h4 class="dark:text-slate-400 uppercase font-light text-base flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                        </svg>  Curso de verano
                </h4>
                    <p class="dark:text-white text-lg mt-2 uppercase">Curso de natación para niños</p>
                    <div class="flex justify-between items-center gap-2 mt-3">
                        <div class="w-full py-2 bg-red-100 rounded-lg">
                            <p class="text-center uppercase text-xs">Enero<span class="block text-2xl">25</span></p>
                        </div>
                        <div class="w-full py-2 bg-green-100 rounded-lg">
                            <p class="text-center uppercase text-xs">Enero<span class="block text-2xl">30</span></p>
                        </div>
                    </div>
                </div>

                <div class="mt-4">
                    <button class="flex justify-center items-center gap-2 uppercase w-full py-2 rounded-lg dark:bg-blue-500 dark:text-white hover:opacity-75">
                        Ver más
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                            </svg> 
                    </button>
                </div>
            </div>

        </div>
    </section>

    <BirthdateModal
        v-if="modals.birthDateModal"/>
</template>