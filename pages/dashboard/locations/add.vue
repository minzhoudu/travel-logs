<script setup lang="ts">
import type { FetchError } from "ofetch";
import type { ZodType } from "zod";

import { InsertLocation } from "~/lib/db/schema";

definePageMeta({
  layout: "sidebar",
});

const serverError = ref<string>("");
const loading = ref(false);
const submitted = ref(false);

const router = useRouter();
const { $csrfFetch } = useNuxtApp();

const { handleSubmit, errors, meta, setErrors } = useForm({
  validationSchema: toTypedSchema(InsertLocation as unknown as ZodType),
});

const onSubmit = handleSubmit(async (values) => {
  loading.value = true;

  try {
    serverError.value = "";

    await $csrfFetch("/api/locations", {
      method: "POST",
      body: values,
    });

    submitted.value = true;

    navigateTo("/dashboard/locations");
  }
  catch (e) {
    const error = e as FetchError;
    serverError.value = error.statusMessage ?? "An unknown error occurred";

    setErrors(error.data?.data);
  }

  loading.value = false;
});

onBeforeRouteLeave(() => {
  if (meta.value.dirty && !submitted.value) {
    // eslint-disable-next-line no-alert
    const confirm = window.confirm("You have unsaved changes. Are you sure you want to leave?");

    if (!confirm) {
      return false;
    }

    return true;
  }
});
</script>

<template>
  <div class="container max-w-md">
    <div class="my-4 flex flex-col gap-4">
      <h1 class="text-2xl bg-primary rounded-xl text-center py-2 px-4 w-fit mx-auto">
        Add Location
      </h1>

      <p class="text-sm bg-base-200 rounded-lg p-2">
        A location is a place you have travelled or will travel to. It can be a city, country, state, or any other point of interest. You can add specific times you visited after adding it.
      </p>
    </div>

    <div v-if="serverError" role="alert" class="alert alert-error">
      <span>{{ serverError }}</span>
    </div>

    <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
      <LocationsFormInput
        label="Location Name"
        name="name"
        type="text"
        placeholder="Eg. New York, Eiffel Tower, etc."
        :is-error="!!errors.name"
        error-message="Name must be between 1 and 100 characters"
        :disabled="loading"
      />
      <LocationsFormInput
        label="Description"
        name="description"
        type="textarea"
        placeholder="Eg. I visited the Eiffel Tower in Paris, France"
        :is-error="!!errors.description"
        error-message="Description must be less than 1000 characters"
        :disabled="loading"
      />
      <LocationsFormInput
        label="Latitude"
        name="lat"
        type="number"
        placeholder="Eg. 40.7128"
        :is-error="!!errors.lat"
        error-message="Latitude must be between -90 and 90"
        :disabled="loading"
      />
      <LocationsFormInput
        label="Longitude"
        name="long"
        type="number"
        placeholder="Eg. -74.0060"
        :is-error="!!errors.long"
        error-message="Longitude must be between -180 and 180"
        :disabled="loading"
      />

      <div class="flex justify-end gap-2">
        <button
          type="button"
          class="btn btn-error btn-outline"
          :disabled="loading"
          @click="router.back()"
        >
          <Icon name="tabler:cancel" size="20" />
          Cancel
        </button>

        <button type="submit" class="btn btn-primary" :disabled="loading">
          <span v-if="loading" class="loading loading-spinner loading-md" />
          <Icon v-else name="tabler:circle-plus-filled" size="20" />
          Add
        </button>
      </div>
    </form>
  </div>
</template>
