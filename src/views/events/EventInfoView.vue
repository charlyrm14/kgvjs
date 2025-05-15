<script setup>
    import EventsAPI from '@/api/EventsAPI';
    import EventItem from '@/components/events/EventItem.vue';
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';
    import { 
        randomColor, 
        getDayByDate, 
        getMonthNameByDate, 
        getHourByDate 
    } from '@/helpers'

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
                class="uppercase bg-pink-500 text-white border border-black dark:border-white inline-flex gap-x-2 items-center px-4 py-2 cursor-pointer hover:opacity-75">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                    </svg> Regresar
            </RouterLink>
        </div>
        <div class="mx-auto bg-white dark:bg-slate-700 rounded-xl shadow-md p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 my-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                    class="md:col-span-2 lg:col-span-1 p-4">
                    <img 
                        src="../../assets/img/img-53.jpg" 
                        alt="Imagen evento" 
                        class="rounded-lg md:h-full">
                </div>

                <div class="p-4 md:py-4 md:px-0 lg:py-4 lg:px-0">
                    <p class="font-light dark:text-slate-400 flex items-center gap-2"> 
                        <span class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg> Escuela de Natación King Dreams
                        </span> 
                    </p>
                    <h3 class="text-4xl my-2 text-purple-600 uppercase font-extrabold text-shadow"> {{ event?.title }} </h3>
                    <p class="dark:text-slate-400 text-lg"> {{ event?.content }} </p>

                    <div class="flex justify-start items-center gap-4">
                        <div
                            :class="randomColor()"
                            class="bg-green-100 text-center px-4 py-2 rounded-md md:w-30 mt-5">
                            <span class="uppercase"> Inicia </span>
                            <p class="text-2xl font-semibold text-gray-600">
                                {{ getDayByDate(event?.start_date) }}
                                    <span class="block uppercase font-light text-base"> {{ getMonthNameByDate(event?.start_date) }} </span>
                            </p>
                            <p class="text-2xl font-light text-gray-800 mt-1"> {{ event?.start_hour }} </p>
                        </div>
                        <div
                            :class="randomColor()"
                            class="bg-green-100 text-center px-4 py-2 rounded-md md:w-30 mt-5">
                            <span class="uppercase"> Termina </span>
                            <p class="text-2xl font-semibold text-gray-600">
                                {{ getDayByDate(event?.end_date) }}
                                    <span class="block uppercase font-light text-base"> {{ getMonthNameByDate(event?.end_date) }} </span>
                            </p>
                            <p class="text-2xl font-light text-gray-800 mt-1"> {{ event?.end_hour }} </p>
                        </div>
                    </div>

                    <div class="mt-8">
                        <button
                            class="w-full md:w-auto lg:w-auto flex justify-center items-center gap-2 uppercase bg-black text-white rounded-lg px-4 py-2 hover:opacity-75 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg> Apartar mi lugar
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>