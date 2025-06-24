<script setup>
    import { useThemeStore } from '@/stores/theme';

    const themeStore = useThemeStore()

</script>

<template>
    <section class="px-6 md:px-12 lg:px-16 py-8 md:py-10">
        <div class="mt-2 border-b-1 border-gray-300 dark:border-slate-700">
                <div class="flex justify-between items-center">
                    <div class="flex min-w-0 gap-x-4 items-center mb-3">
                        <div
                            class="bg-white dark:bg-slate-600 dark:text-slate-300 rounded-full p-2 shadow border border-gray-200 dark:border-slate-600">
                                <svg 
                                    v-if="themeStore.theme === 'light'"
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 24 24" 
                                    fill="currentColor" 
                                    class="size-6">
                                        <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                                </svg>
                                <svg
                                    v-else
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 24 24" 
                                    fill="currentColor" 
                                    class="size-6">
                                        <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
                                </svg>
                        </div>
                        <div class="min-w-0 flex-auto">
                            <p class="uppercase text-sm dark:text-gray-100">
                                Modo oscuro
                                    <span class="block text-xs dark:text-slate-400"> Ajusta el aspecto de la app </span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div class="bg-gray-200 dark:bg-slate-600 flex justify-between items-center gap-x-2 p-1 rounded-full border border-gray-300 dark:border-slate-500">
                            <div
                                @click="themeStore.toggleTheme()"
                                class="flex items-center  px-2 py-0.5 rounded-full cursor-pointer gap-x-2 hover:opacity-75"
                                :class="themeStore.theme === 'light' ? 'bg-white dark:bg-slate-400 text-black dark:text-white' : 'font-light text-gray-500 dark:text-slate-300'">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 24 24" 
                                        fill="currentColor" 
                                        class="size-5"
                                        :class="themeStore.theme === 'light' ? 'text-orange-600' : 'text-orange-700'">
                                            <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                                    </svg> Claro
                            </div>
                            <div
                                @click="themeStore.toggleTheme()"
                                class="flex items-center px-2 py-0.5 rounded-full cursor-pointer gap-x-2 hover:opacity-75"
                                :class="themeStore.theme === 'dark' ? 'dark:bg-slate-400 dark:text-white' : 'font-light text-gray-500 dark:text-slate-300' "> 
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 24 24" 
                                        fill="currentColor" 
                                        class="size-5"
                                        :class="themeStore.theme === 'dark' ? 'text-amber-300' : 'text-amber-400' ">
                                            <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
                                    </svg> Oscuro
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </section>
</template>