<script setup>
    
    import DeleteUser from '@/components/admin/users/DeleteUser.vue';
    import EditUser from '@/components/admin/users/EditUser.vue';   
    import HistoryUserClasses from '@/components/admin/users/HistoryUserClasses.vue';
    import LevelUser from '@/components/admin/users/LevelUser.vue';
    import WeeklyUserClasses from '@/components/admin/users/WeeklyUserClasses.vue';
    import DeleteUserModal from '@/components/modals/admin/users/DeleteUserModal.vue';
    import { useUserStore } from '@/stores/user';
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';

    const userStore = useUserStore()

    const user = {
        id: 1,
        name: 'Carlos I.',
        last_name: 'Ramos'
    }

    const section = ref(1)

</script>

<template>

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
                        <h2 class="text-2xl dark:text-white"> 
                            Carlos I .
                                <span class="block text-lg dark:text-slate-400"> Ramos Morales </span>
                        </h2>
                        <p class="dark:text-slate-400">
                            charlyrm14@gmail.com
                        </p>
                    </div>
                </div>
                <div class="flex justify-start gap-x-6 mt-4">
                    <button
                        @click.prevent="section = 1"
                        class="text-xl cursor-pointer my-2"
                        :class="section === 1 ? 'border-b-4 text-cyan-500 font-light' : 'dark:text-slate-400 hover:text-cyan-500' ">
                            Información general
                    </button>
                    <button
                        @click.prevent="section = 2"
                        class="text-xl cursor-pointer my-2"
                        :class="section === 2 ? 'border-b-4 text-cyan-500 font-light' : 'dark:text-slate-400 hover:text-cyan-500' ">
                            Clases
                    </button>
                    <button
                        @click.prevent="section = 3"
                        class="text-xl cursor-pointer my-2"
                        :class="section === 3 ? 'border-b-4 text-cyan-500 font-light' : 'dark:text-slate-400 hover:text-cyan-500' ">
                            Nivel
                    </button>
                </div>
            </div>
        </div>
    </section>

    <div
        v-if="section === 1">
            <EditUser/>
            <DeleteUser/>
    </div>

    <div
        v-if="section === 2">
            <WeeklyUserClasses/>
            <HistoryUserClasses/>
    </div>

    <div
        v-if="section === 3">
            <LevelUser/>
    </div>

    <DeleteUserModal
        v-if="userStore.statusDeleteUserModal"/>
</template>