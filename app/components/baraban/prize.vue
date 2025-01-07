<script setup>
import { ref } from "vue";

import sp1 from "/images/sp1.png";
import sp2 from "/images/sp2.png";
import sp5 from "/images/sp5.png";

const spins = ref([
  {
    img: sp2,
    class: "bg-blue-100",
  },
  {
    img: sp5,
    class: "bg-orange-400",
  },
  {
    img: sp1,
    class: "bg-pink-500",
  },
  {
    img: sp2,
    class: "bg-blue-100",
  },
  {
    img: sp5,
    class: "bg-orange-400",
  },
  {
    img: sp1,
    class: "bg-pink-500",
  },
  {
    img: sp2,
    class: "bg-blue-100",
  },
  {
    img: sp5,
    class: "bg-orange-400",
  },
  {
    img: sp1,
    class: "bg-pink-500",
  },
  {
    img: sp2,
    class: "bg-blue-100",
  },
  {
    img: sp5,
    class: "bg-orange-400",
  },
  {
    img: sp1,
    class: "bg-pink-500",
  },
]);
</script>
<template>
  <div
    class="bg-dark-200 font-bold text-white text-xs p-5 rounded-xs grid-6 gap-5"
  >
    <div
      class="item bg-dark-160 rounded-xs relative"
      v-for="(spin, i) of spins"
      :key="i"
    >
      <NuxtImg :src="spin.img" />
      <p class="absolute bottom-4 flex justify-center centerX w-full">
        +2500Р НА БАЛАНС
      </p>
      <span
        :class="`absolute bottom-1 flex justify-center centerX min-w-15 h-1 ${spin.class} rounded-xs`"
      ></span>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/scss/_colors.scss";

.item {
  padding: 0 20px 16px 20px;
  img {
    width: 100%;
  }
}

@media screen and (max-width: 1024px) {
  .grid-6 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
@media screen and (max-width: 1024px) {
  .grid-6 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media screen and (max-width: 640px) {
  .item {
    padding: 0 8px 16px 8px;
  }
  .gap-5{
    padding:10px;
  }
}
</style>
