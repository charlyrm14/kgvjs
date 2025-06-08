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

    const percentageBySkills = {
        1:  20,
        2:  40,
        3:  60,
        4:  80,
        5:  100,
    };

    onMounted(async() => {
        try {

            await user.loadUser()

            const data = await SwimmingCategoriesAPI.getUserSwimmingCategories(user.user.id)
            
            userCategories.value = data.data.data.categories
            Object.assign(userCurrentCategory, data.data.data.current_category)
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
    <section class="p-8">

        <div
            v-if="hasCategories"
            class="px-8">
                <div class="relative w-32 mx-auto">
                    <!-- Círculo con overflow-hidden para recortar imagen -->
                    <div class="w-36 h-36 rounded-full bg-white dark:bg-white overflow-hidden shadow-md mx-auto relative z-10 border-4 border-amber-500">
                        <img
                            :src="categories.url_api + '/' + userCurrentCategory.image" 
                            alt="Foquita"
                            class="absolute bottom-0 left-1/2 -translate-x-1/2 w-32"/>
                    </div>

                    <!-- Ícono que sobresale del borde inferior del círculo -->
                    <div
                        class="absolute bottom-1 left-18 -translate-x-1/2 translate-y-1/2 text-amber-500 rounded-full p-2  z-20">
                        <!-- Icono SVG -->
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
        </div>

        <div
            class="mt-6 flex justify-center">
            <div class="w-60 bg-white dark:bg-slate-600 rounded-lg shadow">
                <p 
                    class="text-center uppercase text-sm mt-2  p-2"
                    :class="userCurrentCategory?.category ? 'dark:text-gray-300' : 'text-amber-500'"> 
                        {{ userCurrentCategory?.category ? 'Nivel Actual' : 'Empieza tu aventura para ser el mejor nadador' }} 
                </p>
                <h2 
                    v-if="userCurrentCategory?.category"
                    class="text-amber-500 text-center uppercase text-4xl mb-2"> {{ userCurrentCategory?.category }} </h2>
            </div>
        </div>

    </section>

    <section class="p-8">
        <div class="px-8">

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-3 lg:gap-1">

                <div
                    v-for="category in categories.categories"
                    :key="category.id"
                    class="max-w-xs mx-auto mt-10 bg-white dark:bg-slate-900 text-white rounded-xl overflow-hidden shadow-lg">

                    <div class="relative bg-gray-400 dark:bg-slate-300 h-20 flex items-end justify-center">
                        <!-- Imagen circular -->
                        <div 
                            class="absolute -bottom-8 w-24 h-24 rounded-full border-4 bg-white overflow-hidden"
                            :class="[isUserCategory(category.id) ? 'border-amber-500' : 'border-cyan-300']">
                                <img 
                                    :src="categories.url_api + '/' + category.image" 
                                    :alt="category.title" 
                                    class="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div class="pt-10  pb-4 text-center">
                        <h2 
                            class="text-xl font-light flex justify-center items-center gap-2 uppercase"
                            :class="isUserCategory(category.id) ? 'text-amber-500' : 'text-cyan-300' "> 
                                {{ category.title }}  
                                    <svg
                                        v-if="isUserCategory(category.id)"
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 24 24" 
                                        fill="currentColor" 
                                        class="size-5">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                                    </svg>
                        </h2>
                    </div>

                    <div class="px-4 pb-4">
                        <h3
                            v-if="isUserCategory(category.id)"
                            class="text-sm text-gray-600 dark:text-gray-200 mb-3"> {{ category.message }} 
                        </h3>
                        <h3 
                            v-else
                            class="text-sm text-gray-400 dark:text-slate-500 mb-3">
                                ¡Sigue nadando con entusiasmo! Con cada brazada mejoras más. Esfuérzate y pronto conquistarás las demás categorías. ¡Tú puedes lograrlo, campeón del agua!. ¡Vamos paso a paso!
                        </h3>
                    </div>

                    <div class="px-4 pb-4">
                        <h3 class="text-sm text-gray-600 dark:text-gray-200 mb-3"> HABILIDADES </h3>
                        <div class="grid grid-cols-3 gap-2 text-center text-xs">
                            <div
                                :class="isUserCategory(category.id) ? 'bg-amber-500' : 'bg-gray-300 dark:bg-slate-800'"
                                class="p-2 rounded-lg">
                                    <p
                                        :class="isUserCategory(category.id) ? 'text-white' : 'text-gray-500' "
                                        class="font-bold"> 
                                            {{ percentageBySkills[category.id] }}% 
                                    </p>
                                    <p 
                                        :class="isUserCategory(category.id) ? 'text-white' : 'text-gray-500' "> 
                                            VELOCIDAD 
                                    </p>
                            </div>
                            <div
                                :class="isUserCategory(category.id) ? 'bg-amber-500' : 'bg-gray-300 dark:bg-slate-800'" 
                                class="p-2 rounded-lg">
                                    <p 
                                        :class="isUserCategory(category.id) ? 'text-white' : 'text-gray-500' "
                                        class="font-bold"> 
                                            {{ percentageBySkills[category.id] }}% 
                                    </p>
                                    <p 
                                        :class="isUserCategory(category.id) ? 'text-white' : 'text-gray-500' "> 
                                            FUERZA 
                                    </p>
                            </div>
                            <div 
                                :class="isUserCategory(category.id) ? 'bg-amber-500' : 'bg-gray-300 dark:bg-slate-800'"
                                class="p-2 rounded-lg">
                                    <p
                                        :class="isUserCategory(category.id) ? 'text-white' : 'text-gray-500' "
                                        class="font-bold"> 
                                            {{ percentageBySkills[category.id] }}% 
                                    </p>
                                    <p 
                                        :class="isUserCategory(category.id) ? 'text-white' : 'text-gray-500' "> 
                                            TÉCNICA 
                                    </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>