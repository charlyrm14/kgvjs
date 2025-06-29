<script setup>

</script>

<template>
    <section class="px-6 md:px-12 lg:px-16 py-2 md:py-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
            <RouterLink 
                :to="{ name: 'events' }"
                class="bg-white dark:bg-slate-600 shadow rounded-lg p-4 cursor-pointer hover:opacity-75">
                    <div class="flex items-start gap-x-3">
                        <div>
                            <img 
                                src="../../../assets/img/event.png" 
                                alt="Event" 
                                class="w-14">
                        </div>
                        <div>
                            <h2 class="uppercase text-lg dark:text-slate-200"> Eventos </h2>
                            <p class="text-sm text-gray-600 dark:text-slate-300 mt-1 font-light"> Próximos eventos </p>
                        </div>
                    </div>
            </RouterLink>
            <RouterLink 
                :to="{ name: 'notices' }"
                class="bg-white dark:bg-slate-600 shadow rounded-lg p-4 cursor-pointer hover:opacity-75">
                    <div class="flex items-start gap-x-3">
                        <div>
                            <img 
                                src="../../../assets/img/notice.png" 
                                alt="Avisos" 
                                class="w-14">
                        </div>
                        <div>
                            <h2 class="uppercase text-lg dark:text-slate-200"> Avisos </h2>
                            <p class="text-sm text-gray-600 dark:text-slate-300 mt-1 font-light"> Ver avisos </p>
                        </div>
                    </div>
            </RouterLink>
            <RouterLink 
                :to="{ name: 'users-birthday' }"
                class="bg-white dark:bg-slate-600 shadow rounded-lg p-4 cursor-pointer hover:opacity-75">
                <div class="flex items-start gap-x-3">
                    <div>
                        <img 
                            src="../../../assets/img/cake.png" 
                            alt="birthday" 
                            class="w-14">
                    </div>
                    <div>
                        <h2 class="uppercase text-lg dark:text-slate-200"> Cumpleaños </h2>
                        <p class="text-sm text-gray-600 dark:text-slate-300 mt-1 font-light"> Ver cumpleañeros </p>
                    </div>
                </div>
            </RouterLink>
            <RouterLink
            :to="{ name: 'featured-users' }" 
                class="bg-white dark:bg-slate-600 shadow rounded-lg p-4 cursor-pointer hover:opacity-75">
                <div class="flex items-start gap-x-3">
                    <div>
                        <img 
                            src="../../../assets/img/winner-w.png" 
                            alt="Usuarios destacados" 
                            class="w-14">
                    </div>
                    <div>
                        <h2 class="uppercase text-lg dark:text-slate-200"> Usuarios </h2>
                        <p class="text-sm text-gray-600 dark:text-slate-300 mt-1 font-light"> Destacados </p>
                    </div>
                </div>
            </RouterLink>
        </div>
    </section>
</template>