<template>
  <div class="flex flex-col items-center justify-center px-4 py-6 font-heading md:px-8">
    <hero-section />
    <feature-section />
  </div>
</template>

<script setup lang="ts">
const config = useConfig();

useSeoMeta({
  title: `Virgo: Intuitive, highly customizable and powerful component collection for Vue & Nuxt`,
  ogTitle: `Virgo: Intuitive, highly customizable and powerful component collection for Vue & Nuxt`,
  description:
    "Open source component collection with unique customization possibilities for Vue & Nuxt.",
  ogDescription:
    "Open source component collection with unique customization possibilities for Vue & Nuxt.",
  ogImage: config.value.site.ogImage,
  twitterCard: "summary_large_image",
});
</script>
