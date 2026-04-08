<script lang="ts" setup>
const props = defineProps(['game']);
const toProductPage = () => {
    location.href = `/product?id=${props.game.product_id}`;
}
</script>

<template>
    <div class="card col-3 my-3 p-0 rounded-4" ref="game" @click="toProductPage">
        <img :src="props.game.poster_url" class="card-img-top rounded-top-4" alt="...">

        <div>
            <div class="card-body d-flex row">
                <p class="lh-1 opacity-50 text-truncate">{{ props.game.category }}</p>
                <h5 class="card-title text-truncate d-block lh-1">{{ props.game.name }}</h5>
                <p class="card-text text-end fs-3 lh-1">${{ props.game.price }}</p>
                <div class="row px-2 mx-auto gap-1">
                    <a href="#" class="rounded-circle col-4 text-center"><i class="bi bi-heart fs-2"></i></a>
                    <a href="#" class="rounded-pill col-8 flex-grow-1 text-center"><i class="bi bi-cart-plus fs-3"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.card {
    background-color: #5C3B75;
    color: #FEFEFE;
    max-width: 300px;
}

a {
    background-color: #B7EF00;
    color: #5C3B75;
    max-height: 64px;
    height: 100%;
    width: auto;
}

img {
    display: block;
    max-width: 300px;
    max-height: 256px;
    object-fit: cover;
    object-position: top;
}

</style>