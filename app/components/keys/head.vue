<script setup>
const emit = defineEmits();

function promo() {
  emit("promo");
  console.log("sa1");
}
</script>

<template>
  <div class="flex text-white items-center justify-between flex-wrap heading">
    <button
      class="btn item btn-white font-semibold text-base bg-dark-200 px-10 h-14 flex items-center gap10 text-grey-900 rounded-xs"
    >
      <IconChevron class="text-xl" />
      <span>НАЗАД</span>
    </button>
    <span class="text-xl font-semibold">M4A1-S</span>

    <button
      @click="promo"
      class="btn font-semibold justify-center text-base bg-dark-200 px-10 h-14 flex items-center text-orange-500 rounded-xs"
    >
      <div class="flex gap10 items-center">
        <IconCupon class="text-xl" />
        <span>ВВЕСТИ ПРОМОКОД</span>
      </div>
    </button>
  </div>
</template>
<style scoped lang="scss">
.btn-white:hover {
  color: #fff;
}

@media screen and (max-width: 1024px) {
  .btn-white {
    span {
      display: none;
    }
  }
  .px-10 {
    padding-left: 20px;
    padding-right: 20px;
  }
}
@media screen and (max-width: 640px) {
  .text-orange-500 {
    min-width: 100%;
    margin-top: 16px;
  }

  .heading span {
    flex-grow: 1;
    text-align: center;
  }
}
</style>
