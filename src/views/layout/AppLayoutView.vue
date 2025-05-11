<script setup>
    import { onMounted, onBeforeUnmount, reactive } from 'vue';
    import { RouterLink, useRoute } from 'vue-router';
    import pusher from '@/lib/pusher.js';

    const route = useRoute()
    const event = reactive({
        title: '',
        short_description: '',
        start_date: ''
    })

    let channel;

    onMounted(() => {
        channel = pusher.subscribe('channel-notifications');
        
        channel.bind('new-notification-event', (data) => {
            console.log(data);
        });
    });

    onBeforeUnmount(() => {
        if (channel) {
            channel.unbind_all();
            pusher.unsubscribe('channel-notifications');
        }
    });

</script>

<template>

    <header class="bg-white dark:bg-slate-700 p-2 shadow z-20">
        <div class="flex justify-between items-center px-2">
            <div>
                <p class="text-lg uppercase">King Dreams</p>
            </div>
            <div>
                <p class="text-sm"> Miércoles 23, Abril </p>
                <h1 class="text-lg font-bold"> Bienvenido </h1>
            </div>
        </div>
    </header>

    <section class="hidden md:flex justify-center items-center mt-10">
        <div class="flex justify-center gap-5 p-1 rounded-full bg-gray-100 dark:bg-slate-700 border border-gray-300 dark:border-slate-700">
            <div>
                <RouterLink
                    :to="{ name: 'mi-progreso' }"
                    class="font-extralight dark:text-white py-2 px-3 cursor-pointer uppercase flex items-center gap-2"
                    :class="route.name === 'mi-progreso' ? 'border border-gray-300 dark:border-slate-700 rounded-full py-2 px-3 bg-white dark:bg-slate-800' : '' ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                        </svg> Mi progreso
                </RouterLink>
            </div>
            <div>
                <RouterLink
                    :to="{ name: 'mis-clases' }"
                    class="font-extralight dark:text-white py-2 px-3 cursor-pointer uppercase flex items-center gap-2"
                    :class="route.name === 'mis-clases' ? 'border border-gray-300 dark:border-slate-700 rounded-full py-2 px-3 bg-white dark:bg-slate-800' : '' ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg> Mis clases
                </RouterLink>
            </div>
            <div>
                <RouterLink
                    to="#"
                    class="font-extralight dark:text-white py-2 px-3 cursor-pointer uppercase flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                        </svg> Blog
                </RouterLink>
            </div>
            <div>
                <RouterLink
                    :to="{ name: 'eventos' }"
                    class="font-extralight dark:text-white py-2 px-3 cursor-pointer uppercase flex items-center gap-2"
                    :class="route.name === 'eventos' ? 'border border-gray-300 dark:border-slate-700 rounded-full py-2 px-3 bg-white dark:bg-slate-800' : '' ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                        </svg> Eventos
                </RouterLink>
            </div>
        </div>
    </section>

    <RouterView/>
</template>