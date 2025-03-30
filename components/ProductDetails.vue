<template>
    <div class="card">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-7">
                <img :src="`${product.image}`" class="mx-auto my-7" />
            </div>
            <div class="p-3">
                <h2 class="text-3xl">{{ product.title }}</h2>
                <p class="text-lg my-7">Product ID: {{ product.id }}</p>
                <p class="text-lg my-7">Price - ${{ product.price }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
                <p class="mb-3">{{ product.description }}</p>
                
                <!-- material-icons from Meta Tag: -->
                <!-- link: [ { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },], -->
                <button class="btn flex">
                    <i class="material-icons mr-2">add_shopping_cart</i>
                    <span>Add to cart</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style scoped>
img {
    max-width: 150px;
}
</style>