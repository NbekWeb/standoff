<template>
  <div class="flex gap-5 items-center h-6 justify-center">
    <div
      v-for="(span, index) in 3"
      :key="index"
      class="w-5 h-5 flex items-center"
    >
      <span
        class="bg-orange-500 rounded-full animate-span"
        :style="{ animationDelay: `${index * 0.4}s` }"
      ></span>
    </div>
  </div>
</template>

<style scoped>
@keyframes sizeChange {
  0% {
    width: 6px;
    height: 6px;
  }
  20% {
    width: 10px;
    height: 10px;
  }
  40% {
    width: 16px;
    height: 16px;
  }
  60% {
    width: 10px;
    height: 10px;
  }
  80% {
    width: 6px;
    height: 6px;
  }
  100% {
    width: 6px;
    height: 6px;
  }
}

.animate-span {
  animation: sizeChange 1.2s infinite ease-in-out; /* Duration of 6s to fit all 3 spans */
}

span {
  display: inline-block;
  animation-duration: 1.2s; /* Same duration for all spans */
  animation-timing-function: ease-in-out;
}
</style>
