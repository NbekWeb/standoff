<template>
  <div class="p-5 text-white mt-5 rounded-xs bg-dark-200">
    <div class="flex justify-center mb-5 text-xl font-semibold">
      СОДЕРЖИМОЕ КЕЙСА
    </div>
    <div class="grid-6 gap-5">
      <div
        class="rounded-xs "
        :class="
          i % 4 == 1
            ? 'bg-orange'
            : i % 4 == 2
            ? 'bg-blue'
            : i % 4 == 3
            ? 'bg-pink'
            : 'bg-blue2'
        "
        v-for="i in 12"
        :key="i"
      >
        <NuxtImg src="/images/awm.png" class="w-full mt-5 px10" />
        <div class="flex flex-col items-center">
          <span>AWP</span>
          <span class="mt-1"  :class="
              i % 4 == 1
                ? 'text-orange-400'
                : i % 4 == 2
                ? 'text-blue-500'
                : i % 4 == 3
                ? 'text-pink-500'
                : 'text-blue-700'
            ">BOOM</span>
          <span
            class="mt10 mb-1 min-w-full px-15 h-1 rounded-xs"
            :class="
              i % 4 == 1
                ? 'bg-orange-400'
                : i % 4 == 2
                ? 'bg-blue-500'
                : i % 4 == 3
                ? 'bg-pink-500'
                : 'bg-blue-700'
            "
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/scss/_colors.scss";

.bg-orange {
  background: rgba($orange-400, 0.3);
}
.bg-blue {
  background: rgba($blue-500, 0.3);
}
.bg-pink {
  background: rgba($pink-500, 0.3);
}
.bg-blue2 {
  background: rgba($blue-700, 0.3);
}
</style>
