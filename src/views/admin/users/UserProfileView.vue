<script setup>
    
    import UserAPI from '@/api/UserAPI';
    import DeleteUser from '@/components/admin/users/DeleteUser.vue';
    import EditUser from '@/components/admin/users/EditUser.vue';   
    import HistoryUserClasses from '@/components/admin/users/HistoryUserClasses.vue';
    import LevelUser from '@/components/admin/users/LevelUser.vue';
    import WeeklyUserClasses from '@/components/admin/users/WeeklyUserClasses.vue';
    import Alert from '@/components/alerts/admin/Alert.vue';
    import DeleteUserModal from '@/components/modals/admin/users/DeleteUserModal.vue';
    import { useUserStore } from '@/stores/user';
    import { onMounted, ref } from 'vue';
    import { RouterLink, useRoute, useRouter } from 'vue-router';
    
    const route = useRoute()
    const { id } = route.params
    const router = useRouter();

    const userStore = useUserStore()

    const section = ref(1)
    const userData = ref(null)

    onMounted(async () => {

        try {
            const response = await UserAPI.getUserById(id)

            if(response.status === 200) {
                userData.value = response.data.data
            }
            
            if (response.status === 404) {
                router.push({ name: 'admin-home'})
            }

        } catch (error) {
            console.error(error)
        }
    })

</script>

<template>

    <Alert
        v-if="userStore.alert.status"
        :title="userStore.alert.title"
        :subtitle="userStore.alert.subtitle"
        :textColor="userStore.alert.textColor"
        :icon="userStore.alert.icon"/>

    <div class="flex justify-end p-8">
        <RouterLink
            :to="{ name: 'admin-home' }"
            class="bg-pink-500 text-white px-4 py-2 cursor-pointer hover:opacity-75 rounded-lg flex justify-center items-center gap-x-2 uppercase"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                </svg> Regresar 
        </RouterLink>
    </div>

    <section class="px-8">
        <div class="bg-white dark:bg-slate-700 rounded-lg">
            <div class="px-4 pt-4 pb-1">
                <div class="flex justify-start items-start gap-x-4">
                    <div>
                        <img 
                            src="../../../assets/img/300-27.jpg" 
                            alt="imagen perfil"
                            class="w-30 rounded-lg border-2 border-cyan-500 p-1">
                    </div>
                    <div>
                        <h2 class="text-2xl text-gray-700 dark:text-white"> 
                            {{ userData?.name ?? 'Desconocido' }}
                                <span class="block text-lg text-gray-500 dark:text-slate-400"> 
                                    {{ userData?.last_name ?? 'Desconocido' }} {{ userData?.mothers_name ?? 'Desconocido' }}
                                </span>
                        </h2>
                        <p class="text-gray-500 dark:text-slate-400 flex items-center gap-x-2">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                            </span> {{ userData?.email ?? 'Desconocido' }}
                        </p>
                    </div>
                </div>
                <div class="flex justify-start gap-x-6 mt-4">
                    <button
                        @click.prevent="section = 1"
                        class="text-xl cursor-pointer my-2"
                        :class="section === 1 ? 'border-b-4 text-cyan-500 font-light' : 'text-gray-500 dark:text-slate-400 hover:text-cyan-500' ">
                            Información general
                    </button>
                    <button
                        @click.prevent="section = 2"
                        class="text-xl cursor-pointer my-2"
                        :class="section === 2 ? 'border-b-4 text-cyan-500 font-light' : 'text-gray-500 dark:text-slate-400 hover:text-cyan-500' ">
                            Clases
                    </button>
                    <button
                        @click.prevent="section = 3"
                        class="text-xl cursor-pointer my-2"
                        :class="section === 3 ? 'border-b-4 text-cyan-500 font-light' : 'text-gray-500 dark:text-slate-400 hover:text-cyan-500' ">
                            Nivel
                    </button>
                </div>
            </div>
        </div>
    </section>

    <div
        v-if="section === 1">
            <EditUser
                :user="userData"/>
            <DeleteUser
                :user="userData"/>
    </div>

    <div
        v-if="section === 2">
            <WeeklyUserClasses
                :user="userData"/>
            <HistoryUserClasses/>
    </div>

    <div
        v-if="section === 3">
            <LevelUser
                :user="userData"/>
    </div>

    <DeleteUserModal
        v-if="userStore.statusDeleteUserModal"/>
        
</template>