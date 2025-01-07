<script setup>
import { ref } from "vue";

const selected = ref(0);

const changeSelect = (i) => {
  selected.value = i;
};
</script>

<template>
  <div
    class="w-full text-xs  mobile px-7 pt-5  items-end justify-between text-grey-900"
  >
    <div class="flex gap-10 items-center">
      <div
        class="flex flex-col gap-2 items-center point"
        @click="changeSelect(0)"
      >
        <div
          :class="`flex gap-2 flex-col  items-center ${
            selected == 0 && 'text-orange-500'
          }`"
        >
          <IconKey class="text-xl" />
          <span>Кейсы</span>
        </div>
        <span
          :class="`min-w-10 h-1 rounded-t-xs bg-orange-500 ${
            selected != 0 && 'opacity-0'
          }`"
        ></span>
      </div>
      <div
        class="flex flex-col gap-2 items-center item point"
        @click="changeSelect(1)"
      >
        <div
          :class="`flex gap-2 flex-col  items-center ${
            selected == 1 && 'text-orange-500'
          }`"
        >
          <IconBaraban class="text-xl" />
          <span>Барабан</span>
        </div>
        <span
          :class="`min-w-10 h-1 rounded-t-xs bg-orange-500 ${
            selected != 1 && 'opacity-0'
          }`"
        ></span>
      </div>
    </div>
    <div class="flex gap-10 items-center">
      <div
        class="flex flex-col gap-2 items-center item point"
        @click="changeSelect(2)"
      >
        <div
          :class="`flex gap-2 flex-col  items-center ${
            selected == 2 && 'text-orange-500'
          }`"
        >
          <IconGame class="text-xl" />
          <span>Игры</span>
        </div>
        <span
          :class="`min-w-10 h-1 rounded-t-xs bg-orange-500 ${
            selected != 2 && 'opacity-0'
          }`"
        ></span>
      </div>
      <div
        class="flex flex-col gap-2 items-center item point"
        @click="changeSelect(3)"
      >
        <div
          :class="`flex gap-2 flex-col  items-center ${
            selected == 3 && 'text-orange-500'
          }`"
        >
          <IconMenu class="text-xl" />
          <span>Меню</span>
        </div>
        <span
          :class="`min-w-10 h-1 rounded-t-xs bg-orange-500 ${
            selected != 3 && 'opacity-0'
          }`"
        ></span>
      </div>
    </div>
    <div class="absolute top-0  centerX h-full pb-3">
      <div class="h-full flex items-end">
        <div class="text-green-500 relative point">
          <div
            class="absolute centerX   cash rounded-full flex items-center justify-center"
          >
            <div class="flex bg-green-500  rounded-full items-center justify-center">
              <IconCash class="text-dark-200 text-3xl" />
            </div>
          </div>
          Пополнить
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/scss/_colors.scss";

.mobile {
  position: sticky;
  height: 72px;
  bottom: 0;
  backdrop-filter: blur(14px);
  background: rgba($dark-200, 0.7);
  display:none;
}

@media screen and (max-width: 640px) {
  .mobile {
    display:flex;
  }
}

.cash {
  bottom: 16px;
  width: 90px;
  min-width: 90px;
  height: 90px;
  background: #599b7a;
  div {
    height: 70px;
    width: 70px;
    min-width: 70px;
  }
}

.item ,.opacity-0{
  transition:  .3s ease;
}

.item:hover {
  color: $orange-500;
  .opacity-0 {
    opacity: 100;
  }
}
</style>
