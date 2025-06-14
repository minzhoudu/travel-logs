<script setup lang="ts">
const authStore = useAuthStore();
</script>

<template>
  <div class="navbar bg-primary text-primary-content">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        Travel Log
      </NuxtLink>
    </div>

    <div class="navbar-end gap-4">
      <AppColorMode />

      <AppSignInButton v-if="authStore.loading || !authStore.user" label="Sign In with GitHub" />

      <AppDropdown v-else>
        <template #placeholder>
          <AppUserAvatar v-if="authStore.user.image" :src="authStore.user.image" :alt="authStore.user.name" />
          {{ authStore.user?.name }}
        </template>

        <template #default>
          <li>
            <a @click="authStore.signOut">
              <Icon name="tabler:logout" size="16" />
              Sign Out
            </a>
          </li>
        </template>
      </AppDropdown>
    </div>
  </div>
</template>
