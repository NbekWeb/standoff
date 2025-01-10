<script setup>
const emit = defineEmits();

function promo() {
  emit("modal", "promo");
}

const type = ref(1);

const opened = ref(false);
</script>

<template>
  <div class="container flex flex-col gap-5">
    <KeysHead @promo="promo" />
    <KeysMain v-if="!opened" @open="(i) => ((type = i), (opened = true))" />
    <OpenCaseSlide v-else :type="type" />
    <KeysGroup />
  </div>
</template>
