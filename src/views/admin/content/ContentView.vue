<script setup>
    import ContentItem from '@/components/admin/content/ContentItem.vue';
    import Alert from '@/components/alerts/admin/Alert.vue';
    import DeleteContent from '@/components/modals/admin/content/DeleteContent.vue';
    import NewContent from '@/components/modals/admin/content/NewContent.vue';
    import { useContentStore } from '@/stores/contents';
    
    const contentStore = useContentStore()
    
</script>

<template>

    <Alert
        v-if="contentStore.alert.status"
        :bgColor="contentStore.alert.bgColor"
        :textColor="contentStore.alert.textColor"
        :text="contentStore.alert.text"/>

    <section class="p-8 my-8">
        <div class="my-4">
            <div class="flex justify-end items-center">
                <div>
                    <button
                        @click="contentStore.showContentModal()"
                        class="bg-indigo-500 text-white px-4 py-2 cursor-pointer hover:opacity-75 rounded flex items-center gap-2 font-extralight">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg> Nuevo contenido
                    </button>
                </div>
            </div>
        </div>

        <div class="mt-10 rounded-lg">
            <div class="flex justify-between items-center">
                <div class="flex justify-start items-center gap-x-2">
                    <div 
                        class="bg-blue-400 rounded-full p-1 flex items-center justify-between gap-x-2 px-3">
                            <button
                                @click="contentStore.contentSelected = 0"
                                class="uppercase py-1 px-4 rounded-full font-extralight cursor-pointer text-gray-200 dark:text-slate-300 flex items-center gap-x-2"
                                :class="contentStore.contentSelected == 0 ? 'bg-blue-600 text-white' : '' ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                    </svg> Todo
                            </button>
                            <button
                                @click="contentStore.contentSelected = 1"
                                class="uppercase py-1 px-4 rounded-full font-extralight cursor-pointer text-gray-200 dark:text-slate-300 flex items-center gap-x-2"
                                :class="contentStore.contentSelected == 1 ? 'bg-blue-600 text-white' : '' ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                                    </svg> Avisos
                            </button>
                            <button
                                @click="contentStore.contentSelected = 2"
                                class="uppercase py-1 px-4 rounded-full font-extralight cursor-pointer text-gray-200 dark:text-slate-300 flex items-center gap-x-2"
                                :class="contentStore.contentSelected == 2 ? 'bg-blue-600 text-white' : '' ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg> Eventos
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-10 bg-white dark:bg-slate-700 p-4 rounded-lg shadow-lg">
            <ContentItem
                v-for="content in contentStore.filteredItems"
                :key="content.id"
                :content="content"/>
            <RouterLink 
                v-if="contentStore.errorTokenExpired.status"
                class="dark:text-pink-500 text-2xl uppercase underline cursor-pointer flex justify-center"
                :to="{ name: 'login' }">
                    {{ contentStore.errorTokenExpired.text }}
            </RouterLink>
            <p
                v-if="contentStore.contents.length === 0"
                @click="contentStore.showContentModal()"
                class="dark:text-pink-500 text-2xl uppercase underline cursor-pointer flex justify-center">
                    {{ contentStore.contentsNotFound.text }}
            </p>
        </div>

    </section>

    <NewContent
        v-if="contentStore.statusContentModal"/>

    <DeleteContent
        v-if="contentStore.statusDeleteContentModal"/>

</template>