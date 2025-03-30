<script setup>
//http://localhost:3000/products/33
definePageMeta({
    layout: 'products'
})

const { id } = useRoute().params

const uri = 'https://fakestoreapi.com/products/' + id

//  fetch the products
const { data: product } = await useFetch(uri, { key: id })

</script>


<template>
    <h1 class="text-xl font-semibold italic">{{ product.title }}</h1>
    <div>
        <p>Product ID: {{ product.id }}</p>
        <p>Product Name: {{ product.title }}</p>
        <p>Price: {{ product.price }}</p>
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