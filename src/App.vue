<script setup lang="ts">
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

</script>

<template>
  <Navbar></Navbar>
  <!-- Display back to home button if it's not homepage -->
  <div v-if="$route.name !== 'Home'">
    <div class="container">

      <!-- Display breadcrumbs when the page is Cart and Checkout page -->
      <div v-if="$route.name === 'Cart'">
        <div id="divider" aria-label="breadcrumb">
          <ol class="breadcrumb fs-1 fw-bold">
            <li class="breadcrumb-item active" aria-current="page">Your Shopping Cart</li>
            <li class="breadcrumb-item" aria-current="page">Checkout</li>
          </ol>
        </div>
      </div>


      <a id="back-to-home-button" href="/">< Back to Home</a>
    </div>
    <RouterView></RouterView>
  </div>
  <div v-else>
    <RouterView></RouterView>
  </div>
  <Footer></Footer>
</template>

<style scoped>
#back-to-home-button {
  color: #B7EF00;
}

/* Breadcrumbs styling in Cart and Checkout page */
.active.breadcrumb-item {
    color: #FEFEFE !important;
    opacity: 1 !important;
}
.breadcrumb-item {
  opacity: 0.5;
}
#divider {
  --bs-breadcrumb-divider: '>';
  --bs-breadcrumb-divider-color: #FEFEFE !important;
}
</style>