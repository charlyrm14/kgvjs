<script setup>
    import UserItem from '@/components/admin/users/UserItem.vue';
    import Alert from '@/components/alerts/admin/Alert.vue';
    import AddUserModal from '@/components/modals/admin/users/AddUserModal.vue';
    import AssistanceAssignModal from '@/components/modals/admin/users/AssistanceAssignModal.vue';
    import DeleteUserModal from '@/components/modals/admin/users/DeleteUserModal.vue';
    import EditUserModal from '@/components/modals/admin/users/EditUserModal.vue';
    import MessageUserModal from '@/components/modals/admin/users/MessageUserModal.vue';
    
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
            <div class="flex justify-end items-center">
                <div>
                    <button
                        @click="userStore.showAssistanceAssignModal()"
                        class="bg-indigo-400 text-white px-4 py-2 cursor-pointer hover:opacity-75 rounded-tl rounded-bl flex items-center gap-2 font-extralight">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                            </svg> Tomar asistencia
                    </button>
                </div>
                <div>
                    <button
                        @click="userStore.showAddUserModal()"
                        class="bg-indigo-500 text-white px-4 py-2 cursor-pointer hover:opacity-75 rounded-tr rounded-br flex items-center gap-2 font-extralight">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg> Agregar usuario
                    </button>
                </div>
            </div>
        </div>

        <div class="my-4">
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

    <EditUserModal
        v-if="userStore.statusEditUserModal"/>

    <DeleteUserModal
        v-if="userStore.statusDeleteUserModal"/>

    <MessageUserModal
        v-if="userStore.statusSendMessageUserModal"/>

    <AssistanceAssignModal
        v-if="userStore.statusAssistanceAssignModal"/>
</template>