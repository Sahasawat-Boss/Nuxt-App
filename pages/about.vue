<template>
    <header>
        <nav>
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

    <h2>About Page</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem eaque placeat illum ratione, porro quas ducimus
    </p>
</template>

<script setup>

</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>