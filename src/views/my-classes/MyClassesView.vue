<script setup>
    import { useUserClassesStore } from '@/stores/classes';
    import { computed, ref } from 'vue'

    const userClasses = useUserClassesStore()

    const showThisMonthContent = ref(false)

    const daysWeek = [
        { id: 1, day: "LUNES" },
        { id: 2, day: "MARTES" },
        { id: 3, day: "MIÉRCOLES" },
        { id: 4, day: "JUEVES" },
        { id: 5, day: "VIERNES" },
        { id: 6, day: "SÁBADO" },
        { id: 7, day: "DOMINGO" },
    ];

    const userHasDay = (dayName) => {
        return userClasses.classes?.some?.(day => day.day === dayName)
    }

    const entryTime = computed(() => {
        return userClasses?.classes?.[0]?.entry_time || 'S/N'
    })

    const departureTime = computed(() => {
        return userClasses?.classes?.[0]?.departure_time || 'S/N'
    })

</script>

<template>
    <section class="p-8 mt-8">
        <div
            class="px-8">
                <h2 class="uppercase text-lg text-gray-600 dark:text-slate-300 text-center"> Horario </h2>
                <h1 class="uppercase text-center text-6xl text-amber-500 dark:text-ambar-400"> Mis clases </h1>
        </div>
    </section>

    <section class="p-8">
        <div class="flex justify-center">
            <div class="px-8">
                <div class="flex justify-center items-center gap-2">
                    <div
                        v-for="day in daysWeek"
                        :key="day.id"
                        class="rounded-full border-4 flex justify-center items-center w-10 h-10 md:w-16 md:h-16"
                        :class="userHasDay(day.day) ? 'bg-green-200 border-green-600' : 'bg-gray-200 dark:bg-slate-300  border-gray-400 dark:border-slate-500'">
                        <p class="text-2xl text-center"> {{ day.day.charAt(0) }} </p>
                    </div>
                </div>
                <div class="mt-4">
                    <p class="text-center text-3xl dark:text-slate-300 font-light">
                        {{ entryTime }} - {{ departureTime }}
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="mt-10 px-10">
        <div class="mt-5 border-b-1 border-gray-300 dark:border-slate-700 cursor-pointer">
                <div class="flex min-w-0 gap-x-4 items-center mb-3">
                    <div class="min-w-0 flex-auto">
                        <p class="text-gray-600 dark:text-gray-100 text-base md:text-lg lg:text-xl"> Historial de asistencias </p>
                        <span class="text-sm md:text-xl lg:text-2xl dark:text-gray-400"> Este mes </span>
                    </div>
                    <div>
                        <button
                            @click="showThisMonthContent = !showThisMonthContent"
                            class="bg-gray-400 text-white dark:bg-slate-400 dark:text-slate-200 rounded-full cursor-pointer hover:opacity-75 md:p-1 lg:p-1">
                                <svg
                                    v-if="showThisMonthContent"
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="1.5" 
                                    stroke="currentColor" 
                                    class="size-7">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>
                                <svg
                                    v-else
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="1.5" 
                                    stroke="currentColor" 
                                    class="size-7">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                                
                        </button>
                    </div>
                </div>
                <div
                    v-if="showThisMonthContent"
                    class="mt-3 mb-5 px-5 transition-all">
                        <p class="font-light flex items-center gap-3 uppercase text-red-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg> Miércoles 14
                        </p> 

                        <p class="text-green-500 font-light flex items-center gap-3 my-2 uppercase">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg> Lunes 12
                        </p> 

                </div>
            </div>

    </section>
</template>