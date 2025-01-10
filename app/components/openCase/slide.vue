<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const props = defineProps({
  type: {
    type: Number,
    default: 1,
  },
});
</script>

<template>
  <client-only>
    <div>
      <div
        v-if="type == 1"
        class="p-5 relative mb-12 rounded-xs bg-dark-160 horizontal"
      >
        <div class="">
          <Swiper
            :slidesPerView="4.8"
            :loop="true"
            :space-between="20"
            :modules="[Autoplay, Pagination]"
            :autoplay="{ delay: 2500 }"
            :pagination="{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 1,
            }"
            class=""
          >
            <SwiperSlide v-for="i in 20" :key="i">
              <div
                class="rounded-xs relative"
                :class="
                  i % 4 == 1
                    ? 'bg-orange'
                    : i % 4 == 2
                    ? 'bg-blue'
                    : i % 4 == 3
                    ? 'bg-pink'
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
            </SwiperSlide>
          </Swiper>
          <NuxtImg
            src="/images/nav.png"
            class="rotate-90 w-5 absolute centerX -top-1"
          />
          <NuxtImg
            src="/images/nav.png"
            class="-rotate-90 w-5 absolute centerX -bottom-1"
          />
        </div>
      </div>
      <div v-else class="flex flex-col gap-5">
        <div
          v-for="i in type == 10 ? 2 : 1"
          :key="i"
          class="gap-5 vertical"
          :class="
            type == 2
              ? 'grid-2'
              : type == 3
              ? 'grid-3'
              : type == 4
              ? 'grid-4'
              : 'grid-5'
          "
        >
          <div
            class="rounded-xs bg-dark-160"
            v-for="i in type > 5 ? 5 : type"
            :key="i"
          >
            <Swiper
              :slidesPerView="2.7"
              :loop="true"
              :space-between="20"
              :modules="[Autoplay, Pagination]"
              :autoplay="{ delay: 2500 }"
              :pagination="{
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 1,
              }"
              direction="vertical"
              class=""
              style="height: 260px"
            >
              <SwiperSlide v-for="i in 20" :key="i">
                <div class="flex items-center justify-center">
                  <NuxtImg
                    src="/images/awm.png"
                    :class="type > 4 ? 'h-20' : 'h-25'"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div
        class="flex justify-center text-sm text-grey-900 font-semibold"
        :class="type > 4 ? 'mt-3' : 'mt-1'"
      >
        ОТКРЫВАЕТСЯ
      </div>
    </div>
  </client-only>
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
</style>
