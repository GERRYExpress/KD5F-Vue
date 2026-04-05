<script lang="ts" setup>
import CartItem from '../components/CartItem.vue';
import { computed } from 'vue';

interface Game {
    name: String;
    price: number;
}

const games: Game[] = [
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

const subtotal = computed(() => { return games.reduce((acc: number, game: Game) => acc + game.price, 0)});
const VAT = computed(() => { return 0.07 * subtotal.value });
const totalPrice = computed(() => { return (VAT.value + subtotal.value).toFixed(2)});

</script>

<template>
    <main class="container d-flex justify-content-between align-items-stretch mx-auto my-3">
        <div class="me-3">
            <CartItem v-for="game in games" :game></CartItem>
        </div>
        <div class="summary-container rounded-4 ms-3 px-3 py-4 h-100">
            <div class="row" v-for="game in games" :game>
                <p class="col-6 text-start"> {{ game.name }}</p>
                <p class="col-6 text-end">{{ game.price }}</p>
            </div>
            <hr>
            <div class="row">
                <p class="col-6 text-start">VAT</p>
                <p class="col-6 text-end">{{ VAT.toFixed(2) }}</p>
            </div>
            <div class="row fs-3 fw-bold">
                <p class="col-6 text-start">Total</p>
                <p class="col-6 text-end">{{ totalPrice }}</p>
            </div>
            <a id="checkout-button" class="btn btn-primary rounded-pill fw-bold fs-2 w-100" href="/checkout">Checkout</a>
        </div>
    </main>
</template>

<style scoped>
.summary-container {
    background-color: #8B00F5;
}
</style>