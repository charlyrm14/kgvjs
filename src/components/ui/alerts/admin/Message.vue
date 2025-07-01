<script setup>

    defineProps({
        text: {
            type: String,
            required: true
        },
        color: {
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
        class="my-3 rounded-lg p-2"
        :class="`bg-${color}-100`">
            <div class="flex items-center gap-x-3">
                <div
                    class="p-2 rounded-lg"
                    :class="`bg-${color}-200 border border-${color}-300 text-${color}-500`">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            class="size-6">
                                <path 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    :d="icon" />
                        </svg>
                </div>
                <div>
                    <p :class="`text-${color}-500`"> {{ text }} </p>
                </div>
            </div>
    </div>
</template>