import { defineStore } from "pinia"
import { ref, reactive } from "vue"
import pusher from '@/lib/pusher.js';

export const useNotificationsStore = defineStore('notifications', () => {

    const notificationStatus = ref(false)
    const event = reactive({
        title: '',
        slug: ''
    })

    let channel;
    
    /**
     * The function `subscribeToNotifications` subscribes to a Pusher channel for new notification
     * events and updates the notification status and event details accordingly.
     * @returns The `subscribeToNotifications` function is returning `undefined` because there is no
     * explicit return statement in the function.
     */
    const subscribeToNotifications = () => {

        if(channel) return;

        channel = pusher.subscribe('channel-notifications');
        
        channel.bind('new-notification-event', (data) => {

            notificationStatus.value = true
            event.title = data.event.title
            event.short_description = data.event.short_description
            event.slug = data.event.slug            
        });
    }

    /**
     * The function `unsubscribeFromNotifications` unsubscribes from a specific Pusher channel named
     * 'channel-notifications'.
     */
    const unsubscribeFromNotifications = () => {
        if (channel) {
            channel.unbind_all();
            pusher.unsubscribe('channel-notifications');
            channel = null
        }
    }

    const clearNotification = () => {
        notificationStatus.value = false
    }

    return {
        event,
        subscribeToNotifications,
        unsubscribeFromNotifications,
        notificationStatus,
        clearNotification
    }
})
