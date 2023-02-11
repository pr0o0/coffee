<template>
  <div class="footer">
    <p>cool boy©</p>
    <div>
      <p>歡迎聯繫我：{{ email }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const email = "coolboy@gmail.com";
</script>

<style lang="scss" scoped></style>
