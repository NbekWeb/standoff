<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const selected = ref(route.path);
const open = ref(false);

const changeSelect = (path) => {
  selected.value = path;
  router.push(path);
};
function openModal() {
  open.value = !open.value;
}

const handleClickOutside = (event) => {
  const modal = document.querySelector(".main-modal1");
  if (open.value && modal && !modal.contains(event.target)) {
    open.value = false;
  }
};
const emit = defineEmits();

function enter() {
  emit("modal", "enter");
  openModal();
}
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div
    class="w-full text-xs mobile px-7 pt-5 items-end justify-between text-grey-900"
  >
    <MainModal
      v-if="open"
      class="main-modal1"
      @enter="enter"
      @close="openModal"
    />
    <div class="flex gap-20 items-center">
      <div
        class="flex flex-col gap-2 items-center point"
        @click="changeSelect('/keys')"
      >
        <div
          :class="`flex gap-2 flex-col  items-center ${
            selected == '/keys' && 'text-orange-500'
          }`"
        >
          <IconKey class="text-xl" />
          <span>Кейсы</span>
        </div>
        <span
          :class="`min-w-10 h-1 rounded-t-xs bg-orange-500 ${
            selected != '/keys' && 'opacity-0'
          }`"
        ></span>
      </div>
      <div
        class="flex flex-col gap-2 items-center item point"
        @click="changeSelect('/baraban')"
      >
        <div
          :class="`flex gap-2 flex-col  items-center ${
            selected == '/baraban' && 'text-orange-500'
          }`"
        >
          <IconBaraban class="text-xl" />
          <span>Барабан</span>
        </div>
        <span
          :class="`min-w-10 h-1 rounded-t-xs bg-orange-500 ${
            selected != '/baraban' && 'opacity-0'
          }`"
        ></span>
      </div>
    </div>
    <div class="flex gap-20 items-center">
      <div
        class="flex flex-col gap-2 items-center item point"
        @click="changeSelect('/game')"
      >
        <div
          :class="`flex gap-2 flex-col  items-center ${
            selected == '/game' && 'text-orange-500'
          }`"
        >
          <IconGame class="text-xl" />
          <span>Игры </span>
        </div>
        <span
          :class="`min-w-10 h-1 rounded-t-xs bg-orange-500 ${
            selected != '/game' && 'opacity-0'
          }`"
        ></span>
      </div>
      <div
        class="flex flex-col gap-2 items-center item point"
        @click.stop="openModal()"
      >
        <div :class="`flex gap-2 flex-col  items-center `">
          <IconMenu class="text-xl" />
          <span>Меню</span>
        </div>
        <span
          :class="`min-w-10 h-1 rounded-t-xs bg-orange-500 opacity-0 `"
        ></span>
      </div>
    </div>
    <div class="absolute top-0 centerX h-full pb-3">
      <div class="h-full flex items-end">
        <div class="text-green-500 relative point">
          <div
            class="absolute centerX cash rounded-full flex items-center justify-center"
          >
            <div
              class="flex bg-green-500 rounded-full items-center justify-center"
            >
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
  position: fixed;
  height: 72px;
  top: calc(100vh - 72px);
  backdrop-filter: blur(14px);
  background: rgba($dark-200, 0.7);
  z-index: 9999;
  display: none;
}

@media screen and (max-width: 1024px) {
  .mobile {
    display: flex;
  }
}

@media screen and (max-width: 640px) {
  .gap-20 {
    gap: 40px;
  }
}

@media screen and (max-width: 480px) {
  .gap-20 {
    gap: 25px;
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

.item,
.opacity-0 {
  transition: 0.3s ease;
}

.item:hover {
  color: $orange-500;
  .opacity-0 {
    opacity: 100;
  }
}
</style>
