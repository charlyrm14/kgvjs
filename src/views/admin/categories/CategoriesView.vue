<script setup>
    
    import SwimmiCategoryItem from '@/components/admin/categories/SwimmiCategoryItem.vue';
    import NewCategoryModal from '@/components/modals/admin/categories/NewCategoryModal.vue';
    import { useSwimmingCategoriesStore } from '@/stores/swimming-categories';
    import { ref } from 'vue';
        
    const categories = [
        { 
            id: 1, 
            label: 'Niños'
        },
        { 
            id: 2, 
            label: 'Adultos'
        }
    ];

    const categoryActive = ref(1);

    const swimmingStore = useSwimmingCategoriesStore()

</script>

<template>
    <section class="p-8 my-8">

        <div class="my-4">
            <div class="flex justify-end items-center">
                <button
                    @click="swimmingStore.showNewCategoryModal()"
                    class="bg-pink-500 text-white px-4 py-2 cursor-pointer hover:opacity-75 rounded flex items-center gap-2 font-extralight">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg> Nueva categoría
                </button>
            </div>
        </div>

        <div class="mt-10 rounded-lg">
            <div class="flex justify-between items-center">
                <div class="flex justify-start items-center gap-x-2">
                    <div 
                        class="bg-indigo-400 rounded-full p-1">
                            <button
                                v-for="category in categories"
                                key="category.id"
                                @click="categoryActive = category.id"
                                class="uppercase py-1 px-4 rounded-full font-extralight cursor-pointer"
                                :class="categoryActive === category.id ? 'bg-indigo-600 text-white' : 'text-gray-300 dark:text-slate-300'">
                                    {{ category.label }}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="categoryActive == 1"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-3 lg:gap-1">
                <SwimmiCategoryItem
                    v-for="category in swimmingStore.categories"
                    :key="category.id"
                    :category="category"/>
        </div>
        <div v-else
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-3 lg:gap-1">
                <SwimmiCategoryItem
                    v-for="category in swimmingStore.categories"
                    :key="category.id"
                    :category="category"/>
        </div>

    </section>

    <NewCategoryModal
        v-if="swimmingStore.statusNewCategoryModal"/>
        
</template>