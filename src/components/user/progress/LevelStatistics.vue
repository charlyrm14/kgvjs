<script setup>

    defineProps({
        completedLevels: {
            type: Number,
            required: true
        },
        progressPercentage: {
            type: Number,
            required: true
        },
        remainingLevels: {
            type: Number,
            required: true
        },
        totalLevels: {
            type: Number,
            required: true
        },
        nextLevel: {
            type: Object,
            required: false
        },
        pathImage: {
            type: String,
            required: true
        }
    })

</script>

<template>
    <div class="bg-white dark:bg-slate-700 rounded-lg py-4 px-6 mt-4 shadow-md">
        <div>
            <h2 class="text-xl dark:text-slate-300 uppercase"> 
                Estadísticas
            </h2>
            <div class="grid grid-cols-3 gap-x-3">
                <div class="bg-green-200 rounded-lg mt-3 p-4">
                    <div class="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                        </svg>
                    </div>
                    <div class="mt-4 md:mt-2">
                        <p class="text-2xl text-center font-extrabold"> {{ completedLevels }} </p>
                        <p class="text-sm text-center uppercase font-light"> Niveles </p>
                        <p class="text-sm text-center uppercase font-light"> Completados </p>
                    </div>
                </div>
                <div class="bg-blue-200 rounded-lg mt-3 p-4">
                    <div class="flex justify-center">
                        <p class="text-3xl"> {{ progressPercentage }}% </p>
                    </div>
                    <div class="mt-2">
                        <p class="text-lg md:text-xl text-center font-light"> Progreso total </p>
                        <span class="mt-2 md:mt-4 flex justify-center bg-blue-300 uppercase rounded-lg"> Nivel {{ completedLevels + '/' + totalLevels }} </span>
                    </div>
                </div>
                <div class="bg-orange-200 rounded-lg mt-3 p-4">
                    <div class="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                        </svg>
                    </div>
                    <div class="mt-4 md:mt-2">
                        <p class="text-2xl text-center font-extrabold"> {{ remainingLevels }} </p>
                        <p class="text-sm text-center uppercase font-light"> Niveles </p>
                        <p class="text-sm text-center uppercase font-light"> Restantes </p>
                    </div>
                </div>
            </div>
        </div>
        <div 
            v-if="progressPercentage < 100"
            class="mt-6 mb-3">
                <h2 class="text-xl dark:text-slate-300 uppercase"> 
                    Próximo objetivo
                </h2>
                <div class="bg-purple-100 rounded-lg p-2 mt-3">
                    <div class="flex items-center md:items-start gap-x-3">
                        <div class="p-4 bg-purple-300 rounded-lg">
                            <img 
                                :src="pathImage + '/' + nextLevel.image" 
                                :alt="nextLevel?.name ?? 'siguiente nivel'"
                                class="w-6">
                        </div>
                        <div>
                            <p class="uppercase text-lg"> Nivel {{ nextLevel?.name ??  '' }} </p>
                            <span class="text-xs text-slate-500 uppercase"> 
                                {{ nextLevel?.skill_1 ?? 'S/H' }} · {{ nextLevel?.skill_2 ?? 'S/H' }} · {{ nextLevel?.skill_3 ?? 'S/H' }} 
                            </span>
                        </div>
                    </div>
                </div>
        </div>
        <div v-else class="mt-6 mb-3">
            <h2 class="text-xl dark:text-slate-300 uppercase"> ¡Felicidades! </h2>
            <div class="bg-amber-100 rounded-lg p-2 mt-3">
                <div class="flex items-center md:items-start gap-x-3">
                    <div class="p-4 bg-amber-400 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                        </svg>
                    </div>
                    <div>
                        <p class="uppercase text-lg"> Has alcanzado el nivel más alto </p>
                        <span class="text-xs text-slate-500 uppercase">
                            Sigue entrenando para mantener tu excelencia
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>