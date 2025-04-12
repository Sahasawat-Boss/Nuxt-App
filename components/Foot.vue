<template>
    <footer class="text-center py-4 mt-8 text-sm text-gray-600 shadow-top">
    &copy; {{ new Date().getFullYear() }} Nuxt App — by Boss from Net Ninja
    </footer>
</template>

<style scoped>
.shadow-top {
    box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.05),
                0 -2px 4px -2px rgba(0, 0, 0, 0.05);
}
</style>
