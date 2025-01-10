<script setup>
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const selected = ref(route.path);

const changeSelect = (path) => {
  selected.value = path;
  router.push(path);
};

watch(
  () => route.path,
  (newPath) => {
    selected.value = newPath;
  }
);
</script>
<template>
  <div class="mt-8 flex gap-10 text-base font-bold text-grey-900">
    <div
      class="flex flex-col gap-7 items-center point"
      @click="changeSelect('/keys')"
    >
      <div
        :class="`flex gap10 items-center ${
          selected == '/keys' && 'text-orange-500'
        }`"
      >
        <IconKey class="text-xl" />
        <span>Кейсы </span>
      </div>
      <span
        :class="`min-w-10 h-1 rounded-t-xs bg-orange-500 ${
          selected != '/keys' && 'opacity-0'
        }`"
      ></span>
    </div>
    <div
      class="flex flex-col gap-7 items-center point"
      @click="changeSelect('/game')"
    >
      <div
        :class="`flex gap10 items-center ${
          selected == '/game' && 'text-orange-500'
        }`"
      >
        <IconGame class="text-xl" />
        <span>Игры</span>
      </div>
      <span
        :class="`min-w-10 h-1 rounded-t-xs bg-orange-500 ${
          selected != '/game' && 'opacity-0'
        }`"
      ></span>
    </div>
    <div
      class="flex flex-col gap-7 items-center point"
      @click="changeSelect('/baraban')"
    >
      <div
        :class="`flex gap10 items-center ${
          selected == '/baraban' && 'text-orange-500'
        }`"
      >
        <IconBaraban class="text-xl" />
        <span>Барабан </span>
      </div>
      <span
        :class="`min-w-10 h-1 rounded-t-xs bg-orange-500 ${
          selected != '/baraban' && 'opacity-0'
        }`"
      ></span>
    </div>
    <div
      class="flex flex-col gap-7 items-center point"
      @click="changeSelect('/account')"
    >
      <div
        :class="`flex gap10 items-center ${
          selected == '/account' && 'text-orange-500'
        }`"
      >
        <IconUser class="text-xl" />
        <span>Личный кабинет</span>
      </div>
      <span
        :class="`min-w-10 h-1 rounded-t-xs bg-orange-500 ${
          selected != '/account' && 'opacity-0'
        }`"
      ></span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/_colors.scss";

.point {
  transition: 0.3s ease;
  &:hover {
    color: $orange-500;
    .opacity-0 {
      opacity: 1;
      transition: 3s ease;
    }
  }
}
@media screen and (max-width: 1280px) {
  .gap10 {
    gap: 4px;
  }
  .gap-10 {
    gap: 10px;
  }
}

</style>
