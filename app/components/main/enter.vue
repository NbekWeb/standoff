<script setup>
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
    <div class="font-semibold text-xl flex justify-center">Войти через</div>
    <span @click="close" class="text-2xl absolute top-5 right-5 point">
      <IconClose />
    </span>
    <div class="flex text-white font-semibold text-base flex-col gap-5 mt-6">
      <div
        class="p-5 point rounded-xs bg-blue-600 flex w-full gap-5 items-center"
      >
        <IconVkbg class="text-xl" />
        <span> VK ID </span>
      </div>
      <div
        class="p-5 point rounded-xs bg-orange-500 flex w-full gap-5 items-center"
      >
        <IconGoogle class="text-xl" />
        <span> Google </span>
      </div>
      <div
        class="p-5 point rounded-xs bg-blue-200 flex w-full gap-5 items-center"
      >
        <IconTg class="text-xl" />
        <span> Telegram </span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

.enter-content {
  min-width: 488px;
}
</style>
