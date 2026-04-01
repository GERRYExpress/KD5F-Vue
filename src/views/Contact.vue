<script lang="ts">

</script>
<template>
    <main class="container">
        <h1>Contacts</h1>
        <div class="map-container w-100 h-100 p-5 rounded-4 my-3">
            <iframe id="map" class="rounded-4 mx-auto w-100" height="720" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.9484066195605!2d98.94811817592249!3d18.800452482348184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a6bf542deb3%3A0x85fbac3033920444!2sCollege%20of%20Arts%2C%20Media%20and%20Technology%2C%20Chiang%20Mai%20University!5e0!3m2!1sen!2sth!4v1775017933271!5m2!1sen!2sth" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <p class="fs-4"><b>Address</b>: College of Arts, Media, and Technology, Chiang Mai University 239 Huay Kaew Rd. Tambon Su Thep, Amphoe Mueang Chiang Mai, Chiang Mai 50200, Thailand <br> 053-920299</p>
        </div>
    </main>
</template>

<style scoped>
.map-container {
    background-color: #8B00F5;
}

#map {
    max-width: 1280px;
    max-height: 720px;
}
</style>