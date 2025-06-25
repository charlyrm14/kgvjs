<script setup>
    import { weeklyDays } from '@/helpers';

    const props = defineProps({
        schedule: {
            type: Array,
            required: true
        }
    })

    const hasDay = (dayName) => {
        return props?.schedule?.some(day => day.day === dayName)
    }

</script>

<template>
    <div class="bg-white dark:bg-slate-700 rounded-lg py-4 px-6 shadow-md">
        <div>
            <h1 class="text-2xl uppercase dark:text-slate-300"> Mi Horario </h1>
            <p class="text-base text-gray-500 dark:text-slate-400"> Clases que tienes asignadas </p>
        </div>
        <div
            v-for="day in weeklyDays()"
            :key="day.id"
            class="flex justify-between items-center mt-4 w-full rounded-lg p-2"
            :class="hasDay(day.day) ? 'bg-green-100' : 'bg-slate-100'">
                <div 
                    :class="hasDay(day.day) ? 'bg-green-200' : 'bg-slate-300'"
                    class="rounded-lg p-1">
                        <p class="uppercase dark:textslate-blue-500 px-2"> {{ day.day }} </p>
                </div>
                <div
                    v-if="hasDay(day.day)">
                        <p class="font-light text-lg dark:text-slate-700">
                            {{ schedule[0]?.entry_time }} - {{ schedule[0]?.departure_time }} 
                        </p>
                </div>
                <div
                    v-else>
                        <p class="font-light text-lg dark:text-slate-700 text-center"> -- </p>
                </div>
        </div>
    </div>
</template>