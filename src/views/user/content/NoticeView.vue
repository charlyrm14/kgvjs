<script setup>
    import HomeLink from '@/components/ui/links/HomeLink.vue';
    import ContentItem from '@/components/user/contents/ContentItem.vue';

    import { useContentStore } from '@/stores/content';
    import { onMounted, ref } from 'vue';

    const notices = ref([])
    const contentStore = useContentStore()

    onMounted(async() => {
        await contentStore.fetchGetContents()
        notices.value = await contentStore?.contents?.filter(item => item.content_type_id === 1)
    })

</script>

<template>
    <section class="px-6 md:px-12 lg:px-16 py-8 md:py-10">
        <div class="flex justify-start mt-8">
            <HomeLink/>
        </div>
        <div class="text-center mt-2 mb-8">
            <h2 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white uppercase tracking-wide">
                Avisos
            </h2>
            <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                Mantente informado con los avisos más importantes y actualizaciones relevantes en <span class="text-blue-500"> King Dreams  </span>.
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 py-4 gap-y-4 md:gap-x-4 md:gap-y-0">
            <ContentItem
                v-for="notice in notices"
                :key="notice.id"
                :content="notice"/>
        </div>
    </section>
</template>
