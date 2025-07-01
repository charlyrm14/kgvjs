<script setup>
    import { useSwimmingLevelStore } from '@/stores/swimmingLevel'

    const levelStore = useSwimmingLevelStore()

    const emit = defineEmits(['closeDetailModal'])

    defineProps({
        item: {
            type: Object,
            required: true
        }
    })

    const closeModal = () => {
        emit('closeDetailModal')
    }

</script>

<template>
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-[90%] max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-2xl xl:max-w-xl p-6 mx-4">
            <!-- Encabezado -->
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-light text-slate-800 dark:text-white flex items-center gap-2"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
                    </svg>  {{ item?.name ?? 'Desconocido' }}
                </h2>
                <button
                    @click="closeModal"
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

            <div class="mt-6">
                <div>
                    <div class="flex justify-center">
                        <img 
                            :src="levelStore?.urlAPI + '/' + item?.image" 
                            :alt="item?.name" 
                            class="w-45">
                    </div>
                    <div class="flex justify-center">
                        <h2 class="text-pink-500 uppercase text-2xl"> {{ item?.name ?? 'Desconocido' }} </h2>
                    </div>
                </div>
                <div class="my-6">
                    <p class="dark:text-slate-300"> {{ item?.description ?? '---' }} </p>
                </div>
                <div class="my-6">
                    <h2 class="uppercase dark:text-slate-400"> Habilidades </h2>
                    <div class="my-3 border-b dark:border-slate-700 dark:text-cyan-300">
                        <p> {{ item?.skill_1 ?? '--' }} </p>
                    </div>
                    <div class="my-3 border-b dark:border-slate-700 dark:text-cyan-300">
                        <p> {{ item?.skill_2 ?? '--' }}  </p>
                    </div>
                    <div class="my-3 border-b dark:border-slate-700 dark:text-cyan-300">
                        <p> {{ item?.skill_3 ?? '--' }}  </p>
                    </div>
                </div>
            </div>

            <!-- Acciones -->
            <div class="flex justify-end gap-2">
                <button
                    @click="closeModal"
                    class="px-4 py-2 border text-gray-500 dark:text-slate-400 rounded-lg text-sm transition uppercase cursor-pointer hover:opacity-75">
                        Cerrar
                </button>
            </div>

        </div>
    </div>
</template>
