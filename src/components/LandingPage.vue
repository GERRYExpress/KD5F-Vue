<script setup lang="ts">
import Carousel from './Carousel.vue';
import GameCard from './GameCard.vue';

const games: Object[] = [
    {
        name: "DARK SOULS III",
        price: 39.99,
    },
    {
        name: "DARK SOULS REMASTERED",
        price: 29.99,
    },
    {
        name: "DARK SOULS II",
        price: 39.99,
    },
    {
        name: "ELDEN RING",
        price: 49.99,
    },
    {
        name: "ELDEN RING",
        price: 49.99,
    },
    {
        name: "ELDEN RING",
        price: 49.99,
    },
    {
        name: "ELDEN RING",
        price: 49.99,
    },
    {
        name: "ELDEN RING NIGHTREIGN",
        price: 19.99,
    }  
];

</script>

<template>
    <main class="container">
        <h1>Highlights</h1>
        <Carousel></Carousel>
        <div class="card-container row gap-3 w-100 justify-content-evenly">
            <GameCard  v-for="game in games" :game></GameCard>
        </div>
    </main>
</template>

<style scoped>
</style>