<script setup>

    defineProps({
        event: {
            type: Object,
            required: true
        }
    })

</script>

<template>
    <div class="bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-700 rounded-lg p-2 relative flex flex-col min-h-[350px]">
        <div>
            <RouterLink
                :to="{
                    name: 'evento-info',
                    params: {
                        slug: event.slug
                    }
                }">
                    <img 
                        src="../../assets/img/img-53.jpg" 
                        alt="Imagen de evento"
                        class="rounded-lg">
            </RouterLink>
        </div>
        <div class="mt-2 flex-1">
            <p class="uppercase dark:text-white">
                {{ event.title }}
            </p>
            <p class="mt-4 text-gray-600 dark:text-gray-400">
                {{ event.short_description }}
            </p>
        </div>
        <div class="flex justify-end items-center mt-5 mb-1">
            <RouterLink
                :to="{
                    name: 'evento-info',
                    params: {
                        slug: event.slug
                    }
                }"
                class="bg-blue-600 text-white px-4 py-2 rounded-lg uppercase font-extralight inline-flex gap-2 items-center hover:opacity-75 cursor-pointer">
                    Ver más
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
            </RouterLink>
        </div>
        <div class="absolute top-4 -right-2 hover:opacity-75">
            <span class="inline-flex gap-2 items-center uppercase bg-lime-500 text-black shadow px-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                </svg> Nuevo
            </span>
        </div>
    </div>
</template>