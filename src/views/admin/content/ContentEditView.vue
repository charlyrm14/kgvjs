<script setup>
    
    import FormEditEvent from '@/components/admin/content/FormEditEvent.vue';
    import FormEditNotice from '@/components/admin/content/FormEditNotice.vue';
    import Alert from '@/components/ui/alerts/admin/Alert.vue';
    import DeleteContent from '@/components/ui/modals/admin/content/DeleteContent.vue';
    import { useContentStore } from '@/stores/content';
    import { onMounted, ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    
    
    const route = useRoute()
    const router = useRouter()
    const contentStore = useContentStore()

    const { slug } = route.params

    const showDeleteContentModal = ref(false)

    onMounted(async() => {
        await contentStore.fetchGetContentBySlug(slug)

        if (!contentStore?.contentDetail) {
            router.push({ name: 'admin-content' })
        }
    })

    const openDeleteContentModal = () => {
        showDeleteContentModal.value = true
    }

    const closeDeleteContentModal = () => {
        showDeleteContentModal.value = false
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

        <FormEditNotice
            v-if="contentStore?.contentDetail?.content_type_id === 1"
            :notice="contentStore?.contentDetail"
            :slug="slug"
            @openDeleteModal="openDeleteContentModal"/>

        <FormEditEvent
            v-if="contentStore?.contentDetail?.content_type_id === 2"
            :event="contentStore?.contentDetail"
            :slug="slug"
            @openDeleteModal="openDeleteContentModal"/>

    </section>

    <DeleteContent
        v-if="showDeleteContentModal"
        :content="contentStore?.contentDetail"
        @closeDeleteModal="closeDeleteContentModal"/>
        
</template>
