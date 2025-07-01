<script setup>
    import LevelTable from '@/components/admin/levels/LevelTable.vue';
    import EditCategory from '@/components/ui/modals/admin/categories/EditCategory.vue';
    import NewCategoryModal from '@/components/ui/modals/admin/categories/NewCategoryModal.vue';
    import { useSwimmingLevelStore } from '@/stores/swimmingLevel';
    import { onMounted, ref } from 'vue';
    
    const levelStore = useSwimmingLevelStore()
    const selectedItem = ref(null)
    const showCreateCategoryModal = ref(false)
    const showDetailCategoryModal = ref(false)

    onMounted(async() => {
        await levelStore.fetchSwimmingLevels()
    })

    const closeCreateCategoryModal = () => {
        showCreateCategoryModal.value = false
    }

    const openDetailCategoryModal = (data) => {
        showDetailCategoryModal.value = true
        selectedItem.value = data
    }

    const closeDetailCategoryModal = () => {
        showDetailCategoryModal.value = false
    }

</script>

<template>
    <section class="px-6 md:px-12 lg:px-16 py-8 md:py-10">
        <div class="sm:flex sm:items-center sm:justify-between">
            <div>
                <div class="flex items-center gap-x-3">
                    <h2 class="text-lg font-medium text-gray-800 dark:text-white"> Niveles natación </h2>
                </div>
            </div>

            <div class="flex justify-end items-center mt-4 gap-x-3">
                <button
                    @click="showCreateCategoryModal = !showCreateCategoryModal"
                    class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-pink-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-pink-600 dark:hover:bg-pink-500 dark:bg-pink-600 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span> Agregar categoría </span>
                </button>
            </div>
        </div>

        <LevelTable
            :levels="levelStore?.swimmingLevels"
            @openDetailModal="openDetailCategoryModal"/>

    </section>

    <NewCategoryModal 
        v-if="showCreateCategoryModal"
        @closeCreateModal="closeCreateCategoryModal"/>

    <EditCategory
        v-if="showDetailCategoryModal"
        :item="selectedItem"
        @closeDetailModal="closeDetailCategoryModal"/>

</template>