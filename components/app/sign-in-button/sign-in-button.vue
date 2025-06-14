<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: "Sign In",
  },
});

const authStore = useAuthStore();
</script>

<template>
  <button class="btn btn-accent" :disabled="authStore.loading" @click="authStore.signIn">
    {{ label }}
    <span v-if="authStore.loading" class="loading loading-spinner loading-sm" />
    <Icon v-else name="tabler:brand-github" />
  </button>
</template>
