<script setup>
    import EventsAPI from '@/api/EventsAPI';
    import EventItem from '@/components/events/EventItem.vue';
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute()
    const { slug } = route.params
    const event = ref(null)


    onMounted( async () => {

        const response = await EventsAPI.getEventBySlug(slug)
        event.value = response.data
    })

</script>

<template>
    <section class="p-8 my-8">
        <div class="flex justify-end items-center my-6">
            <RouterLink
                :to="{ name: 'eventos' }"
                class="uppercase bg-black text-white inline-flex gap-x-2 items-center px-4 py-2 cursor-pointer hover:opacity-75 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                    </svg> Regresar
            </RouterLink>
        </div>
        <div class="relative">
            <img 
                src="../../assets/img/img-53.jpg" 
                :alt="event?.slug"
                class="rounded-lg w-full h-92 m-auto shadow-2xl">
            <div class="absolute bottom-3 left-4">
                <span class="inline-flex gap-2 items-center uppercase bg-lime-500 text-white px-6 py-3 rounded-lg text-lg shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                    </svg> Nuevo
                </span>
            </div>
        </div>
        <div class="mt-5">
            <div class="flex justify-between items-center">
                <p class="text-pink-500"> {{ event?.created_at }} </p>
            </div>
            <h1 class="uppercase mt-5 text-3xl dark:text-white font-extralight"> {{ event?.title }} </h1>
        </div>
        <div class="mt-10">
            <p class="dark:text-slate-300 font-light text-lg"> {{ event?.content }} </p>
        </div>
        <div class="mt-10 border-b border-gray-300 dark:border-slate-700">
            <h2 class="uppercase dark:text-slate-400 font-light mb-2 text-xl"> Detalles del evento </h2>
        </div>
        <div class="flex justify-center items-center gap-x-10">
            <div class="mt-10">
                <div class="flex justify-start items-center gap-5">
                    <div class="w-16 h-16 md:w-24 md:h-24 lg:w-34 lg:h-34 rounded-full bg-indigo-300 text-white flex items-center justify-center text-center">
                        <p class="text-base md:text-2xl lg:text-2xl text-indigo-600"> 
                            {{ event?.start_hour }} 
                                <span class="block text-base"> AM </span>
                        </p>
                    </div>
                    <div>
                        <p class="uppercase text-base md:text-xl lg:text-xl font-extralight dark:text-slate-300"> Inicia: {{ event?.start_date }} </p>
                        <p class="uppercase text-lg font-light dark:text-slate-500"> {{ event?.start_hour }}  </p>
                    </div>
                </div>
            </div>
            <div class="mt-10">
                <div class="flex justify-start items-center gap-5">
                    <div class="w-16 h-16 md:w-24 md:h-24 lg:w-34 lg:h-34 rounded-full bg-pink-200 text-white flex items-center justify-center text-center">
                        <p class="text-base md:text-2xl lg:text-2xl text-pink-600"> 
                            {{ event?.end_hour }}  
                                <span class="block text-base"> PM </span>
                        </p>
                    </div>
                    <div>
                        <p class="uppercase text-base md:text-xl lg:text-xl font-extralight dark:text-slate-300"> Termina: {{ event?.end_date }} </p>
                        <p class="uppercase text-lg font-light dark:text-slate-500"> {{ event?.end_hour }}  </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-20 border-b border-gray-300 dark:border-slate-700">
            <h2 class="uppercase dark:text-slate-400 font-light mb-2 text-xl"> Otros eventos que podrían interesarte </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            <EventItem
                v-for="item in event?.other_events"
                :key="item.id"
                :event="item"/>
        </div>
    </section>
</template>