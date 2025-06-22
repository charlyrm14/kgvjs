<script setup>

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
                        <p class="text-2xl text-center font-extrabold"> 1 </p>
                        <p class="text-sm text-center uppercase font-light"> Niveles </p>
                        <p class="text-sm text-center uppercase font-light"> Completados </p>
                    </div>
                </div>
                <div class="bg-blue-200 rounded-lg mt-3 p-4">
                    <div class="flex justify-center">
                        <p class="text-3xl"> 20% </p>
                    </div>
                    <div class="mt-2">
                        <p class="text-lg md:text-xl text-center font-light"> Progreso total </p>
                        <span class="mt-2 md:mt-4 flex justify-center bg-blue-300 uppercase rounded-lg"> Nivel 1/5 </span>
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
                        <p class="text-2xl text-center font-extrabold"> 4 </p>
                        <p class="text-sm text-center uppercase font-light"> Niveles </p>
                        <p class="text-sm text-center uppercase font-light"> Restantes </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-6 mb-3">
            <h2 class="text-xl dark:text-slate-300 uppercase"> 
                Próximo objetivo
            </h2>
            <div class="bg-purple-100 rounded-lg p-2 mt-3">
                <div class="flex items-start gap-x-3">
                    <div class="p-4 bg-purple-300 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-purple-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                        </svg>
                    </div>
                    <div>
                        <p class="uppercase text-lg"> Nivel tortuga </p>
                        <span class="text-base text-slate-500"> PROTOCOLO · HIDRODINÁMICO · AVANZADO </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>