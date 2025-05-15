import { defineStore } from "pinia"
import { ref, reactive } from "vue"
import pusher from '@/lib/pusher.js';


export const useNotificationsStore = defineStore('notifications', () => {

    const showNotification = ref(false)
    const event = reactive({
        title: '',
        slug: ''
    })

    let channel;
    
    const subscribeToNotifications = () => {

        channel = pusher.subscribe('channel-notifications');
        
        channel.bind('new-notification-event', (data) => {
            showNotification.value = true
            event.title = data.event.title
            event.slug = data.event.slug

            setTimeout(() => {
                showNotification.value = false
                event.title = ''
                event.slug = ''
            }, 4000);
            
        });
    }

    const unsubscribeFromNotifications = () => {
        if (channel) {
            channel.unbind_all();
            pusher.unsubscribe('channel-notifications');
        }
    }

    const closeNotification = () => {
        showNotification.value = false
        event.title = ''
        event.slug = ''
    }

    return {
        event,
        subscribeToNotifications,
        unsubscribeFromNotifications,
        showNotification,
        closeNotification
    }
})
