<script setup>
    import AttendanceHistory from '@/components/user/class-schedule/AttendanceHistory.vue';
    import Schedule from '@/components/user/class-schedule/Schedule.vue';   
    import { useScheduleStore } from '@/stores/schedule';
import { onMounted } from 'vue';
    
    const scheduleStore = useScheduleStore()

    onMounted(async() => {
        Promise.all([
            await scheduleStore.fetchScheduleUSer(),
            await scheduleStore.fetchAttendanceHistory()
        ])
    })

</script>

<template>
    <section class="px-6 md:px-12 lg:px-16 py-8 md:py-10">
        <div 
            v-if="scheduleStore?.scheduleUser"
            class="grid grid-cols-1 md:grid-cols-2 py-4 gap-y-4 md:gap-x-4 md:gap-y-0">

            <Schedule
                :schedule="scheduleStore?.scheduleUser"/>

            <AttendanceHistory
                :attendances="scheduleStore?.attendanceHistory"/>
        </div>
        <div 
            v-else
            class="py-4">
                <h2 class="text-center text-pink-500 text-4xl"> 
                    Aún no tienes un horario asignado
                        <span class="block text-lg text-gray-700 dark:text-slate-400"> Solicita la asignación de tu horario en el area administrativa </span>
                </h2>
        </div>
    </section>
</template>