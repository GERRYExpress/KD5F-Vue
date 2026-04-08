<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

// 1. Move interface outside or to a types file
interface Game {
  name: string;
  category: string;
  poster_url: string;
  price: number;
  description: string;
  seller: string;
}

// 2. Constants and State
const route = useRoute();
const productId = route.query.id;
const API_URL = import.meta.env.VITE_API_URL; // No need for ref() for constants

const game = ref<Game | null>(null);
const isLoading = ref(true);
const errorMessage = ref('');

// 3. Optimized Data Fetching
const loadInfo = async () => {
  if (!productId) {
    errorMessage.value = "No product ID provided.";
    isLoading.value = false;
    return;
  }

  try {
    const { data } = await axios.get<Game[]>(`${API_URL}/product/release/${productId}`);
    
    if (data && data.length > 0) {
      game.value = data[0];
    } else {
      throw new Error("Game not found.");
    }
  } catch (err) {
    errorMessage.value = err instanceof Error ? err.message : 'An unexpected error occurred';
    console.error('Fetch Error:', err);
  } finally {
    isLoading.value = false;
  }
};

onMounted(loadInfo);
</script>

<template>
  <main class="container py-4">
    <div v-if="isLoading" class="text-center text-white">
      <div class="spinner-border" role="status"></div>
      <p>Loading game details...</p>
    </div>

    <div v-else-if="errorMessage" class="alert alert-danger">
      {{ errorMessage }}
    </div>

    <template v-else-if="game">
      <div class="product-container row px-3 py-5 my-3 rounded-4 align-items-center">
        <div class="col-md-7 d-flex justify-content-center" id="media-container">
          <img 
            class="rounded-4 img-fluid shadow" 
            :src="game.poster_url" 
            :alt="game.name"
          >
        </div>
        
        <div class="col-md-5 d-flex flex-column text-white">
          <h1 class="display-5 fw-bold"> {{ game.name }}</h1>
          <p class="fs-4 opacity-75"> {{ game.category }}</p>
          <p class="fs-5"><strong>Publisher:</strong> {{ game.seller }}</p>
          <p class="display-6 fw-bold text-start">${{ game.price.toFixed(2) }}</p>
          
          <div class="row g-2 mt-3">
            <div class="col-9">
              <button class="btn btn-primary btn-lg w-100 rounded-4 py-3 fw-bold border-0">
                <i class="bi bi-cart-plus me-2"></i>Add to Cart
              </button>
            </div>
            <div class="col-3">
              <button class="btn btn-outline-primary btn-lg w-100 rounded-4 py-3">
                <i class="bi bi-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="product-container row px-3 py-5 my-3 rounded-4 text-white">
        <h2 class="h1 mb-4">Description</h2>
        <div class="description-body rounded-4 py-3">
          <p class="lead"> {{ game.description }}</p>
        </div>
      </div>
    </template>
  </main>
</template>

<style scoped>
.product-container {
  background-color: #8B00F5;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

img {
  max-height: 480px;
  object-fit: cover;
  width: 100%;
}

.description-body {
  white-space: pre-line;
  background-color: #8122C9;
}
</style>