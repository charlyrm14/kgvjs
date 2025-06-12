<script setup>

    defineProps({
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        textColor: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
    })

</script>

<template>
    <div 
        class="fixed top-4 left-1/2 w-[90%] sm:w-auto max-w-md transform -translate-x-1/2 z-50 px-6 py-4 rounded-lg shadow-lg animate-fade-in bg-white dark:bg-slate-900 transition-all"
        role="alert"
        aria-live="polite">

            <div class="flex items-start gap-4">
                <!-- Icono de éxito -->
                <div class="flex-shrink-0">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                        :class="textColor"
                        aria-hidden="true">
                            <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                :d="icon" />
                    </svg>
                </div>

                <!-- Contenido -->
                <div class="flex-1">
                    <p class="text-base font-medium text-gray-800 dark:text-slate-100">
                        {{ title }}
                    </p>
                    <p class="text-sm text-gray-600 dark:text-slate-400">
                        {{ subtitle }}
                    </p>
                </div>

                <!-- Botón de cierre -->
                <button 
                    type="button" 
                    class="text-gray-500 hover:text-gray-700 dark:hover:text-white transition"
                    aria-label="Cerrar alerta">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                </button>
            </div>
    </div>
</template>