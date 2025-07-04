<script setup>
    import CurrentLevel from '@/components/user/progress/CurrentLevel.vue';
    import GeneralProgress from '@/components/user/progress/GeneralProgress.vue';
    import LevelStatistics from '@/components/user/progress/LevelStatistics.vue';
    import SwimmingLevels from '@/components/user/progress/SwimmingLevels.vue';
    import { useSwimmingLevelStore } from '@/stores/swimmingLevel';
    import { onMounted } from 'vue';

    const swimmingLevelStore = useSwimmingLevelStore()

    onMounted(async() => {
        Promise.all([
            swimmingLevelStore.fetchUserSwimmingProgress(),
            swimmingLevelStore.fetchSwimmingLevels()
        ])
    })
    
</script>

<template>
    <section class="px-6 md:px-12 lg:px-16 py-8 md:py-10">
        <div
            v-if="swimmingLevelStore.userSwimmingProgress"
            class="grid grid-cols-1 md:grid-cols-2 py-4 gap-y-4 md:gap-x-4 md:gap-y-0">

                <CurrentLevel
                    :currentLevel="swimmingLevelStore?.userSwimmingProgress?.current_level"
                    :pathImage="swimmingLevelStore?.urlAPI"/>

            <div>
                <GeneralProgress
                    :progressPercentage="swimmingLevelStore?.userSwimmingProgress?.progress_percentage"/>

                <SwimmingLevels
                    :levels="swimmingLevelStore?.swimmingLevels"
                    :pathImage="swimmingLevelStore?.urlAPI"/>

                <LevelStatistics
                    :completedLevels="swimmingLevelStore?.userSwimmingProgress?.completed_levels"
                    :progressPercentage="swimmingLevelStore?.userSwimmingProgress?.progress_percentage"
                    :remainingLevels="swimmingLevelStore?.userSwimmingProgress?.remaining_levels"
                    :totalLevels="swimmingLevelStore?.userSwimmingProgress?.total_levels"
                    :nextLevel="swimmingLevelStore?.userSwimmingProgress?.next_level"
                    :pathImage="swimmingLevelStore?.urlAPI"/>

            </div>
        </div>
        <div 
            v-else
            class="py-4">
                <h2 class="text-center text-pink-500 text-4xl"> 
                    Aún no tienes asignado un nivel de natación 
                        <span class="block text-lg text-gray-700 dark:text-slate-400"> Solicita la asignación de tu nivel en el area administrativa </span>
                </h2>
        </div>
    </section>
</template>

