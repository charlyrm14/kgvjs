<script setup>
    import UserItem from '@/components/admin/users/UserItem.vue';
    import Alert from '@/components/alerts/admin/Alert.vue';
    import AddUserModal from '@/components/modals/admin/users/AddUserModal.vue';
    import DeleteUserModal from '@/components/modals/admin/users/DeleteUserModal.vue';
    import EditUserModal from '@/components/modals/admin/users/EditUserModal.vue';
    import { useUserStore } from '@/stores/user';

    const userStore = useUserStore()
    
</script>

<template>

    <Alert
        v-if="userStore.alert.status"
        :bgColor="userStore.alert.bgColor"
        :textColor="userStore.alert.textColor"
        :text="userStore.alert.text"/>
    
    <section class="p-8 my-8">

        <div class="my-4">
            <div class="flex justify-between items-center">
                <div class="flex justify-start items-center shadow-lg">
                    <button
                        class="px-4 py-2 bg-white dark:bg-slate-900 text-gray-700 dark:text-slate-300 uppercase rounded-tl-lg rounded-bl-lg font-light hover:bg-gray-200 dark:hover:bg-slate-600 cursor-pointer border-r border-gray-300 dark:border-slate-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                    </button>
                    <button
                        class="px-4 py-2 bg-white dark:bg-slate-900 text-gray-700 dark:text-slate-300 uppercase rounded-tr-lg rounded-br-lg font-light hover:bg-gray-200 dark:hover:bg-slate-600 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                    </button>
                </div>
                <div>
                    <button
                        @click="userStore.showAddUserModal()"
                        class="bg-indigo-500 text-white font-extralight flex justify-between items-center gap-x-2 px-4 py-2 rounded-lg cursor-pointer hover:opacity-75">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg> Agregar usuario
                    </button>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
            <UserItem
                v-for="user in userStore?.users"
                :key="user.id"
                :user="user"/>
        </div>

        <div
            v-if="userStore?.users.length >= 16"
            class="mt-15">
                <div class="flex justify-center items-center">
                    <button class="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg uppercase font-extralight cursor-pointer hover:opacity-75">
                        Mostrar más
                    </button>
                </div>
        </div>

    </section>

    <AddUserModal
        v-if="userStore.statusAddUserModal"/>

    <EditUserModal
        v-if="userStore.statusEditUserModal"/>

    <DeleteUserModal
        v-if="userStore.statusDeleteUserModal"/>
</template>