<template>
    <main>
        <header>
            <nav>
                <h2>Nuxt App Nav</h2>
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
            <br>
            <a href="/about">normal link -- about page</a>
        </header>

        <!-- Output the page content-->
        <div>
            <slot /><!-- a pages in Pages folder-->
        </div>

        <footer class="footer"> Page Footer</footer>
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