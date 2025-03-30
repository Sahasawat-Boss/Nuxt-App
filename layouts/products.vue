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
                    <NuxtLink to="/" active-class="text-blue-500">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about" active-class="text-blue-500">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products" class="btn" active-class="text-blue-200">Products</NuxtLink>
                </li>
            </ul>
        </footer>
    </main>
</template>

<style scoped>
</style>