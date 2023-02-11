<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";

const coffeeData = ref();
const nums = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const coffeeUrl = "https://api.sampleapis.com/coffee/hot";

const getcoffee = () => {
  axios.get(coffeeUrl).then((res) => {
    coffeeData.value = res.data;
  });
};
console.log(coffeeData);

let shoping = JSON.parse(localStorage.getItem("mycoffee")) || [];

const setshop = (d) => {
  shoping.push({ name: d.title, price: d.id, totalnum: d.ingredients });
  let shopdata = JSON.stringify(shoping);
  localStorage.setItem("mycoffee", shopdata);
};
getcoffee();
</script>
<template>
  <div class="product">
    <h1>There are all coffeeeeeee</h1>
    <div>
      <ul class="coffee">
        <li v-for="(i, index) in coffeeData" :key="i.id">
          <img :src="i.image" alt="" />
          <div class="pname">
            <h4>{{ i.title }}</h4>
          </div>
          <div class="pprice">
            <h4>NT. {{ i.id }}</h4>
          </div>
          <div class="btn">
            <select name="num" :id="i.id" v-model="i.ingredients">
              <option :value="n" v-for="n in nums">{{ n }}</option>
            </select>
            <button @click.prevent="setshop(i)">添加購物車</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div>
    <!-- <h3>{{ shopdata[0].tn }}</h3> -->
  </div>
</template>

<style lang="scss" scoped></style>
