<script setup>

    import { useSwimmingCategoriesStore } from '@/stores/swimming-categories';

    const swimmingStore = useSwimmingCategoriesStore()

    const percentageBySkills = {
        1:  20,
        2:  40,
        3:  60,
        4:  80,
        5:  100,
    };

    defineProps({
        category: {
            type: Object,
            required: true
        }
    })
    
</script>

<template>
    <div class="mt-10 bg-white dark:bg-slate-900 text-white rounded-xl overflow-hidden shadow-lg">

            <div class="relative bg-gray-400 dark:bg-slate-300 h-20 flex items-end justify-center">
                <!-- Imagen circular -->
                <div 
                    class="absolute -bottom-8 w-24 h-24 rounded-full border-4 bg-white border-amber-500 overflow-hidden">
                        <img 
                            :src="swimmingStore.url_api + '/' + category.image" 
                            :alt="category.title" 
                            class="w-full h-full object-cover" />
                </div>
            </div>

            <div class="pt-10  pb-4 text-center">
                <h2 
                    class="text-xl font-light flex justify-center items-center gap-2 text-amber-500 uppercase"> 
                        {{ category.title }}  
                            <svg
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="currentColor" 
                                class="size-5">
                                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                            </svg>
                </h2>
            </div>

            <div class="px-4 pb-4">
                <h3 class="text-sm text-gray-600 dark:text-gray-200 mb-3"> 
                        {{ category.message }} 
                </h3>
            </div>

            <div class="px-4 pb-4">
                <h3 class="text-sm text-gray-600 dark:text-gray-200 mb-3"> HABILIDADES </h3>
                <div class="grid grid-cols-3 gap-2 text-center text-xs">
                    <div
                        class="bg-amber-500 p-2 rounded-lg">
                            <p
                                class="text-white font-bold"> 
                                    {{ percentageBySkills[category.id] }}% 
                            </p>
                            <p 
                                class="text-white"> 
                                    VELOCIDAD 
                            </p>
                    </div>
                    <div
                        class="bg-amber-500 p-2 rounded-lg">
                            <p 
                                class="text-white font-bold"> 
                                    {{ percentageBySkills[category.id] }}% 
                            </p>
                            <p 
                                class="text-white"> 
                                    FUERZA 
                            </p>
                    </div>
                    <div 
                        class="bg-amber-500 p-2 rounded-lg">
                            <p
                                class="text-white font-bold"> 
                                    {{ percentageBySkills[category.id] }}% 
                            </p>
                            <p 
                                class="text-white"> 
                                    TÉCNICA 
                            </p>
                    </div>
                </div>
            </div>
        
    </div>
</template>