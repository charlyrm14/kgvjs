<script setup>
    import HomeLink from '@/components/ui/links/HomeLink.vue';
</script>

<template>
    <section class="px-6 md:px-12 lg:px-16 py-8 md:py-10">
        <div class="flex justify-start mt-8">
            <HomeLink/>
        </div>
        <div class="text-center mt-2 mb-8">
            <h2 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white uppercase tracking-wide">
                Avisos
            </h2>
            <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                Mantente informado con los avisos más importantes y actualizaciones relevantes en <span class="text-blue-500"> King Dreams  </span>.
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 py-4 gap-y-4 md:gap-x-4 md:gap-y-0">
            <RouterLink 
                :to="{
                    name: 'content-detail',
                    params: {
                        slug: '29-de-junio-cerrado-22'
                    }
                }"
                class="bg-red-100 rounded-lg shadow-md border border-red-200 dark:border-none cursor-pointer hover:opacity-75">
                    <div class="px-4 py-2 flex justify-between items-center">
                        <div class="flex gap-x-4">
                            <img 
                                src="../../../assets/img/notice.png" 
                                alt=""
                                class="rounded-full w-15">
                            <h2 class="text-lg"> 
                                Curso de Verano
                                    <span class="block text-sm font-light"> 2025-06-28 </span>
                            </h2>
                        </div>
                        <button
                            class="bg-red-200 text-red-400 rounded-full p-1 hover:opacity-75 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                        </button>
                    </div>
            </RouterLink>
        </div>
    </section>
</template>
