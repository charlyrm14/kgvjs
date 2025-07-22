<script setup>
    import NotFoundImage from '@/assets/img/404-error-dark.png'
</script>

<template>
    <div class="flex items-center justify-center min-h-screen">
        <div>
            <img 
                :src="NotFoundImage"
                alt="Not found">
            <h1 class="text-pink-500 text-4xl text-center"> ¡Oops! Página no encontrada. </h1>
            <p class="mt-2 mb-12 text-center dark:text-white"> La página que buscas no existe o fue movida. </p>
            <div class="flex justify-center">
                <RouterLink
                    :to="{ name: 'home' }"
                    class="mt-4 bg-pink-500 text-white px-4 py-2 uppercase text-xl hover:opacity-75 cursor-pointer rounded"> 
                        Regresar 
                </RouterLink>
            </div>
        </div>
    </div>
</template>
