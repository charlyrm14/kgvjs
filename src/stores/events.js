import EventsAPI from '@/api/EventsAPI'
import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

export const useEventsStore = defineStore('events', () => {

    const events = ref([])

    onMounted( async () => {

        const data  = await EventsAPI.getEvents()
        events.value = data.data
    })

    return {
        events
    }
})
