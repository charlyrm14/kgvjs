<script setup>
    
    import LevelItem from '@/components/admin/levels/LevelItem.vue';
    import Alert from '@/components/ui/alerts/admin/Alert.vue';
    import EditCategory from '@/components/ui/modals/admin/categories/EditCategory.vue';
    import { useSwimmingLevelStore } from '@/stores/swimmingLevel';
    import { onMounted, ref } from 'vue';
    
    const levelStore = useSwimmingLevelStore()
    const selectedItem = ref(null)
    const showDetailCategoryModal = ref(false)

    onMounted(async() => {
        await levelStore.fetchSwimmingLevels()
    })

    const openDetailCategoryModal = (data) => {
        showDetailCategoryModal.value = true
        selectedItem.value = data
    }

    const closeDetailCategoryModal = () => {
        showDetailCategoryModal.value = false
    }

</script>

<template>

    <Alert
        v-if="levelStore?.alert?.status"
        :title="levelStore?.alert?.title"
        :subtitle="levelStore?.alert?.subtitle"
        :color="levelStore?.alert?.color"
        :icon="levelStore?.alert?.icon"/>

    <section class="px-6 md:px-12 lg:px-16 py-8 md:py-10">
        <div class="sm:flex sm:items-center sm:justify-between">
            <div>
                <div class="flex items-center gap-x-3">
                    <h2 class="text-lg font-medium text-gray-800 dark:text-white"> Niveles natación </h2>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <LevelItem
                v-for="level in levelStore?.swimmingLevels"
                :key="level.id"
                :level="level"
                @openEditModal="openDetailCategoryModal"/>
        </div>

    </section>

    <EditCategory
        v-if="showDetailCategoryModal"
        :item="selectedItem"
        @closeDetailModal="closeDetailCategoryModal"/>

</template>