<template>
  <div class="my-4 w-full space-y-8">
    <client-only>
      <code-group>
        <div
          :label="label || componentName"
          icon="lucide:laptop-minimal"
        >
          <component-viewer :component-name="componentName" />
        </div>
        <code-viewer-tab
          v-bind="$props"
          label="Code"
        />
      </code-group>
    </client-only>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  componentName?: string;
  id?: string;
  type?: string;
  label?: string;
  class?: string;
  icon?: string;
}

withDefaults(defineProps<Props>(), {
  icon: "lucide:square-terminal",
});
</script>
