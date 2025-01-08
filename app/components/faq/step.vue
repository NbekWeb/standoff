<script setup>
const props = defineProps({
  nav: {
    type: Boolean,
    default: true,
  },
  text: {
    type: String,
  },
});
</script>

<template>
  <div class="text-grey-900">
    <div class="flex items-center gap-5">
      <div
        class="rounded-xs bg-dark-300  p-10 flex items-center justify-center"
      >
        <div class="rounded-full bg-dark-200 flex items-center justify-center">
          <slot />
        </div>
      </div>
      <NuxtImg v-show="nav" src="/images/nav.png" class="h-9" />
    </div>
    <p class="text-center text-sm  mt-2">{{ text }}</p>
  </div>
</template>

<style scoped lang="scss">
.bg-dark-300 {
  height: 140px;
  width: 140px;
  min-width: 140px;
  margin: 0 10px;
  .bg-dark-200 {
    height: 70px;
    width: 70px;
    min-width: 70px;
    font-size: 30px;
  }
}
p {
  max-width: 160px;
}
</style>
