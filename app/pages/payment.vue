<script setup>
import { ref } from "vue";

const selected = ref(0);
const promoCode = ref("");

const check = ref(false);

const change = (i) => {
  selected.value = i;
};
</script>
<template>
  <div class="container text-grey-900 text-base">
    <h2 class="text-xl mb-5 font-semibold text-center text-white">
      ПОПОЛНЕНИЕ СЧЕТА
    </h2>

    <div class="grid-2 gap-5">
      <div class="p-5 bg-dark-160 rounded-xs flex flex-col gap-5">
        <PaymentSelect />
        <div class="grid-4 gap-5">
          <div
            @click="change(0)"
            class="rounded-xs relative flex items-end p10 bg-dark-200 item point"
            :class="selected == 0 && 'bg-select'"
          >
            <NuxtImg src="/images/visa.png" class="centerXY absolute h-9" />
            <span
              class="rounded-xs text-xs bg-dark-300 py-1 px10"
              :class="selected == 0 && 'bg-orange-btn'"
              >Карты RU</span
            >
          </div>
          <div
            @click="change(1)"
            class="rounded-xs relative flex items-end p10 bg-dark-200 item point"
            :class="selected == 1 && 'bg-select'"
          >
            <NuxtImg src="/images/gpay.png" class="centerXY absolute h-9" />
          </div>
          <div
            @click="change(2)"
            class="rounded-xs relative flex items-end p10 bg-dark-200 item point"
            :class="selected == 2 && 'bg-select'"
          >
            <NuxtImg src="/images/bl.png" class="centerXY absolute h-9" />
            <span
              class="rounded-xs text-xs bg-dark-300 py-1 px10"
              :class="selected == 2 && 'bg-orange-btn'"
            >
              СБП</span
            >
          </div>
          <div
            v-for="i in 5"
            :key="i"
            @click="change(2 + i)"
            class="rounded-xs relative flex items-end p10 bg-dark-200 item point"
            :class="selected == 2 + i && 'bg-select'"
          ></div>
        </div>
      </div>
      <div class="p-5 bg-dark-160 rounded-xs flex flex-col gap-5">
        <div class="bg-dark-200 p-5 flex items-center justify-between">
          <div class="flex flex-col gap-1">
            <span class="text-xl font-semibold text-white">VISA</span>
            <span class="font-medium">Комиссия 0% - от 50 RUB</span>
          </div>
          <NuxtImg src="/images/visa.png" class="h-9" />
        </div>
        <div class="bg-dark-200 p-5 flex flex-col gap-5">
          <span class="font-semibold flex items-center">
            МИНИМАЛЬНАЯ СУММА:

            <span class="text-white"> 50 RUB </span>
          </span>
          <div
            class="rounded-xs font-semibold bg-dark-300 p-5 flex gap-5 items-center"
          >
            <span class="text-orange-500">
              <IconCoin />
            </span>
            <input
              type="text"
              placeholder="ВВЕДИТЕ СУММУ"
              class="text-base font-semibold text-white"
            />
          </div>
          <div class="flex items-center gap-1 font-semibold">
            <span> БУДЕТ ЗАЧИСЛЕНО: </span>
            <span class="text-orange-500"> 0 G </span>
            <span>+</span>
            <span class="text-white">0 C </span>
          </div>
          <div class="flex items-center gap10">
            <div
              class="p-1 flex items-center justify-center rounded-xs bg-dark-300 slider relative"
            >
              <span
                class="point absolute"
                :class="{ 'left-position': !check, 'right-position': check }"
                @click="() => (check = !check)"
              >
              </span>
            </div>
            <p class="font-semibold">
              Я принимаю условия

              <span class="text-orange-500">
                Пользовательского соглашения
              </span>
            </p>
          </div>
          <div class="flex gap-5 items-center">
            <div
              class="bg-dark-300 flex-grow rounded-xs p-5 flex items-center gap-5"
            >
              <IconCupon class="text-xl text-white" />
              <input
                v-model="promoCode"
                type="text"
                placeholder="ПРОМОКОД"
                class="text-base text-white"
              />
            </div>
            <button
              class="btn w-full font-bold text-base"
              :class="
                promoCode
                  ? 'btn-orange'
                  : ' bg-dark-300 text-grey-900 point-none'
              "
            >
              ПРИМЕНИТЬ
            </button>
          </div>
          <button class="btn btn-green w-full font-semibold">ПОПОЛНИТЬ</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/scss/_colors.scss";

.item {
  transition: 0.3s ease;
  height: 120px;
  border: 3px solid transparent;
  &:hover {
    border-color: $orange-500;
    background: rgba($orange-500, 0.3);
    .bg-dark-300 {
      background: #5f302d;
    }
  }
}

.bg-select {
  background: rgba($orange-500, 0.3);
  border-color: $orange-500;
}

.bg-orange-btn {
  background: #5f302d;
}

.slider {
  min-width: 30px;
  height: 20px;
  span {
    width: 10px;
    min-width: 10px;
    height: 10px;
    border-radius: 2px;
    transition: 0.5s ease;
  }
}

.left-position {
  left: 4px;
  background-color: $grey-900;
}

.right-position {
  right: 4px;
  background-color: $orange-500;
}

input::placeholder {
  color: $grey-900;
  font-size: 16px;
  font-weight: 600;
}
@media screen and (max-width: 1176px) {
  .grid-2 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

@media screen and (max-width: 640px) {
  .gap-5 {
    gap: 10px;
  }
  .p-5 {
    padding: 10px;
  }
  .grid-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
