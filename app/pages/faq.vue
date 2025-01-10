<script setup></script>

<template>
  <div class="text-grey-900 container">
    <h2 class="text-xl mb-5 font-semibold text-center text-white text-1">
      КАК ЭТО РАБОТАЕТ?
    </h2>
    <div class="py-5 bg-dark-200 rounded-xs flex gap-5 justify-start flex-wrap">
      <FaqStep text="Авторизируйтесь на сайте">
        <IconKeyhole />
      </FaqStep>
      <FaqStep text="Пополните счет любым удобным методом">
        <IconCash />
      </FaqStep>
      <FaqStep text="Открывайте кейсы по самым выгодным ценам">
        <IconKey />
      </FaqStep>
      <FaqStep text="Выведите или продайте полученные предметы">
        <IconToggle />
      </FaqStep>
      <FaqStep text="Получите предмет в виде голды" :nav="false">
        <IconCoin />
      </FaqStep>
    </div>
    <h2 class="text-xl my-5 font-semibold text-center text-white">
      ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
    </h2>
    <FaqContent />
    <FaqContent class="mt-5" />
  </div>
</template>
<style scoped lang="scss">
@media screen and (max-width: 768px) {
  .justify-start,
  .text-1 {
    display: none;
  }
  .my-5 {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  .mt-5 {
    margin-top: 16px;
  }
  .gap-5 {
    gap: 16px;
  }
  .py-5{
    padding-top: 16px;
    padding-bottom: 16px;
  }
}
</style>
