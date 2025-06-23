<script setup>
    import { RouterLink, useRoute } from 'vue-router';

    const route = useRoute()
</script>

<template>
    <section class="hidden md:flex justify-center items-center mt-10">
        <div class="flex justify-center gap-5 p-0.5 rounded-full bg-gray-200 dark:bg-slate-700 border border-gray-300 dark:border-slate-700">
            <div>
                <RouterLink
                    :to="{ name: 'admin-home' }"
                    class="py-2 px-3 cursor-pointer uppercase flex items-center gap-2"
                    :class="route.name === 'admin-home' ? 'border border-gray-300 dark:border-slate-700 rounded-full py-2 px-3 bg-white dark:bg-slate-800 text-black dark:text-white' : 'text-gray-500' ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg> Usuarios
                </RouterLink>
            </div>
            <div>
                <RouterLink
                    :to="{ name: 'admin-content' }"
                    class="py-2 px-3 cursor-pointer uppercase flex items-center gap-2"
                    :class="route.name === 'admin-content' ? 'border border-gray-300 dark:border-slate-700 rounded-full py-2 px-3 bg-white dark:bg-slate-800 text-black dark:text-white' : 'text-gray-500' ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg> Contenido
                </RouterLink>
            </div>
            <div>
                <RouterLink
                    :to="{ name: 'admin-categories' }"
                    class="py-2 px-3 cursor-pointer uppercase flex items-center gap-2"
                    :class="route.name === 'admin-categories' ? 'border border-gray-300 dark:border-slate-700 rounded-full py-2 px-3 bg-white dark:bg-slate-800 text-black dark:text-white' : 'text-gray-500' ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
                        </svg> Categorías
                </RouterLink>
            </div>
            <div>
                <RouterLink
                    to="#"
                    class="py-2 px-3 cursor-pointer uppercase flex items-center gap-2"
                    :class="route.name === 'eventos' ? 'border border-gray-300 dark:border-slate-700 rounded-full py-2 px-3 bg-white dark:bg-slate-800 text-black dark:text-white' : 'text-gray-500' ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                        </svg> Reportes
                </RouterLink>
            </div>
            <div>
                <RouterLink
                    :to="{ name: 'home' }"
                    class="py-2 px-3 cursor-pointer uppercase flex items-center gap-2"
                    :class="route.name === 'home' ? 'border border-gray-300 dark:border-slate-700 rounded-full py-2 px-3 bg-white dark:bg-slate-800 text-black dark:text-white' : 'text-gray-500' ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg> Inicio
                </RouterLink>
            </div>
        </div>
    </section>
</template>