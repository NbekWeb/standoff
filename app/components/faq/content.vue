<script setup>
import { ref } from "vue";

const open = ref(false);
</script>
<template>
  <div class="w-full bg-dark-200 rounded-xs p-5 flex flex-col gap-5 text-base">
    <div
      @click="() => (open = !open)"
      class="flex gap-5 items-center item point"
    >
      <span class="point">
        <IconPlus v-if="!open" />
        <IconMinus v-else />
      </span>
      <span>Какой-то длинный и сложный вопрос!</span>
    </div>
    <div class="flex gap-5 items-center" v-if="open">
      <div class="border-l flex justify-center">
        <span class="flex"></span>
      </div>
      <span>Какой-то большой внятный ответ на вопрос</span>
    </div>
  </div>
</template>
<style scoped lang="scss">
.item {
  transition: 0.3s ease;
}
.item:hover {
  color: #fff;
}
.border-l {
  min-width: 26px;
  span {
    min-width: 2px;
    min-height: 30px;
    background: #fff;
    border-radius: 2px;
  }
}

@media screen and (max-width: 1176px) {
}
</style>
