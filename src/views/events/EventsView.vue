<script setup>

    import EventItem from '@/components/events/EventItem.vue'
    import { useEventsStore } from '@/stores/events'

    const events = useEventsStore()

</script>

<template>
    <section class="p-8 my-8">
        <div class="px-8 flex gap-x-2 md:gap-x-6 lg:gap-x-6">
            <p class="dark:text-white uppercase inline-flex gap-2 py-1"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg> Filtrar
            </p>
            <div class="flex items-center gap-x-4">
                <button
                    class="bg-gray-100 dark:bg-slate-700 px-3 py-1 uppercase inline-flex items-center gap-x-1 rounded-lg dark:text-white font-light hover:opacity-75 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg> Recientes
                </button>
                <button
                    class="bg-gray-100 dark:bg-slate-700 px-3 py-1 uppercase inline-flex items-center gap-x-1 rounded-lg dark:text-white font-light hover:opacity-75 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg> Antiguos
                </button>
            </div>
        </div>
        <div class="p-8 mt-10">
            <EventItem
                v-for="event in events.events"
                :key="event.id"
                :event="event"/>
        </div>
    </section>
</template>