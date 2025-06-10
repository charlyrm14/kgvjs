<script setup>

    defineProps({
        user: {
            type: Object,
            required: true
        }
    })

    const colorRole = {
        1: 'bg-pink-500',
        2: 'bg-purple-500',
        3: 'bg-amber-500'
    }
    
</script>

<template>
    <div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center">
            <div class="flex items-center gap-x-3">
                <div>
                    <img 
                        src="../../../assets/img/300-27.jpg" 
                        alt=""
                        class="w-15 h-15 rounded border-2 border-cyan-500 p-0.5">
                </div>
                <div>
                    <p class="uppercase text-gray-600 dark:text-slate-200">
                        {{ user?.name }} 
                        <span class="block text-sm"> {{ user?.last_name }} {{ user?.mothers_name }} </span>
                    </p>
                </div>
            </div>
            <div class="flex justify-start md:justify-center lg:justify-center my-3 md:my-0 lg:my-0">
                <span 
                    class="block text-sm text-white w-auto px-3 text-center rounded mt-1"
                    :class="colorRole[user?.role_id] ?? 'bg-red-500' ">
                        {{ user?.role?.name }}
                </span>
            </div>
            <div class="relative flex justify-start md:justify-center lg:justify-center my-3 md:my-0 lg:my-0" ref="targetRef">
                <RouterLink
                    :to="{
                        name: 'admin-user-profile',
                        params: {
                            id: user?.id
                        }
                    }"
                    class="bg-blue-500 text-white px-4 py-1 rounded-lg font-extralight hover:opacity-75 cursor-pointer"> 
                        Seleccionar 
                </RouterLink>
            </div>
        </div>
        <div class="border-b border-dashed border-gray-300 dark:border-slate-400 my-3"></div>
    </div>
</template>