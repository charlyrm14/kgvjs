<script setup>
    import { typeContentIcon, formattedDate } from '@/helpers';
    import { useContentStore } from '@/stores/content';
    import { onMounted } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    
    const route = useRoute()
    const router = useRouter()

    const { slug } = route.params

    const contentStore = useContentStore()

    onMounted(async() => {
        await contentStore?.fetchGetContentBySlug(slug)
    })

    const goBack = () => {
        router.back()
    }

</script>

<template>
    <section class="px-6 md:px-12 lg:px-16 py-8 md:py-10">
        <div class="flex justify-start mt-8">
            <button
                @click="goBack()"
                class="bg-pink-600 text-white rounded-full p-2 md:p-3 cursor-pointer hover:opacity-75">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
            </button>
        </div>
        <div class="flex justify-center items-center mt-2">
            <h2 
                :class="contentStore?.contentDetail?.content_type_id === 1 ? 'text-pink-500' : 'text-cyan-500'"
                class="text-2xl md:text-4xl font-bold uppercase tracking-wide">
                    {{ contentStore?.contentDetail?.title ?? '' }}
            </h2>
        </div>
        <div class="flex justify-center items-center mt-1">
            <p 
                class="inline-flex items-center uppercase gap-x-2 font-light"
                :class="contentStore?.contentDetail?.content_type_id === 1 ? 'text-pink-500' : 'text-cyan-500'">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none"
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        class="size-5">
                            <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                :d="typeContentIcon(contentStore?.contentDetail?.content_type_id )" />
                    </svg> {{ contentStore?.contentDetail?.content_type_id === 1 ? 'Aviso' : 'Evento' }}
            </p>
        </div>
        <div class="flex justify-center items-center mt-2">
            <p 
                :class="contentStore?.contentDetail?.content_type_id === 1 ? 'text-pink-500' : 'text-cyan-500'"
                class="text-xl md:text-lg font-light">
                    Publicado el: {{ formattedDate(contentStore?.contentDetail?.created_at) ?? '' }}
            </p>
        </div>
        <div
            v-if="contentStore?.contentDetail?.content_type_id === 2"
            class="flex justify-center items-center gap-x-4 mt-8">
                <div class="bg-purple-200 py-4 px-6 rounded-lg w-40 md:w-50">
                    <div class="flex justify-center">
                        <p class="text-center text-lg text-purple-600 font-light"> INICIA </p>
                    </div>
                    <div class="flex justify-center my-1">
                        <p class="text-4xl text-purple-600 font-bold"> {{ contentStore?.contentDetail?.start_hour ?? '--' }} </p>
                    </div>
                    <div class="flex justify-center">
                        <p class="text-sm text-purple-600 font-bold"> {{ formattedDate(contentStore?.contentDetail?.start_date) ?? '--' }} </p>
                    </div>
                </div>
                <div class="bg-indigo-200 py-4 px-6 rounded-lg my-1 w-40 md:w-50">
                    <div class="flex justify-center">
                        <p class="text-center text-lg text-indigo-600 font-light"> TERMINA </p>
                    </div>
                    <div class="flex justify-center my-1">
                        <p class="text-4xl text-indigo-600 font-bold"> {{ contentStore?.contentDetail?.end_hour ?? '--' }} </p>
                    </div>
                    <div class="flex justify-center">
                        <p class="text-sm text-indigo-600 font-bold"> {{ formattedDate(contentStore?.contentDetail?.end_date) ?? '--' }} </p>
                    </div>
                </div>
        </div>
        <div class="mt-10">
            <p class="text-gray-700 dark:text-slate-300 text-lg"> {{ contentStore?.contentDetail?.content ?? '' }} </p>
        </div>
    </section>
</template>
