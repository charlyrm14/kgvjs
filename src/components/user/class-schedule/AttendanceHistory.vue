<script setup>
    import { 
        currentMonthYear, 
        typeAttendanceIcon,
        typeAttendanceColor,
        attendanceStatus
    } from '@/helpers';

    defineProps({
        attendances: {
            type: Array,
            required: false
        }
    })

</script>

<template>
    <div class="bg-white dark:bg-slate-700 rounded-lg py-4 px-6 shadow-md">
        <div>
            <h1 class="text-2xl uppercase dark:text-slate-300"> Mi Historial de Asistencias </h1>
            <p class="text-base text-gray-500 dark:text-slate-400"> Un resumen de tus clases asistidas </p>
        </div>
        <div class="mt-4">
            <div>
                <h2 class="text-blue-500 text-3xl"> {{ currentMonthYear() }} </h2>
            </div>
        </div>
        <div class="mt-4 flex justify-start items-center gap-x-2">
            <div
                v-for="(status, index) in attendanceStatus()"
                :key="index"
                class="inline-flex items-center gap-x-1">
                    <div 
                        class="p-2 rounded"
                        :class="status.bgColor"></div>
                    <span
                        class="font-light text-sm"
                        :class="typeAttendanceColor(status.value)"> 
                            {{ status.text }} 
                    </span>
            </div>
            <!-- <div class="inline-flex items-center gap-x-1">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    class="size-5"
                    :class="typeAttendanceColor(0)">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg> <span :class="typeAttendanceColor(0)"> No Asistio </span>
            </div>
            <div class="inline-flex items-center gap-x-1">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    class="size-5"
                    :class="typeAttendanceColor(2)">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                </svg> <span :class="typeAttendanceColor(2)"> Día no asignado </span>
            </div> -->
        </div>
        <div class="mt-4 overflow-y-auto max-h-[250px] md:max-h-[500px]">
            <div 
                v-for="attendance in attendances"
                :key="attendance.id"
                class="border-b border-gray-300 dark:border-slate-500 flex justify-between items-center">
                    <p 
                        class="font-light text-base uppercase mb-1"
                        :class="typeAttendanceColor(attendance?.present)">
                            {{ attendance.translated_format }}
                    </p>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        class="size-6"
                        :class="typeAttendanceColor(attendance?.present)">
                        <path stroke-linecap="round" stroke-linejoin="round" :d="typeAttendanceIcon(attendance?.present)" />
                    </svg>
            </div>
        </div>
    </div>
</template>