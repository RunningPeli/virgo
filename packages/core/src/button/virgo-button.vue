<script setup lang="ts">
const { text } = defineProps<{
  text: string
}>()
</script>

<template>
  <button>
    <slot>
      {{ text }}
    </slot>
  </button>
</template>
