<script setup lang="ts">
defineProps({
  src: {
    type: String,
  },
});
</script>

<template>
  <div v-if="src" class="avatar">
    <div class="w-7 rounded-full">
      <img :src="src">
    </div>
  </div>
</template>
