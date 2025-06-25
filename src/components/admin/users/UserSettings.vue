<script setup>

    defineProps({
        user: {
            type: Object,
            required: false
        }    
    })

    const emit = defineEmits(['statusDeleteUserModal'])

    const openDeleteModal = () =>  {
        emit('statusDeleteUserModal')
    }

</script>

<template>
    <div class="p-1 md:p-4 mt-4 md:mt-0">
        <div>
            <h2 class="text-gray-700 dark:text-slate-300 uppercase">  Desactivar cuenta </h2>
        </div>
        <div class="my-4">
            <div class="flex items-start gap-4 p-4 border border-yellow-500 bg-gray-200 dark:bg-slate-800 rounded-lg">
                <!-- Ícono de advertencia -->
                <div class="text-yellow-500 mt-1">
                    <!-- Heroicon exclamación dentro de hexágono (puedes reemplazar con cualquier ícono SVG) -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                </div>

                <!-- Contenido del mensaje -->
                <div>
                    <p class="text-gray-700 dark:text-white font-semibold"> Atención </p>
                    <p class="text-base text-gray-600 dark:text-gray-400">
                        Por seguridad se te solicitara tu confirmación para eliminar a <span class="text-red-400 font-base"> {{ user?.first_name }} </span> . Una vez eliminado el usuario no podra acceder a la plataforma.
                    </p>
                </div>
            </div>
        </div>
        <div class="flex justify-between items-center mt-12">
            <button class="px-3 py-2 bg-gray-200 dark:bg-slate-600 text-gray-500 dark:text-slate-400 rounded-lg hover:opacity-75 cursor-pointer">
                Descartar
            </button>
            <button 
                @click.prevent="openDeleteModal"
                class="px-6 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white cursor-pointer font-light">
                    Eliminar usuario
            </button>
        </div>
    </div>
</template>