<script setup>
import { ref } from "vue";

const step = ref(0);
const emit = defineEmits();

function withdraw() {
  emit("modal", "withdraw");
}

function copyText(val) {
  navigator.clipboard.writeText(val);
}
</script>

<template>
  <div class="container text-grey-900 flex flex-col gap-5 text-base">
    <div class="flex gap-5">
      <div class="flex flex-grow gap-5 bg-dark-160 p-5 rounded-xs flex-col">
        <div class="flex gap-5 flex-grow">
          <NuxtImg
            src="/images/emblema.png"
            class="emblema rounded-xs"
            quality="100"
          />

          <div class="flex text-base flex-grow flex-col justify-between">
            <div
              @click="withdraw"
              class="h-14 font-semibold bg-dark-200 rounded-xs point item flex items-center justify-center w-full"
            >
              ONELEDAY
            </div>
            <div
              class="h-14 font-semibold px-5 bg-dark-200 rounded-xs flex items-center w-full"
            >
              <span class="flex-grow flex justify-center">ID: 5674842</span>
              <span class="text-xl item point" @click="copyText('5674842')"
                ><IconCopy
              /></span>
            </div>
          </div>
        </div>
        <button
          @click="withdraw"
          class="btn h-14 flex items-center w-full btn-green text-base font-semibold text-dark-200"
        >
          ПОПОЛНИТЬ
        </button>
        <button
          class="btn item h-14 flex items-center w-full bg-dark-200 text-base font-semibold text-grey-900"
        >
          ВЫЙТИ
        </button>
      </div>
      <div
        class="py-5 px-24 jutify-between bg-dark-160 rounded-xs text-base font-semibold flex flex-col items-center"
      >
        <span class="text-white">ЛЮБИМЫЙ КЕЙС</span>
        <NuxtImg src="/images/key1.png" class="item-img" />
        <span class=""> M4A1-S</span>
      </div>
      <div
        class="py-5 px-24 justify-between bg-dark-160 rounded-xs text-base font-semibold flex flex-col items-center"
      >
        <span class="text-white">ЛЮБИМЫЙ КЕЙС</span>
        <NuxtImg src="/images/awm.png" class="item-img" />
        <span class=""> M4A1-S</span>
      </div>
    </div>
    <div class="grid-2 gap-5">
      <div
        @click="() => (step = 0)"
        class="h-14 flex items-center rounded-xs justify-center point item"
        :class="step == 0 ? 'text-white bg-dark-300' : 'bg-dark-200'"
      >
        ИНВЕНТАРЬ
      </div>
      <div
        @click="() => (step = 1)"
        class="h-14 flex items-center rounded-xs justify-center point item"
        :class="step == 1 ? 'text-white bg-dark-300' : 'bg-dark-200'"
      >
        ВЫВОДЫ
      </div>
    </div>
    <template v-if="step == 0">
      <div class="p10 grid-6 gap-5">
        <div
          class="rounded-xs items-start p10 flex justify-between flex-col"
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
          <button
            class="text-xs px-4 btn btn-green font-semibold text-dark-200 rounded-xs px-4 h-8 flex items-center"
          >
            Продать за 84 G
          </button>
          <NuxtImg src="/images/awm.png" class="w-full mt-5" />

          <div class="flex justify-between items-center w-full">
            <div class="flex flex-col text-xs">
              <span class="text-white">AWP</span>
              <span
                :class="
                  i % 4 == 1
                    ? 'text-orange-500'
                    : i % 4 == 2
                    ? 'text-blue-500'
                    : i % 4 == 3
                    ? 'text-pink-500'
                    : 'text-blue-700'
                "
                >BOOM</span
              >
            </div>
            <button
              class="btn bg-dark-200 point item rounded-xs text-grey-900 font-semibold text-sm h-8 flex items-center px-4"
            >
              Вывести скин
            </button>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="p-5 grid-2 gap-5 rounded-xs bg-dark-200">
        <div
          v-for="i in 6"
          :key="i"
          class="rounded-xs flex justify-between items-center p-5 bg-dark-160"
        >
          <div class="flex items-center gap-5">
            <NuxtImg src="/images/awm.png" class="h-5" />
            <div class="flex flex-col">
              <span>M16</span>
              <span class="text-white">Winged</span>
            </div>
          </div>
          <div class="flex items-center gap-5">
            <span class="text-white"> 4898 G </span>
            <KeysCheck :selected="i % 2 != 0" />
          </div>
        </div>
      </div>
    </template>
    <div
      class="item point rounded-xs bg-dark-200 flex w-full justify-center font-semibold h-14 items-center"
    >
      ЗАГРУЗИТЬ ЕЩЁ
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

.emblema {
  width: 132px;
  height: 132px;
}
.item-img {
  width: 246px;
  height: auto;
}
.item {
  transition: 0.3s ease;
}
.item:hover {
  color: #fff;
}
</style>
