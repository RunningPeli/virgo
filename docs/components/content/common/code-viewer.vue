<!-- eslint-disable vue/no-v-html -->
<script setup lang="ts">
import hljs from 'highlight.js'
import { computed, onMounted, ref } from 'vue'
import { MagicString } from 'vue/compiler-sfc'
import '~/assets/css/code-theme.css'

interface Props {
  componentName: string
  id?: string
  class?: string
  language?: string
  filename?: string
  extension?: string
  type?: string
}

const props = withDefaults(defineProps<Props>(), {
  extension: 'vue',
})
const rawString = ref('')
const codeHtml = ref('')

// Create a map of all possible components using import.meta.glob
const rawComponents = import.meta.glob(`../virgo/**/*.{vue,ts,js,d.ts}`, {
  query: '?raw',
  import: 'default',
})

// Compute the component path based on props
const componentPath = computed(
  () =>
    `../virgo/${props.type}/${props.id ? `${props.id}/` : ''}${props.componentName}.${props.extension}`,
)

// Load and process the component code on mount
onMounted(() => {
  loadAndProcessComponentCode()
})

// Function to load and process the component code
async function loadAndProcessComponentCode() {
  try {
    const componentCode = await fetchComponentCode()
    rawString.value = updateImportPaths(componentCode)
    codeHtml.value = hljs.highlightAuto(rawString.value, ['ts', 'html', 'css']).value
  }
  catch (error) {
    throw new Error('Error loading component code:', error as never)
  }
}

// Fetch the raw code of the component dynamically
async function fetchComponentCode() {
  const path = componentPath.value
  const loadRawComponent = rawComponents[path]
  if (!loadRawComponent)
    throw new Error(`Component not found: ${path}`)

  const mod = await loadRawComponent()
  return (mod as unknown as string).trim()
}

// Update import paths in the raw code using MagicString
function updateImportPaths(code: string) {
  const magicString = new MagicString(code)
  magicString.replaceAll('~/components/content/virgo/', '@/components/')
  magicString.replaceAll('~/composables/', '@/composables/')
  return magicString.toString()
}
</script>

<template>
  <prose-pre
    class="overflow-auto max-h-[32rem] px-5" :class="[$props.class]"
    :code="rawString"
    v-bind="props"
  >
    <span
      class="text-sm"
      v-html="codeHtml"
    />
  </prose-pre>
</template>
