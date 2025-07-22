<script setup>
    import UserAPI from '@/api/UserAPI';
    import HomeLink from '@/components/ui/links/HomeLink.vue';
    import { onMounted, ref } from 'vue';

    const usersTeam = ref(null)

    onMounted(async() => {
        try {

            const response = await UserAPI.getUsersTeam()

            if (response.status === 200) {
                usersTeam.value = response.data.data
            }

            if (response.status !== 200) {
                usersTeam.value = null
            }
            
        } catch (error) {
            console.error(error)
            usersTeam.value = null
        }
    })

</script>

<template>
    <section class="px-6 md:px-12 lg:px-16 py-8 md:py-10">
        <div class="flex justify-start mt-8">
            <HomeLink/>
        </div>
        <div class="text-center mt-2 mb-8">
            <h2 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white uppercase tracking-wide">
                Equipo King Dreams
            </h2>
            <p 
                v-if="usersTeam?.length > 0"
                class="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    Conoce al equipo que nos representa en competencias a nivel nacional, destacando esfuerzo, disciplina y pasión deportiva.
            </p>
            <p 
                v-else
                class="text-pink-500"> Aquí podrás ver a los alumnos que nos reprensentan en competencias nacionales, cuando el administrador los registre :( </p>
        </div>
        <div
            v-if="usersTeam?.length > 0"
            class="grid grid-cols-2 md:grid-cols-4 py-4 gap-4 md:gap-y-0">

            <div
                v-for="user in usersTeam"
                :key="user.id"
                class="bg-indigo-100 border border-indigo-200 p-4 rounded-lg">
                    <div class="border-b border-indigo-200">
                        <div class="flex justify-center">
                            <img 
                                src="../../../assets/img/winner.png" 
                                :alt="user?.user?.first_name"
                                class="w-30">
                        </div>
                        <div class="flex justify-center my-2">
                            <h2 class="text-xl text-indigo-500 text-center"> 
                                {{ user?.user?.first_name }}
                                    <span class="block text-base"> {{ user?.user?.last_name }} </span>
                            </h2>
                        </div>
                    </div>
                    <div
                        v-if="user?.user?.profile?.length > 0"
                        v-for="hobbie in user?.user?.profile"
                        class="mt-3">
                            <div class="bg-indigo-200 my-1 p-1 rounded px-3">
                                <p class="font-light"> {{ hobbie.content }} </p>
                            </div>
                    </div>
                    <div 
                        v-else
                        class="mt-3">
                            <div class="bg-indigo-200 my-1 p-1 rounded px-3">
                                <p class="font-light"> 
                                    Tu esfuerzo nos inspira <span class="font-bold"> {{ user?.user?.first_name ?? ''}} </span> 
                                </p>
                            </div>
                    </div>
            </div>

        </div>

    </section>
</template>
