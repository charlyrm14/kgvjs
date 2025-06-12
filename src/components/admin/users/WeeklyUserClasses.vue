<script setup>

    import { weeklyDays } from '@/helpers'
    import { useUserStore } from '@/stores/user'
    import { computed, reactive, ref, watch } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()
    const userStore = useUserStore()
    const props = defineProps({
        user: {
            type: Object,
            required: true
        }
    })

    const userWeeklyClasses = ref({})
    const days = ref([])
    const emptyDays = reactive({
        status: false,
        text: ''
    })

    watch(() => props.user, (newUser) => {
            if (newUser) {
                userWeeklyClasses.value = { ...newUser }

                if (Array.isArray(newUser.classes)) {
                    days.value = newUser.classes.map(c => c.day)
                }
            }
        },{ immediate: true }
    )

    const entryTimeMonday = computed({
        get() {
            return userWeeklyClasses.value.classes?.[0]?.entry_time || ''
        },
        set(newTime) {
            if (userWeeklyClasses.value.classes?.[0]) {
            userWeeklyClasses.value.classes[0].entry_time = newTime
            }
        }
    })

    const departureTimeMonday = computed({
        get() {
            return userWeeklyClasses.value.classes?.[0]?.departure_time || ''
        },
        set(newTime) {
            if (userWeeklyClasses.value.classes?.[0]) {
                userWeeklyClasses.value.classes[0].departure_time = newTime
            }
        }
    })

    const handleSubmit = (data) => {
        if(days.value.length === 0) {
            emptyDays.status = true
            emptyDays.text = 'Selecciona los días de clases del usuario'
            return
        }

        const formData = {
            ...data,
            days: [...days.value],
            user_id: props.user.id
        }

        userStore.assignClassesToUser(formData)
    }

    const selectedDays = (day) => {
        
        const index = days.value.indexOf(day)
    
        if (index >= 0) {
            // Si ya existe el día seleccionado, se quita
            days.value.splice(index, 1)
        } else {
            // Si no existe el día seleccionado se agrega
            days.value.push(day)
        }
    } 

    const discardChanges = () => {
        days.value = []
        router.push({ name: 'admin-home' })
    }

</script>

<template>
    <section class="px-8 mt-5">
            <div class="bg-white dark:bg-slate-700 rounded-lg">
                <div class="border-b border-gray-300 dark:border-slate-600 p-4">
                    <h2 class="px-4 text-gray-700 dark:text-slate-300 uppercase"> Clases semanales </h2>
                </div>
                <FormKit
                    id="userClassesForm"
                    type="form"
                    :actions="false"
                    incomplete-message="* Revisa los campos marcados con error *"
                    message-class="text-red-700 my-5 text-sm font-bold"
                    @submit="handleSubmit">

                        <div class="p-4 mt-2">
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-4">
                                <div>
                                    <label 
                                        for="entry_time" 
                                        class="text-gray-700 dark:text-slate-300 text-lg font-extralight px-4"> Hora de entrada </label>
                                </div>
                                <div>
                                    <FormKit
                                        type="time"
                                        id="entry_time"
                                        name="entry_time"
                                        input-class="p-4 bg-gray-200 dark:bg-slate-800 rounded-lg w-full shadow text-gray-700 dark:text-slate-300"
                                        message-class="text-red-500 text-sm px-2 font-light mt-2"
                                        validation="required"
                                        :validation-messages="{
                                            required: 'Selecciona la hora de entrada'
                                        }"
                                        v-model="entryTimeMonday"/>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-4">
                                <div>
                                    <label 
                                        for="departure_time" 
                                        class="text-gray-700 dark:text-slate-300 text-lg font-extralight px-4"> Hora de salida </label>
                                </div>
                                <div>
                                    <FormKit
                                        type="time"
                                        id="departure_time"
                                        name="departure_time"
                                        input-class="p-4 bg-gray-200 dark:bg-slate-800 rounded-lg w-full shadow text-gray-700 dark:text-slate-300"
                                        message-class="text-red-500 text-sm px-2 font-light mt-2"
                                        validation="required"
                                        :validation-messages="{
                                            required: 'Selecciona la hora de salida'
                                        }"
                                        v-model="departureTimeMonday"/>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-4">
                                <div>
                                    <label 
                                        for="name" 
                                        class="text-gray-700 dark:text-slate-300 text-lg font-extralight px-4"> 
                                        Días de clases
                                    </label>
                                </div>
                                <div>
                                    <div class="flex flex-wrap justify-center bg-gray-200 dark:bg-slate-800 p-2 rounded-lg gap-1">
                                        <div
                                            v-for="day in weeklyDays()"
                                            :key="day.id"
                                            class="px-2 py-1 lg:px-3 lg:py-1 rounded hover:opacity-75 cursor-pointer flex items-center gap-x-2"
                                            :class="days.includes(day.day)
                                                ? 'bg-indigo-500 text-white' 
                                                : 'bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-slate-300' "
                                            @click="selectedDays(day.day)">
                                                {{ day.day }}
                                                    <span
                                                        v-if="days.includes(day.day)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                                            </svg>
                                                    </span>
                                        </div>
                                        
                                    </div>
                                    <div
                                        v-if="emptyDays.status"
                                        class="mt-2 px-2 text-red-500 text-sm">
                                            {{ emptyDays.text }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border-t border-gray-300 dark:border-slate-600 p-4">
                            <div class="flex justify-end items-center gap-x-3">
                                <button
                                    @click.prevent="discardChanges()"
                                    class="px-4 p-2 font-light bg-gray-200 dark:bg-slate-600 text-gray-500 dark:text-slate-400 rounded-lg hover:opacity-75 cursor-pointer">
                                        Descartar
                                </button>
                                <FormKit
                                    type="submit"
                                    input-class="px-4 p-2 text-white font-light bg-blue-600 rounded-lg hover:opacity-75 cursor-pointer"
                                    label="Guardar cambios"/>
                            </div>
                        </div>

                </FormKit>
            </div>
    </section>
</template>