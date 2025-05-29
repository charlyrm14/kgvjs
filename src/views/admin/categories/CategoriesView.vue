<script setup>
    
    import SwimmiCategoryItem from '@/components/admin/categories/SwimmiCategoryItem.vue';
    import AssignToUserModal from '@/components/modals/admin/categories/AssignToUserModal.vue';
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
                <div>
                    <button
                        @click="swimmingStore.showAssignCategoryModal()"
                        class="bg-pink-400 text-white px-4 py-2 cursor-pointer hover:opacity-75 rounded-tl rounded-bl flex items-center gap-2 font-extralight">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg> Asignar
                    </button>
                </div>
                <div>
                    <button
                        @click="swimmingStore.showNewCategoryModal()"
                        class="bg-pink-500 text-white px-4 py-2 cursor-pointer hover:opacity-75 rounded-tr rounded-br flex items-center gap-2 font-extralight">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg> Nueva
                    </button>
                </div>
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
                                class="uppercase py-1 px-4 rounded-full font-extralight cursor-pointer text-indigo-900"
                                :class="categoryActive === category.id ? 'bg-indigo-600 text-white' : ''">
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

    <AssignToUserModal
        v-if="swimmingStore.statusAssignCategoryModal"/>

    <NewCategoryModal
        v-if="swimmingStore.statusNewCategoryModal"/>
        
</template>