<script setup>
import { ref } from "vue";

const w = "welcome";
const text = ["VUE3練習中", "SKILLS"];
</script>

<template>
  <div class="home">
    <div class="banner">
      <h1>{{ w }}</h1>
    </div>
    <div class="content"><h1>My coffee shop</h1></div>
    <div class="content2">
      <div class="t1">
        {{ text[0] }}
      </div>
      <div class="bean"><img src="../assets/img/bean.webp" alt="" /></div>
    </div>
    <div class="content3">
      <div><img src="../assets/img/c2.webp" alt="" /></div>
      <div class="t2">
        {{ text[1] }}
      </div>
    </div>
  </div>
</template>
