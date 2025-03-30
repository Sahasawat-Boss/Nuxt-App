<template>
    <main>
        <header class="shadow-sm">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Nuxt App</NuxtLink>
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
            </nav>
        </header>

        <!-- Output the page content-->
        <div class="container mx-auto p-4">
            <slot /><!-- a pages in Pages folder-->
        </div>

        <!-- Simple Footer -->
        <footer class="text-center py-4 mt-8 text-sm text-gray-600 shadow-top">
            &copy; {{ new Date().getFullYear() }} Nuxt App — by Boss
        </footer>
    </main>
</template>

<style scoped>
.shadow-top {
    box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.05),
        0 -2px 4px -2px rgba(0, 0, 0, 0.05);
}
</style>