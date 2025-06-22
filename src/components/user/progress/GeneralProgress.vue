<script setup>

</script>

<template>
    <div class="bg-white dark:bg-slate-700 rounded-lg py-4 px-6 shadow-md">
        <div>
            <h2 class="text-xl dark:text-slate-300 uppercase"> 
                Progreso general
            </h2>
            <div class="flex justify-between items-center mt-3">
                <p class="uppercase font-light text-lg dark:text-slate-400"> Completado </p>
                <p class="uppercase font-light text-lg dark:text-slate-400"> 20% </p>
            </div>
            <div class="my-3">
                <div class="w-full mx-auto p-1 bg-gray-100 rounded-lg shadow">
                    <div class="w-full bg-blue-100 h-4 rounded-lg relative overflow-hidden">
                        <div class="bg-blue-500/70 h-full rounded-lg" style="width: 20%;"></div>
                        <div class="absolute top-1 left-2 w-12 h-2 bg-blue-200/50 rounded-lg blur-sm"></div>
                        <div class="absolute top-1 left-1/ w-2 h-2 bg-blue-200/70 rounded-lg blur-sm"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>