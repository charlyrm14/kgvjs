<script setup>
    import { useUserStore } from '@/stores/user';
    
    const userStore = useUserStore()

    defineProps({
        user: {
            type: Object,
            required: true
        }
    })

</script>

<template>
    <div class="bg-white dark:bg-slate-700 rounded-lg p-4 shadow-lg border border-gray-200 dark:border-slate-600">
        <div class="flex justify-between items-start">
            <div class="flex items-start gap-x-2">
                <img 
                    src="../../../assets/img/300-27.jpg" 
                    alt="Imagen usuario"
                    class="rounded-lg hidden md:inline md:w-18 md:h-18 p-1 border-2 border-cyan-500">
                <p class="text-xl text-gray-700 dark:text-slate-300 font-light"> 
                    {{ user?.name }} 
                        <span class="block text-sm"> {{ user?.last_name }} {{ user?.mothers_name }} </span>
                </p>
            </div>
            <div>
                <button
                    @click="userStore.showDeletetUserModal(user)"
                    class="bg-red-500 text-white p-1 rounded-full hover:opacity-75 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="flex justify-between items-center mt-5">
            <span class="text-sm text-gray-600 dark:text-slate-400 font-light"> {{ user?.email }} </span>
            <p class="text-sm text-gray-700 dark:text-slate-300 font-extralight flex items-center gap-x-2"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                </svg> {{ user?.birth_date }}
            </p>
        </div>
        <div class="my-3 border border-gray-300 dark:border-slate-600"></div>
        <div class="mt-4 flex justify-between items-center">
            <button
                v-if="user?.phone_number !== null"
                @click="userStore.showSendMessageModal(user)"
                class="bg-gray-200 dark:bg-slate-500 p-1 rounded-lg text-center hover:opacity-75 cursor-pointer border border-gray-200 dark:border-slate-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 text-green-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                    </svg>
            </button>
            <button
                @click="userStore.showEditUserModal()"
                class="bg-cyan-500 px-3 py-1 rounded-lg text-white font-extralight flex justify-between items-center gap-x-2 uppercase text-lg hover:opacity-75 cursor-pointer">
                    Editar
            </button>
        </div>
    </div>
</template>