<script setup>
import { ref } from "vue";

const promoCode = ref("");

const emit = defineEmits();

function close() {
  emit("close");
}
</script>

<template>
  <div
    @click.stop
    class="relative text-base text-grey-900 enter-content bg-dark-200 rounded-xs p-6"
  >
    <div class="font-semibold text-xl flex justify-center">Вывод предмета</div>
    <span @click="close" class="text-2xl absolute top-5 right-5 point">
      <IconClose />
    </span>
    <p class="text-white mt-7">
      Для получения приза в виде голды в игре, Вам необходимо:
    </p>
    <div class="flex flex-col gap-5 mt-5">
      <div class="flex gap10 items-start">
        <span
          class="flex w-5 h-5 bg-green-500 items-center justify-center rounded-full text-xs text-dark-200"
        >
          1
        </span>
        <div class="flex flex-col gap10">
          <span class="text-green-500"> Установить одинаковые аватарки </span>
          <p class="text-sm">
            в профиле на сайте и в игре Standoff 2, иначе мы не сможем отправить
            ваш выигрыш
          </p>
        </div>
      </div>

      <div class="flex gap10 items-start">
        <span
          class="flex w-5 h-5 bg-green-500 items-center justify-center rounded-full text-xs text-dark-200"
        >
          2
        </span>
        <div class="flex flex-col gap10">
          <span class="text-green-500"> Выбрать любой скин</span>
          <p class="text-sm">
            из списка ниже и выставить его на продажу на рынок в игре Standoff 2
            по цене 199 G (Цена выводимого предмета)
          </p>
        </div>
      </div>

      <div class="flex gap10 items-start">
        <span
          class="flex w-5 h-5 bg-green-500 items-center justify-center rounded-full text-xs text-dark-200"
        >
          3
        </span>
        <div class="flex flex-col gap10">
          <span class="text-green-500"> Нажмите на кнопку “Готово” </span>
          <p class="text-sm">
            и ожидайте вывода. Обычно вывод на сайте происходит от 1 минуты до
            60 минут, но иногда из-за наплыва игроков возможны задержки до 24
            часов. Просьба не волноваться, выигрыши получат абсолютно все игроки
            нашего сайта!
          </p>
        </div>
      </div>
      <div class="grid-2 gap-5">
        <div
          class="p-1 bg-orange flex flex-col rounded-xs"
          v-for="i in 2"
          :key="i"
        >
          <NuxtImg src="/images/awm.png" />
          <div class="flex relative flex-col items-center gap10">
            <div class="flex text-xs flex-col items-center gap-0">
              <span>AWP</span>
              <span class="text-orange-500 -mt-1">BOOM</span>
            </div>
            <div class="w-25 h-1 rounded-xs bg-orange-500 flex"></div>
            <AccountCheck :check="i % 2 != 0" />
          </div>
        </div>
      </div>
      <button
        @click="close"
        class="btn btn-green point w-full rounded-xs h-14 flex items-center justify-center font-semibold text-dark-200"
      >
        ГОТОВО
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/_colors.scss";

.bg-orange {
  background: rgba($orange-400, 0.3);
}
.bg-blue {
  background: rgba($blue-500, 0.3);
}

.w-5 {
  min-width: 20px;
}

.-mt-1 {
  margin-top: -6px;
}

.enter-content {
  min-width: 488px;
  width: 488px;
}
input {
  border: none;
  outline: none;
  background: transparent;
}

input::placeholder {
  color: $grey-900;
  font-size: 16px;
  font-weight: 600;
}

.point-none:hover {
  cursor: not-allowed;
}
</style>
