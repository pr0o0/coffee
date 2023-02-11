<template>
  <div class="sticky">
    <nav class="navbar1">
      <div class="title"><h1>Coffeee</h1></div>
      <RouterLink class="r1" to="/">首頁</RouterLink>
      <RouterLink class="r1" to="/product">產品列表</RouterLink>
      <RouterLink class="r1" to="/test">購物車</RouterLink>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<style lang="scss" scoped></style>
