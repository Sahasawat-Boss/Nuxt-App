<template>
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
</template>
