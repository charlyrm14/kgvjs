<script setup>
    import SwimmingCategoriesAPI from '@/api/SwimmingCategoriesAPI';
    import { useSwimmingCategoriesStore } from '@/stores/swimming-categories';
    import { useUserStore } from '@/stores/user';
    import { onMounted, reactive, ref } from 'vue';

    const categories = useSwimmingCategoriesStore()
    const user = useUserStore() 
    const userCategories = ref([])
    const userCurrentCategory = reactive({})
    const hasCategories = ref(false)
    const errorMessage = ref('')

    onMounted(async() => {
        try {

            await user.loadUser()

            const data = await SwimmingCategoriesAPI.getUserSwimmingCategories(user.user.id)
            userCategories.value = data.data.categories
            Object.assign(userCurrentCategory, data.data.current_category)
            hasCategories.value = true
            
        } catch (error) {
            if (error.response && error.response.status === 404) {
                hasCategories.value = false
                errorMessage.value = 'No se encontraron categorías asignadas para este usuario.'
            } else {
                errorMessage.value = 'Cada categoría es un paso más en tu camino como nadador. Esfuérzate en cada entrenamiento, supera tus límites y avanza con orgullo. ¡Con disciplina y pasión, conquistarás todas las categorías!'
            }
        }
    })

    const isUserCategory = (categoryId) => {
        return userCategories.value.some(userCat => userCat.swimming_category_id === categoryId)
    }

</script>

<template>
    <section class="p-8 my-8">
        <div
            v-if="hasCategories"
            class="px-8">
                <h2 class="uppercase text-lg text-gray-600 dark:text-slate-300 text-center"> Nivel actual </h2>
                <h1 class="uppercase text-center text-6xl text-amber-500 dark:text-ambar-400"> {{ userCurrentCategory.category }} </h1>
                <div class="flex justify-center items-center mt-6">
                    <img 
                        :src="categories.url_api + '/' + userCurrentCategory.image" 
                        alt="shark"
                        class="w-32">
                </div>
        </div>
        <div v-else
            class="px-8">
                <h2 class="uppercase text-lg text-gray-600 dark:text-slate-300 text-center"> {{ errorMessage }} </h2>
        </div>
        <div class="mt-10">
            <div class="bg-white dark:bg-slate-700 py-8 px-4 sm:px-6 lg:px-8 rounded-lg shadow">
                <div class="flex justify-between items-center relative max-w-4xl mx-auto mt-5">
                    
                    <!-- Línea horizontal -->
                    <div class="absolute top-1/3 left-0 w-full h-1 bg-teal-400 transform -translate-y-1/2 z-0"></div>

                    <div
                        v-for="category in categories.categories"
                        :key="category.id"
                        class="relative z-10 flex flex-col items-center w-1/5">
                        <div
                            :class="[
                                'relative bg-white rounded-full p-2 md:p-4 lg:p-4 border-4',
                                isUserCategory(category.id) ? 'border-teal-400' : 'border-gray-400'
                            ]">
                            <img 
                                :src="categories.url_api + '/' + category.image" 
                                class="w-10 h-10 rounded-full" 
                                :alt="category.title">
                            <div
                                v-if="isUserCategory(category.id)"
                                class="absolute -top-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white">
                                <svg class="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15 3.293 9.879a1 1 0 011.414-1.414L8.414 12.172l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <span 
                            class="mt-2 text-sm md:text-base lg::text-base uppercase"
                            :class="[isUserCategory(category.id) ? 'text-teal-400' : 'dark:text-slate-400']"> 
                            {{ category.title }} 
                        </span>
                    </div>

                    
                </div>

                <div v-if="hasCategories">
                    <h4 class="mt-10 text-amber-500 dark:text-ambar-400 font-extralight uppercase text-center text-base"> 
                    {{ userCurrentCategory.message }} 
                    </h4>
                    <div class="flex justify-center items-center mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12 text-amber-500 dark:text-ambar-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                        </svg>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>