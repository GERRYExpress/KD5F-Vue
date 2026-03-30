<script>
import { ref } from 'vue'

</script>

<template>
    <div class="container-fluid m-0 d-flex justify-content-center py-5">
        <div id="brand" class="mx-2 d-flex rounded-5 p-3">
            <img src="/KD5Ficon.png" alt="KD5F Icon" class="rounded-circle">
            <a class="text-center  link-light link-underline-opacity-0 px-2">
                <i class="bi bi-tags-fill fs-2 lh-1"><br><span class="fs-5">Category</span></i>
            </a>
         </div>
        <div id="search" class="text-center">
            <form action="" class="rounded-5 d-flex justify-content-between">
                    
                <a href="" class="link-light h-100 d-inline-flex flex-shrink-1 px-3">
                    <i class="bi bi-search fs-2 h-100 w-100 "></i>
                </a>
                <input type="text" class="border-0 rounded-end-5 py-3 d-inline-flex flex-grow-1">
            </form>
        </div>
        <div class="mx-2 nav-button-container">
            <a class="link-light rounded-circle w-100 h-100 py-4 px-3 mx-2" href=""><i class="bi bi-cart fs-2"></i></a>
            <a class="link-light rounded-circle w-100 h-100 py-4 px-3 mx-2" href=""><i class="bi bi-heart fs-2"></i></a>
            <a class="link-light rounded-circle w-100 h-100 py-4 px-3 mx-2" href=""><i class="bi bi-person fs-2"></i></a>
        </div>
    </div>
</template>

<style scoped>

.container-fluid {
    background-color: #8122C9;
    color: #FEFEFE;
}

.nav-button-container > a, #brand {
    background-color: #8B00F5;
}

input, #search > * {
    background-color: #2F2B33;
    color: #FEFEFE;
}

#search {
    max-width: 768px;
    width: 100%;
}

input {
}

img {
    width: 64px;
    height: 64px;
}

</style>