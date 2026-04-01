<script lang="ts" setup>
const {game} = defineProps(['game']);
</script>

<template>
    <div class="item-container px-3 py-4 rounded-4 mb-3 row justify-content-between">
        <img src="https://picsum.photos/350/200" class="rounded-4 col-4" alt="">
        <div class="col-4 d-flex flex-column justify-content-start">            
            <p class="fs-3 text-truncate mx-3 d-block">{{ game.name }}</p>
            <p class="fs-4 text-truncate placeholder d-block">LDPAWLDPALW{D}</p>
            <p class="fs-4 text-truncate d-block placeholder">DATE</p>
        </div>
        <div class=" col-4 row text-end">
            <p class="fs-3">${{ game.price }}</p>
            <a class="fs-4 link-danger align-self-end" href="">Remove</a>
        </div>
    </div>
</template>

<style scoped>
.item-container {
    background-color: #8B00F5;
}
</style>