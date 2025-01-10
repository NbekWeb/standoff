<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const open = ref(false);

const handleClickOutside = (event) => {
  const modal = document.querySelector(".opened");
  if (open.value && modal && !modal.contains(event.target)) {
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
  <div
    class="bg-dark-200 rounded-xs h-15 text-base relative text-grey-900 p-5 flex items-center gap-5"
  >
    <span class="sm-hidden">ПОКАЗАТЬ СПОСОБЫ ОПЛАТЫ ДЛЯ:</span>
    <div
      @click.stop="() => (open = !open)"
      class="flex-grow point flex justify-between items-center"
    >
      <div class="flex gap10 items-center text-white font-semibold">
        <NuxtImg src="/images/ru.png" class="h-5" />
        РОССИЯ
      </div>
      <span class="point text-xl rotate-icon" :class="{ open: open }">
        <IconChevron class="" />
      </span>
    </div>
    <div
      v-show="open"
      class="absolute opened w-full top-19 left-0 rounded-xs p-5 bg-dark-200 flex flex-col gap-5 z-999"
    >
      <div
        v-for="i in 3"
        :key="i"
        @click.stop="() => (open = !open)"
        class="flex gap10 font-semibold point items-center item"
      >
        <NuxtImg src="/images/ru.png" class="h-5" />
        РОССИЯ
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/_colors.scss";

.rotate-icon {
  transition: transform 0.3s ease;
  transform: rotate(-90deg);
  &.open {
    transform: rotate(90deg);
  }
}

.item {
  transition: 0.3s ease;

  &:hover {
    color: #fff;
  }
}

.z-999 {
  z-index: 999;
}

.left-0 {
  left: -2px;
}

@media screen and (max-width: 640px) {
.sm-hidden{
  display: none;
}
.top-19{
  top:68px;
}
}
</style>
