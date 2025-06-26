<script setup>
    import ContentTable from '@/components/admin/content/ContentTable.vue';
    import ContentTableFilter from '@/components/admin/content/ContentTableFilter.vue';
    import Alert from '@/components/ui/alerts/admin/Alert.vue';
    import NewContent from '@/components/ui/modals/admin/content/NewContent.vue';
    import { useContentStore } from '@/stores/content';
    import { onMounted, ref } from 'vue';
    
    
    const showNewContentModal = ref(false)

    const contentStore = useContentStore()

    onMounted(async() => {
        await contentStore.fetchGetContents()
    })

    const closeNewContentModal = () => {
        showNewContentModal.value = false
    }

</script>

<template>

    <Alert
        v-if="contentStore?.alert?.status"
        :title="contentStore?.alert?.title"
        :subtitle="contentStore?.alert?.subtitle"
        :color="contentStore?.alert?.color"
        :icon="contentStore?.alert?.icon"/>

    <section class="px-6 md:px-12 lg:px-16 py-8 md:py-10">
        <div class="sm:flex sm:items-center sm:justify-between">
            <div>
                <div class="flex items-center gap-x-3">
                    <h2 class="text-lg font-medium text-gray-800 dark:text-white"> Contenido </h2>
                </div>
            </div>

            <div class="flex justify-end items-center mt-4 gap-x-3">
                <button
                    @click="showNewContentModal = !showNewContentModal"
                    class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-indigo-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-indigo-600 dark:hover:bg-indigo-500 dark:bg-indigo-600 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span> Agregar contenido </span>
                </button>
            </div>
        </div>

        <div class="mt-6 md:flex md:items-center md:justify-between">
            <ContentTableFilter/>
            <div class="relative flex items-center mt-4 md:mt-0">
                <span class="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </span>
                <input type="text" placeholder="Buscar" class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
            </div>
        </div>

        <ContentTable
            :contents="contentStore?.filterContent"/>

        <div class="mt-6 sm:flex sm:items-center sm:justify-between ">
            <div class="text-sm text-gray-500 dark:text-gray-400">
                Página <span class="font-medium text-gray-700 dark:text-gray-100"> 1 de 10 </span> 
            </div>

            <div class="flex items-center mt-4 gap-x-4 sm:mt-0">
                <a href="#" class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border border-gray-200 rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>

                    <span>
                        Anterior
                    </span>
                </a>

                <a href="#" class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border border-gray-200 rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                    <span>
                        Siguiente
                    </span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </a>
            </div>
        </div>

    </section>

    <NewContent 
        v-if="showNewContentModal"
        @closeContentModal="closeNewContentModal"/>

</template>