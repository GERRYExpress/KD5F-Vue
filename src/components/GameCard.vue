<script setup>
import { ref, defineProps } from 'vue';

const { game }  = defineProps(['game']);

</script>

<template>
    <div class="card col-3 my-3 p-0 rounded-4">
        <img src="https://picsum.photos/128" class="card-img-top rounded-top-4" alt="...">

        <div class="card-body d-flex row">
            <p class="placeholder col-7 mx-2"></p>
            <h5 class="card-title text-truncate d-block lh-1">{{ game.name }}</h5>
            <p class="card-text text-end fs-3 lh-1">${{ game.price }}</p>
            <div class="row px-2 mx-auto gap-1">
                <a href="#" class="rounded-circle col-4 text-center"><i class="bi bi-heart fs-2"></i></a>
                <a href="#" class="rounded-pill col-8 flex-grow-1 text-center"><i class="bi bi-cart-plus fs-3"></i></a>
            </div>
        </div>
        <div class="card-body" v-if="!game">
            <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
            </h5>
            <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
            </p>
            <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
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

</style>