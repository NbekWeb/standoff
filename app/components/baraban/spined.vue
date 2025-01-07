<script setup>
import { ref } from "vue";
import sp1 from "/images/sp1.png";

const emit = defineEmits();

function again() {
  emit("again");
}

function copyText(val) {
  navigator.clipboard.writeText(val);
}
</script>

<template>
  <div class="relative">
    <div
      class="flex  w-full items-center text-base font-semibold flex-col round-step2 -top-25 relative z-10"
    >
      <div class="relative">
        <NuxtImg :src="sp1" class="h400" />
        <span
          class="text-white absolute bottom-3 centerX w-full flex justify-center"
          >РАНДОМНЫЙ НОЖ</span
        >
      </div>
      <span class="text-white mt-2 flex items-center">
        <span class="text-orange-500">ВАШ КОД:</span>
        dpwgdlpndua2o8vf6gke8sr6mcdfjvw7
        <IconCopy
          class="ml-1 point"
          @click="copyText('dpwgdlpndua2o8vf6gke8sr6mcdfjvw7')"
        />
      </span>
      <div class="mt-5 flex gap-5 btns">
        <button
          class="btn btn-dark text-grey-900 font-semibold px-14"
          @click="again"
        >
          ПОПРОБОВАТЬ ЕЩЁ
        </button>
        <button class="btn btn-orange text-dark-200 font-semibold px-12">
          ИСПОЛЬЗОВАТЬ КОД
        </button>

      </div>
    </div>
    <div class="main-step2 rounded-full"></div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/_colors.scss";

.round-step2 {
  position: absolute;

  left: 50%;
  transform: translateX(-50%);
}



.h400 {
  height: 400px;
}

.main-step2 {
  min-width: 800px;
  width: 800px;
  min-height: 800px;
  height: 800px;
  top: 50%;
  left: 50%;
  translate: transform(-50%, -50%);
  background: #d84ddb33;
  filter: blur(150px);
  pointer-events: none;
}
.-top-25 {
  top: -100px;
}

@media screen and (max-width: 1024px) {
  .main-step2 {
    min-width: 700px;
    width: 700px;
    min-height: 700px;
    height: 700px;
  }
  .h400 {
    height: 300px;
  }
  .text-base {
    font-size: 14px;
  }

  .-top-25 {
    top: -60px;
  }
}

@media screen and (max-width: 640px) {
  .btns {
    flex-direction: column;
    gap: 16px;
    width: 100vw;
    padding: 0 16px;
    button {
      width: 100%;
    }
  }
  :global(.res-spin) {
        max-height: 480px !important;
      }
}
</style>
