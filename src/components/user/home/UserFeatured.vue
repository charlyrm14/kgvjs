<script setup>

    const props = defineProps({
        usersFeatured: {
            type: Array,
            default: () => [],
        }
    })

</script>

<template>
    <div class="bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-700 rounded-lg p-4 shadow-lg flex flex-col justify-between min-h-[260px]">
        <div>
            <h4 class="text-gray-500 dark:text-slate-400 uppercase font-light text-base flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                </svg>  Alumnos destacados
            </h4>
            <p class="text-gray-600 dark:text-slate-400 text-lg mt-2 uppercase"> Alumnos destacados de la semana </p>
            <div
                v-if="Array.isArray(usersFeatured) && usersFeatured.length > 0" 
                class="overflow-x-auto whitespace-nowrap my-5">
                <div
                    v-for="featuredUser in usersFeatured"
                    :key="featuredUser.name"
                    class="inline-block w-auto h-auto bg-green-100 border border-green-200 py-3 px-2 rounded-lg text-center mr-4">
                        <div class="flex justify-center">
                            <div class="border-4 border-green-500 rounded-full w-16 h-16 flex items-center justify-center p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 text-amber-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                                </svg>
                            </div>
                        </div>
                        <p class="uppercase text-slate-900 text-xs mt-2"> {{ featuredUser.name.slice(0, 13) }} </p>
                </div>
            </div>
            <div 
                v-else
                class="mt-5">
                    <div class="text-center">
                        <p class="uppercase text-2xl text-gray-700 dark:text-slate-200"> 
                            Aquí mostraremos a los alumnos mas destacados
                        </p>
                    </div>
            </div>
        </div>
    </div>
</template>