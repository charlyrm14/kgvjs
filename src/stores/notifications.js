import { defineStore } from "pinia"
import { ref, reactive } from "vue"
import pusher from '@/lib/pusher.js';

export const useNotificationsStore = defineStore('notifications', () => {

    const notificationStatus = ref(false)
    const content = reactive({
        title: '',
        content:'',
        slug: ''
    })

    const contentCategories = {
        1: {
            title: 'Nuevo aviso de King Dreams',
            url: '/avisos' 
        },
        2: {
            title: 'Nuevo evento en King Dreams',
            url: '/eventos' 
        }
    }

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
        
        channel.bind('new-notification-content', (data) => {

            notificationStatus.value = true
            content.title = data.content.title
            content.content = data.content.content.slice(0, 30)
            content.slug = `publicaciones/${data.content.slug}`         
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
        content,
        subscribeToNotifications,
        unsubscribeFromNotifications,
        notificationStatus,
        clearNotification
    }
})
