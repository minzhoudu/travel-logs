<script setup lang="ts">
const route = useRoute();
const error = route.query.error || "An unknown error occurred";
</script>

<template>
  <div class="card bg-base-300 container mt-4 min-h-72 text-center flex flex-col items-center justify-center gap-4">
    <div role="alert" class="alert alert-error min-w-1/2 flex items-center justify-center">
      <span class="text-center font-bold">Oh no! {{ error }}</span>
    </div>
    <NuxtLink to="/" class="btn btn-accent w-50 font-bold">
      <Icon name="tabler:arrow-left" size="18" /> Home
    </NuxtLink>
  </div>
</template>
