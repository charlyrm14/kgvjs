<script setup>
    import { formattedDate } from '@/helpers';
    import { useSwimmingLevelStore } from '@/stores/swimmingLevel';

    const levelStore = useSwimmingLevelStore()

    const emit = defineEmits(['openDetailModal'])

    const props = defineProps({
        level: {
            type: Object,
            required: true
        }
    })

    const open = () => {
        emit('openDetailModal', props.level)
    }

</script>

<template>
    <tr>
        <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
            <div class="flex items-center gap-x-6">
                <div>
                    <img 
                        :src="levelStore?.urlAPI + '/' + level?.image " 
                        :alt="level?.name"
                        class="w-16">
                </div>
                <div>
                    <h2 class="font-base md:font-lg text-gray-800 dark:text-white uppercase"> {{ level?.name ?? 'Desconocido'}} </h2>
                    <p class="text-sm font-normal text-gray-600 dark:text-gray-400">
                        {{ formattedDate(level?.created_at) }}
                    </p>
                </div>
            </div>
        </td>

        <td class="px-4 py-4 text-sm whitespace-nowrap">
            <div class="rounded-lg flex justify-end">
                <button 
                    @click="open(level)"
                    class="bg-pink-400 text-white cursor-pointer px-4 py-2 rounded-lg">
                        Ver
                </button>
            </div>
        </td>

    </tr>
</template>
