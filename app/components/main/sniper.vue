<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  type: {
    type: Number,
    default: 1,
  },
});

const sniperBackground = computed(() => {
  if (props.type === 1) return "#db4d4d4d";
  if (props.type === 2) return "#4D7CF64D";
  if (props.type === 0) return "#D84DDB4D";
  return "#db4d4d4d";
});
</script>

<template>
  <div
    class="h-26 flex flex-col justify-center rounded-xs sniper relative point"
    :style="{ background: sniperBackground }"
  >
    <!-- Static Image -->
    <NuxtImg src="/images/awm.png" class="w-full awm-image" />

    <!-- Hover Content -->
    <div class="hover-content rounded-xs h-full flex flex-col">
      <div class="flex justify-center w-full">
        <span
          :class="`min-w-13 flex h-1 rounded-xs  ${
            type == 0
              ? 'bg-pink-500'
              : type == 2
              ? 'bg-blue-500'
              : 'bg-orange-400'
          }`"
        ></span>
      </div>
      <div class="w-full flex-grow p-1 mt-1 text-white text-xs">
        <div class="flex justify-center"></div>
        <div class="flex flex-col justify-between h-full relative z-10">
          <span class="mt-1"> OneLeDay </span>
          <div class="flex flex-col gap-1">
            <span> AWP </span>
            <span class="text-white2"> Кейс </span>
          </div>
        </div>
      </div>
      <NuxtImg src="/images/keys.png" class="w-full absolute keys" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.min-w-13 {
  margin-top: 1px;
}
.sniper {
  padding: 1px;
  width: 140px;
  overflow: hidden;
  position: relative;
}

.keys {
  top: -4px;
  left: 32px;
  z-index: 0;
}

.awm-image {
  position: relative;
  z-index: 5;
  transition: transform 0.3s ease-in-out;
}

.hover-content {
  position: absolute;
  bottom: calc(-100% + 7px); /* Start outside the container */
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  transition: bottom 0.3s ease-in-out; /* Smooth transition */
}

.sniper:hover .hover-content {
  bottom: 0; /* Move into view when hovering */
}

.sniper:hover .awm-image {
  transform: translateY(-120%); /* Slide image out of the top */
}
</style>
