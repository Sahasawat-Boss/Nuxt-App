<script setup>
//http://localhost:3000/products/33
definePageMeta({
    layout: 'products'
})

const { id } = useRoute().params
</script>


<template>
    <h2>Products id: {{ id }}</h2>
    <p>
        Details of product: {{ id }}
    </p>
    <p>
        {{ id }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, natus.
    </p>
    <p>
        {{ id }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, natus.
    </p>
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