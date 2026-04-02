<script setup>

const signOut = () => {
    window.alert("Signed Out!");
}
const deleteAccount = () => {
    window.alert("Account Deleted!!");
    window.location.href = '/';
}

</script>

<template>
    <main class="container">
        <h1>Personal Information</h1>
        <div id="account-container" class="rounded-4 row p-5">
            <img class="rounded-4 w-100 h-100 col-5" src="https://picsum.photos/384" alt="account image">
            <div class="col-7 fs-3 mx-auto">
                <div class="row">
                    <p class="col-6 text-start fw-bold">Username:</p>
                    <p class="col-6 text-end">USERNAME</p>
                </div>
                <div class="row">
                    <p class="col-6 text-start fw-bold">Created:</p>
                    <p class="col-6 text-end">DATE</p>
                </div>
                <div class="row">
                    <p class="col-6 text-start fw-bold">Total spend:</p>
                    <p class="col-6 text-end">TOTALSPEND</p>
                </div>
                <div class="row">
                    <p class="col-6 text-start fw-bold">Game purchased:</p>
                    <p class="col-6 text-end">PURCHASED</p>
                </div>
            </div>
        </div>
        <div class="py-3 g-5">    
            <button class="me-3 btn btn-danger border-0 px-4 rounded-4 fs-3" id="logout-btn" @click="signOut">Log Out</button>
            <button class="ms-3 btn link-danger fs-3" id="delete-btn" @click="deleteAccount">Delete my account</button>
        </div>
    </main>
</template>


<style scoped>
#account-container {
    background-color: #8B00F5;
}

img {
    max-width: 384px;
    max-height: 384px;
}

.btn-danger {
    background-color: #8B00F5 !important;
}

</style>