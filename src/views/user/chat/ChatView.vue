<script setup>
    import Spinner from '@/components/ui/spinners/Spinner.vue';
    import { useChatStore } from '@/stores/chat';
    import { computed, onMounted, ref } from 'vue';
    
    const chatStore = useChatStore()
    const message = ref('')

    onMounted(async() => {
        await chatStore.fetchGetConversation()
    })

    const handleSubmit = () => {
        if(!message.value.trim()) return

        chatStore.sendMessage(message.value)
        message.value = ''
    }

    const buttonDisabled = computed(() => {
        return message.value.trim().length > 0
    })

</script>

<template>
    <section class="px-6 md:px-12 lg:px-16 py-8 md:py-10">
        <div class="mt-10">
            <div class="h-[85vh] md:h-[75vh] lg:h-[75vh] flex flex-col">

                <!-- Mensajes del chat -->
                <div class="flex-1 overflow-y-auto space-y-4">

                    <p class="uppercase text-center text-lg font-light text-gray-600 dark:text-slate-200"> 
                        Preguntale algo a <span class="text-blue-500 font-extrabold"> Sharky </span> sobre King Dreams, los alumnos o los maestros
                    </p>

                    <div
                        v-for="message in chatStore.conversation"
                        :key="message.id">

                        <div
                            v-if="message.sender === 'ia'"
                            class="space-y-3">
                                <div class="relative bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-white p-4 rounded-2xl md:max-w-[40%] w-fit shadow-md">
                                    <p 
                                        class="text-start text-sm leading-relaxed"
                                        :class="message?.textColor ?? ''">
                                            {{ message.message }}
                                    </p>
                                    <div class="absolute -bottom-1 left-3 w-3 h-3 bg-gray-200 dark:bg-slate-700 rotate-45 rounded-sm"></div>
                                </div>
                        </div>

                        <div
                            v-else
                            class="space-y-3 flex flex-col items-end">
                            <div class="relative bg-blue-500 text-white p-4 rounded-2xl md:max-w-[40%] w-fit shadow-md">
                                <p 
                                    class="text-end text-sm leading-relaxed"
                                    :class="message?.textColor ?? ''">
                                        {{ message.message }} 
                                </p>
                                <div class="absolute -bottom-1 right-2.5 w-3 h-3 bg-blue-500 rotate-45 rounded-sm"></div>
                            </div>
                        </div>
                        
                    </div>    
                </div>

                <Spinner v-if="chatStore.loading"/>
                
                <!-- Input al final del contenedor -->
                <div class="py-6 md:py-4">
                    <form @submit.prevent="handleSubmit">
                        <div class="w-full bg-white dark:bg-slate-700 shadow rounded-lg px-4 py-2 flex justify-between items-center">
                            <div class="relative w-4/5">
                                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Escribe tu mensaje"
                                    class="w-full pl-10 pr-4 py-1 text-gray-900 dark:text-white focus:outline-none focus:ring-0"
                                    v-model="message"/>
                            </div>
                            <div class="1/5">
                                <button
                                    :disabled="!buttonDisabled"
                                    class="bg-green-400 p-4 rounded-lg cursor-pointer hover:opacity-75 disabled:opacity-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-white">
                                            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                                        </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </section>
</template>

