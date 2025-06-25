<script setup>

    import { colorForUserType, backGroundColorForUserType } from '@/helpers';

    defineProps({
        user: {
            type: Object,
            required: false
        }
    })
    
</script>

<template>
    <tr>
        <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
            <div>
                <h2 class="font-medium text-gray-800 dark:text-white "> {{ user?.first_name ?? 'Desconocido' }} </h2>
                <p class="text-sm font-normal text-gray-600 dark:text-gray-400"> 
                    {{ user?.last_name ?? 'Desconocido' }}  {{ user?.mother_last_name ?? 'Desconocido' }}  
                </p>
            </div>
        </td>

        <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
            <div
                :class="colorForUserType(user?.role?.name), backGroundColorForUserType(user?.role?.name)"
                class="inline px-3 py-1 text-sm font-normal rounded-full gap-x-2 dark:bg-gray-800">
                    {{ user?.role?.name }}
            </div>
        </td>

        <td class="px-4 py-4 text-sm whitespace-nowrap">
            <div>
                <h4 class="text-gray-700 dark:text-gray-200"> {{ user?.email }} </h4>
            </div>
        </td>

        <td class="px-4 py-4 text-sm whitespace-nowrap">
            <div class="rounded-lg flex justify-end">
                <RouterLink 
                    :to="{
                        name: 'admin-user-profile',
                        params: {
                            id: user?.id
                        } 
                    }"
                    class="bg-cyan-500 text-white cursor-pointer px-4 py-2 rounded-lg">
                        Seleccionar
                </RouterLink>
            </div>
        </td>
    </tr>
</template>