<script setup>
    import { useSwimmingLevelStore } from '@/stores/swimmingLevel';
    import { useUserStore } from '@/stores/user';
    import { computed, onMounted, reactive, ref } from 'vue';

    const props = defineProps({
        user: {
            type: Object,
            required: false
        }
    })

    const levelStore = useSwimmingLevelStore()
    const userStore = useUserStore()
    const level = ref(null)
    const isSubmitting = ref(false)
    const errorMessage = reactive({
        status: false,
        text: ''
    })

    onMounted(async() => {
        await levelStore.fetchSwimmingLevels()
    })

    const levelSelected = (levelId) => {
        level.value = levelId;
        errorMessage.status = false;
    };

    const handleSubmit = async() => {

        if (level.value === null) {
            errorMessage.status = true;
            errorMessage.text = 'Selecciona un nivel para asignar al usuario'
            return
        }

        isSubmitting.value = true

        try {

            const data = {
                user_id: props?.user?.id,
                swimming_level_id: level.value
            }

            await userStore.assignUserSwimmingLevel(data)

        } catch (error) {
            console.error(error)

        } finally {
            setTimeout(() => {
                isSubmitting.value = false
            }, 2000);
        }
    }

    const sortedLevels = computed(() => {
        const levels = levelStore.swimmingLevels
        return Array.isArray(levels) ? [...levels].sort((a, b) => a.id - b.id) : []
    });

</script>

<template>
    <div class="p-1 md:p-4 mt-4 md:mt-0">
        <div>
            <label for="name" class="text-black dark:text-slate-300 text-lg font-extralight"> 
                Categoría
                    <span class="block text-sm"> Selecciona una categoría de nivel </span>
            </label>
            <p
                v-if="errorMessage.status"
                class="text-red-500 text-sm font-light">
                    {{  errorMessage.text }}
            </p>
        </div>
        <div class="flex gap-x-2 md:gap-x-4 mt-3 overflow-x-auto md:overflow-x-visible">
            <div
                v-for="item in sortedLevels" 
                :key="item.id"
                @click="levelSelected(item.id)"
                class="min-w-25 p-3 flex justify-center items-center rounded-lg uppercase cursor-pointer hover:opacity-75"
                :class="level === item.id 
                    ? 'bg-green-500 text-white dark:bg-green-400' 
                    : 'bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-slate-300'">
                        <p class="text-center"> {{ item?.name.charAt(0) }} <span class="block text-xs"> {{ item?.name }} </span> </p>
            </div>
        </div>
        <div class="flex justify-between items-center mt-12">
            <button 
                class="px-3 py-2 bg-gray-200 dark:bg-slate-600 text-gray-500 dark:text-slate-400 rounded-lg hover:opacity-75 cursor-pointer">
                    Descartar
            </button>
            <button
                @click="handleSubmit"
                :disabled="isSubmitting"
                class="px-6 py-2 rounded-lg hover:opacity-75 cursor-pointer"
                :class="!isSubmitting ? 'bg-blue-500 text-white' : 'dark:bg-slate-600 dark:text-slate-400 cursor-not-allowed'">
                    {{ isSubmitting ? 'Procesando...' : 'Asignar categoría' }}
            </button>
        </div>
    </div>
</template>