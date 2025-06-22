<script setup>
    import CurrentLevel from '@/components/user/progress/CurrentLevel.vue';
    import GeneralProgress from '@/components/user/progress/GeneralProgress.vue';
    import LevelStatistics from '@/components/user/progress/LevelStatistics.vue';
    import SwimmingLevels from '@/components/user/progress/SwimmingLevels.vue';
    
</script>

<template>
    <section class="px-3 md:px-12 lg:px-16 py-8 md:py-10">
        <div class="grid grid-cols-1 md:grid-cols-2 py-4 gap-y-4 md:gap-x-4 md:gap-y-0">
            <CurrentLevel/>
            <div>
                <GeneralProgress/>
                <SwimmingLevels/>
                <LevelStatistics/>
            </div>
        </div>
    </section>
</template>

