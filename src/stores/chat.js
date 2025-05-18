import IAAPI from '@/api/IAAPI'
import { defineStore } from 'pinia'
import { computed, ref, nextTick, reactive } from 'vue'
import { useUserStore } from './user'

export const useChatIAStore = defineStore('chat-ia', () => {

    const userStore = useUserStore()

    const conversation = ref([])
    const loading = ref(false)
    const chatContainer = ref(null)
    const prompt = reactive({
        message: '',
        user_id: null
    })

    const sendMessage = async (text) => {
        
        conversation.value.push({ sender: 'user', message: text })
        prompt.message = text

        loading.value = true

        await scrollToBottom()

        try {

            const response = await IAAPI.chat(prompt)
            conversation.value.push({ sender: 'ia', message: response.data })
            prompt.message = ''
            prompt.user_id = null

        } catch (error) {

            conversation.value.push({ sender: 'ia', message: 'Hubo un error al consultar la IA.' })
            console.error(error)

        } finally {

            loading.value = false
            await scrollToBottom()
        }
    }

    const scrollToBottom = async () => {

        /**
         * Vue no actualiza el DOM inmediatamente, sino que lo hace en el siguiente "tick" del ciclo de renderizado
         */

        await nextTick() 
        const el = chatContainer.value
        if (el) el.scrollTop = el.scrollHeight
    }

    const totalMessagesConversation = computed(() => conversation.value.length === 0)

    return {
        conversation,
        loading,
        chatContainer,
        prompt,
        sendMessage,
        scrollToBottom,
        totalMessagesConversation
    }
})
