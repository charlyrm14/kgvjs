<script setup>
    import { onMounted, onBeforeUnmount, reactive } from 'vue';
    import pusher from '@/lib/pusher.js';
    import Header from '@/components/layout/Header.vue';
    import NavMenu from '@/components/layout/NavMenu.vue';
    import Footer from '@/components/layout/Footer.vue';
    
    const event = reactive({
        title: '',
        short_description: '',
        start_date: ''
    })

    let channel;

    onMounted(() => {
        channel = pusher.subscribe('channel-notifications');
        
        channel.bind('new-notification-event', (data) => {
            console.log(data);
        });
    });

    onBeforeUnmount(() => {
        if (channel) {
            channel.unbind_all();
            pusher.unsubscribe('channel-notifications');
        }
    });

</script>

<template>
    <Header/>
    <NavMenu/>
    <RouterView/>
    <Footer/>
</template>