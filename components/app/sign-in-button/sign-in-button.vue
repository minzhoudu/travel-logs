<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: "Sign In",
  },
});
</script>

<template>
  <button class="btn btn-accent">
    {{ label }}
    <Icon name="tabler:brand-github" />
  </button>
</template>
