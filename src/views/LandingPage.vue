<script setup lang="ts">
import Carousel from '/src/components/Carousel.vue';
import GameCard from '/src/components/GameCard.vue';
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
        name: "DARK SOULS REMASTERED",
        price: 29.99,
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
        name: "DARK SOULS II",
        price: 39.99,
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
        <div class="card-container row w-100 gap-2 justify-content-evenly w-100 mx-auto">
            <GameCard  v-for="game in games" :game></GameCard>
        </div>
        <div class="d-flex justify-content-center pb-3">
            <a href="/result" id="explore-button" class=" btn btn-primary fs-2 fw-bold rounded-pill px-4 py-2 border-0">Explore more</a>
        </div>
    </main>
</template>

<style scoped>
#explore-button {
    color: #2F2B33;
    background-color: #B7EF00 !important;
}
</style>