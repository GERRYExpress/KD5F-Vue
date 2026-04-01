<script lang="ts" setup>
import CartItem from '../components/CartItem.vue';
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
        <h1>Wishlists</h1>
        <CartItem v-for="game in games" :game></CartItem>
    </main>
</template>