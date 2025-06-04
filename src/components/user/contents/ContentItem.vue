<script setup>
    import { 
        randomColor, 
        getDayByDate, 
        getMonthNameByDate, 
        getHourByDate,
        formattedDate
    } from '@/helpers'
    import { useContentStore } from '@/stores/contents';

    const contentStore = useContentStore()

    defineProps({
        content: {
            type: Object,
            required: true
        }
    })

</script>

<template>
    <div class="mx-auto bg-white dark:bg-slate-700 rounded-xl shadow-md p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 my-4">
        <div
            v-if="content.content_category_id == 1"
            lass="px-4 py-2 rounded-md">
                <img 
                    :src="contentStore.url_api + '/' + content?.cover_image" 
                    :alt="content.title"
                    class="w-24 m-auto">
        </div>
        <!-- Fecha y hora Evento -->
        <div
            v-if="content.content_category_id == 2"
            :class="randomColor()"
            class="bg-green-100 text-center px-4 py-2 rounded-md w-full md:w-24">
            <p 
                class="text-xs font-semibold text-gray-600">
                    {{ getDayByDate(content.start_date) }} - {{ getDayByDate(content.end_date) }} 
                        <span class="block uppercase"> {{ getMonthNameByDate(content.start_date) }} </span>
            </p>
            <p 
                class="text-2xl font-bold text-gray-800 mt-1"> 
                    {{ getHourByDate(content.start_date) }} 
            </p>
        </div>

        <!-- Info del evento -->
        <div class="flex-1 text-center md:text-left px-2">
            <h2 class="text-lg font-light text-gray-600 dark:text-white uppercase"> {{ content.title }} </h2>
            <p class="text-sm text-gray-600 dark:text-slate-400 mt-1">
                {{ content.short_description }}
                    <span> {{ formattedDate(content.created_at) }} </span>
            </p>
        </div>

        <!-- Enlace a calendario -->
        <RouterLink
            :to="{
                name: 'contents-info',
                params: {
                    slug: content.slug
                }
            }"
            class="bg-blue-500 px-4 py-2 rounded-lg uppercase text-sm text-white flex items-center justify-center md:justify-end gap-1 cursor-pointer whitespace-nowrap hover:opacity-75">
                Ver más
        </RouterLink>
    </div>
</template>