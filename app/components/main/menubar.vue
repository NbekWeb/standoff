<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const open = ref(false);

const emit = defineEmits();

function withdraw() {
  emit("modal", "withdraw");
}

function enter() {
  emit("modal", "enter");
  toggleOpen();
}

const toggleOpen = () => {
  open.value = !open.value;
};

// Close modal on click outside
const handleClickOutside = (event: MouseEvent) => {
  const modal = document.querySelector(".main-modal1");
  if (open.value && modal && !modal.contains(event.target as Node)) {
    open.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="flex gap10 text-2xl relative h-14">
    <div class="p-1 bg-dark-300 flex gap-3 items-center rounded-xs">
      <div
        @click="withdraw"
        class="bg-orange-500 rounded-xs flex h-full w-12 items-center justify-center point text-dark-200"
      >
        <IconCash />
      </div>
      <div class="ml-8 flex gap-3 h-full">
        <div class="flex flex-col p-1 gap-1 text-base font-bold">
          <span class="text-orange-500">0 G</span>
          <span class="text-white">0 C</span>
        </div>
        <NuxtImg src="/images/emblema.png" class="h-full py-1 rounded-xs" />
      </div>
    </div>
    <div
      @click.stop="toggleOpen"
      class="p-1 bg-dark-300 point flex gap-3 items-center rounded-xs"
    >
      <div
        class="bg-orange-500 rounded-xs flex h-12 w-12 items-center justify-center point text-dark-200"
      >
        <IconMenu />
      </div>
    </div>
    <MainModal
      v-if="open"
      class="main-modal1"
      @enter="enter"
      @close="toggleOpen"
    />
  </div>
</template>
<style scoped lang="scss"></style>
