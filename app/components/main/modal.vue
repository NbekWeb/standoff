<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const emit = defineEmits();

function enter() {
  emit("enter");
}

const openLang = ref(false);
const lang = ref("ru");

const toggleOpen = () => {
  openLang.value = !openLang.value;
};

const changeLang = (val) => {
  lang.value = val;
  toggleOpen();
};

// Close modal on click outside
const handleClickOutside = (event: MouseEvent) => {
  const modal = document.querySelector(".change-lang");
  if (openLang.value && modal && !modal.contains(event.target as Node)) {
    openLang.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div
    class="absolute modal text-sm top-22 right-0 text-grey-900 font-semibold"
  >
    <div class="p-5 modal-top gap-5 flex flex-col">
      <span class=""> 01.12.2024</span>
      <span class="text-base text-orange-500 min-w-max"
        >АДВЕНТ КАЛЕНДАРЬ ОТ GGSTANDOFF</span
      >
      <p class="px-5">
        Целый месяц различных подарков! Заходи в нашего бота и не пропускай ни
        одного дня чтобы забрать абсолютно всё
      </p>
      <button class="text-dark-200 btn btn-orange point text-base font-bold">
        ПЕРЕЙТИ К НОВОСТИ
      </button>
    </div>
    <div class="p-5 modal-bottom text-base bg-dark-200 gap-5 flex flex-col">
      <div class="flex items-center gap10 point item">
        <IconUser class="text-xl" />
        <span> Личный кабинет </span>
      </div>
      <div class="flex items-center gap10 point item">
        <IconShare class="text-xl" />
        <span> Реферальная система </span>
      </div>
      <div class="flex items-center gap10 point item">
        <IconFaq class="text-xl" />
        <span> FAQ </span>
      </div>
      <div @click="enter" class="flex items-center gap10 point item">
        <IconEnter class="text-xl" />
        <span> Выход </span>
      </div>
      <div class="relative">
        <div
          @click.stop="toggleOpen"
          class="flex point items-center justify-center relative w-10 p-1 rounded-xs lang-item"
        >
          <NuxtImg
            src="/images/ru.png"
            class="rounded-xs w-full"
            v-if="lang == 'ru'"
          />
          <NuxtImg src="/images/en.png" class="rounded-xs w-full" v-else />
        </div>
        <div
          v-if="openLang"
          class="change-lang bottom-10 absolute rounded-xs flex flex-col p10 gap10"
        >
          <div
            @click.stop="changeLang('ru')"
            class="flex items-center gap10 item point"
          >
            <NuxtImg src="/images/ru.png" class="rounded-xs w-8" />
            <span> RU </span>
          </div>
          <div
            @click.stop="changeLang('en')"
            class="flex items-center point item gap10"
          >
            <NuxtImg src="/images/en.png" class="rounded-xs w-8 item point" />
            <span> EN </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/scss/_colors.scss";

.modal {
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.3);
}

.modal-top {
  backdrop-filter: blur(14px);
  border-radius: 4px 4px 0 0;
  background: rgba($dark-200, 0.8);
}

.item:hover {
  color: #fff;
}

.lang-item {
  background: rgba($dark-300, 0.8);
}
.change-lang {
  background: rgba($dark-300, 0.8);
  backdrop-filter: blur(14px);
}
</style>
