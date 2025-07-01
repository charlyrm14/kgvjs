<script setup>
    import ReportsAPI from '@/api/ReportsAPI'
    import Message from '@/components/ui/alerts/admin/Message.vue'
    import { currentYear, monthsOfTheYear, typeAlertIcon } from '@/helpers'
    import { reactive } from 'vue'
    
    const message = reactive({
        text: '',   
        color: '',
        icon: '',
        status: false,
    })

    const props = defineProps({
        user: {
            type: Object,
            required: true
        }
    })

    const generateReport = async(month) => {

        const data = {
            user_id: props?.user?.id,
            date: currentYear() + '-' + month 
        }

        try {

            const response = await ReportsAPI.reportAttendanceByUser(data)

            if (response?.status === 404) {
                handleMessage(response.data.message + ' en el mes seleccionado', 'error')
            } 

        } catch (error) {
            console.error(error)
        } finally {
            resetMessage()
        }
    }

    const handleMessage = (title, type = 'success') => {
        message.text = title
        message.color = type === 'success' ? 'green' : 'red'
        message.icon = typeAlertIcon(type)
        message.status = true
    }

    const resetMessage = () => {
        setTimeout(() => {
            message.text = ''
            message.color = ''
            message.icon = ''
            message.status = false
        }, 3000);
    }

</script>

<template>
    <div class="p-1 md:p-4 mt-4 md:mt-0">

        <div>
            <label for="name" class="text-gray-700 dark:text-slate-300 text-lg font-extralight"> 
                Historial asistencias
                    <span class="block text-sm"> Selecciona un mes para generar el reporte </span>
            </label>
        </div>

        <Message
            v-if="message.status"
            :text="message.text"
            :color="message.color"
            :icon="message.icon"/>

        <div class="mt-3 overflow-y-auto max-h-[300px]">
            <div
                v-for="month in monthsOfTheYear()"
                :key="month.id"
                class="my-3 border-b border-gray-300 dark:border-slate-600">
                <div class="flex justify-between items-center my-2">
                    <p class="text-black dark:text-slate-300 text-lg font-light"> {{ month.name }} 2025 </p>
                    <button 
                        @click="generateReport(month.value)"
                        class="bg-blue-500 text-white text-base px-4 rounded-lg cursor-pointer hover:opacity-75">
                            Exportar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>