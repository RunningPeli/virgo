export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'Virgo',
      description: 'Intuitive, highly customizable and powerful component collection for Vue & Nuxt.',
      ogImage: 'https://virgo-ui.dev/og-image.png',
    },
    theme: {
      customizable: false, // may enable in the future, but now violet is the best fit for Virgo
      color: 'violet',
      radius: 0.75,
    },
    header: {
      title: 'Virgo',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [
        {
          title: 'Docs',
          links: [
            {
              title: 'Getting Started',
              to: '/getting-started/introduction',
              description: 'Introduction to Virgo. Vision behind the project.',
            },
            {
              title: 'Installation',
              to: '/getting-started/installation',
              description: 'Follow the step-by-step installation guide.',
            },
            {
              title: 'Components',
              to: '/components',
              description: 'Explore all available components and their usage.',
              target: '_self',
            },
            {
              title: 'Composables',
              to: '/composables',
              description: 'Explore all available composables and their usage.',
              target: '_self',
            },
          ],
        },
        {
          title: 'Credits',
          links: [
            {
              title: 'Vuetify',
              to: 'https://vuetifyjs.com/',
              description:
                'For inspiration, it\'s well-designed arhitecutre helped shape Virgo.',
              target: '_blank',
            },
            {
              title: 'VueUse',
              to: 'https://vueuse.org/',
              description: 'For the amazing composables. Virgo uses it for many of its composables.',
              target: '_blank',
            },
            {
              title: 'Floating UI',
              to: 'https://floating-ui.com/',
              description: 'For the amazing floating library. Virgo uses it for tooltips, popovers, menus, etc.',
              target: '_blank',
            },
            {
              title: 'shadcn-docs-nuxt',
              to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
              description: 'For the beautifully crafted Nuxt documentation site.',
              target: '_blank',
            },
          ],
        },
        {
          title: 'Community',
          links: [
            {
              title: 'GitHub',
              to: 'https://github.com/RunningPeli/virgo',
              description: 'Source code for Virgo.',
              target: '_blank',
            },
            {
              title: 'Discord',
              to: 'https://discord.com/invite/KagVX4VE',
              description: 'Connect with community on Discord',
              target: '_blank',
            },
          ],
        },
      ],
      links: [
        {
          icon: 'lucide:github',
          to: 'https://github.com/RunningPeli/virgo',
          target: '_blank',
        },
        {
          icon: 'ri:discord-line',
          to: 'https://discord.com/invite/KagVX4VE',
          target: '_blank',
        },
      ],
    },
    aside: {
      useLevel: true,
      collapse: false,
      folderStyle: 'group',
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright © 2024 - 2025',
      links: [
        {
          icon: 'lucide:globe',
          to: 'https://runningpeli.com',
          title: 'Maintained by RunningPeli',
          target: '_blank',
        },
        {
          icon: 'lucide:github',
          title: 'Github',
          to: 'https://github.com/RunningPeli/virgo',
          target: '_blank',
        },
      ],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [
        {
          title: 'Star on GitHub',
          icon: 'lucide:star',
          to: 'https://github.com/RunningPeli/virgo',
          target: '_blank',
        },
        {
          title: 'Create Issues',
          icon: 'lucide:circle-dot',
          to: 'https://github.com/RunningPeli/virgo/issues',
          target: '_blank',
        },
        {
          title: 'Join Discord',
          icon: 'ri:discord-line',
          to: 'https://discord.com/invite/KagVX4VE',
          target: '_blank',
        },
      ],
    },
    search: {
      enable: true,
      inAside: true,
    },
  },
})
