<script setup>
    import AttendanceHistory from '@/components/user/class-schedule/AttendanceHistory.vue';
    import Schedule from '@/components/user/class-schedule/Schedule.vue';
    
</script>

<template>
    <section class="px-6 md:px-12 lg:px-16 py-8 md:py-10">
        <div class="grid grid-cols-1 md:grid-cols-2 py-4 gap-y-4 md:gap-x-4 md:gap-y-0">
            <Schedule/>
            <AttendanceHistory/>
        </div>
    </section>
</template>