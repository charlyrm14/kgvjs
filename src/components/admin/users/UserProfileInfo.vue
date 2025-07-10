<script setup>
    import { useUserStore } from '@/stores/user';
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    defineProps({
        user: {
            type: Object,
            required: true
        }
    })

    const route = useRoute()
    const { id } = route.params

    const userStore = useUserStore()

    const emit = defineEmits(['statusProfileInfo'])

    onMounted(async() => {
        await userStore.fetchUserProfileInfo(id)
    })

</script>

<template>
    <div class="p-1 md:p-4 mt-4 md:mt-0">
        <div class="flex justify-end items-end">
            <button
                @click.prevent="emit('statusProfileInfo', user)"
                class="px-4 py-1 bg-purple-500 rounded text-white font-light hover:opacity-75 cursor-pointer">
                    Agregar información perfil
            </button>
        </div>
        <div>
            <h2 class="text-cyan-500 text-lg"> Biografía </h2>
            <p 
                v-if="userStore?.dataProfileInfo?.profile?.biography"
                class="text-black dark:text-slate-300 text-base font-light">
                    {{ userStore?.dataProfileInfo?.profile?.biography?.content }}
            </p>
            <p 
                v-else
                class="text-gray-600 dark:text-slate-400"> Agrega una biografía para este usuario </p>
        </div>
        <div class="mt-6">
            <h2 class="text-pink-500 text-lg"> Hobbies </h2>
            <div
                v-if="userStore?.dataProfileInfo?.profile?.hobbies"
                v-for="hobbie in userStore?.dataProfileInfo?.profile?.hobbies"
                :key="hobbie.id">
                <p 
                    class="text-black dark:text-slate-300 text-base font-light"> 
                        {{ hobbie?.content }}
                </p>
            </div>
            <p 
                v-else
                class="text-gray-600 dark:text-slate-400"> Agrega un hobbie para este usuario </p>
        </div>
        <div class="mt-6">
            <h2 class="text-indigo-500 text-lg"> Logros </h2>
            <div
                v-if="userStore?.dataProfileInfo?.profile?.achievements"
                v-for="achievement in userStore?.dataProfileInfo?.profile?.achievements"
                :key="achievement.id">
                <p 
                    class="text-black dark:text-slate-300 text-base font-light"> 
                        {{ achievement?.content }}
                </p>
            </div>
            <p 
                v-else
                class="text-gray-600 dark:text-slate-400"> Agrega un logro para este usuario </p>
        </div>
    </div>
</template>
