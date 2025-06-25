<script setup>

    defineProps({
        currentLevel: {
            type: Object,
            required: true
        },
        pathImage: {
            type: String,
            required: true
        }
    })

</script>

<template>
    <div class="bg-white dark:bg-slate-700 rounded-lg py-4 px-6 shadow-md">
        <div class="flex justify-center items-center mt-3 md:mt-6">
            <img 
                :src="pathImage + '/' + currentLevel?.image ?? '../../../assets/img/sea-turtle.png'"
                :alt="currentLevel?.name ?? 'nivel actual'"
                class="w-30 md:w-60">
        </div>
        <div class="mt-6 flex justify-center items-center">
            <h2 class="uppercase text-base font-light text-cyan-500"> 
                Nivel actual 
                    <span class="block text-4xl text-center font-extrabold">
                        {{ currentLevel?.name ?? 'Sin nivel asignado' }}
                    </span>
            </h2>
        </div>
        <div class="mt-4">
            <p class="text-gray-600 dark:text-slate-400">
                {{ currentLevel?.description ?? 'Sin descripción' }}
            </p>
        </div>
        <div class="mt-4">
            <div class="bg-gray-200 dark:bg-slate-500 rounded-lg p-4 my-3 cursor-pointer hover:opacity-75">
                <p class="text-cyan-400 uppercase"> {{ currentLevel?.skill_1 ?? 'Sin habilidad' }} </p>
            </div>
            <div class="bg-gray-200 dark:bg-slate-500 rounded-lg p-4 my-3 cursor-pointer hover:opacity-75">
                <p class="text-cyan-400 uppercase"> {{ currentLevel?.skill_2 ?? 'Sin habilidad' }} </p>
            </div>
            <div class="bg-gray-200 dark:bg-slate-500 rounded-lg p-4 my-3 cursor-pointer hover:opacity-75">
                <p class="text-cyan-400 uppercase"> {{ currentLevel?.skill_3 ?? 'Sin habilidad' }} </p>
            </div>
        </div>
    </div>
</template>