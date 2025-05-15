<script setup>
    import { onMounted, onBeforeUnmount } from 'vue';
    import Header from '@/components/layout/Header.vue';
    import NavMenu from '@/components/layout/NavMenu.vue';
    import NotificationEvent from '@/components/notifications/NotificationEvent.vue';
    import Footer from '@/components/layout/Footer.vue';
    import { useNotificationsStore } from '@/stores/notifications';

    const notificationStore = useNotificationsStore()
    
    onMounted(() => {
        notificationStore.subscribeToNotifications()
    });

    onBeforeUnmount(() => {
        notificationStore.unsubscribeFromNotifications()
    });

</script>

<template>
    <Header/>
    <NavMenu/>
        <NotificationEvent
            v-if="notificationStore.showNotification"
            :event="notificationStore.event"/>
        <RouterView/>
    <Footer/>
</template>