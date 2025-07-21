<script setup>

    import { weeklyDays } from '@/helpers';
    import { reactive, ref } from 'vue';
    import { reset } from '@formkit/vue';
    import { useUserStore } from '@/stores/user';

    const props = defineProps({
        user: {
            type: Object,
            required: false
        }
    })

    const userStore = useUserStore();

    const days = ref(weeklyDays())
    const selectedDays = ref([])
    const isSubmitting = ref(false)
    const errorMessage = reactive({
        status: false,
        text: ''
    })

    const handleDayClick = (nameDay) => {
        const index = selectedDays.value.indexOf(nameDay)
        if (index > -1) {
            selectedDays.value.splice(index, 1)
        } else {
            selectedDays.value.push(nameDay)
        }
    }

    const handleSubmit = async (data) => {

        isSubmitting.value = true

        if (selectedDays.value.length === 0) {
            errorMessage.status = true;
            errorMessage.text = 'Selecciona los días de asistencia del usuario';
        }

        try {

            const formData = {
                ...data,
                days: [...selectedDays.value],
                user_id: props?.user?.id
            }
            
            await userStore.assignUserClasses(formData)

        } catch (error) {
            console.error(error)
        } finally {
            isSubmitting.value = false
            reset('assignUserClasses')
        }        
    }

    const discardChanges = () => {
        reset('assignUserClasses')
        selectedDays.value = []
    }
</script>

<template>
    <div class="p-1 md:p-4 mt-4 md:mt-0">
        <FormKit
            id="assignUserClasses"
            type="form"
            :actions="false"
            incomplete-message="* Revisa los campos marcados con error *"
            message-class="text-red-700 my-5 text-sm font-bold"
            @submit="handleSubmit">

            <div>
                <label for="entry_time" class="text-black dark:text-slate-300 text-lg font-extralight"> Hora de entrada </label>
                <FormKit 
                    type="time"
                    placeholder="09:00"
                    name="entry_time"
                    input-class="p-3 bg-gray-200 dark:bg-slate-800 rounded-lg w-full shadow text-gray-700 dark:text-slate-300 mt-1"
                    message-class="text-red-500 text-sm mt-1 font-light"
                    validation="required"
                    :validation-messages="{
                        required: 'Selecciona la hora de entrada'
                    }"/>
            </div>

            <div class="mt-3">
                <label for="departure_time" class="text-black dark:text-slate-300 text-lg font-extralight"> Hora de salida </label>
                <FormKit 
                    type="time"
                    placeholder="09:00"
                    name="departure_time"
                    input-class="p-3 bg-gray-200 dark:bg-slate-800 rounded-lg w-full shadow text-gray-700 dark:text-slate-300 mt-1"
                    message-class="text-red-500 text-sm mt-1 font-light"
                    validation="required"
                    :validation-messages="{
                        required: 'Selecciona la hora de salida'
                    }"/>
            </div>

            <div class="mt-3">
                <label for="name" class="text-black dark:text-slate-300 text-lg font-extralight"> 
                    Días de clases 
                        <span class="block text-sm"> Selecciona los días de asistencia del usuario </span>
                </label>
                <p
                    v-if="errorMessage.status"
                    class="text-red-500 text-sm font-light">
                        {{  errorMessage.text }}
                </p>
                <div class="flex gap-x-2 md:gap-x-4 mt-3 overflow-x-auto md:overflow-x-visible">
                    <div
                        v-for="day in days"
                        :key="day.id"
                        @click="handleDayClick(day.day)"
                        class="min-w-20 p-4 flex justify-center items-center rounded-lg uppercase cursor-pointer hover:opacity-75"
                        :class="selectedDays.includes(day.day) ? 'bg-green-300 dark:bg-green-200' : 'bg-gray-200 dark:bg-slate-800 '">
                            <p 
                                class="text-center"
                                :class="selectedDays.includes(day.day) ? 'text-white dark:text-green-400' : 'text-gray-700 dark:text-slate-300'"> 
                                    {{ day.day.charAt(0) }} <span class="block text-xs"> {{ day.day }} </span> 
                            </p>
                    </div>
                </div>
            </div>

            <div class="flex justify-between items-center mt-12">
                <button 
                    @click.prevent="discardChanges()"
                    class="px-3 py-2 bg-gray-200 dark:bg-slate-600 text-gray-500 dark:text-slate-400 rounded-lg hover:opacity-75 cursor-pointer">
                        Descartar
                </button>
                <button 
                    type="submit"
                    :disabled="isSubmitting"
                    class="px-6 py-2 rounded-lg hover:opacity-75 cursor-pointer"
                    :class="!isSubmitting ? 'bg-blue-500 text-white' : 'dark:bg-slate-600 dark:text-slate-400 cursor-not-allowed'">
                        {{ isSubmitting ? 'Procesando...' : 'Asignar clases' }}
                </button>
            </div>

        </FormKit>
    </div> 
</template>