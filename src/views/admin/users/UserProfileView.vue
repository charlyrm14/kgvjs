<script setup>

    import UserAttendance from '@/components/admin/users/UserAttendance.vue';
    import UserDetail from '@/components/admin/users/UserDetail.vue';
    import UserInfo from '@/components/admin/users/UserInfo.vue';
    import UserLevels from '@/components/admin/users/UserLevels.vue';
    import UserPayments from '@/components/admin/users/UserPayments.vue';
    import UserSchedule from '@/components/admin/users/UserSchedule.vue';
    import UserSectionTabs from '@/components/admin/users/UserSectionTabs.vue';
    import UserSettings from '@/components/admin/users/UserSettings.vue';
    import DeleteUserModal from '@/components/ui/modals/admin/users/DeleteUserModal.vue';
    
    import { useUserStore } from '@/stores/user';

    import { ref } from 'vue';
    import { RouterLink, useRoute, useRouter } from 'vue-router';
    

    const route = useRoute()
    const { id } = route.params
    const router = useRouter();

    const sections = ref(1)
    const userStore = useUserStore()

</script>

<template>
    <section class="px-6 md:px-12 lg:px-16 py-8 md:py-10">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <!-- Columna 1 (1/3 del ancho en md+) -->
            <div class="md:col-span-1 dark:bg-slate-700 py-6 md:py-9 rounded-lg shadow border border-gray-200 dark:border-none">
                <UserDetail/>
            </div>

            <!-- Columna 2 (2/3 del ancho en md+) -->
            <div class="md:col-span-3 dark:bg-slate-700 p-4 rounded-lg">
                <div class="p-1 md:p-4 flex justify-start items-center gap-x-5 md:gap-x-6 overflow-x-auto">
                    <UserSectionTabs :selected="sections" @update:section="val => sections = val"/>
                </div>

                <UserInfo
                    v-if="sections === 1"/>

                <UserSchedule
                    v-if="sections === 2"/>

                <UserPayments
                    v-if="sections === 3"/>

                <UserLevels
                    v-if="sections === 4"/>

                <UserAttendance
                    v-if="sections === 5"/>

                <UserSettings
                    v-if="sections === 6"/>
            </div>
        </div>
    </section>

    <DeleteUserModal
        v-if="userStore.statusDeleteUserModal"/>
    
</template>