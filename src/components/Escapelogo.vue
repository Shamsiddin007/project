<template>
    <div class="bcg">
        <Man/>
    </div>
    <Nature/>
    <Feature/>
    <Most/>
    <Foot/>
</template>

<script setup>
import Man from '../Homepage/Main/Main.vue'
import Nature from '../Homepage/Nature/Nature.vue'
import Feature from '../Homepage/Featurepost/Featurepost.vue'
import Most from '../Homepage/Mostresent/Mostresent.vue'
import Foot from '../Homepage/Footer/Footer.vue'
</script>
<style scoped>
    .bcg{
        background-image: url(/src/assets/IMAGE.png);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 90.7vh;
    }
</style>