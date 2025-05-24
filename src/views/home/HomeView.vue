<script setup>
    import BirthdateModal from '@/components/modals/user/BirthdateModal.vue';
    import { useHomeStore } from '@/stores/home';
    import UserBirthdate from '@/components/home/UserBirthdate.vue';
    import UserFeatured from '@/components/home/UserFeatured.vue';
    import HomeEventCard from '@/components/home/HomeEventCard.vue';
    import HomeNoticeCard from '@/components/home/HomeNoticeCard.vue';
    import HomeMainCard from '@/components/home/HomeMainCard.vue';
    
    const home = useHomeStore()

</script>

<template>
    <section class="px-4 sm:px-6 py-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-3 lg:gap-4 mt-8">

            <!-- Card principal -->
            <HomeMainCard/>

            <!-- Tarjeta 1 -->
            <UserFeatured
                :usersFeatured="home?.info?.featured_users"/>

            <!-- Tarjeta 2 -->
            <UserBirthdate
                :users="home?.info?.users_birthdate"/>

            <!-- Tarjeta 3 -->
            <HomeNoticeCard
                :notice="home?.info?.important_notice"/>

            <!-- Tarjeta 4 -->
            <HomeEventCard
                :event="home?.info?.last_event"/>

        </div>
    </section>

    <BirthdateModal
        v-if="home.modalBirthdate"
        :name="home?.info?.name"
        :age="home?.info?.age"/>
</template>