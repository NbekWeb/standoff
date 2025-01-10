<script setup>
const emit = defineEmits();

function promo() {
  emit("promo");
  console.log('sa1')
}
</script>

<template>
  <div class="flex text-white items-center justify-between">
    <button
      class="btn item btn-white font-semibold text-base bg-dark-200 px-10 h-14 flex items-center gap10 text-grey-900 rounded-xs"
    >
      <IconChevron class="text-xl" />
      <span>НАЗАД</span>
    </button>
    <span class="text-xl font-semibold">M4A1-S</span>

    <button
      @click="promo"
      class="btn font-semibold text-base bg-dark-200 px-10 h-14 flex items-center gap10 text-orange-500 rounded-xs"
    >
      <IconCupon class="text-xl" />
      <span>ВВЕСТИ ПРОМОКОД</span>
    </button>
  </div>
</template>
<style scoped lang="scss">
.btn-white:hover {
  color: #fff;
}
</style>
