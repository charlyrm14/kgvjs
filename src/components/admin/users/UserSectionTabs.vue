<script setup>

    defineProps({
        selected: {
            type: Number,
            required: true
        }
    })

</script>

<template>
    <div 
        :class="selected === 1 ? 'border-b-2 border-blue-500' : '' ">
            <button 
                @click.prevent="$emit('update:section', 1)"
                class="text-base md:text-xl inline-flex items-center gap-x-2 hover:text-blue-500 cursor-pointer font-light"
                :class="selected === 1 ? 'text-blue-500' : 'text-gray-400 dark:text-slate-500'">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                    </svg> Información 
            </button>
    </div>
    <div
        :class="selected === 2 ? 'border-b-2 border-blue-500' : '' ">
            <button 
                @click.prevent="$emit('update:section', 2)"
                class="text-base md:text-xl inline-flex items-center gap-x-2 hover:text-blue-500 cursor-pointer font-light"
                :class="selected === 2 ? 'text-blue-500' : 'text-gray-400 dark:text-slate-500'">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg> Clases 
            </button>
    </div>
    <div
        :class="selected === 3 ? 'border-b-2 border-blue-500' : '' ">
            <button 
                @click.prevent="$emit('update:section', 3)"
                class="text-base md:text-xl inline-flex items-center gap-x-2 hover:text-blue-500 cursor-pointer font-light"
                :class="selected === 3 ? 'text-blue-500' : 'text-gray-400 dark:text-slate-500'">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg> Pagos 
            </button>
    </div>
    <div
        :class="selected === 4 ? 'border-b-2 border-blue-500' : '' ">
            <button 
                @click.prevent="$emit('update:section', 4)"
                class="text-base md:text-xl inline-flex items-center gap-x-2 hover:text-blue-500 cursor-pointer font-light"
                :class="selected === 4 ? 'text-blue-500' : 'text-gray-400 dark:text-slate-500'">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                    </svg> Nivel
            </button>
    </div>
    <div
        :class="selected === 5 ? 'border-b-2 border-blue-500' : '' ">
            <button 
                @click.prevent="$emit('update:section', 5)"
                class="text-base md:text-xl inline-flex items-center gap-x-2 hover:text-blue-500 cursor-pointer font-light"
                :class="selected === 5 ? 'text-blue-500' : 'text-gray-400 dark:text-slate-500'">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg> Asistencias
            </button>
    </div>
    <div
        :class="selected === 6 ? 'border-b-2 border-blue-500' : '' ">
            <button 
                @click.prevent="$emit('update:section', 6)"
                class="text-base md:text-xl inline-flex items-center gap-x-2 hover:text-blue-500 cursor-pointer font-light"
                :class="selected === 6 ? 'text-blue-500' : 'text-gray-400 dark:text-slate-500'">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                    </svg> Ajustes
            </button>
    </div>
</template>