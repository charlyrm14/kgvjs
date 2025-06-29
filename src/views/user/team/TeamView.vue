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
                Equipo King Dreams
            </h2>
            <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                Conoce al equipo que nos representa en competencias a nivel nacional, destacando esfuerzo, disciplina y pasión deportiva.
            </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 py-4 gap-4 md:gap-y-0">
            <div class="bg-indigo-100 border border-indigo-200 p-4 rounded-lg">
                <div class="border-b border-indigo-200">
                    <div class="flex justify-center">
                        <img 
                            src="../../../assets/img/winner.png" 
                            alt="Equipo king dreams"
                            class="w-30">
                    </div>
                    <div class="flex justify-center my-2">
                        <h2 class="text-xl text-indigo-500 text-center"> 
                            Valentina E. 
                                <span class="block text-base"> Hérnandez Ramos </span>
                        </h2>
                    </div>
                </div>
                <div class="mt-3">
                    <div class="bg-indigo-200 my-1 p-1 rounded px-3">
                        <p class="font-light"> Le gustan los insectos </p>
                    </div>
                    <div class="bg-indigo-200 my-1 p-1 rounded px-3">
                        <p class="font-light"> Le gusta leer </p>
                    </div>
                    <div class="bg-indigo-200 mt-1 p-1 rounded px-3">
                        <p class="font-light"> Le gusta el espacio </p>
                    </div>
                </div>
            </div>
            <div class="bg-indigo-100 border border-indigo-200 p-4 rounded-lg">
                <div class="border-b border-indigo-200">
                    <div class="flex justify-center">
                        <img 
                            src="../../../assets/img/winner.png" 
                            alt="Equipo king dreams"
                            class="w-30">
                    </div>
                    <div class="flex justify-center my-2">
                        <h2 class="text-xl text-indigo-500 text-center"> 
                            Valentina E. 
                                <span class="block text-base"> Hérnandez Ramos </span>
                        </h2>
                    </div>
                </div>
                <div class="mt-3">
                    <div class="bg-indigo-200 my-1 p-1 rounded px-3">
                        <p class="font-light"> Le gustan los insectos </p>
                    </div>
                    <div class="bg-indigo-200 my-1 p-1 rounded px-3">
                        <p class="font-light"> Le gusta leer </p>
                    </div>
                    <div class="bg-indigo-200 mt-1 p-1 rounded px-3">
                        <p class="font-light"> Le gusta el espacio </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
