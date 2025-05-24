<script setup>
    import { getDayByDate, getMonthNameByDate, getHourByDate } from '@/helpers'

    const props = defineProps({
        event: {
            type: Object
        }
    })

</script>

<template>
<div class="bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-700 rounded-lg p-4 flex flex-col justify-between min-h-[260px]">
    <div>
        <h4 class="text-gray-500 dark:text-slate-400 uppercase font-light text-base flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg> Evento
        </h4>
        <p class="text-gray-600 dark:text-slate-400 text-lg mt-2 uppercase"> Próximo evento </p>
        <p 
            v-if="event"
            class="text-gray-600 dark:text-white text-lg mt-2 uppercase">
            {{ event?.title}}
        </p>
        <p
            v-else
            class="uppercase text-2xl text-gray-700 dark:text-slate-200 mt-3">
                Aquí veras el evento más información de los eventos más cercanos
        </p>
        <div
            v-if="event"
            class="flex justify-between items-center gap-2 mt-3">
            <div class="w-full py-2 bg-red-100 rounded-lg">
                <p class="text-center uppercase text-xs text-red-500"> 
                    {{ getMonthNameByDate(event?.start_date) ?? 'SN' }} - {{ getHourByDate(event?.start_date) ?? 'SN' }}
                        <span class="block text-2xl"> {{ getDayByDate(event?.start_date) }} </span> 
                </p>
            </div>
            <div class="w-full py-2 bg-green-100 rounded-lg">
                <p class="text-center uppercase text-xs text-green-500"> 
                    {{ getMonthNameByDate(event?.end_date) ?? 'SN' }} - {{ getHourByDate(event?.end_date) ?? 'SN' }}
                        <span class="block text-2xl"> {{ getDayByDate(event?.end_date) ?? 'SN' }} </span> 
                </p>
            </div>
        </div>
    </div>

    <div class="mt-4">
        <div v-if="event">
            <RouterLink
                :to="{
                    name: 'evento-info',
                    params: {
                        slug: event.slug
                    }
                }" 
                class="flex justify-center items-center gap-2 uppercase w-full py-2 rounded-lg bg-blue-500 text-white hover:opacity-75 cursor-pointer">
                    Ver más
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
            </RouterLink>
        </div>
    </div>
</div>
</template>