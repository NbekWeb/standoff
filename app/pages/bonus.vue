<script setup>
import { ref } from "vue";

const code = ref("");
</script>
<template>
  <div class="container flex flex-col gap-5 text-grey-900 text-base">
    <h2 class="text-xl font-semibold text-center text-white">ВСЕ БОНУСЫ</h2>
    <div class="grid-2 gap-5">
      <div class="rounded-xs bg-dark-200 p-5 flex flex-col gap-5">
        <div class="flex items-center justify-between">
          <div class="flex gap10 font-semibold flex-col">
            <span class="text-white">ХАЛЯВА НА ТВОЙ БАЛАНС</span>
            <span class="text-green-500">ПРОМОКОД</span>
          </div>
          <div
            class="flex text-28 w-12 h-12 items-center justify-center rounded-xs bg-green-500 text-dark-200"
          >
            <IconCoin />
          </div>
        </div>
        <div class="flex items-center gap-5 mr-25">
          <span class="h-full flex w-1 bg-green-500 rounded-xs"></span>
          <div class="font-semibold flex flex-col gap-5">
            <span>
              Следи за нашей 
              <span class="text-green-500"> группой ВКонтакте </span>
              , а также получай нашу рассылку просто написав в сообщения группы.
              Мы ежедневно отправляем один или несколько промокодов, которые
              могут пополнить бесплатно твой баланс на Серебро или Золото
              бесплатно!
            </span>

            <span>
              Код на Голду вводить сюда

              <span class="text-green-500"> =) </span>
              Ищите его у Ютуберов в описании или просите в нашей
              <span class="text-green-500">  группе ВКонтакте </span>
            </span>
          </div>
        </div>
        <div class="flex gap-5 h-14">
          <div
            class="py-4 px-5 h-full rounded-xs bg-dark-300 flex gap-5 items-center flex-grow justify-between"
          >
            <div class="flex gap-5 items-center flex-grow">
              <span class="text-xl text-white">
                <IconCupon />
              </span>
              <input
                v-model="code"
                type="text"
                placeholder="Инвайт-код"
                class="text-base flex-grow font-medium text-white"
              />
            </div>
          </div>
          <button
            @click="() => (code = '')"
            class="btn h-full px-9 w180 flex justify-center text-base font-semibold upercase h-full"
            :class="
              code ? 'btn-orange ' : 'point-none bg-dark-300 text-grey-900'
            "
          >
            ПРИМЕНИТЬ
          </button>
        </div>
      </div>
      <div class="rounded-xs bg-dark-200 p-5 flex flex-col gap-5">
        <div class="flex items-center justify-between">
          <div class="flex gap10 font-semibold flex-col">
            <span class="text-white">ЕЖЕДНЕВНЫЙ РОЗЫГРЫШ ДО 1000 ЗОЛОТА </span>
            <span class="text-orange-500">РОЗЫГРЫШ</span>
          </div>
          <div
            class="flex text-base gap-1 justify-center px-10 h-12 items-center justify-center rounded-xs bg-orange-500 text-dark-200"
          >
            <IconUser />
            <span> 51 </span>
          </div>
        </div>
        <div class="flex gap-5">
          <span class="h-full w-1 rounded-xs bg-orange-500 flex"></span>
          <div class="flex gap-5">
            <NuxtImg src="/images/emblema.png" class="w-24 rounded-xs" />
            <div class="flex gap10 flex-col font-semibold">
              <span>ПОСЛЕДНИЙ ПОБЕДИТЕЛЬ</span>
              <span class="text-orange-500">
                ONELEDAY <span class="text-grey-900">ЗАБРАЛ</span> 7896G
              </span>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-end">
          <div class="flex flex-col gap10">
            <span>СЕГОДНЯ:</span>
            <div
              class="text-dark-300 font-semibold h-14 px-10 flex items-center bg-orange-400 rounded-xs"
            >
              8888G
            </div>
          </div>
          <div class="flex gap-5 h-14">
            <div
              class="w180 flex rounded-xs gap-1 h-full bg-dark-300 flex justify-center items-center"
            >
              <span class="text-xl flex">
                <IconTime />
              </span>
              <span class="text-white font-semibold">18:56:54</span>
            </div>
            <div
              class="w180 h-full font-semibold bg-orange-400 flex justify-center items-center text-dark-200 rounded-xs"
            >
              УЧАСТВОВАТЬ
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-4 gap-5">
      <div
        v-for="i in 4"
        :key="i"
        class="rounded-xs bg-dark-200 p-5 flex flex-col gap-5"
      >
        <div class="flex justify-between items-center">
          <div class="flex gap10 flex-col font-semibold">
            <span class="font-semibold text-white">КАЖДЫЙ 1 ЧАС</span>
            <span class="font-semibold text-orange-500">БЕСПЛАТНЫЙ КЕЙС </span>
          </div>
          <div
            class="w-12 text-28 text-dark-200 bg-orange-500 rounded-xs h-12 flex items-center justify-center"
          >
            <IconKey />
          </div>
        </div>
        <div class="flex gap-5 items-center">
          <span class="w-1 rounded-xs h-full bg-orange-500"></span>
          <span>БЕСПЛАТНО КАЖДЫЙ 1 ЧАС</span>
        </div>
        <div class="grid-2 gap-5 h-14">
          <div
            class="flex rounded-xs gap-1 h-full bg-dark-300 flex justify-center items-center"
          >
            <span class="text-xl flex">
              <IconTime />
            </span>
            <span class="text-white font-semibold">18:56:54</span>
          </div>
          <div
            class="h-full font-semibold bg-orange-500 flex justify-center items-center text-dark-200 rounded-xs"
          >
            ОТКРЫТ
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/scss/_colors.scss";

.w-1 {
  min-width: 4px;
  width: 4px;
}
</style>
