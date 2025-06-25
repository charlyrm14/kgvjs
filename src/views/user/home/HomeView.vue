<script setup>
    import UserProfile from '@/components/user/home/UserProfile.vue';
    import Sections from '@/components/user/home/Sections.vue';
    import Tips from '@/components/user/home/Tips.vue';
    import TeamAndTeachers from '@/components/user/home/TeamAndTeachers.vue';
    import { onMounted, ref } from 'vue';
    import UserAPI from '@/api/UserAPI';
    import BirthdayModal from '@/components/ui/modals/user/BirthdayModal.vue';
    
    const userInfo = ref(null)
    const showBirthdayModal = ref(false)

    onMounted(async() => {
        try {

            const response = await UserAPI.infoHome()

            if (response.status === 200) {
                userInfo.value = response.data.data

                if (response.data.data.is_birthdate) {
                    showBirthdayModal.value = true
                }
            }

            if (response.status === 401 || response.status === 404) {
                userInfo.value = null
            }

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

    <Tips/>

    <TeamAndTeachers/>

    <BirthdayModal
        v-if="showBirthdayModal"
        :user="userInfo"
        @update:statusModal="val => showBirthdayModal = val"/>

</template>