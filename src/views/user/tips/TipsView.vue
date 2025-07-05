<script setup>
    import HomeLink from '@/components/ui/links/HomeLink.vue';
    import { useContentStore } from '@/stores/content';
    import { onMounted } from 'vue';

    const contentStore = useContentStore()

    onMounted(async() => {
        await contentStore.fetchGetTipsContent()
    })

</script>

<template>
    <section class="px-6 md:px-12 lg:px-16 py-8 md:py-10">
        <div class="flex justify-start mt-8">
            <HomeLink/>
        </div>
        <div
            v-if="contentStore?.tips?.length > 0"
            class="text-center mt-2 mb-8">
                <h2 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white uppercase tracking-wide">
                    Domina el Agua
                </h2>
                <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    Pequeños cambios que marcan una gran diferencia en tu rendimiento.
                </p>
        </div>
        <div
            v-else 
            class="text-center mt-2 mb-8">
                <h2 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white uppercase tracking-wide">
                    Domina el Agua
                </h2>
                <p class="text-pink-500 text-sm sm:text-base">
                    Muy pronto encontraras algunos tips que te ayudaran a tener un mejor desempeño en el agua.
                </p>
        </div>
        <div
            v-if="contentStore?.tips?.length > 0"
            class="mt-6">
            <div class="grid grid-cols-1 md:grid-cols-6 md:grid-rows-9 gap-4">
                <!-- Card 1 -->
                <div
                    v-if="contentStore?.tips?.[0]"
                    class="md:col-span-2 md:row-span-6 p-4 bg-purple-100 border border-purple-200 rounded-lg flex flex-col justify-center h-full">
                        <div class="px-6 text-center">
                            <h2 class="font-extrabold text-2xl"> {{ contentStore?.tips?.[0].title ?? '' }} </h2>
                        </div>
                        <div class="px-12 mt-3 flex justify-center">
                            <img 
                                :src="contentStore?.urlAPI + '/' + contentStore?.tips?.[0].cover_image" 
                                :alt="contentStore?.tips?.[0].title ?? 'Tip 1'" 
                                class="w-40" />
                        </div>
                        <div class="px-6 my-3 text-center">
                            <p class="font-light text-base md:text-lg">
                                {{ contentStore?.tips?.[0].content ?? '' }}
                            </p>
                        </div>
                </div>

                <!-- Card 2 -->
                <div 
                    v-if="contentStore?.tips?.[1]"
                    class="md:col-span-4 md:row-span-3 md:col-start-3 p-4 bg-pink-100 border border-pink-200 rounded-lg md:flex md:items-center md:h-full">
                        <div class="flex justify-between w-full items-center">
                            <div class="px-6">
                                <h2 class="font-extrabold text-2xl"> {{ contentStore?.tips?.[1].title ?? '' }} </h2>
                                <p class="font-light text-base md:text-lg mt-3">
                                    {{ contentStore?.tips?.[1].content ?? '' }}
                                </p>
                            </div>
                            <div class="px-6">
                                <img 
                                    :src="contentStore?.urlAPI + '/' + contentStore?.tips?.[1].cover_image" 
                                    :alt="contentStore?.tips?.[1].title ?? 'Tip 2'" 
                                    class="w-60 md:w-50" />
                            </div>
                        </div>
                </div>

                <!-- Card 3 -->
                <div 
                    v-if="contentStore?.tips?.[2]"
                    class="md:col-span-2 md:row-span-3 md:col-start-3 md:row-start-4 p-4 bg-yellow-100 border border-yellow-200 rounded-lg flex flex-col justify-center h-full">
                        <div class="px-6 text-center">
                            <h2 class="font-extrabold text-2xl"> {{ contentStore?.tips?.[2].title ?? '' }} </h2>
                            <p class="font-light text-base md:text-lg mt-3">
                                {{ contentStore?.tips?.[2].content ?? '' }}
                            </p>
                        </div>
                        <div class="px-12 mt-3 flex justify-end">
                            <img 
                                :src="contentStore?.urlAPI + '/' + contentStore?.tips?.[2].cover_image" 
                                :alt="contentStore?.tips?.[2].title ?? 'Tip 3'" 
                                class="w-20 md:w-30"/>
                        </div>
                </div>

                <!-- Card 4 -->
                <div
                    v-if="contentStore?.tips?.[3]"
                    class="md:col-span-2 md:row-span-3 md:col-start-5 md:row-start-4 p-4 bg-green-100 border border-green-200 rounded-lg flex flex-col justify-center h-full">
                        <div class="flex justify-end px-6">
                            <img 
                                :src="contentStore?.urlAPI + '/' + contentStore?.tips?.[3].cover_image" 
                                :alt="contentStore?.tips?.[3].title ?? 'Tip 4'" 
                                class="w-20 md:w-30" />
                        </div>
                        <div class="px-6 mt-3 text-right">
                            <h2 class="font-extrabold text-2xl"> {{ contentStore?.tips?.[3].title ?? '' }} </h2>
                            <p class="font-light text-base md:text-lg mt-2">
                                {{ contentStore?.tips?.[3].content ?? '' }}
                            </p>
                        </div>
                </div>

                <!-- Card 5 -->
                <div 
                    v-if="contentStore?.tips?.[4]"
                    class="md:col-span-4 md:row-span-3 md:row-start-7 p-4 bg-orange-100 border border-orange-200 rounded-lg flex items-center h-full">
                        <div class="flex justify-between items-center w-full px-6">
                            <div class="w-1/2">
                                <h2 class="font-extrabold text-2xl"> {{ contentStore?.tips?.[4].title ?? '' }} </h2>
                                <p class="font-light text-base md:text-lg mt-3">
                                    {{ contentStore?.tips?.[4].content ?? '' }}
                                </p>
                            </div>
                            <div class="w-1/2 flex justify-end">
                                <img 
                                    :src="contentStore?.urlAPI + '/' + contentStore?.tips?.[4].cover_image" 
                                    :alt="contentStore?.tips?.[4].title ?? 'Tip 5'" 
                                    class="w-40" />
                            </div>
                        </div>
                </div>

                <!-- Card 6 -->
                <div 
                    v-if="contentStore?.tips?.[5]"
                    class="md:col-span-2 md:row-span-3 md:col-start-5 md:row-start-7 p-4 bg-blue-100 border border-blue-200 rounded-lg flex flex-col justify-center h-full">
                        <div class="px-6 text-center">
                            <h2 class="font-extrabold text-2xl"> {{ contentStore?.tips?.[5].title ?? '' }} </h2>
                            <p class="font-light text-base md:text-lg mt-3">
                                {{ contentStore?.tips?.[5].content ?? '' }}
                            </p>
                        </div>
                        <div class="flex justify-end px-6 mt-3">
                            <img 
                                :src="contentStore?.urlAPI + '/' + contentStore?.tips?.[5].cover_image" 
                                :alt="contentStore?.tips?.[5].title ?? 'Tip 6'" 
                                class="w-30 md:w-40" />
                        </div>
                </div>

            </div>
        </div>
    </section>
</template>