<template>
  <client-only>
    <suspense>
      <template #default>
        <component :is="componentName" />
      </template>
      <template #fallback>
        <div class="p-4">
          <spinner class="mx-auto" />
        </div>
      </template>
    </suspense>
  </client-only>
</template>

<script setup lang="ts">
interface Props {
  componentName?: string;
}

// Define props for the component
defineProps<Props>();
</script>
