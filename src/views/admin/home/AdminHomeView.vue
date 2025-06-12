<script setup>
    import UserItem from '@/components/admin/users/UserItem.vue';
    import Alert from '@/components/alerts/admin/Alert.vue';
    import AddUserModal from '@/components/modals/admin/users/AddUserModal.vue';

    import { useUserStore } from '@/stores/user';

    const userStore = useUserStore()
    
</script>

<template>

    <Alert
        v-if="userStore.alert.status"
        :title="userStore.alert.title"
        :subtitle="userStore.alert.subtitle"
        :textColor="userStore.alert.textColor"
        :icon="userStore.alert.icon"/>
    
    <section class="p-8">

        <div class="mt-4">
            <div class="flex justify-end items-center">
                <div>
                    <button
                        @click="userStore.showAddUserModal()"
                        class="bg-indigo-500 text-white px-4 py-2 cursor-pointer hover:opacity-75 rounded-lg flex items-center gap-2 font-extralight">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg> Agregar usuario
                    </button>
                </div>
            </div>
        </div>

        <div class="mt-4">
            <div class="flex justify-start items-center">
                <input 
                    type="text"
                    name="search"
                    placeholder="Buscar..."
                    class="bg-white dark:bg-slate-600 text-gray-600 dark:text-slate-300 border border-gray-300 dark:border-slate-600 px-4 py-2 rounded-tl-lg rounded-bl-lg focus:outline-none focus:ring-0">
                <button
                    class="bg-white dark:bg-slate-600 text-gray-600 dark:text-slate-300 border border-gray-300 dark:border-slate-600 px-4 py-2 rounded-tr-lg rounded-br-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </div>
        </div>

        <div class="mt-10 bg-white dark:bg-slate-700 p-4 rounded-lg shadow-lg">
            <UserItem
                v-for="user in userStore?.users"
                :key="user.id"
                :user="user"/>
        </div>

    </section>

    <AddUserModal
        v-if="userStore.statusAddUserModal"/>

</template>