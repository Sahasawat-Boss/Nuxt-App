<template>
    <main>
        <header class="shadow-sm">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold" >Nuxt App Test</NuxtLink>
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

            <footer class="footer"> Page Footer</footer>
        </div>
    </main>
</template>

<style scoped>

</style>