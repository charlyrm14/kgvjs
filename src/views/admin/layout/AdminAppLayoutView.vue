<script setup>
    
    import AdminFooter from '@/components/admin/layout/AdminFooter.vue';
    import AdminNavMenu from '@/components/admin/layout/AdminNavMenu.vue';
    import Header from '@/components/layout/Header.vue';
    

    
</script>

<template>
    <Header/>
    <AdminNavMenu/>
        <RouterView/>
    <AdminFooter/>
</template>