<script setup>
    
    defineProps({
        user: {
            type: Object,
            required: false
        }
    })

</script>

<template>
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <!-- Contenedor del modal -->
        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-[90%] max-w-md p-6 mx-4">
            
            <!-- Encabezado -->
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-light text-pink-500 flex items-center gap-2"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                    </svg> Feliz cumpleaños 
                </h2>
                <button
                    @click.prevent="$emit('update:statusModal', false)"
                    class="text-slate-400 hover:text-red-500 transition cursor-pointer">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            class="h-5 w-5" 
                            fill="none" 
                            viewBox="0 0 24 24"
                            stroke="currentColor" 
                            stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>

            <!-- Contenido -->
            <div class="text-slate-600 dark:text-slate-300 mb-6">
                <p class="text-2xl uppercase mb-3"> 
                        {{ user?.first_name ?? 'Desconocido' }} 
                </p>
                <p class="text-base mb-3 text-indigo-500 dark:text-amber-500"> Felices {{ user?.age ?? 0 }} año(s) </p>
                <p> Que este nuevo año de vida te regale salud, alegría y muchas bendiciones. Que cada día esté lleno de momentos que te hagan sonreír, rodeado de quienes más quieres. ¡De parte de <span class="text-blue-500 dark:text-cyan-500 uppercase"> King Dreams </span>, te deseamos todo lo mejor hoy y siempre! </p>
                <p class="mt-2"> Gracias por ser parte de nuestra escuela de natación; tu presencia y compromiso nos inspiran a seguir creciendo juntos </p>
                <div class="confetti-container pointer-events-none">
                    <!-- Puedes duplicar más spans si deseas -->
                    <span class="confetti"></span>
                    <span class="confetti"></span>
                    <span class="confetti"></span>
                    <span class="confetti"></span>
                    <span class="confetti"></span>
                    <span class="confetti"></span>
                    <span class="confetti"></span>
                    <span class="confetti"></span>
                    <span class="confetti"></span>
                    <span class="confetti"></span>
                </div>
            </div>

            <!-- Acciones -->
            <div class="flex justify-end gap-2">
                <button
                    @click.prevent="$emit('update:statusModal', false)"
                    class="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition uppercase cursor-pointer">
                        Cerrar
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .confetti-container {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 0;
    }

    .confetti {
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: red;
        top: -10px;
        animation: fall 3s linear infinite;
        opacity: 0.8;
        border-radius: 50%;
    }

    /* Genera confetis con distintos estilos */
    .confetti:nth-child(1) { left: 10%; background: #f87171; animation-delay: 0s; }
    .confetti:nth-child(2) { left: 20%; background: #facc15; animation-delay: 0.2s; }
    .confetti:nth-child(3) { left: 30%; background: #4ade80; animation-delay: 0.4s; }
    .confetti:nth-child(4) { left: 40%; background: #60a5fa; animation-delay: 0.6s; }
    .confetti:nth-child(5) { left: 50%; background: #a78bfa; animation-delay: 0.8s; }
    .confetti:nth-child(6) { left: 60%; background: #f472b6; animation-delay: 1s; }
    .confetti:nth-child(7) { left: 70%; background: #34d399; animation-delay: 1.2s; }
    .confetti:nth-child(8) { left: 80%; background: #fbbf24; animation-delay: 1.4s; }
    .confetti:nth-child(9) { left: 90%; background: #38bdf8; animation-delay: 1.6s; }
    .confetti:nth-child(10) { left: 95%; background: #e879f9; animation-delay: 1.8s; }

    @keyframes fall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
    }
        100% {
            transform: translateY(300px) rotate(360deg);
            opacity: 0;
        }
    }
</style>