<script setup>
const props = defineProps({
  type: {
    type: Number,
    default: 1,
  },
});
</script>
<template>
  <div
    :class="`rounded-xs flex p10 flex-col justify-between min-w-full ${
      type == 0 ? 'bg-pink-30' : type == 1 ? 'bg-orange-30' : 'bg-blue-30'
    }`"
  >
    <div class="flex justify-between">
      <div class="flex flex-col gap-1">
        <span>ПОПОЛНИ НА 250 Р</span>
        <span
          :class="`${
            type == 0
              ? 'text-pink-500'
              : type == 1
              ? 'text-orange-400'
              : 'text-blue-500'
          } `"
          >1 587 G</span
        >
      </div>
      <div class="flex flex-col gap-1 text-end">
        <span>AWP</span>
        <span
          :class="`${
            type == 0
              ? 'text-pink-500'
              : type == 1
              ? 'text-orange-400'
              : 'text-blue-500'
          } `"
          >BOOM</span
        >
      </div>
    </div>
    <div class="flex justify-between px-11 mt-2 mb-5">
      <NuxtImg src="/images/awm.png" class="w-full" />
    </div>
    <div class="flex gap10 items-end">
      <div class="flex flex-col gap-1 flex-grow text-xs">
        <span>14 ИЗ 250 Р</span>
        <div class="rounded-xs min-w-full flex h14 bg-dark-200 relative">
          <div
            :class="`absolute top-0 left-0 rounded-xs h-full w-3 ${
              type == 0
                ? 'bg-pink-500'
                : type == 1
                ? 'bg-orange-400'
                : 'bg-blue-500'
            }`"
          ></div>
        </div>
      </div>
      <div class="p10 rounded-xs flex gap-1 items-center bg-dark-200">
        <IconUser
          :class="`${
            type == 0
              ? 'text-pink-500'
              : type == 1
              ? 'text-orange-400'
              : 'text-blue-500'
          } text-xl`"
        />
        <span>51</span>
      </div>
      <div class="p10 ml-1 rounded-xs flex gap-1 items-center bg-dark-200">
        <IconTime
          :class="`${
            type == 0
              ? 'text-pink-500'
              : type == 1
              ? 'text-orange-400'
              : 'text-blue-500'
          } text-xl`"
        />
        <span>8д 18:56:54</span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/scss/_colors.scss";

.bg-pink-30 {
  background: rgba($pink-500, 0.3);
}
.bg-orange-30 {
  background: rgba($orange-400, 0.3);
}
.bg-blue-30 {
  background: rgba($blue-500, 0.3);
}
.h14 {
  height: 14px;
  min-height: 14px;
}
.flex-grow .min-w-full{
  max-width: 104px;
}
</style>
