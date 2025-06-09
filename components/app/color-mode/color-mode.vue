<script setup lang="ts">
const colorMode = useColorMode();

const isDarkMode = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(value: boolean) {
    colorMode.preference = value ? "dark" : "light";
  },
});
</script>

<template>
  <label class="swap swap-rotate">
    <!-- this hidden checkbox controls the state -->
    <input v-model="isDarkMode" type="checkbox">

    <Icon name="tabler:sun-filled" size="26" class="swap-on" />

    <Icon name="tabler:moon" size="26" class="swap-off" />
  </label>
</template>
