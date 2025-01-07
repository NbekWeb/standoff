<script setup>
import { ref } from "vue";

const promoCode = ref("");

const emit = defineEmits();

function close() {
  emit("close");
}
</script>

<template>
  <div
    @click.stop
    class="relative text-grey-900 enter-content bg-dark-200 rounded-xs p-6"
  >
    <div class="font-semibold text-xl flex justify-center">Промокод</div>
    <span @click="close" class="text-2xl absolute top-5 right-5 point">
      <IconClose />
    </span>
    <p class="text-white mt-7 text-sm">
      Есть промокод? - Вбивай скорей!
      <br />
      Еще больше бонусов ты можешь найти в наших группах ВКонтакте и Телеграм.
    </p>
    <div class="p-5 flex items-center gap-5 bg-dark-300 rounded-xs mt-5">
      <IconCupon class="text-white text-2xl" />
      <input
        type="text"
        v-model="promoCode"
        placeholder="ПРОМОКОД"
        class="text-base text-white"
      />
    </div>
    <button
      @click="
        () => {
          if (promoCode) close();
        }
      "
      class="btn w-full font-bold text-base mt-5"
      :class="
        promoCode ? 'btn-orange' : ' bg-dark-300 text-grey-900 point-none'
      "
    >
      ПРИМЕНИТЬ
    </button>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/_colors.scss";

.enter-content {
  min-width: 488px;
  width: 488px;
}
input {
  border: none;
  outline: none;
  background: transparent;
}

input::placeholder {
  color: $grey-900;
  font-size: 16px;
  font-weight: 600;
}

.point-none:hover {
  cursor: not-allowed;
}
</style>
