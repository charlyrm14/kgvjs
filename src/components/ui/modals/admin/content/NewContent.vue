<script setup>
    import FormNewEvent from '@/components/admin/content/FormNewEvent.vue';
    import FormNewNotice from '@/components/admin/content/FormNewNotice.vue';
    //import { useContentStore } from '@/stores/contents';
    import { ref } from 'vue';

    //const contentStore = useContentStore()

    const contentType = ref(0)
    
</script>

<template>
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-[90%] max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-2xl xl:max-w-2xl p-6 mx-4">
            
            <!-- Encabezado -->
            <div class="flex justify-between items-center mb-4">
                <div class="flex justify-start items-center">
                    <div class="bg-gray-200 dark:bg-slate-700 flex justify-between items-center rounded-lg p-1">
                        <button
                            @click="contentType = 0"
                            class="flex justify-center items-center gap-x-2 px-4 py-1 uppercase cursor-pointer"
                            :class="contentType == 0 ? 'bg-pink-500 rounded text-white' : ' text-slate-500 font-light' ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                                </svg> Avisos
                        </button>
                        <button
                            @click="contentType = 1"
                            :class="contentType == 1 ? 'bg-blue-500 rounded text-white' : ' text-slate-500 font-light' "
                            class="flex items-center gap-x-2 px-4 py-1 uppercase cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                </svg> Eventos
                        </button>
                    </div>
                </div>
                <button
                    class="text-slate-400 hover:text-red-500 transition cursor-pointer">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            class="h-5 w-5" 
                            fill="none" 
                            viewBox="0 0 24 24"
                            stroke="currentColor" 
                            stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>

            <div class="my-5">
                <div
                    v-if="contentType == 0">
                        <FormNewNotice/>
                </div>
                <div
                    v-else>
                        <div 
                            class="flex justify-center">
                                <p class="text-red-500 my-3"> Un mensaje </p>
                        </div>
                        <FormNewEvent/>
                </div>
            </div>

        </div>
    </div>
</template>