<script setup>
    import UserProfile from '@/components/user/home/UserProfile.vue';
    import Sections from '@/components/user/home/Sections.vue';
    import Tips from '@/components/user/home/Tips.vue';
    import TeamAndTeachers from '@/components/user/home/TeamAndTeachers.vue';
    import { onMounted, ref } from 'vue';
    import UserAPI from '@/api/UserAPI';
    import BirthdayModal from '@/components/ui/modals/user/BirthdayModal.vue';
    import { useContentStore } from '@/stores/content';
    
    const userInfo = ref(null)
    const showBirthdayModal = ref(false)

    const contentStore = useContentStore()

    onMounted(async() => {
        try {

            const userResponse = await UserAPI.infoHome();

            if (userResponse.status === 200) {
                userInfo.value = userResponse.data.data

                if (userResponse.data.data.is_birthdate) {
                    showBirthdayModal.value = true
                }
            }

            if (userResponse.status === 401 || userResponse.status === 404) {
                userInfo.value = null
            }

            await contentStore.fetchGetTipsContent()

        } catch (error) {
            console.error(error)
        }
    })
    
</script>

<template>
    
    <UserProfile
        v-if="userInfo"
        :user="userInfo"/>

    <Sections/>

    <Tips
        v-if="contentStore?.tips"
        :tips="contentStore?.tips"/>

    <TeamAndTeachers/>

    <BirthdayModal
        v-if="showBirthdayModal"
        :user="userInfo"
        @update:statusModal="val => showBirthdayModal = val"/>

</template>