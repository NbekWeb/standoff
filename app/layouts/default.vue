<script setup>
import { ref } from "vue";

const modal = ref("");

const selected = ref(0);

const changeSelect = (i) => {
  selected.value = i;
};
</script>

<template>
  <div
    class="bg-dark-100 text-white flex flex-col relative"
    :class="modal && 'enter-open'"
  >
    <div class="flex p-1 gap-1 items-center">
      <div
        class="flex flex-col gap10 justify-end items-center min-w-18 p-1 rounded-xs h-26 bg-dark-200 relative"
      >
        <div class="h-5 w-8">
          <main-online />
        </div>
        <div class="font-bold mt-2 flex flex-col gap10">
          <span class="text-green-500 text-base">1539</span>
          <span class="text-grey-900 text-xs">Онлайн</span>
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <div
          :class="`w50 h50 rounded-xs flex items-center justify-center point ${
            selected == 0
              ? 'bg-orange-500 text-dark-200'
              : 'bg-dark-200 text-grey-900'
          }`"
          @click="changeSelect(0)"
        >
          <IconCrown />
        </div>
        <div
          :class="`w50 h50 rounded-xs flex items-center justify-center point ${
            selected == 1
              ? 'bg-orange-500 text-dark-100'
              : 'bg-dark-200 text-grey-900'
          }`"
          @click="changeSelect(1)"
        >
          <IconThreeline />
        </div>
      </div>
      <div class="flex-grow overflow-x-auto tr-scrollbar">
        <div class="flex gap-1 min-w-max">
          <main-sniper v-for="i of 20" :key="i" :type="i % 3" />
        </div>
      </div>
    </div>

    <div
      class="px-14 bg-dark-200 flex justify-between items-center mainMenu w-full h-20 items-center"
    >
      <div class="flex gap-20 items-center">
        <div class="flex">
          <NuxtLink to="/">
            <NuxtImg src="/images/logo.png" height="46" />
          </NuxtLink>
        </div>
        <MainNavbar class="main-navbar" />
      </div>
      <MainMenubar class="" @enter="() => (modal = 'enter')" />
    </div>
    <div class=" ">
      <div class="mt-5">
        <NuxtPage @modal="(val) => (modal = val)" />

        <MainFoot />
      </div>
    </div>
    <MainMobile />
    <div
      @click="() => (modal = '')"
      v-if="modal != ''"
      class="flex justify-center items-center h-screen w-full absolute top-0 left-0 enter-main"
    >
      <MainEnter @close="() => (modal = '')" v-if="modal == 'enter'" />
      <KeysModal @close="() => (modal = '')" v-if="modal == 'promo'" />
      <AccountModal @close="() => (modal = '')" v-if="modal == 'withdraw'" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/_colors.scss";

.mainMenu {
  position: sticky;
  top: 0;
  z-index: 9999;
}

.min-h-screen {
  min-height: 200vh;
}

@media screen and (max-width: 1024px) {
  .mainMenu {
    padding: 0 16px;
    .main-navbar {
      display: none;
    }
  }
  .footer {
    flex-wrap: wrap-reverse;
    padding: 20px;
    .gap-20 {
      gap: 20px;
    }

    .flex.gap-4.text-xl {
      order: -1;
    }
  }
  .static-wrap {
    gap: 10px;
    justify-content: space-between;
    font-size: 12px;
    .px-3 {
      padding: 8px;
    }
    .text-xl {
      font-size: 14px;
    }
    .static-item {
      gap: 8px;
    }
  }
}

.enter-open {
  max-height: 100vh;
  overflow-y: hidden !important;
}

.enter-main {
  z-index: 9999;
  background: rgba($dark-100, 0.7);
  backdrop-filter: blur(4px);
}
</style>
