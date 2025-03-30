<script setup>
definePageMeta({
    layout: 'products'
})

// Docs: https://fakestoreapi.com/docs
//  fetch the products
const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<template>
    <div>
        <h2>Products</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-5">
            <div v-for="p in products" :key="p.id" class="shadow-sm text-sm hover:scale-105 transition p-2">
                <ProductCard :product="p" />
            </div>
        </div>
    </div>
</template>


<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>