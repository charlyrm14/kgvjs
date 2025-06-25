import ChatAPI from '@/api/ChatAPI'
import { uniqueId } from '@/helpers'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useChatStore = defineStore('chat', () => {

    const conversation = ref([])
    const loading = ref(false)
    const prompt = reactive({
        message: '',
    })

    const fetchGetConversation = async() => {
        try {
            const response = await ChatAPI.getConversationHistory()

            if (response.status === 200) {
                conversation.value = response.data.data
            }

            if (response.status === 404) {
                conversation.value = []
            }
        } catch (error) {
            console.error
        }
    }

    const sendMessage = async(text) => {

        loading.value = true

        prompt.message = text

        conversation.value.push({
            id: uniqueId(), // temporal id
            sender: 'user',
            message: prompt.message
        })

        try {

            const response = await ChatAPI.chat(prompt)

            if (response.status === 201) {

                conversation.value.push({
                    id: uniqueId(), // temporal id
                    sender: 'ia',
                    message: response.data.data
                })
            }

            if(response.status === 404) {

                conversation.value.push({
                    id: uniqueId(), // temporal id
                    sender: 'user',
                    message: 'Tu sesión ha caducado, por favor vuelve a iniciar sesión'
                })
            }
            
        } catch (error) {

            conversation.value.push({
                id: uniqueId(), // temporal id
                sender: 'user',
                message: 'Hubo un error al enviar tu mensaje',
                textColor: 'text-red-400',
            })

            console.error(error)

        } finally {
            loading.value = false
        }
    }


    return {
        conversation,
        sendMessage,
        loading,
        fetchGetConversation
    }
})
