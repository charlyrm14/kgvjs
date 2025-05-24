<script setup>
    import IAAPI from '@/api/IAAPI';
    import Spinner from '@/components/spinners/Spinner.vue';
    import { useChatIAStore } from '@/stores/chat';
    import { useUserStore } from '@/stores/user';
    import { computed, onMounted, ref } from 'vue';
    
    const userStore = useUserStore()
    const chat = useChatIAStore()
    const message = ref('')
    
    onMounted(async () => {

        try {

            await userStore.loadUser()
            
            const userId = userStore.user?.id

            if (!userId) {
                console.warn('No se pudo obtener el ID del usuario.')
                return
            }

            chat.prompt.user_id = userId
            
            const response = await IAAPI.getConversationHistory(userId)

            if (response.data) {
                const msgs = response.data.map(({ sender, message }) => ({ sender, message }))
                chat.conversation.push(...msgs)
            }
            
        } catch (error) {
            console.error(error)
        }
    })
    

    const handleSubmit = async () => {
        const text = message.value.trim()

        if(!text) return

        chat.sendMessage(text)
        message.value = ''
    }

    const buttonDisabled = computed(() => {
        return message.value.trim().length > 0
    })

</script>

<template>
    <section class="p-3 md:p-8 lg:p-8 md:my-8 lg:my-8">
        <div class="md:px-8 lg:px-8 mt-10">
            <div class="bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-xl h-[85vh] md:h-[75vh] lg:h-[75vh] flex flex-col">

                <!-- Header -->
                <div class="py-2 px-6 border-b border-gray-300 dark:border-slate-600 text-white text-center">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center gap-2">
                            <div class="bg-gray-300 dark:bg-slate-500 rounded-full w-12 md:w-14 lg:w-14">
                                <img src="../../../assets/img/sharky.png" alt="sharky" class="p-1 md:p-2 lg:p-2">
                            </div>
                            <p class="uppercase text-xl text-start text-blue-500"> 
                                Sharky 
                                <span class="block text-sm text-blue-500 font-light"> King Dreams </span>
                            </p>
                        </div>
                        <div>
                            <p class="uppercase font-light text-lg text-gray-500 dark:text-slate-400"> Sábado 17 de mayo </p>
                        </div>
                    </div>
                </div>

                <!-- Mensajes del chat -->
                <div class="flex-1 overflow-y-auto px-6 py-4 space-y-4" ref="chatContainer">

                    <p
                        v-if="chat.totalMessagesConversation"
                        class="uppercase text-center text-lg font-light text-gray-600 dark:text-slate-200"> 
                            Preguntale algo a <span class="text-blue-500 font-extrabold"> Sharky </span> sobre King Dreams, los alumnos o los maestros
                    </p>

                    <div
                        v-for="(msg, index) in chat.conversation"
                        :key="index"
                        :class="msg.sender === 'user' ? 'text-right' : 'text-left'">

                        <div
                            v-if="msg.sender === 'ia'"
                            class="space-y-3">
                                <div class="bg-gray-200 dark:bg-slate-600 text-gray-900 dark:text-white p-3 rounded-lg w-fit max-w-[40%]">
                                    {{ msg.message }}
                                </div>
                        </div>

                        <div
                            v-else
                            class="space-y-3 flex flex-col items-end">
                            <div class="bg-blue-500 text-white p-3 rounded-lg w-fit max-w-[40%]">
                                {{ msg.message }}
                            </div>
                        </div>
                        
                    </div>    
                    
                </div>
                
                <Spinner v-if="chat.loading"/>

                <!-- Input al final del contenedor -->
                <div class="px-6 py-3 border-t border-gray-300 dark:border-slate-600">
                    <form @submit.prevent="handleSubmit">
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Escribe..."
                                class="w-full pl-10 pr-4 py-4 text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-500 focus:outline-none focus:ring-0"
                                v-model="message"/>
                        </div>
                        <div class="mt-5 flex justify-end">
                            <button
                                :disabled="!buttonDisabled"
                                class="bg-black text-white dark:bg-white dark:text-black rounded-full p-3 cursor-pointer hover:opacity-75 disabled:opacity-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                    </svg>
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </section>
</template>

