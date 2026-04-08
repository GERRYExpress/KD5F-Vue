<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const role = ref(route.query.role === 'buyer' ? 'buyer' : route.query.role === 'seller' ? 'seller' : 'none');
const oppositeRole = ref(role.value === 'buyer' ? 'seller' : role.value === 'seller' ? 'buyer' : 'none');

if (role.value === 'none') {
    location.href = '/';
}


</script>

<template>
    <main class="container">
        <h1 class="text-center">Sign In</h1>
        <form action="" class="d-flex flex-column p-5 rounded-4 mb-5 mt-3 mx-auto gap-2">
            <i class="bi bi-person-fill-add text-center"></i>
            <label for="username">Username:</label>
            <input class="rounded-4 px-3 py-2" type="text" name="username">
            <label for="password">Password: <i class="bi bi-question-circle"></i></label>
            <input class="rounded-4 px-3 py-2" type="password" name="password">
            <p class="text-center my-0 lh-1">No account? <a class="link-primary" href="/register">Sign up here</a></p>
            <p class="text-center mb-3 lh-1">A {{ oppositeRole }}? <a class="link-primary" :href="`/login?role=${oppositeRole}`">Sign in here</a></p>
            <button type="submit" class="btn-primary border-0 rounded-5 px-4 py-2 fs-3 mx-auto">Sign In</button>
        </form>
    </main>
</template>

<style scoped>
form {
    background-color: #8B00F5;
    max-width: 512px;

}

button {
    max-width: 256px;
}

input {
    background-color: #2F2B33;
    color: #FEFEFE;
    border: none;
}

.bi-person-fill-add {
    font-size: 128px;
    color: #2F2B33;
}
</style>