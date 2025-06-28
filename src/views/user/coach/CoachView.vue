<script setup>
    import HomeLink from '@/components/ui/links/HomeLink.vue';
</script>

<template>
    <section class="px-6 md:px-12 lg:px-16 py-8 md:py-10">
        <div class="flex justify-start mt-8">
            <HomeLink/>
        </div>
        <div class="text-center mt-2 mb-8">
            <h2 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white uppercase tracking-wide">
                Nuestro Equipo Docente
            </h2>
            <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                Conoce a los profesionales que guíaran tu aprendizaje con pasión, experiencia y compromiso.
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 py-4 gap-y-4 md:gap-x-4 md:gap-y-0">
            <div class="bg-red-100 border border-red-200 p-4 rounded-lg">
                <div class="border-b border-red-200">
                    <div class="flex justify-center">
                        <img 
                            src="../../../assets/img/coach-2-kg.png" 
                            alt="Profesor king dreams"
                            class="w-30">
                    </div>
                    <div class="flex justify-center my-2">
                        <h2 class="text-xl text-red-500 text-center"> 
                            Gregorio. 
                                <span class="block text-base"> Morales </span>
                        </h2>
                    </div>
                </div>
                <div class="mt-3">
                    <div class="bg-red-200 my-1 p-1 rounded px-3">
                        <p class="font-light"> Amante del ciclismo </p>
                    </div>
                    <div class="bg-red-200 my-1 p-1 rounded px-3">
                        <p class="font-light"> Fan del Cruz Azul </p>
                    </div>
                    <div class="bg-red-200 mt-1 p-1 rounded px-3">
                        <p class="font-light"> No le gusta sonreir </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>