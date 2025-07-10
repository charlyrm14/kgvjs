<script setup>
    import HomeLink from '@/components/ui/links/HomeLink.vue';
    import { useUserStore } from '@/stores/user';
    import { onMounted } from 'vue';

    const userStore = useUserStore()

    onMounted(async() => {
        await userStore.fetchGetCoaches()
    })

</script>

<template>
    <section class="px-6 md:px-12 lg:px-16 py-8 md:py-10">
        <div class="flex justify-start mt-8">
            <HomeLink/>
        </div>
        <div class="text-center mt-2 mb-8">
            <h2 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white uppercase tracking-wide">
                Nuestro Equipo Docente
            </h2>
            <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                Conoce a los profesionales que guíaran tu aprendizaje con pasión, experiencia y compromiso.
            </p>
        </div>
        <div 
            v-if="userStore?.coaches?.length > 0"
            class="grid grid-cols-2 md:grid-cols-4 py-4 gap-4 md:gap-y-0">
                <div 
                    v-for="coach in userStore?.coaches"
                    :key="coach.id"
                    class="bg-red-100 border border-red-200 p-4 rounded-lg">
                        <div 
                            class="border-b border-red-200">
                                <div class="flex justify-center">
                                    <img 
                                        src="../../../assets/img/coach-2-kg.png" 
                                        alt="Profesor king dreams"
                                        class="w-30">
                                </div>
                                <div class="flex justify-center my-2">
                                    <h2 class="text-xl text-red-500 text-center"> 
                                        {{ coach?.first_name ?? 'Desconocido' }} 
                                            <span class="block text-base">
                                                {{ coach?.last_name ?? '--' }} {{ coach?.mother_last_name ?? '--' }}
                                            </span>
                                    </h2>
                                </div>
                        </div>
                        <div
                            v-if="coach?.profile?.length > 0"
                            v-for="hobbie in coach?.profile?.filter(hob => hob.type === 'hobbies')"
                            :key="hobbie"
                            class="mt-3">
                                <div class="bg-red-200 my-1 p-1 rounded px-3">
                                    <p class="font-light text-sm md:text-base"> {{ hobbie?.content ?? '---' }} </p>
                                </div>
                        </div>
                </div>
        </div>
        <div v-else
            class="flex justify-center items-center">
                <p class="text-pink-500"> Aquí podrás ver a los profesores de King Dreams, cuando el administrador los registre :( </p>
        </div>
    </section>
</template>