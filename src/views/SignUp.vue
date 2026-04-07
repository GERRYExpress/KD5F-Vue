<script lang="ts" setup>
</script>

<template>
    <main class="container">
        <h1 class="text-center">Sign Up</h1>
        <form action="" class="d-flex flex-column p-5 rounded-4 mb-5 mt-3 mx-auto gap-2">
            <i class="bi bi-person-fill-add text-center"></i>
            <label for="username">Username:</label>
            <input class="rounded-4 px-3 py-2" type="text" name="username">
            <label for="password">Password: <i class="bi bi-question-circle"></i></label>
            <input class="rounded-4 px-3 py-2" type="text" name="password">
            <label for="cfm-password">Confirm Password:</label>
            <input class="rounded-4 px-3 py-2" type="text" name="cfm-password">
            <p class="text-center">Already have an account? <a class="link-primary" href="/identification">Sign in here</a></p>
            <button type="submit" class="btn-primary border-0 rounded-5 px-4 py-2 fs-3 mx-auto">Sign Up</button>
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