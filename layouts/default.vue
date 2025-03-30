<template>
    <main>
        <header class="shadow-sm">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Nuxt App Test</NuxtLink>
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products" class="btn">Products</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>

        <!-- Output the page content-->
        <div class="container mx-auto p-4">
            <slot /><!-- a pages in Pages folder-->

            <footer class="footer"> Page Footer</footer>
        </div>
    </main>
</template>

<style scoped>
.router-link-exact-active {
    color: rgb(85, 193, 75);
}
</style>