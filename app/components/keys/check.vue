<script setup>
import { ref } from "vue";

const props = defineProps({
  selected: {
    type: Boolean,
    default: false,
  },
});

const type = ref(props.selected);
</script>
<template>
  <div
    class="w-5 h-5 flex rounded-xs point items-center justify-center text-dark-200"
    :class="type ? 'bg-green-500' : 'bg-orange-400'"
    >
    <!-- @click="() => (type = !type)" -->
    <IconX v-if="!type" />
    <IconCheck v-else />
  </div>
</template>

<style scoped lang="scss">
div {
  font-size: 8px;
}
</style>
