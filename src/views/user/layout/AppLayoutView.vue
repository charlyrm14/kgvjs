<script setup>
    import { onMounted, onBeforeUnmount, watch } from 'vue';
    import Header from '@/components/user/layout/Header.vue';
    import NavMenu from '@/components/user/layout/NavMenu.vue';
    import Footer from '@/components/user/layout/Footer.vue';
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
                body: notificationStore.content.content.slice(0, 30),
                icon: '/shark.png'
            })

            notification.onclick = () => {
                window.focus()
                window.location.href = `${notificationStore.content.slug}`
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