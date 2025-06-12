<script setup>
    import { useSwimmingCategoriesStore } from '@/stores/swimming-categories'
    import { useUserStore } from '@/stores/user'
    import { ref, watch } from 'vue'

    const userStore = useUserStore()
    const swimmingStore = useSwimmingCategoriesStore()

    const props = defineProps({
        user: {
            type: Object,
            required: true
        }
    })

    const userLevel = ref({})
    const options = ref([])

    const userHasSwimmingLevel = (levelName) => {
        return userLevel.value?.swimming_levels?.some?.(cat => cat.category === levelName)
    }
    
    /**
     * Opciones select
     */
    watch([() => swimmingStore.categories, () => userLevel?.value?.swimming_levels], ([newCategories]) => {
        if (newCategories.length) {
            options.value = newCategories.map(item => ({
                label: item.title,
                value: item.id,
                attrs: {
                    disabled: userHasSwimmingLevel(item.title)
                }
            }))
        }   
    },{ immediate: true })

    /**
     * Carga usuario
     */
    watch(() => props.user, (newUser) => {
            if (newUser) {
                userLevel.value = { ...newUser }
            }
    },{ immediate: true })

    const handleSubmit = (data) => {
        const formData = {
            ...data,
            user_id: userLevel?.value?.id,
            user_name: userLevel?.value?.name,
        }

        userStore.assignSwimminCategoryToUser(formData)
    }

</script>

<template>
    <section class="px-8 mt-5">

            <div class="bg-white dark:bg-slate-700 rounded-lg">
                <div class="border-b border-gray-300 dark:border-slate-600 p-4">
                    <h2 class="px-4 text-gray-700 dark:text-slate-300 uppercase"> Asignar nivel </h2>
                </div>

                <FormKit
                    id="userLevelSwimmingForm"
                    type="form"
                    :actions="false"
                    incomplete-message="* Revisa los campos marcados con error *"
                    message-class="text-red-700 my-5 text-sm font-bold"
                    @submit="handleSubmit">

                        <div class="p-4 my-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-4">
                                <div>
                                    <label 
                                        for="name" 
                                        class="text-gray-700 dark:text-slate-300 text-lg font-extralight px-4"> Seleccionar categoría </label>
                                </div>
                                <div>
                                    <FormKit
                                        type="select"
                                        placeholder="Elige una categoría"
                                        name="swimming_category_id"
                                        input-class="p-4 bg-gray-200 dark:bg-slate-800 rounded-lg w-full shadow text-gray-700 dark:text-slate-300"
                                        message-class="text-red-500 text-sm px-2 font-light"
                                        :options="options"
                                        validation="required"
                                        :validation-messages="{
                                            required: 'Selecciona una categoría'
                                        }"/>
                                </div>
                            </div>
                        </div>

                        <div class="border-t border-gray-300 dark:border-slate-600 p-4">
                            <div class="flex justify-end items-center gap-x-3">
                                <RouterLink
                                    :to="{ name: 'admin-home' }"
                                    class="px-4 p-2 font-light bg-gray-200 dark:bg-slate-600 text-gray-500 dark:text-slate-400 rounded-lg hover:opacity-75 cursor-pointer">
                                        Descartar
                                </RouterLink>
                                <FormKit
                                    type="submit"
                                    input-class="px-4 p-2 font-light bg-blue-600 text-white rounded-lg hover:opacity-75 cursor-pointer"
                                    label="Guardar cambios"/>
                            </div>
                        </div>

                </FormKit>
            </div>

    </section>
</template>