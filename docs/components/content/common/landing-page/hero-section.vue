<template>
  <section
    class="relative mx-auto flex min-h-[52rem] max-w-[800px] flex-col items-center justify-center gap-2 py-8 max-sm:min-h-[28rem] lg:py-24 lg:pb-20 md:py-12 md:pb-8"
  >
    <img src="/logo.png" class="max-w-[300px] p-10" alt="">
    <span
      class="fixed top-0 z-[-1] h-screen w-full bg-white opacity-40 dark:bg-black dark:opacity-50"
    ></span>
    <nuxt-link
      to="/getting-started/installation"
      target=""
      class="inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-sm font-medium hover:cursor-pointer"
    >
      <smart-icon
        name="lucide:rocket"
        :size="16"
      />
      <ui-separator
        class="mx-2 h-4 dark:bg-gray-600"
        orientation="vertical"
      />
      <span class="underline-offset-4 hover:underline">Get Started</span>
      <icon
        name="lucide:arrow-right"
        class="ml-1 size-4"
      />
    </nuxt-link>
    <h1
      class="text-center text-3xl font-bold leading-tight tracking-tighter lg:leading-[1.1] md:text-6xl"
    >
      Build    
        <flip-words
          :words="['beautiful', 'stunning']"
          :duration="3000"
        />
        interface using Virgo
    </h1>

    <span class="mt-4 text-center text-lg text-gray-600 sm:text-xl dark:text-gray-200">
      Open source component collection with unique customization possibilities for Vue & Nuxt.
    </span>

    <div class="mt-4 flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
      <nuxt-link to="/components">
        <ui-button> All Components </ui-button>
      </nuxt-link>
      <nuxt-link
        to="https://github.com/RunningPeli/virgo"
        target="_blank"
      >
        <ui-button variant="outline">
          <smart-icon
            name="lucide:github"
            class="mr-1"
          />
          Github
        </ui-button>
      </nuxt-link>
    </div>
  </section>
</template>

<script setup lang="ts">
const isDark = computed(() => useColorMode().value == "dark");
</script>
