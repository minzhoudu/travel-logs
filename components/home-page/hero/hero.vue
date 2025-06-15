<script setup lang="ts">
const authStore = useAuthStore();
</script>

<template>
  <div class="hero bg-base-300 container mt-4">
    <div class="hero-content text-center min-h-96">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          Travel Log
        </h1>
        <p class="py-6">
          Travel log application to keep track of your travels and adventures around the world.
        </p>

        <AppSignInButton v-if="!authStore.user" label="Sign In with GitHub" />

        <NuxtLink v-if="authStore.user" to="/dashboard" class="btn btn-primary">
          Go to Dashboard
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
