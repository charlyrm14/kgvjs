<script setup>
    import { computed, ref } from 'vue';

    const props = defineProps({
        levels: {
            type: Object,
            required: true
        },
        pathImage: {
            type: String,
            required: true
        }
    })

    const selectedLevel = ref(props.levels[0] ?? null)

    const levelInfo = (level) => {
        selectedLevel.value = level
    }

</script>

<template>
    <div class="bg-white dark:bg-slate-700 rounded-lg py-4 px-6 mt-4 shadow-md">
        <div>
            <h2 class="text-xl dark:text-slate-300 uppercase"> 
                Niveles Disponibles
            </h2>
        </div>
        <div class="mt-3">
            <button
                v-for="levelItem in levels"
                :key="levelItem?.id"
                @click.prevent="levelInfo(levelItem)"
                class="px-1 md:px-2 rounded uppercase text-sm cursor-pointer hover:opacity-75 mx-1 md:mx-1"
                :class="levelItem?.id === selectedLevel?.id ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-slate-500 text-gray-600 dark:text-slate-300'">
                    {{ levelItem?.name ?? 'Desconocido' }}
            </button>
        </div>
        <div 
            v-if="levels.length > 0"
            class="bg-blue-100 rounded-lg p-2 mt-3">
                <div class="flex items-center gap-x-3">
                    <div class="p-4 bg-blue-200 rounded-lg">
                        <img 
                            :src="pathImage + '/' + (selectedLevel?.image ?? '../../../assets/img/shark.png')" 
                            alt="shark" 
                            class="w-6">
                    </div>
                    <div>
                        <p class="uppercase text-lg"> {{ selectedLevel?.name }} </p>
                        <span class="text-base text-slate-500 uppercase"> {{ selectedLevel?.skill_1 }}  · {{ selectedLevel?.skill_3 }} · {{ selectedLevel?.skill_3 }} </span>
                    </div>
                </div>
        </div>
    </div>
</template>