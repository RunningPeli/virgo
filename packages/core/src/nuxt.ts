import type { } from '@nuxt/schema' // Mandatory to avoid a bug when building
import { addComponent, defineNuxtModule } from '@nuxt/kit'

import virgoButton from './components/button/virgo-button.vue';

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@runningpeli/virgo',
    configKey: 'virgo',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  defaults: {},
  async setup(options) {
    console.log(`[ virgo ] Nuxt module setup with options:`, JSON.stringify(options, null, 2));
    
    // add virgo button
    addComponent({
      name: 'VirgoButton',
      export: 'VirgoButton',
      filePath: '@runningpeli/virgo',
    })
     
    console.log('[ virgo ] module setup complete with components:', 'VirgoButton');
    console.log(`[ virgo ] Total components added:`, 1);
  },
})
