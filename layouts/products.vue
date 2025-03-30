<template>
    <main>
        <!-- Output the page content-->
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <NuxtLink to="/products" class="font-bold">Nuxt App Product</NuxtLink>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products">Merch</NuxtLink>
                </li>
            </ul>
        </footer>
    </main>
</template>

<style scoped>
.router-link-exact-active {
    color: rgb(85, 193, 75);
}
</style>