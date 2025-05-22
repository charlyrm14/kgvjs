<script setup>

    const props = defineProps({
        users: {
            type: Array,
            default: () => [],
        }
    })

</script>

<template>
    <div class="bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-700 rounded-lg p-4 flex flex-col justify-between min-h-[260px]">
        <div>
            <h4 class="text-gray-500 dark:text-slate-400 uppercase font-light text-base flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                </svg> Cumpleaños Hoy
            </h4>
            <p class="text-gray-600 dark:text-slate-400 text-lg mt-2 uppercase"> Felicidades hoy en su cumpleaños </p>
            <div
                v-if="Array.isArray(users) && users.length > 0" 
                class="overflow-x-auto whitespace-nowrap my-5">
                <div
                    v-for="user in users"
                    :key="user.id"
                    class="inline-block w-auto h-auto bg-blue-100 border border-blue-200 py-3 px-2 rounded-lg text-center mr-4">
                        <div class="flex justify-center">
                            <div class="border border-pink-500 rounded-full w-12 h-12 flex items-center justify-center p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 text-pink-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                                </svg>
                            </div>
                        </div>
                        <p class="uppercase text-slate-900 text-xs mt-2"> {{ user.name.slice(0, 13) }} </p>
                        <p class="uppercase text-blue-500 text-2xl"> 
                            {{ user.age }} 
                                <span class="block text-xs"> años </span>
                        </p>
                </div>
            </div>
            <div 
                v-else
                class="mt-5">
                    <div class="text-center">
                        <p class="uppercase text-2xl text-gray-700 dark:text-slate-200"> 
                            Hoy no hay cumpleañeros
                        </p>
                    </div>
            </div>
        </div>
    </div>
</template>