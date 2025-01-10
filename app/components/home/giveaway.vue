<script setup>
import Sniper from "./sniper";
import AktualKeys from "./aktualKeys";
</script>
<template>
  <div class="overflow-y-hidden w-full">
    <div class="container flex flex-col gap-5 w-full">
      <div
        class="give-away rounded-xs p-5 bg-dark-200 text-base  "
      >
        <h3 class="text-orange-500 text-xl mb-5">РОЗЫГРЫШИ</h3>
        <div class="grid-4 gap-5 font-bold text-white w-full tr-scrollbar overflow-x-auto w-full">
          <Sniper :type="0" class="" />
          <Sniper :type="1" />
          <Sniper :type="2" />
          <Sniper :type="0" class="" />
        </div>
      </div>
      <AktualKeys />
      <AktualKeys />
    </div>
  </div>
</template>

<style scoped lang="scss">
.h14 {
  min-height: 14px;
  height: 14px;
}

.grid-4 {
  max-width: auto;
  width: auto;
}

@media screen and (max-width: 1380px) {
  .grid-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media screen and (max-width: 768px) {
  .grid-4 {
    display: flex;

  }
}


</style>
