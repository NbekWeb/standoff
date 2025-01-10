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
    <MainMobile @modal="(val) => (modal = val)" />
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
      class="px-14 bg-dark-200 flex justify-between gap-5 items-center mainMenu w-full h-20 items-center"
    >
      <div class="flex gap-20 items-center flex-grow">
        <div class="flex">
          <NuxtLink to="/">
            <NuxtImg src="/images/logo.png" class="logo" />
          </NuxtLink>
        </div>
        <MainNavbar class="main-navbar flex-grow " />
      </div>
      <MainMenubar class="" @modal="(val) => (modal = val)" />
    </div>
    <div class=" ">
      <div class="mt-5">
        <NuxtPage @modal="(val) => (modal = val)" />

        <MainFoot />
      </div>
    </div>

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
  z-index: 999;
}

.min-h-screen {
  min-height: 200vh;
}

.logo {
  height: 46px;
}
@media screen and (max-width: 1580px) {
  .gap-20 {
    gap: 40px;
  }
  .px-14 {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media screen and (max-width: 1024px) {
  .mainMenu {
    padding: 0 16px;
    .main-navbar {
      display: none;
    }
  }
}

.enter-open {
  max-height: 100vh;
  overflow-y: hidden !important;
}

.enter-main {
  z-index: 999;
  background: rgba($dark-100, 0.7);
  backdrop-filter: blur(4px);
}

@media screen and (max-width: 640px) {
  .px-14 {
    padding-left: 10px;
    padding-right: 10px;
  }
  .logo {
    height: 40px;
  }
}
</style>
