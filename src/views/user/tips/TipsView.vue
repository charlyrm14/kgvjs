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
                Domina el Agua
            </h2>
            <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                Pequeños cambios que marcan una gran diferencia en tu rendimiento.
            </p>
        </div>
        <div class="mt-6">
            <div class="grid grid-cols-1 md:grid-cols-6 md:grid-rows-9 gap-4">
                <!-- Card 1 -->
                <div class="md:col-span-2 md:row-span-6 p-4 bg-purple-100 border border-purple-200 rounded-lg flex flex-col justify-center h-full">
                    <div class="px-6 text-center">
                        <h2 class="font-extrabold text-2xl"> Mantén una postura hidrodinámica </h2>
                    </div>
                    <div class="px-12 mt-3 flex justify-center">
                        <img 
                            src="../../../assets/img/tip-1.png" 
                            alt="Postura hidrodinamica" 
                            class="w-40" />
                    </div>
                    <div class="px-6 my-3 text-center">
                        <p class="font-light text-base md:text-lg">
                            Mantén el cuerpo alineado con la superficie del agua para reducir la resistencia.
                        </p>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="md:col-span-4 md:row-span-3 md:col-start-3 p-4 bg-pink-100 border border-pink-200 rounded-lg md:flex md:items-center md:h-full">
                    <div class="flex justify-between w-full items-center">
                        <div class="px-6">
                            <h2 class="font-extrabold text-2xl"> Respira correctamente </h2>
                            <p class="font-light text-base md:text-lg mt-3">
                                Aprende a respirar de forma lateral y a ritmo con tus brazadas para evitar el agotamiento.
                            </p>
                        </div>
                        <div class="px-6">
                            <img 
                                src="../../../assets/img/tip-2.png" 
                                alt="Respira correctamente" 
                                class="w-40 md:w-50" />
                        </div>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="md:col-span-2 md:row-span-3 md:col-start-3 md:row-start-4 p-4 bg-yellow-100 border border-yellow-200 rounded-lg flex flex-col justify-center h-full">
                    <div class="px-6 text-center">
                        <h2 class="font-extrabold text-2xl"> Mejora tu patada </h2>
                        <p class="font-light text-base md:text-lg mt-3">
                            Una patada constante y ligera ayuda a mantener el equilibrio sin malgastar energía.
                        </p>
                    </div>
                    <div class="px-12 mt-3 flex justify-end">
                        <img 
                            src="../../../assets/img/tip-3.png" 
                            alt="Mejora tu patada" 
                            class="w-20 md:w-30"/>
                    </div>
                </div>

                <!-- Card 4 -->
                <div class="md:col-span-2 md:row-span-3 md:col-start-5 md:row-start-4 p-4 bg-green-100 border border-green-200 rounded-lg flex flex-col justify-center h-full">
                    <div class="flex justify-end px-6">
                        <img 
                            src="../../../assets/img/tip-4.png" 
                            alt="Postura hidrodinámica" 
                            class="w-20 md:w-30" />
                    </div>
                    <div class="px-6 mt-3 text-right">
                        <h2 class="font-extrabold text-2xl"> Mantén una postura hidrodinámica </h2>
                        <p class="font-light text-base md:text-lg mt-2">
                            Un abdomen fuerte mejora tu estabilidad y coordinación al nadar.
                        </p>
                    </div>
                </div>

                <!-- Card 5 -->
                <div class="md:col-span-4 md:row-span-3 md:row-start-7 p-4 bg-orange-100 border border-orange-200 rounded-lg flex items-center h-full">
                    <div class="flex justify-between items-center w-full px-6">
                        <div class="w-1/2">
                            <h2 class="font-extrabold text-2xl"> Mantén una postura hidrodinámica </h2>
                            <p class="font-light text-base md:text-lg mt-3">
                                Dominar varios estilos (crol, pecho, espalda, mariposa) mejora tu técnica general y te hace más versátil.
                            </p>
                        </div>
                        <div class="w-1/2 flex justify-end">
                            <img 
                                src="../../../assets/img/tip-5.png" 
                                alt="Postura hidrodinámica" 
                                class="w-40" />
                        </div>
                    </div>
                </div>

                <!-- Card 6 -->
                <div class="md:col-span-2 md:row-span-3 md:col-start-5 md:row-start-7 p-4 bg-blue-100 border border-blue-200 rounded-lg flex flex-col justify-center h-full">
                    <div class="px-6 text-center">
                        <h2 class="font-extrabold text-2xl"> Haz ejercicios de técnica (drills) </h2>
                        <p class="font-light text-base md:text-lg mt-3">
                            Dedica parte del entrenamiento a trabajar la entrada de manos, el agarre bajo el agua o la coordinación.
                        </p>
                    </div>
                    <div class="flex justify-end px-6 mt-3">
                        <img 
                            src="../../../assets/img/tip-6.png" 
                            alt="Drills" 
                            class="w-30 md:w-40" />
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>