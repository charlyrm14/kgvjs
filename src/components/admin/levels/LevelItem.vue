<script setup>
    import { useSwimmingLevelStore } from '@/stores/swimmingLevel';

    const levelStore = useSwimmingLevelStore()

    const emit = defineEmits(['openEditModal'])

    const props = defineProps({
        level: {
            type: Object,
            required: true
        }
    })

    const open = () => {
        emit('openEditModal', props.level)
    }

</script>

<template>
    <div class="bg-white dark:bg-slate-700 p-3 rounded-lg">
        <div class="bg-pink-100 rounded-lg flex justify-center">
            <img 
                :src="levelStore?.urlAPI + '/' + level?.image " 
                :alt="level?.name"
                class="w-40">
        </div>
        <div class="p-3 mt-1 flex justify-between items-center">
            <div>
                <h2 class="text-gray-600 dark:text-slate-300 text-xl uppercase font-light"> {{ level?.name ?? 'Desconocido'}} </h2>
            </div>
            <div>
                <button
                    @click="open(level)"
                    class="bg-pink-500 text-white px-4 py-1 rounded-lg hover:opacity-75 cursor-pointer"> 
                        Editar 
                </button>
            </div>
        </div>
    </div>
</template>
