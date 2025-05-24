<script setup>
    import { 
        randomColor, 
        getDayByDate, 
        getMonthNameByDate, 
        getHourByDate 
    } from '@/helpers'

    defineProps({
        event: {
            type: Object,
            required: true
        }
    })

</script>

<template>
    <div class="mx-auto bg-white dark:bg-slate-700 rounded-xl shadow-md p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 my-4">
        <!-- Fecha y hora -->
        <div
            :class="randomColor()"
            class="bg-green-100 text-center px-4 py-2 rounded-md w-full md:w-24">
            <p class="text-xs font-semibold text-gray-600">
                {{ getDayByDate(event.start_date) }} - {{ getDayByDate(event.end_date) }} 
                    <span class="block uppercase"> {{ getMonthNameByDate(event.start_date) }} </span>
            </p>
            <p class="text-2xl font-bold text-gray-800 mt-1"> {{ getHourByDate(event.start_date) }} </p>
        </div>

        <!-- Info del evento -->
        <div class="flex-1 text-center md:text-left px-2">
            <h2 class="text-lg font-semibold text-gray-600 dark:text-white"> {{ event.title }} </h2>
            <p class="text-sm text-gray-600 dark:text-slate-400 mt-1">
                {{ event.short_description }}
            </p>
        </div>

        <!-- Enlace a calendario -->
        <RouterLink
            :to="{
                name: 'evento-info',
                params: {
                    slug: event.slug
                }
            }"
            class="bg-blue-500 px-4 py-2 rounded-lg uppercase text-sm text-white flex items-center justify-center md:justify-end gap-1 cursor-pointer whitespace-nowrap hover:opacity-75">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg> Ver más
        </RouterLink>
    </div>
</template>