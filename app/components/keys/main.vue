<script setup>
import { ref } from "vue";

const selected = ref(1);
const step = ref(0);

const changeSelect = (val) => {
  selected.value = val;
};

const emit = defineEmits();

function open() {
  emit("open", selected);
}

const items = [1, 2, 3, 4, 5, 10];
</script>

<template>
  <div class="keys-main text-grey-900 text-base">
    <div
      class="p-2 relative h400 w-full rounded-xs flex justify-center bg-dark-160 mt-5"
    >
      <NuxtImg src="/images/key1.png" class="h-full" />
      <div
        class="rounded-xs absolute bottom-3 centerX flex flex-col gap-1 items-center font-semibold not-money px-15 py-7 "
        v-show="step % 3 != 0"
      >
        <template v-if="step % 3 == 1">
          <span class="text-green-500">7 988 Р - НЕ ХВАТАЕТ 958 Р</span>
          <span class="text-grey-900">
            Пополните баланс для открытия кейса!
          </span>
        </template>
        <template v-if="step % 3 == 2">
          <span class="text-orange-500">ВЫ НЕ АВТОРИЗОВАНЫ</span>
          <span class="text-grey-900">
            Пополните баланс для открытия кейса!
          </span>
        </template>
      </div>
    </div>
    <div class="mt-7 grid-3 items-center gap-5" :class="step % 3 == 2 && 'po'">
      <div class="flex justify-start col-span-2 items-center">
        <div class="flex gap05 font-semibold" v-show="step % 3 != 2">
          <div
            class="flex point item items-center justify-center w-19 h-14 bg-dark-200"
            :class="[
              item === 1 && 'rounded-l',
              selected === item && 'text-white bg-dark-300',
              item == 10 && 'rounded-r',
            ]"
            v-for="(item, i) in items"
            :key="i"
            @click="changeSelect(item)"
          >
            x{{ item }}
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center toX">
        <button
          @click="() => step++"
          class="btn px-15 text-dark-200 font-bold"
          :class="step % 3 == 1 ? 'btn-green ' : 'btn-orange '"
        >
          {{
            step % 3 == 0
              ? "ОТКРЫТЬ ЗА 7 988 G"
              : step % 3 == 1
              ? "ПОПОЛНИТЬ"
              : "ВОЙТИ"
          }}
        </button>
      </div>
      <div class="flex justify-end items-center">
        <button
          @click="open"
          class="btn btn-white font-semibold text-grey-900 item bg-dark-200 px-25 h-14 flex items-center gap10 text-grey-900 rounded-xs"
          v-show="step % 3 != 2"
        >
          <span>ОТКРЫТЬ БЫСТРО</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/_colors.scss";

.keys-main {
  .h400 {
    height: 400px;
  }
  .gap05 {
    gap: 2px;
  }
  .rounded-l {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }
  .rounded-r {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
  }
  .item:hover {
    color: #fff;
  }
  .not-money {
    background: rgba($dark-300, 0.5);
    backdrop-filter: blur(20px);
  }
}

@media screen and (max-width: 640px) {
  .keys-main {
    .h400 {
      height: 350px;
    }
    button {
      width: 100%;
    }
    .px-15,
    .px-25 {
      padding-left: 12px;
      padding-right: 12px;
    }
    .w-19 {
      width: 60px;
    }
  }
}

@media screen and (max-width: 1280px) {
  .grid-3 {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    .toX {
      justify-content: start;
    }
  }
  .po.grid-3 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    .toX,
    .btn-orange {
      width: 100%;
    }
  }
  .mt-7 {
    margin-top: 16px;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .not-money {
    .px-15 {
      padding-left: 30px;
      padding-right: 30px;
    }
    width: 100%;
  }
}
</style>
