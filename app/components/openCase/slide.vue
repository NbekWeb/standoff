<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const props = defineProps({
  type: {
    type: Number,
    default: 1,
  },
});

const opened = ref(false);

onMounted(() => {
  setTimeout(() => {
    opened.value = true;
  }, 3000);
});

const toggleOpened = () => {
  opened.value = false;
  setTimeout(() => {
    opened.value = true;
  }, 3000);
};
</script>

<template>
  <div>
    <div
      v-if="type == 1"
      class="p-5 relative rounded-xs bg-dark-160 horizontal"
    >
      <div class="">
        <div class="grid-5 gap-5">
          <div v-for="i in 5" :key="i" class="relative sa1">
            <div
              class="rounded-xs relative"
              :class="
                i % 4 == 1
                  ? 'bg-orange'
                  : i % 4 == 2
                  ? 'bg-blue '
                  : i % 4 == 3
                  ? 'bg-pink relative z-2'
                  : 'bg-blue2'
              "
            >
              <NuxtImg src="/images/awm.png" class="w-full py-14 px-1" />
              <span
                class="absolute bottom-1 rounded-xs border-b h-1 centerX"
                :class="
                  i % 4 == 1
                    ? 'bg-orange-500'
                    : i % 4 == 2
                    ? 'bg-blue-500'
                    : i % 4 == 3
                    ? 'bg-pink-500'
                    : 'bg-blue-700'
                "
              >
              </span>
            </div>
          </div>
        </div>
        <NuxtImg
          src="/images/nav.png"
          class="rotate-90 z-2 w-5 absolute centerX -top-1"
        />
        <NuxtImg
          src="/images/nav.png"
          class="-rotate-90 w-5 z-2 absolute centerX -bottom-1"
        />
      </div>
      <div
        class="absolute top-0 left-0 opened w-full h-full rounded-xs"
        v-show="opened"
      ></div>
    </div>
    <div v-else class="flex flex-col gap-5">
      <div
        v-for="i in type == 10 ? 2 : 1"
        :key="i"
        class="gap-5 vertical relative"
        :class="
          type == 2
            ? 'grid-2 '
            : type == 3
            ? 'grid-3 '
            : type == 4
            ? 'grid-4'
            : 'grid-5'
        "
      >
        <div
          class="rounded-xs bg-dark-160"
          v-for="i in type > 5 ? 5 : type"
          :key="i"
          :class="
            i % 4 == 1
              ? 'bg-orange'
              : i % 4 == 2
              ? 'bg-blue '
              : i % 4 == 3
              ? 'bg-pink relative z-2'
              : 'bg-blue2'
          "
        >
          <div class="flex flex-col gap-5">
            <div
              v-for="i in 3"
              :key="i"
              class="flex items-center justify-center"
            >
              <NuxtImg
                src="/images/awm.png"
                :class="type > 4 ? 'h-20' : 'h-25'"
              />
            </div>
          </div>
        </div>
        <span class="absolute centerY -left-1">
          <NuxtImg src="/images/nav.png" class="h-5" />
        </span>
        <span class="absolute centerY -right-1 rotate-180">
          <NuxtImg src="/images/nav.png" class="h-5" />
        </span>
      </div>
    </div>
    <div class="mt-5 flex flex-col gap-2" v-show="!opened">
      <OpenCaseDots />
      <div class="flex justify-center text-base text-grey-900 font-semibold">
        ОТКРЫВАЕТСЯ
      </div>
    </div>
    <div class="mt-5 flex justify-between gap-20 px-20" v-show="opened">
      <button
        class="btn bg-dark-200 item text-base text-grey-900 font-semibold flex-grow h-14 flex items-center justify-center"
      >
        ПРОДАТЬ ЗА 50 G
      </button>
      <button
        @click="toggleOpened"
        class="btn btn-orange px-20 text-dark-200 text-base text-grey-900 font-semibold h-14 flex items-center justify-center"
      >
        ОТКРЫТЬ ЕЩЕ РАЗ
      </button>
      <button
        class="btn bg-dark-200 item text-base text-grey-900 font-semibold flex-grow h-14 flex items-center justify-center"
      >
        ДОБАВИТЬ В КОНТРАКТ
      </button>
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

.content {
  background-color: #ddd;
  text-align: center;
}

.border-b {
  min-width: 120px;
  width: 120px;
}

.-top-1 {
  top: -4px;
}
.-bottom-1 {
  bottom: -4px;
}
.-left-1 {
  left: -4px;
}

.-right-1 {
  right: -4px;
}

.opened {
  background: rgba($dark-160, 0.9);
}

.item {
  transition: 0.3s ease;
  &:hover {
    color: #fff;
  }
}
</style>
