<template>
    <RouterLink
        :to="{ name: 'home' }"
        class="bg-pink-600 text-white rounded-full p-2 md:p-3 cursor-pointer hover:opacity-75">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
    </RouterLink>
</template>