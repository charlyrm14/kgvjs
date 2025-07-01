<script setup>
    import LevelTableItem from './LevelTableItem.vue';

    const emit = defineEmits(['openDetailModal'])

    defineProps({
        levels: {
            type: Array,
            required: false
        }
    })

    const handleOpenDetailModal = (data) => {
        emit('openDetailModal', data)
    }

</script>

<template>
    <div class="flex flex-col mt-6 p-4 md:p-0">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead class="bg-gray-50 dark:bg-gray-800">
                            <tr>

                                <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <button class="flex items-center gap-x-3 focus:outline-none">
                                        <span> Título </span>
                                    </button>
                                </th>

                                <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"></th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                            <LevelTableItem
                                v-if="levels?.length > 0"
                                v-for="level in levels"
                                :key="level.id"
                                :level="level"
                                @openDetailModal="handleOpenDetailModal"/>
                            <td 
                                v-else
                                colspan="4">
                                    <p class="p-4 text-center text-2xl text-gray-700 dark:text-slate-300"> No hay contenido disponible </p>
                            </td>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>  
</template>
