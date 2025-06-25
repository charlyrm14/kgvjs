<script setup>

    defineProps({
        user: {
            type: Object,
            required: true
        }
    })

</script>

<template>
    <section class="px-6 md:px-12 lg:px-16 py-8 md:py-10 block md:hidden">
        <div class="rounded-lg bg-white dark:bg-slate-600 border border-gray-300 dark:border-slate-600 shadow p-4">
            <div class="flex gap-x-4">
                <div>
                    <img 
                        src="../../../assets/img/300-27.jpg" 
                        alt="profile image"
                        class="rounded-lg w-30">
                </div>
                <div>
                    <h2 class="text-sm text-gray-700 dark:text-slate-400"> Bienvenido </h2>
                    <p class="text-lg mt-1 dark:text-slate-200"> {{ user?.first_name  ?? '- '}} {{ user?.last_name  ?? '- ' }} </p>
                    <p class="inline-flex items-center gap-x-1 text-gray-500 dark:text-slate-300 text-sm mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg> {{ user?.email  ?? 'sin email' }}
                    </p>
                    <div class="bg-green-200 rounded-lg px-2 py-0.5 w-20 flex items-center mt-2">
                        <p class="inline-flex items-center gap-x-2 uppercase text-green-500 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                            </svg> Foca
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>