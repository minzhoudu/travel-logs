<script setup lang="ts">
defineProps<{
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  isError?: boolean;
  errorMessage?: string;
  disabled?: boolean;
}>();
</script>

<template>
  <fieldset class="fieldset">
    <legend class="fieldset-legend">
      {{ label }}
    </legend>

    <Field
      :as="type === 'textarea' ? 'textarea' : 'input'"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      class="w-full"
      :class="{ 'input': type === 'text' || type === 'number', 'textarea': type === 'textarea', 'input-error': isError }"
      :disabled="disabled"
    />
    <p v-if="isError" class="label text-error">
      {{ errorMessage }}
    </p>
  </fieldset>
</template>
