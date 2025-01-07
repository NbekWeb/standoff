<script setup>
import { ref } from "vue";

const check = ref(false);

const props = defineProps({
  type: {
    type: Number,
    default: 1,
  },
});

const checked = () => {
  check.value = !check.value;
};

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
    @click="checked"
  >
    <div v-if="!check">
      <NuxtImg src="/images/awm.png" class="w-full" />
    </div>

    <div v-else class="w-full h-full p-1 mt-1 text-white text-xs">
      <div class="flex justify-center"></div>
      <div class="flex flex-col justify-between h-full relative z-10">
        <span class="mt-1"> OneLeDay </span>
        <div class="flex flex-col gap-1">
          <span> AWP </span>
          <span class="text-white2"> Кейс </span>
        </div>
      </div>
      <NuxtImg src="/images/keys.png" class="w-full absolute keys" />
    </div>
    <div class="flex justify-center w-full">
      <span
        :class="`min-w-13 flex h-1 rounded-xs absolute ${
          check ? 'top-1' : 'bottom-1'
        }  ${
          type == 0
            ? 'bg-pink-500'
            : type == 2
            ? 'bg-blue-500'
            : 'bg-orange-400'
        }`"
      ></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sniper {
  padding: 1px;
  width: 140px;
  overflow: hidden;
}

.keys {
  top: -4px;
  left: 32px;
  z-index: 0;
}
</style>
