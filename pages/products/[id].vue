<script setup>
definePageMeta({
    layout: 'products'
})

const { id } = useRoute().params

const uri = 'https://fakestoreapi.com/products/' + id

//  fetch the products
const { data: product } = await useFetch(uri, { key: id })


// Handle Error >> go to Custom Error Page
if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
}
// The createError function is a utility in Nuxt.js that creates an error object with additional metadata. It's designed to be thrown within your application to handle errors gracefully.
// fatal = true >> ensures that the error triggers the global error handler, which typically results in rendering the error page. 
</script>


<template>
    <!-- Built In Meta Tag-->
    <Head>
        <Title>Nuxt App | {{ product.title }}</Title>
        <Meta name="Product description" :content="product.description" />
    </Head>

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