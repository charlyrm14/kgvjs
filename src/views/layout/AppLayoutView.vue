<script setup>
    import { onMounted, onBeforeUnmount, watch } from 'vue';
    import Header from '@/components/layout/Header.vue';
    import NavMenu from '@/components/layout/NavMenu.vue';
    import Footer from '@/components/layout/Footer.vue';
    import { useNotificationsStore } from '@/stores/notifications';

    const notificationStore = useNotificationsStore()

    const requestPermission = async () => {
        const permission = await Notification.requestPermission();
            if (permission !== 'granted') {
                console.log('No se otorgó permiso para notificaciones.');
            }
    };

    const showBrowserNotification = () => {
        if (Notification.permission === 'granted') {
            const notification = new Notification('Nuevo evento en King Dreams', {
                body: notificationStore.event.short_description,
                icon: '/shark.png'
            })

            notification.onclick = () => {
                window.focus()
                window.location.href = `/eventos/${notificationStore.event.slug}`
            }

            setTimeout(() => {
                notificationStore.clearNotification()
            }, 4000)
        }
    };
    
    onMounted( async () => {
        await requestPermission()
        notificationStore.subscribeToNotifications()

        watch( () => notificationStore.notificationStatus, (status) => {
                if (status) {
                    showBrowserNotification()
                }
            }
        )
    });

    onBeforeUnmount(() => {
        notificationStore.unsubscribeFromNotifications()
    });

</script>

<template>
    <Header/>
    <NavMenu/>
        <RouterView/>
    <Footer/>
</template>