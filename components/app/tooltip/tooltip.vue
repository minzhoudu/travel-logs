<script setup lang="ts">
defineProps({
  text: String,
  placement: {
    type: String as PropType<"top" | "bottom" | "left" | "right">,
    default: "top",
  },
  showTooltip: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div :class="{ tooltip: showTooltip, [`tooltip-${placement}`]: placement }" :data-tip="showTooltip ? text : undefined">
    <slot />
  </div>
</template>
