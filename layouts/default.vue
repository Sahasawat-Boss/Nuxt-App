<script setup>
import Nav from '~/components/Nav.vue';
import Foot from '~/components/Foot.vue';
</script>

<template>
    <main>
        <Nav />

        <div class="container mx-auto p-4">
            <slot />
        </div>

        <Foot />
    </main>
</template>

<style scoped>
.shadow-top {
    box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.05),
        0 -2px 4px -2px rgba(0, 0, 0, 0.05);
}
</style>