<script setup>

</script>

<template>
    <section class="px-6 md:px-12 lg:px-16 py-2 mt-10 md:mt-0">

        <div class="text-center mb-8">
            <h2 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white uppercase tracking-wide">
                Domina el Agua
            </h2>
            <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                Pequeños cambios que marcan una gran diferencia en tu rendimiento.
            </p>
        </div>

        <div class="flex gap-4 overflow-x-auto sm:overflow-visible md:grid md:grid-cols-4 md:grid-rows-2 md:gap-6">

            <!-- Tip 1 (ocupa 2 columnas y 2 filas) -->
            <div class="min-w-[220px] flex-1 bg-white dark:bg-slate-600 rounded-xl shadow p-4 text-center md:col-span-2 md:row-span-2">
                <div class="mb-2 flex justify-center">
                    <img 
                        src="../../../assets/img/swimmer.png" 
                        alt="tip 1" 
                        class="w-10 md:w-50 rounded-full">
                </div>
                <h3 class="font-semibold text-sm text-gray-800 dark:text-white uppercase"> Postura hidrodinámica </h3>
                <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Mantén el cuerpo alineado con la superficie del agua para reducir la resistencia.
                </p>
            </div>

            <!-- Tip 2 -->
            <div class="min-w-[220px] flex-1 bg-white dark:bg-slate-600 rounded-xl shadow p-4 text-center">
                <div class="mb-2 flex justify-center">
                    <img 
                        src="../../../assets/img/swimmer.png" 
                        alt="tip" 
                        class="w-10 rounded-full">
                </div>
                <h3 class="font-semibold text-sm text-gray-800 dark:text-white uppercase">Respira correctamente</h3>
                <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Respirar de forma lateral y a ritmo evita el agotamiento.
                </p>
            </div>

            <!-- Tip 3 -->
            <div class="min-w-[220px] flex-1 bg-white dark:bg-slate-600 rounded-xl shadow p-4 text-center">
                <div class="mb-2 flex justify-center">
                    <img
                        src="../../../assets/img/swimmer.png" 
                        alt="tip" 
                        class="w-10 rounded-full">
                </div>
                <h3 class="font-semibold text-sm text-gray-800 dark:text-white uppercase">Mejora tu patada</h3>
                <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Una patada constante y ligera te ayuda a mantener el equilibrio.
                </p>
            </div>

            <!-- Tip 4 -->
            <div class="min-w-[220px] flex-1 bg-white dark:bg-slate-600 rounded-xl shadow p-4 text-center hidden md:block">
                <div class="mb-2 flex justify-center">
                    <img 
                        src="../../../assets/img/swimmer.png" 
                        alt="tip" 
                        class="w-10 rounded-full">
                </div>
                <h3 class="font-semibold text-sm text-gray-800 dark:text-white uppercase">Mejora tu patada</h3>
                <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Una patada constante y ligera te ayuda a mantener el equilibrio.
                </p>
            </div>

            <!-- Ver más -->
            <div class="min-w-[220px] flex-1 bg-blue-100 dark:bg-blue-900/40 rounded-xl shadow p-4 flex items-center justify-center hover:opacity-75 cursor-pointer">
                <a href="#" class="text-blue-700 dark:text-blue-300 font-semibold flex items-center gap-1 uppercase">
                    Ver más
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                </a>
            </div>

        </div>
    </section>
</template>