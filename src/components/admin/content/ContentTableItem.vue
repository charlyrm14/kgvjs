<script setup>
    import { formattedDate } from '@/helpers';
    import { useContentStore } from '@/stores/content';
    
    defineProps({
        content: {
            type: Object,
            required: true
        }
    })

    const contentStore = useContentStore()

</script>

<template>
    <tr>
        <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
            <div class="flex items-center gap-x-3">
                <div>
                    <img 
                        loading="lazy"
                        :src="contentStore?.urlAPI + '/' + content?.cover_image" 
                        :alt="content?.title"
                        class="hidden md:w-14 md:block rounded">
                </div>
                <div>
                    <h2 class="font-medium text-gray-800 dark:text-white "> {{ content?.title ?? 'Desconocido' }} </h2>
                    <p 
                        v-if="content?.content_type_id === 1"
                        class="text-sm font-normal text-pink-500 inline-flex items-center gap-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                            </svg> Aviso
                    </p>
                    <p 
                        v-else
                        class="text-sm font-normal text-cyan-500 inline-flex items-center gap-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg> Evento
                    </p>
                </div>
            </div>
        </td>
        <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
            <div 
                class="inline px-3 py-1 text-sm font-normal rounded-full"
                :class="content?.active === 1 ? 'text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800' : 'dark:bg-slate-700 dark:text-slate-400'">
                    {{ content?.active === 1 ? 'Publicado' : 'No publicado' }}
            </div>
        </td>
        <td class="px-4 py-4 text-sm whitespace-nowrap">
            <div>
                <h4 class="text-gray-700 dark:text-gray-200"> {{ formattedDate(content?.created_at) ?? 'S/F' }} </h4>
            </div>
        </td>

        <td class="px-4 py-4 text-sm whitespace-nowrap">
            <div class="rounded-lg flex justify-end">
                <RouterLink 
                    :to="{
                        name: 'admin-content-edit',
                        params: {
                            slug: content?.slug
                        }
                    }"
                    class="bg-indigo-400 text-white cursor-pointer px-4 py-2 rounded-lg hover:opacity-75">
                        Administrar
                </RouterLink>
            </div>
        </td>

    </tr>
</template>