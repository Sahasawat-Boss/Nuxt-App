<template>
    <main>
        <h2>About</h2>
        <p>About Page Details:</p>
        <p>ipsum dolor sit amet consectetur adipisicing elit. Autem eaque placeat illum ratione, porro quas
            ducimus
        </p>
        <div>
            {{ data }}
        </div>
    </main>
</template>

<script setup>
// const { data } = await useFetch(`/api/hello`)
// const { data } = await useFetch('/api/privateAPI?name=mario')
// const { data } = await useFetch('/api/privateAPI?name=mario', {
//   method: 'post',
//   body: {age: 30}
// })

//const { data } = await useFetch('/api/privateAPI')

const { data } = await useFetch('/api/currency/GBP')
// Return: GBP Code and Value (Compare to USD)
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