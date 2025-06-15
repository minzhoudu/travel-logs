<script setup lang="ts">
const authStore = useAuthStore();

await authStore.init();
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppNavBar />

    <div class="flex flex-1">
      <AppSidebar />

      <main class="flex flex-col flex-1">
        <slot />
      </main>
    </div>
  </div>
</template>
