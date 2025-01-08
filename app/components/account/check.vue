<script setup>
import { ref } from "vue";

const props = defineProps({
  check: {
    type: Boolean,
    default: false,
  },
});

const checked = ref(props.check);
</script>

<template>
  <div
    @click="() => (checked = !checked)"
    class="absolute point centerY right-0 w-5 text-8 h-5 flex items-center rounded-xs justify-center"
    :class="
      checked ? 'bg-green-500 text-dark-200 ' : 'bg-dark-200 text-grey-900 '
    "
  >
    <IconCheck />
  </div>
</template>
<style scoped lang="scss">
.text-8 {
  font-size: 8px;
}
</style>
