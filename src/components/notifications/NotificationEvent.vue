<script setup>
    import { useNotificationsStore } from '@/stores/notifications';

    const notificationStore = useNotificationsStore()

    defineProps({
        event: {
            type: Object,
            required: true
        }
    })

</script>

<template>
    <div class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white dark:bg-slate-700 px-6 py-4 rounded-lg shadow-lg border border-slate-500">
        <div class="flex justify-between items-center gap-10">
            <div class="flex justify-start items-center gap-2">
                <div class="bg-white dark:bg-slate-500 p-0.5 rounded-lg border border-gray-300 dark:border-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-gray-400 dark:text-slate-300">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>
                </div>
                <p class="uppercase text-gray-500 dark:text-slate-300 text-base font-light"> Nuevo evento  </p>
            </div>
            <div>
                <svg
                    @click="notificationStore.closeNotification"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 dark:text-slate-400 cursor-pointer hover:opacity-75">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
        <div class="mt-2">
            <p class="uppercase text-green-500 px-8"> {{ event.title }} </p>
            <div class="mt-4 px-8 flex justify-start items-center gap-4">
                <button
                    @click="notificationStore.closeNotification"
                    class="dark:bg-slate-500 border border-gray-300 dark:border-slate-600 uppercase px-4 py-2 rounded-lg shadow-lg hover:opacity-75 cursor-pointer dark:text-slate-200">
                        Cerrar
                </button>
                <RouterLink
                    :to="{
                        name: 'evento-info',
                        params: {
                            slug: event.slug
                        }
                    }"
                    class="bg-indigo-500 text-white uppercase px-4 py-2 rounded-lg shadow-lg hover:opacity-75 cursor-pointer">
                        Ver más
                </RouterLink>
            </div>
        </div>
    </div>
</template>