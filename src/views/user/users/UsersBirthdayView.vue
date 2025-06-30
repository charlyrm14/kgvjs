<script setup>
    import HomeLink from '@/components/ui/links/HomeLink.vue';
    import { useUserStore } from '@/stores/user';
    import { onMounted } from 'vue';

    const userStore = useUserStore()

    onMounted(async() => {
        await userStore.fetchBirthdayUsers()
    })

</script>

<template>
    <section class="px-6 md:px-12 lg:px-16 py-8 md:py-10">
        <div class="flex justify-start mt-8">
            <HomeLink/>
        </div>
        <div class="text-center mt-2 mb-8">
            <h2 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white uppercase tracking-wide">
                Cumpleañeros del Día
            </h2>
            <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                Descubre quiénes están celebrando su cumpleaños hoy y no olvides felicitarlos con un mensaje especial.
            </p>
        </div>
        <div 
            v-if="userStore?.todayBirthdayUsers?.length > 0"
            class="grid grid-cols-2 md:grid-cols-4 py-4 gap-y-4 gap-x-4 md:gap-y-0">
            <div 
                v-for="user in userStore?.todayBirthdayUsers"
                :key="user.id"
                class="bg-pink-100 rounded-lg shadow-md border border-pink-200 dark:border-none">
                    <div class="flex justify-center p-4">
                        <div>
                            <img 
                                src="../../../assets/img/cake.png" 
                                alt="user profile"
                                class="w-35 md:w-30 rounded-lg">
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <h2 class="text-pink-500 text-xl text-center">
                            {{ user?.first_name ?? '' }}
                                <span class="block text-center text-base text-pink-400">
                                    {{ user?.last_name ?? '' }} {{ user?.mother_last_name ?? '' }} 
                                </span>
                        </h2>
                    </div>
                    <div class="flex justify-center my-3">
                        <p class="text-pink-500 text-3xl"> {{ user?.age ?? '' }} años </p>
                    </div>
            </div>
        </div>
        <div
            v-else
            class="flex justify-center items-center">
                <p class="text-center text-pink-500">  ¡Vaya, hoy nadie cumple años! Pero no te preocupes... ¡igual podemos comer pastel por si acaso! </p>
        </div>
    </section>
</template>
