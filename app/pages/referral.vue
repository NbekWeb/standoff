<script setup>
import { ref } from "vue";

const promoCode = ref("111111111a");
const code = ref("");
const isReadonly = ref(true);

const toggle = () => {
  isReadonly.value = !isReadonly.value;
};

function copyText(val) {
  navigator.clipboard.writeText(val);
}
</script>
<template>
  <div
    class="container overflow-x-hidden flex flex-col gap-5 text-grey-900 text-base"
  >
    <h2 class="text-xl font-semibold text-center text-white">
      РЕФЕРАЛЬНАЯ СИСТЕМА
    </h2>
    <div class="grid-4 gap-5 font-semibold">
      <div
        class="p-5 col-span-2 bg-dark-200 rounded-xs flex gap-5 items-center"
      >
        <NuxtImg src="/images/emblema.png" class="emblema rounded-xs" />
        <div class="flex flex-grow flex-col h-full justify-between w190 gap-5">
          <button class="h-14 btn w-full text-white bg-dark-300 rounded-xs">
            ONELEDAY
          </button>
          <button class="h-14 text-grey-900 btn w-full bg-dark-300 rounded-xs">
            ID: 24564326
          </button>
        </div>
      </div>
      <div class="bg-dark-200 col-span-2 rounded-xs flex gap-5 items-center">
        <NuxtImg src="/images/level1.png" class="w190 rounded-xs" />
        <div
          class="p-3 flex-grow flex flex-col h-full justify-between items-center"
        >
          <div class="flex text-white flex-col items-center">
            <span class="min-w-full flex-grow">ВАШ УРОВЕНЬ</span>
            <span class="mt-2">1</span>
          </div>
          <span>0 ИЗ 1000</span>
        </div>
      </div>
      <div class="bg-dark-200 rounded-xs p-5 flex flex-col justify-between">
        <span> ЗАРАБОТАНО </span>
        <div class="flex flex-col gap-1">
          <span class="text-green-500">+0</span>
          <span class="text-white">0,00</span>
        </div>
      </div>
      <div class="bg-dark-200 rounded-xs p-5 flex flex-col justify-between">
        <span> ВАШИ РЕФЕРАЛЫ </span>
        <div class="flex flex-col gap-1">
          <span class="text-green-500">+0</span>
          <span class="text-white">0</span>
        </div>
      </div>
    </div>
    <div class="grid-2 gap-5">
      <div class="rounded-xs bg-dark-200 p-5">
        <span class="text-white"> ВАШ ИНВАЙТ-КОД: </span>
        <div class="flex gap-5 h-14 mt-5 sm">
          <div
            class="py-4 px-5 h-full rounded-xs bg-dark-300 flex gap-5 items-center flex-grow justify-between"
          >
            <input
              v-model="promoCode"
              type="text"
              placeholder="ПРОМОКОД"
              class="text-base font-medium"
              :class="isReadonly ? 'text-grey-900' : 'text-white'"
              :readonly="isReadonly"
            />
            <span @click="copyText(promoCode)" class="text-xl item point">
              <IconCopy />
            </span>
          </div>
          <button
            @click="toggle"
            class="btn w-full btn-orange w180 flex justify-center text-base font-semibold upercase h-full"
          >
            {{ isReadonly ? "ИЗМЕНИТЬ" : "Сохранять" }}
          </button>
        </div>
      </div>

      <div class="rounded-xs bg-dark-200 p-5">
        <span class="text-white">У ВАС ЕСТЬ ИНВАЙТ-КОД? </span>
        <div class="flex gap-5 h-14 mt-5 overflow-x-hidden sm">
          <div
            class="py-4 px-5 h-full rounded-xs bg-dark-300 flex gap-5 items-center flex-grow justify-between"
          >
            <input
              v-model="code"
              type="text"
              placeholder="Инвайт-код"
              class="text-base font-semibold text-white"
            />
          </div>
          <button
            @click="() => (code = '')"
            class="btn h-full w180 flex justify-center text-base font-semibold upercase h-full"
            :class="
              code ? 'btn-orange ' : 'point-none bg-dark-300 text-grey-900'
            "
          >
            АКТИВИРОВАТЬ
          </button>
        </div>
      </div>
    </div>
    <div class="rounded-xs bg-dark-200 p-5">
      <span class="text-white"> ВАША ИНВАЙТ-ССЫЛКА: </span>
      <div class="flex gap-5 h-14 mt-5">
        <div
          class="py-4 px-5 h-full rounded-xs bg-dark-300 flex gap-5 items-center w-full justify-between"
        >
          <span class="text-grey-900">https://StandoffHub.com/c/118915</span>
          <span
            @click="copyText('https://StandoffHub.com/c/118915')"
            class="text-xl item point"
          >
            <IconCopy />
          </span>
        </div>
      </div>
    </div>
    <h2 class="text-xl font-semibold text-center text-white">УРОВНИ</h2>

    <div class="p-5 bg-dark-200 grid-6 gap-5 rounded-xs">
      <div
        v-for="i in 6"
        :key="i"
        class="rounded-xs text-sm justify-between py-5 bg-dark-160 flex flex-col items-center"
      >
        <div class="flex flex-col gap10 items-center flex-grow">
          <span class="text-white"> 1 УРОВЕНЬ </span>

          <NuxtImg
            v-show="i == 6"
            src="/images/level2.png"
            class="w-full px-10"
          />
          <NuxtImg
            v-show="i != 6"
            src="/images/level1.png"
            class="w-full px-10"
          />
        </div>
        <div class="flex flex-col gap10 items-center">
          <span class="text-orange-500">{{ i == 6 ? "100000" : "0" }}</span>
          <div class="flex flex-col gap-5 items-center">
            <span>
              <span class="text-orange-500"> 1G </span>
              ПОЛУЧАЕШЬ ТЫ
            </span>
            <span>
              <span class="text-orange-500"> 100G </span>
              ПОЛУЧАЕТ ДРУГ
            </span>
            <span class="text-green-500">ВАШ УРОВЕНЬ</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/_colors.scss";

.emblema {
  width: auto;
  height: 132px;
}

.item {
  transition: 0.3s ease;
  &:hover {
    color: #fff;
  }
}

@media screen and (max-width: 1176px) {
  .grid-6 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media screen and (max-width: 1024px) {
  .grid-2 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

@media screen and (max-width: 768px) {
  .p-5 {
    padding: 10px;
  }
  .my-5 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .mt-5 {
    margin-top: 10px;
  }
  .gap-5 {
    gap: 10px;
  }
  .py-5 {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .px-5 {
    padding-left: 10px;
    padding-right: 10px;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .w180 {
    width: 100%;
  }
}

@media screen and (max-width: 1280px) {
  .grid-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media screen and (max-width: 640px) {
  .sm {
    flex-direction: column;
  }
  .sm.h-14 {
    height: auto;
  }
  .grid-6 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    .text-sm {
      font-size: 12px;
    }
  }
}
</style>
