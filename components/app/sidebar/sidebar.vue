<script setup lang="ts">
const isOpen = ref(true);

function toggleSidebar() {
  isOpen.value = !isOpen.value;
  localStorage.setItem("isSidebarOpen", isOpen.value.toString());
}

onMounted(() => {
  // Using the localStorage would always render the sidebar open on page refresh (SSR)
  // And once it red from the localStorage, it would correct itself
  // This way it will introduce a slight jump in the UI
  // FIX: Save the state in the DB instead, so the SSR can read the state correctly
  const isSidebarOpen = localStorage.getItem("isSidebarOpen");

  if (isSidebarOpen) {
    isOpen.value = JSON.parse(isSidebarOpen);
  }
});
</script>

<template>
  <div class="bg-base-200 transition-all duration-300" :class="{ 'w-64': isOpen, 'w-16': !isOpen }">
    <div class="flex p-2" :class="{ 'justify-center': !isOpen, 'justify-end': isOpen }">
      <div class="flex hover:bg-white hover:text-black rounded-full cursor-pointer" @click="toggleSidebar">
        <Icon v-if="isOpen" name="tabler:chevron-left" size="30" />
        <Icon v-else name="tabler:chevron-right" size="30" />
      </div>
    </div>

    <div class="flex flex-col gap-1">
      <AppSidebarButton
        href="/dashboard"
        icon="tabler:home"
        label="Dashboard"
        :show-label="isOpen"
      />

      <AppSidebarButton
        href="/dashboard/locations"
        icon="tabler:map"
        label="Locations"
        :show-label="isOpen"
      />

      <AppSidebarButton
        href="/dashboard/locations/add"
        icon="tabler:circle-plus-filled"
        label="Add Location"
        :show-label="isOpen"
      />

      <div class="divider my-2" />

      <AppSidebarButton
        href="/dashboard/settings"
        icon="tabler:settings"
        label="Settings"
        :show-label="isOpen"
      />
    </div>
  </div>
</template>
