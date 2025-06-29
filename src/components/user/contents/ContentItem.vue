<script setup>
    import { formattedDate } from '@/helpers';
    
    defineProps({
        content: {
            type: Object,
            required: true
        }
    })

</script>

<template>
    <RouterLink 
        :to="{
            name: 'content-detail',
            params: {
                slug: content?.slug
            }
        }"
        class=" rounded-lg shadow-md border  dark:border-none cursor-pointer hover:opacity-75"
        :class="content?.content_type_id === 1 ? 'bg-red-100 border-red-200' : 'bg-purple-100 border-purple-200'">
            <div class="px-4 py-2 flex justify-between items-center">
                <div class="flex gap-x-4">
                    <img 
                        src="../../../assets/img/notice.png" 
                        alt=""
                        class="rounded-full w-15">
                    <h2 class="text-lg md:text-base truncate"> 
                        {{ content?.title }}
                            <span class="block text-sm font-light"> {{ formattedDate(content?.created_at) }} </span>
                    </h2>
                </div>
                <button
                    class="rounded-full p-1 hover:opacity-75 cursor-pointer"
                    :class="content?.content_type_id === 1 ? 'bg-red-200 text-red-400' : 'bg-purple-200 text-purple-400'">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                </button>
            </div>
    </RouterLink>
</template>