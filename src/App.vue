<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="all">
    <Navbar />
    <HelloWorld />
    <RouterView />
    <Footer />
  </div>
</template>

<style lang="scss">
@import "./assets/style.scss";
</style>
