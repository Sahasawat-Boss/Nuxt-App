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
    <div>
        <ProductDetails :product="product" />
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