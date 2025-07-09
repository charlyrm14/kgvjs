<script setup>
    import UploadProfileImage from '@/components/ui/modals/user/UploadProfileImage.vue';
    import ChangePassword from '@/components/user/profile/ChangePassword.vue';
    import PersonalDetails from '@/components/user/profile/PersonalDetails.vue';
    import { onMounted, ref } from 'vue';
    import { useAuthStore } from '@/stores/auth';
    import Alert from '@/components/ui/alerts/admin/Alert.vue';
    import { useUserStore } from '@/stores/user';
    
    
    const showUploadProfileImage = ref(false)
    
    const authStore = useAuthStore()
    const userStore = useUserStore()

    onMounted(async() => {
        await authStore?.loadUser()
    })

    const closeUploadProfileImage = () => {
        showUploadProfileImage.value = false
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
        <div class="py-4">

            <div class="flex justify-center relative">
                <img 
                    :src="userStore.profileImage" 
                    :alt="authStore?.user?.first_name ?? 'Perfil usuario'"
                    class="w-50 md:w-70"
                    :class="userStore.profileImage === '/img/user-profile.png' ? '' : 'rounded-full' ">
                <div 
                    @click="showUploadProfileImage = !showUploadProfileImage"
                    class="absolute -bottom-2 bg-pink-300 rounded-full p-3 cursor-pointer hover:opacity-90">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                        </svg>
                </div>                
            </div>
            <div class="mt-8 md:mt-12">
                <h2 class="text-gray-700 dark:text-slate-300 text-2xl text-center"> {{ authStore?.user?.first_name }} </h2>
                <p class="text-center text-gray-500 dark:text-slate-400"> {{ authStore?.user?.email }}  </p>
            </div>

            <PersonalDetails
                :user="authStore?.user"/>
                
            <ChangePassword
                :user="authStore?.user"/>

        </div>
    </section>

    <UploadProfileImage
        v-if="showUploadProfileImage"
        @closeProfileImageModal="closeUploadProfileImage"/>

</template>