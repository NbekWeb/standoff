<template>
  <div class="container">
    <div
      class="bg-dark-200 flex-wrap text-orange-500 font-bold rounded-xs text-base p-5 mt-5 flex justify-center items-center gap-20 static-wrap"
    >
      <div class="flex gap-5 items-center static-item">
        <div class="px-3 py-2 text-3xl bg-dark-300 rounded-xs">
          <IconUser />
        </div>
        <div class="flex flex-col gap-2 h-full">
          <span class="text-xl">3 935 877</span>
          <span class="text-grey-900">ИГРОКОВ</span>
        </div>
      </div>
      <div class="flex gap-5 items-center static-item">
        <div class="px-3 py-2 text-3xl bg-dark-300 rounded-xs">
          <IconKeys />
        </div>
        <div class="flex flex-col gap-2 h-full">
          <span class="text-xl">727 935 877</span>
          <span class="text-grey-900">КЕЙСОВ</span>
        </div>
      </div>

      <div class="flex gap-5 items-center static-item">
        <div class="px-3 py-2 text-3xl bg-dark-300 rounded-xs">
          <IconDoc />
        </div>
        <div class="flex flex-col gap-2 h-full">
          <span class="text-xl">356 935 877</span>
          <span class="text-grey-900">КОНТРАКТОВ</span>
        </div>
      </div>
      <div class="flex gap-5 items-center static-item">
        <div class="px-3 py-2 text-3xl bg-dark-300 rounded-xs">
          <IconNavigator />
        </div>
        <div class="flex flex-col gap-2 h-full">
          <span class="text-xl">727 935 877</span>
          <span class="text-grey-900">АПГРЕЙДОВ</span>
        </div>
      </div>
    </div>
    <div
      class="bg-dark-200 rounded-xs p-10 text-grey-900 text-base font-bold mt-5 flex flex-col gap-5 footer"
    >
      <div class="flex gap-20 flex-wrap">
        <div class="flex flex-col gap-5">
          <span>COPYRIGHT © STANDOFFHUB.COM 2020 - 2024</span>
          <a href="mailto:SUPPORT@STANDOFFHUB.COM" class="icon point text-grey-900">
            SUPPORT@STANDOFFHUB.COM</a
          >
        </div>
        <div class="flex flex-col gap-5">
          <span class="icon point">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</span>
          <span class="icon point">СОТРУДНИЧЕСТВО</span>
        </div>
        <div class="flex flex-col gap-5">
          <span class="icon point">ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ</span>
          <span class="icon point">КОНТАКТЫ</span>
        </div>
      </div>
      <div class="flex gap-4 text-xl">
        <div
          class="bg-dark-300 icon point rounded-xs flex items-center justify-center w-13 h-13"
        >
          <IconTg />
        </div>
        <div
          class="bg-dark-300 icon point rounded-xs flex items-center justify-center w-13 h-13"
        >
          <IconYt />
        </div>
        <div
          class="bg-dark-300 icon point rounded-xs flex items-center justify-center w-13 h-13"
        >
          <IconVk />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.icon:hover {
  color: #fff;
}
</style>
