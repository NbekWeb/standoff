<script setup>
import Keys from "./keys";

import key1 from "/images/key1.png";
import key2 from "/images/key2.png";
import key3 from "/images/key3.png";
import key4 from "/images/key4.png";

const keys = [key1, key2, key3, key4];
</script>
<template>
  <div class="rounded-xs bg-dark-200 p-5 relative">
    <div
      class="aktual-head mb-5 relative flex justify-center font-semibold text-xl"
    >
      <NuxtImg src="/images/aktual-keys.png" class="h-full" />

      <span class="absolute text-xl font-semibold text-white centerXY">
        АКТУАЛЬНЫЕ КЕЙСЫ
      </span>
    </div>
    <div class="grid-4 gap-5 ">
      <Keys v-for="(key, i) of keys" :key="i" :img="key" :type="i" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.aktual-head {
  margin-top: -20px;
}
.aktual-head img {
  height: 67px;
}
</style>
