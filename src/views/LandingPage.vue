<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import Carousel from '/src/components/Carousel.vue';
import GameCard from '/src/components/GameCard.vue';
import axios from 'axios';

interface Game {
    id: number,
    name: string,
    category: string,
    price: number,
    poster_url: string
}

const API_URL = ref(import.meta.env.VITE_API_URL);
const games: Ref<Game[]> = ref([]);
const getGames = async () => {
    try {
        const response = await axios.get(`${API_URL.value}/product/release`);
        games.value = response.data;
        if (games.value.length > 12) {
            games.value = games.value.splice(0, 12);
        }
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        } else {
            console.error(`Unexpected error occurred: ${String(err)}`);
        }
    }
}
onMounted(getGames);
</script>

<template>
    <main class="container">
        <h1>Highlights</h1>
        <Carousel></Carousel>
        <div class="card-container row w-100 gap-2 justify-content-evenly w-100 mx-auto">
            <GameCard
                v-for="game in games"
                :key="game.id"
                :game></GameCard>
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