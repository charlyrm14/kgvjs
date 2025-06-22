<script setup>

</script>

<template>
    <div class="bg-white dark:bg-slate-700 rounded-lg py-4 px-6 mt-4 shadow-md">
        <div>
            <h2 class="text-xl dark:text-slate-300 uppercase"> 
                Niveles
            </h2>
        </div>
        <div class="mt-3">
            <button class="bg-gray-200 dark:bg-slate-500 text-gray-600 dark:text-slate-300 px-1 md:px-2 rounded uppercase text-sm cursor-pointer hover:opacity-75"> Foca </button>
            <button class="bg-gray-200 dark:bg-slate-500 text-gray-600 dark:text-slate-300 px-1 md:px-2 rounded uppercase text-sm  mx-1 md:mx-2 cursor-pointer hover:opacity-75"> Tortuga </button>
            <button class="bg-gray-200 dark:bg-slate-500 text-gray-600 dark:text-slate-300 px-1 md:px-2 rounded uppercase text-sm  mx-1 md:mx-2 cursor-pointer hover:opacity-75"> Mantarraya </button>
            <button class="bg-gray-200 dark:bg-slate-500 text-gray-600 dark:text-slate-300 px-1 md:px-2 rounded uppercase text-sm  mx-1 md:mx-2 cursor-pointer hover:opacity-75"> Pez Vela </button>
            <button class="bg-gray-200 dark:bg-slate-500 text-gray-600 dark:text-slate-300 px-1 md:px-2 rounded uppercase text-sm  mx-1 md:mx-2 cursor-pointer hover:opacity-75"> Tiburón </button>
        </div>
        <div class="bg-blue-100 rounded-lg p-2 mt-3">
            <div class="flex items-start gap-x-3">
                <div class="p-4 bg-blue-200 rounded-lg">
                    <img 
                        src="../../../assets/img/shark.png" 
                        alt="shark" 
                        class="w-6">
                </div>
                <div>
                    <p class="uppercase text-lg"> Tiburón </p>
                    <span class="text-base text-slate-500"> PROTOCOLO · HIDRODINÁMICO · AVANZADO </span>
                </div>
            </div>
        </div>
    </div>
</template>