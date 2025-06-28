<script setup>
    import { useRoute, useRouter } from 'vue-router';

    const route = useRoute()
    const router = useRouter()

    const { slug } = route.params

    const goBack = () => {
        router.back()
    }
</script>

<template>
    <section class="px-6 md:px-12 lg:px-16 py-8 md:py-10">
        <div class="flex justify-start mt-8">
            <button
                @click="goBack()"
                class="bg-pink-600 text-white rounded-full p-2 md:p-3 cursor-pointer hover:opacity-75">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
            </button>
        </div>
        <div class="text-center mt-2 mb-8">
            <h2 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white uppercase tracking-wide">
                Título {{ slug ?? '' }}
            </h2>
        </div>
    </section>
</template>
