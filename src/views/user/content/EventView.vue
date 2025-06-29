<script setup>
    import HomeLink from '@/components/ui/links/HomeLink.vue';
    import ContentItem from '@/components/user/contents/ContentItem.vue';
    import { useContentStore } from '@/stores/content';
    import { onMounted, ref } from 'vue';
    
    const events = ref([])
    const contentStore = useContentStore()

    onMounted(async() => {
        await contentStore.fetchGetContents()
        events.value = await contentStore?.contents?.filter(item => item.content_type_id === 2)
    })

</script>

<template>
    <section class="px-6 md:px-12 lg:px-16 py-8 md:py-10">
        <div class="flex justify-start mt-8">
            <HomeLink/>
        </div>
        <div class="text-center mt-2 mb-8">
            <h2 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white uppercase tracking-wide">
                Eventos
            </h2>
            <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                Explora los eventos más recientes y mantente al tanto de lo que sucede en <span class="text-blue-500"> King Dreams  </span>.
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 py-4 gap-y-4 md:gap-x-4 md:gap-y-0">
            <ContentItem
                v-for="event in events"
                :key="event.id"
                :content="event"/>
        </div>
    </section>
</template>
