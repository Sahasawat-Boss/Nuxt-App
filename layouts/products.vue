<template>
    <main>
        <!-- Output the page content-->
        <div>
            <slot /><!-- a pages in Pages folder-->
        </div>

        <footer class="footer">
            <nav>
                <h2>Nuxt App Footer</h2>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products">Products</NuxtLink>
                </li>
            </nav>
        </footer>
    </main>
</template>

<style scoped>
.router-link-exact-active {
    color: greenyellow;
}

nav {
    background: #aee5bb;
}

footer {
    background: #aee5bb;
}
</style>