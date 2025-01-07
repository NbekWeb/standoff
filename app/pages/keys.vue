<script setup>
const emit = defineEmits();

function promo() {
  emit("modal", "promo");
  console.log("sa2");
}
</script>

<template>
  <div class="container">
    <KeysHead @promo="promo" />
    <KeysMain />
    <KeysGroup />
  </div>
</template>
