<script setup>
import { ref } from "vue";
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
let count = ref([1, 2, 3, 4, 5, 6, 7, 8]);
let choosen = ref();
let fruits = ref([]);
</script>

<template>
  <div class="greetings">
    <input type="checkbox" name="apple" value="蘋果" v-model="fruits" />
    <label for="apple">蘋果</label>
    <input type="checkbox" name="banana" value="香蕉" v-model="fruits" />
    <label for="banana">香蕉</label>
    <input type="checkbox" name="peach" value="水蜜桃" v-model="fruits" />
    <label for="peach">水蜜桃</label>

    <p>{{ fruits }}</p>
    <p>{{ choosen }}</p>
    <div>
      <select name="n" id="n" v-model="choosen">
        <option :value="num" v-for="num in count">{{ num }}</option>
      </select>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
