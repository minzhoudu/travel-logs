<script setup lang="ts">
defineProps({
  href: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  showLabel: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <AppTooltip :text="label" placement="right" :show-tooltip="!showLabel">
    <NuxtLink
      :href="href"
      class="flex flex-nowrap gap-2 px-4 py-2 hover:bg-base-content hover:text-base-100 transition-colors duration-300 cursor-pointer"
      :class="{ 'justify-center': !showLabel, 'justify-start': showLabel }"
      active-class="bg-base-content text-base-100"
    >
      <Icon :name="icon" size="24" />

      <Transition name="fade">
        <span v-if="showLabel">{{ label }}</span>
      </Transition>
    </NuxtLink>
  </AppTooltip>
</template>

<style scoped>
.fade-enter-active {
  animation: fade 0.1s;
}

.fade-leave-active {
  animation: fade 0.1s reverse;
}

@keyframes fade {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
