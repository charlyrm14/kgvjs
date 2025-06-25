<script setup>
    import { userTypeByRole } from '@/helpers';

    defineProps({
        user: {
            type: Object,
            required: false
        }
    })

</script>

<template>
    <div class="flex justify-center">
        <img 
            src="../../../assets/img/300-27.jpg" 
            alt="Profile image"
            class="w-45 md:w-48 rounded-lg">
    </div>
    <div class="flex justify-center mt-2">
        <h2 class="text-gray-700 dark:text-slate-300 text-2xl"> 
            {{ user?.first_name ?? '' }} 
        </h2>
    </div>
    <div class="flex justify-center mt-1">
        <p class="text-gray-600 dark:text-slate-400 text-lg">
            {{ user?.last_name ?? '' }} 
        </p>
    </div>
    <div class="flex justify-center">
        <p class="inline-flex justify-between items-center gap-x-2 text-gray-500 dark:text-slate-400"> 
            <span class="block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg> 
            </span> {{ user?.email ?? '' }}
        </p>
    </div>
    <div class="mt-12 px-6">
        <div class="border-b border-gray-300 dark:border-slate-600">
            <p class="inline-flex justify-between items-center gap-x-2 text-gray-500 dark:text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                </svg> {{ user?.birth_date ?? '' }}
            </p>
        </div>
    </div>
    <div class="mt-3 px-6">
        <div class="border-b border-gray-300 dark:border-slate-600">
            <p class="inline-flex justify-between items-center gap-x-2 text-gray-500 dark:text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                </svg> {{ user?.user_code ?? '' }}
            </p>
        </div>
    </div>
    <div class="mt-3 px-6">
        <div class="border-b border-gray-300 dark:border-slate-600">
            <p 
                class="inline-flex justify-between items-center gap-x-2 text-gray-500 dark:text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg> {{ userTypeByRole(user?.role_id) ?? '' }}
            </p>
        </div>
    </div>
    <div class="mt-3 px-6">
        <div>
            <p class="text-gray-600 dark:text-slate-400 font-light">
                Registrado el <span class="text-cyan-500"> {{ user?.created_at ?? '' }} </span>
            </p>
        </div>
    </div>
</template>