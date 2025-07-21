<script setup>
    import Alert from '@/components/ui/alerts/admin/Alert.vue';
    import UserAttendance from '@/components/admin/users/UserAttendance.vue';
    import UserDetail from '@/components/admin/users/UserDetail.vue';
    import UserLevels from '@/components/admin/users/UserLevels.vue';
    import UserPayments from '@/components/admin/users/UserPayments.vue';
    import UserProfileInfo  from '@/components/admin/users/UserProfileInfo.vue';
    import UserSchedule from '@/components/admin/users/UserSchedule.vue';
    import UserSectionTabs from '@/components/admin/users/UserSectionTabs.vue';
    import UserSettings from '@/components/admin/users/UserSettings.vue';
    import DeleteUserModal from '@/components/ui/modals/admin/users/DeleteUserModal.vue';
    import AssignProfileInfo from '@/components/ui/modals/admin/users/AssignProfileInfo.vue';
    
    import { useUserStore } from '@/stores/user';

    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';
    
    const route = useRoute()
    const { id } = route.params

    const userStore = useUserStore()

    const sections = ref(1)
    const showAssignProfileInfoModal = ref(false)
    const showDeleteUserModal = ref(false)

    onMounted(async() => {
        await userStore.fetchUserById(id)
    })

    const handleStatusProfileInfoModal = () => {
        showAssignProfileInfoModal.value = true
    }

    const handleStatusDeleteUserModal = () => {
        showDeleteUserModal.value = true
    }

</script>

<template>

    <Alert
        v-if="userStore?.alert?.status"
        :title="userStore?.alert?.title"
        :subtitle="userStore?.alert?.subtitle"
        :color="userStore?.alert?.color"
        :icon="userStore?.alert?.icon"/>

    <section class="px-6 md:px-12 lg:px-16 py-8 md:py-10">
        <div class="flex justify-start items-center mb-6">
            <RouterLink
                :to="{ name: 'admin-home' }"
                class="bg-pink-600 text-white rounded-full p-2 md:p-3 cursor-pointer hover:opacity-75">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
            </RouterLink>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <!-- Columna 1 (1/3 del ancho en md+) -->
            <div class="md:col-span-1 bg-white dark:bg-slate-700 py-6 md:py-9 rounded-lg shadow border border-gray-200 dark:border-none">
                <UserDetail
                    :user="userStore?.userProfile"/>
            </div>

            <!-- Columna 2 (2/3 del ancho en md+) -->
            <div class="md:col-span-3 bg-white dark:bg-slate-700 p-4 rounded-lg shadow border border-gray-200 dark:border-none">
                <div class="p-1 md:p-4 flex justify-start items-center gap-x-5 md:gap-x-6 overflow-x-auto">
                    <UserSectionTabs :selected="sections" @update:section="val => sections = val"/>
                </div>

                <UserSchedule
                    v-if="sections === 1"
                    :user="userStore?.userProfile"/>

                <UserPayments
                    v-if="sections === 2"/>

                <UserLevels
                    v-if="sections === 3"/>

                <UserAttendance
                    v-if="sections === 4"
                    :user="userStore?.userProfile"/>

                <UserProfileInfo
                    v-if="sections === 5"
                    :user="userStore?.userProfile"
                    @statusProfileInfo="handleStatusProfileInfoModal"/>

                <UserSettings
                    v-if="sections === 6"
                    :user="userStore?.userProfile"
                    @statusDeleteUserModal="handleStatusDeleteUserModal"/>
            </div>
        </div>
    </section>
    
    <AssignProfileInfo
        v-if="showAssignProfileInfoModal"
        :user="userStore?.userProfile"
        @closeAssignProfileInfoModal="showAssignProfileInfoModal = false"/>

    <DeleteUserModal
        v-if="showDeleteUserModal"
        :user="userStore?.userProfile"
        @closeDeleteUserModal="showDeleteUserModal = false"/>
    
</template>