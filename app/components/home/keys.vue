<script setup>
const props = defineProps({
  type: {
    type: Number,
    default: 1,
  },
  img: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="rounded-xs point bg-dark-160 hover-parent">
    <div class="p10">
      <NuxtImg :src="img" class="w-full hover-img" />
    </div>
    <div class="flex flex-col items-center gap10 mt-2">
      <span class="text-white font-semibold">AWP</span>
      <button
        class="btn rounded-xs h-10 flex items-center px-5 font-semibold text-dark-160 text-base"
        :class="
          type == 0
            ? 'bg-orange-400'
            : type == 1
            ? 'bg-blue-500 '
            : type == 2
            ? 'bg-pink-500'
            : 'bg-blue-700'
        "
      >
        888 G
      </button>
      <div class="flex w-full mt-5 px50">
        <span
          class="flex border-b"
          :class="
            type == 0
              ? 'border-orange'
              : type == 1
              ? 'border-blue '
              : type == 2
              ? 'border-pink'
              : 'border-blue-700'
          "
        ></span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/_colors.scss";

.hover-parent {
  position: relative;
  overflow: hidden;
}

.hover-parent:hover .hover-img {
  transform: scale(1.1);
}

.hover-parent .hover-img {
  transition: transform 0.3s ease;
}

.hover-parent:hover .px50 {
  padding: 0 25px;
  transition: padding 0.3s ease;
}

.border-b {
  min-width: 100%;
  border: 3px solid;
  border-radius: 16px 16px 0 0;
}

.border-orange {
  border-color: $orange-400;
}
.border-blue {
  border-color: $blue-500;
}
.border-pink {
  border-color: $pink-500;
}
.border-blue-700 {
  border-color: $blue-700;
}
</style>
